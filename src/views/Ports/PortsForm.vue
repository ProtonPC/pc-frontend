<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip v-if="!isModal" text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            @click="$router.push('/ports')"
            color="primary"
            variant="text"
            icon="mdi-arrow-left"
          ></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === "new" ? "Add" : "Edit" }} port
    </h3>
    <v-sheet class="mx-auto">
      <v-form @submit.prevent="submit">
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="port.name" label="Port Name"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="port.phone" label="Address Phone"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="port.country" label="Address Country"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field @blur="onInputBlur" v-model="port.zipcode" label="Address Zipcode"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="port.state" label="Address State"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="port.city" label="Address City"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="port.street" label="Address Street 1"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="port.street2" label="Address Street 2"></v-text-field>
          </v-col>
        </v-row>
        <v-textarea v-model="port.notes" label="Notes"></v-textarea>
        <v-btn @click="submit()" color="primary" class="mt-2">Submit</v-btn>
        <v-btn v-if="!isModal" @click="submitAndCreateNew()" color="secondary" class="ms-5 mt-2"
          >Save and add another</v-btn
        >
        <v-btn v-if="!isModal" @click="submitAndEdit()" color="secondary" class="ms-5 mt-2"
          >Save and continue editing</v-btn
        >
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
import { getZip } from '@/services/zip';
import { savePort, getPort } from "@/services/ports";

//import apiRoutes from '@/config/apiRoutes';
//import httpClient from '@/config/httpClient';
import { postMessageOtherTabs } from "@/services/channels";

export default {
  data() {
    return {
      port: {},
    };
  },
  async mounted() {
    await this.loadData();
  },
  computed: {
    isUpdate(){
      return this.$route.params.id !== 'new'
    },
    isModal() {
      return this.$route.query.popup
    },
  },
  methods: {
    async onInputBlur() {
      let { zipcode, country } = this.port
      let data = await getZip(zipcode, country)
      for (let key in data) {
        this.port[key] = data[key]
      }
    },
    async loadData() {
      if(this.isUpdate) {
        this.port = await getPort(this.$route.params.id)
      }
    },
    async save() {
      let newPort = await savePort(this.port)
      postMessageOtherTabs({
        entity: newPort,
        code: this.$route.query.code,
        target: this.$route.query.target,
      })
      return newPort
    },
    async submit() {
      await this.save()
      if (this.isModal) window.close()
      this.$router.push("/ports");
    },
    async submitAndCreateNew() {
      await this.save()
      this.$router.push("/ports/new")
      .then(() => {
        window.location.reload();
      })
    },
    async submitAndEdit() {
      const response = await this.save()
      this.$router.push(`/ports/${response.id}`);
    },
  },
};
</script>
