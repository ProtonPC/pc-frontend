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
          >Add costumer</v-btn
        >
      </div>
    </div>
    <my-data-table
      v-model:headers="headers"
      v-model:items="items"
    ></my-data-table>
  </div>
</template>
<script>
import apiRoutes from '@/config/apiRoutes';

export default {
  data() {
    return {
      headers: {
          name: "Name",
          phone: "Phone",
      },
      items: [],
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      let items = await fetch(apiRoutes.listCustomers).then(response => response.json())
      this.items = items;
    }
  },
};
</script>
