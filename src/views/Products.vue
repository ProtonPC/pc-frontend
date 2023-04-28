<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h1>Products</h1>

    <DataTable :value="items" tableStyle="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [],
      items: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
        (this.items = [
          {
            name: "John Doe",
            code: "+1-202-555-0163",
            category: "United States",
            quantity: "20001",
          }
        ]);
    },
  },
};
</script>
