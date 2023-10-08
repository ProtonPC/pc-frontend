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
import { baseMixin } from '@/utils/mixins';
import { getFirebaseHandler } from '@/services/firebase'


export default {
  data() {
    return {
      headers: [],
      items: [],
      quotesHandler: getFirebaseHandler("quotes"),
    };
  },
  mixins: [baseMixin],
  mounted() {
    this.headers = {
      date: "Quote Date",
      total_weight: "Total Weight",
      fob_pricing_mt: "Fob Pricing MT",
    };
    this.loadData();
  },
  methods: {
    loadData() {
      this.items = this.quotesHandler.getAll()
    },
    onEdit(id){
      this.$router.push(`/quotes/${id}`)
    },
    async onDelete(id){
      await this.quotesHandler.delete(id)
      this.reload()
    }
  },
};
</script>
