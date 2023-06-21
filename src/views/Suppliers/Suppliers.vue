<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select suppliers to change</div>
      <div class="">
        <v-btn
          @click="$router.push('suppliers/new')"
          rounded="xl"
          color="primary"
          append-icon="mdi-plus"
        >
          Add supplier
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
import { getSuppliers, deleteSupplier } from '@/services/suppliers';

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
      city: "City",
      country: "Country",
    };
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.items = await getSuppliers();
    },
    onEdit(id){
      this.$router.push("/suppliers/"+id)
    },
    async onDelete(id){
      await deleteSupplier(id)
      console.log('delete: ' + id)
      window.location.reload()
    }
  },
};
</script>
