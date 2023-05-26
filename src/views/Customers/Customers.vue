<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select customers to change</div>
      <div class="">
        <v-btn
          @click="$router.push('customers/new')"
          rounded="xl"
          color="primary"
          append-icon="mdi-plus"
        >
          Add costumer
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
import { getCustomers, deleteCustomer } from '@/services/customers';

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
      email: "Email",
    };
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.items = await getCustomers();
    },
    onEdit(id){
      this.$router.push("/customers/"+id)
    },
    async onDelete(id){
      await deleteCustomer(id)
      window.location.reload()
    }
  },
};
</script>
