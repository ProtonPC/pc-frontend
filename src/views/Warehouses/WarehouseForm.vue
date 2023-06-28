<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" @click="$router.push('/warehouses')" color="primary" variant="text" icon="mdi-arrow-left"></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} warehouse
    </h3>
    <v-sheet class="mx-auto">
      <v-form>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="warehouse.name" label="Warehouse Name"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="warehouse.phone" label="Address Phone"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="warehouse.country" label="Address Country"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="warehouse.zipcode" label="Address Zipcode" @blur="onInputBlur"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="warehouse.state" label="Address State"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="warehouse.city" label="Address City"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="warehouse.street1" label="Address Street 1"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="warehouse.street2" label="Address Street 2"></v-text-field>
          </v-col>
        </v-row>
        <v-textarea v-model="warehouse.notes" label="Notes"></v-textarea>
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
import { saveWarehouse } from '@/services/warehouses';
import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export default {
  data() {
    return {
      warehouse: {},
    };
  },
  async mounted() {
    await this.loadData();
  },
  computed: {
    isUpdate() {
      return this.$route.params.id !== 'new';
    },
  },
  methods: {
    onInputBlur() {
      // code to be executed when the input loses focus (i.e., when the user exits the input)
      // e.g., you can trigger an event here
      let wa = this.warehouse
      let { country, zipcode } = wa

      fetch(`https://zipapi.fly.dev/?country=${country}&zip=${zipcode}`)
      .then(response => response.json())
      .then((data) => {
        wa.street1 = data.street1
        wa.street2 = data.street2
        wa.state = data.state
        wa.city = data.city
      })

    },
    async loadData() {
      if(this.isUpdate) {
        this.warehouse = this.getWarehouse(this.$route.params.id)
      }
    },
    async getWarehouse(id) {
      return await httpClient.get(apiRoutes.getWarehouse(id));
    },
    async save() {
      return await saveWarehouse(this.warehouse);
    },
    async submit() {
      await this.save();
      this.$router.push('/warehouses');
    },
    async submitAndCreateNew() {
      await this.save();
      this.$router.push('/warehouses/new');
      setTimeout(() => window.location.reload(), 50);
    },
    async submitAndEdit() {
      const response = await this.save();
      this.$router.push(`/warehouses/${response.id}`);
    },
  }
};
</script>
