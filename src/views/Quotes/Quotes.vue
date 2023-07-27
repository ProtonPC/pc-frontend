<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select quotes to change</div>
      <div class="">
        <v-btn
          @click="$router.push('quotes/new')"
          rounded="xl"
          color="primary"
          append-icon="mdi-plus"
        >
          Add Quote
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
import { getQuotes, deleteQuote } from '@/services/quotes';

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
    };
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.items = await getQuotes();
    },
    onEdit(id){
      this.$router.push("/quotes/"+id)
    },
    async onDelete(id){
      await deleteQuote(id)
      console.log('delete: ' + id)
      window.location.reload()
    }
  },
};
</script>
