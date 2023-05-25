<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select products to change</div>
      <div class="">
        <v-btn
          @click="$router.push('products/new')"
          rounded="xl"
          color="primary"
          append-icon="mdi-plus"
          >Add product</v-btn
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
import { getProducts, deleteProduct } from '@/services/products';
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
      hts_code: "HTS Code",
      glory_bee_number: "Glory Bee Number",
    };
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.items = await getProducts();
    },
    onEdit(id){
      this.$router.push("/products/"+id)
    },
    async onDelete(id){
      await deleteProduct(id)
      console.log('delete: ' + id)
      window.location.reload()
    }
  },
};
</script>
