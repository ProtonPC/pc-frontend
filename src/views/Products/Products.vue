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
        >
          Add product
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
import { getFirebaseHandler } from '@/services/firebase';
import { baseMixin } from '@/utils/mixins';

export default {
  data() {
    return {
      headers: {
        name: "Name",
        hts_code: "HTS Code",
        glory_bee_number: "Glory Bee Number",
      },
      items: [],
      productHandler: getFirebaseHandler("products"),
    };
  },
  mixins: [baseMixin],
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.items = this.productHandler.getAll()
    },
    onEdit(id){
      this.$router.push("/products/"+id)
    },
    async onDelete(id){
      await this.productHandler.delete(id)
      this.reload()
    }
  },
};
</script>
