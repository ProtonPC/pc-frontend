<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
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
            <v-text-field v-model="port.zipcode" label="Address Zipcode"></v-text-field>
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
        <v-btn @click="submitAndCreateNew()" color="secondary" class="ms-5 mt-2"
          >Save and add another</v-btn
        >
        <v-btn @click="submitAndEdit()" color="secondary" class="ms-5 mt-2"
          >Save and continue editing</v-btn
        >
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
import { savePort } from '@/services/ports';
import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';
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
    }
  },
  methods: {
    async loadData() {
      if(this.isUpdate) {
        this.port = await this.getPort(this.$route.params.id)
      }
    },
    async getPort(id) {
      return await httpClient.get(apiRoutes.getPort(id))
    },
    async save() {
      return await savePort(this.port)
    },
    async submit() {
      await this.save()
      this.$router.push("/ports");
    },
    async submitAndCreateNew() {
      await this.save()
      this.$router.push("/ports/new")
      setTimeout(() => window.location.reload(), 50);
    },
    async submitAndEdit() {
      const response = await this.save()
      this.$router.push(`/ports/${response[0].id}`);
    },
  },
};
</script>
