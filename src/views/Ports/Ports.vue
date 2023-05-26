<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select port to change</div>
      <div class="">
        <v-btn
          @click="$router.push('ports/new')"
          rounded="xl"
          color="primary"
          append-icon="mdi-plus"
          >Add port</v-btn
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
import { getPorts, deletePort } from '@/services/ports';
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
        country: "Country",
        state: "State",
      },
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.items = await getPorts();
    },
    onEdit(id){
      this.$router.push("/ports/"+id)
    },
    async onDelete(id){
      await deletePort(id)
      console.log('delete: ' + id)
      window.location.reload()
    }
  },
};
</script>
