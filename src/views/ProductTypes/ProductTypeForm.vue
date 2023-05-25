<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" @click="$router.push('/product-types')" color="primary" variant="text" icon="mdi-arrow-left"></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} product type
    </h3>
    <v-sheet class="mx-auto">
    <v-form @submit.prevent="submit">
      <v-text-field
        v-model="productType.name"
        label="Product Type Name"
      ></v-text-field>
      <v-textarea
        v-model="productType.notes"
        label="Notes"
      ></v-textarea>
      <v-btn @click="submit()" color="primary" class="mt-2">Submit</v-btn>
      <v-btn @click="submitAndCreateNew()" color="secondary" class="ms-5 mt-2">Save and add another</v-btn>
      <v-btn @click="submitAndEdit()" color="secondary" class="ms-5 mt-2">Save and continue editing</v-btn>
    </v-form>
  </v-sheet>
  </div>
</template>
<script>
import { saveProductType } from '@/services/productTypes';
import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export default {
  data() {
    return {
      productType: {
        name: "",
        notes: "",
      },
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
        this.productType = await this.getProductType(this.$route.params.id)
      }
    },
    async getProductType(id) {
      let response = await httpClient.get(apiRoutes.getProductType(id))
      return response;
    },
    async submit() {
      await saveProductType(this.productType)
      // after saving
      this.$router.push('/product-types');
    },
    async submitAndCreateNew() {
      await saveProductType(this.productType)
      // after saving
      this.$router.push('/product-types/new');
    },
    async submitAndEdit() {
      const response = await saveProductType(this.productType)
      // after saving
      this.$router.push(`/product-types/${response[0].id}`);
    },
  }
};
</script>
