<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select warehouses to change</div>
      <div class="">
        <v-btn
          @click="$router.push('warehouses/new')"
          rounded="xl"
          color="primary"
          append-icon="mdi-plus"
          >Add warehouse</v-btn
        >
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
import { getWarehouses, deleteWarehouse } from '@/services/warehouses';

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
      phone: "Phone",
      country: "Country",
    }
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.items = await getWarehouses();
    },
    onEdit(id){
      this.$router.push("/customers/"+id)
    },
    async onDelete(id){
      await deleteWarehouse(id)
      window.location.reload()
    },
  },
};
</script>
