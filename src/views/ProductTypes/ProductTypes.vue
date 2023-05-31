<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select product type to change</div>
      <div class="">
        <v-btn
          @click="$router.push('product-types/new')"
          rounded="xl"
          color="primary"
          append-icon="mdi-plus"
        >
          Add product type
        </v-btn>
      </div>
    </div>
    <my-data-table
      v-model:headers="headers"
      v-model:items="items"
      :onDelete="onDelete"
      :onEdit="onEdit"
    ></my-data-table>
  </div>
</template>
<script>
import { getProductTypes, deleteProductTypes } from '@/services/productTypes';

export default {
  data() {
    return {
      headers: [],
      items: [],
    };
  },
  async mounted() {
    this.headers = {
      name: "Name",
      notes: "Notes",
    }
    await this.loadData();
  },
  methods: {
    async loadData() {
      let items = await getProductTypes()
      this.items = items;
    },

    onEdit(id){
      this.$router.push("/product-types/"+id)
    },
    async onDelete(id){
      await deleteProductTypes(id)
      console.log('delete: ' + id)
      window.location.reload()
    }
  }
};
</script>
