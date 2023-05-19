<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select supplier to change</div>
      <div class="">
        <v-btn @click="$router.push('supplier/new')" rounded="xl" color="primary" append-icon="mdi-plus"
          >Add supplier</v-btn
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
//const store = useCounterStore()

export default {
  data() {
    return {
      headers: {
        name: "Name",
        email: "E-mails",
      },
      items: [],
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      let items = await fetch("/api/suppliers").then(response => response.json())
      this.items = items;
    },
  }
};
</script>

