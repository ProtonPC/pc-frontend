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
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      (this.items = [
          {
            name: "Jane Smith",
            phone: "+44-20-5555-0190",
          },
          {
            name: "Juan Perez",
            phone: "+52-55-5555-0191",
          },
          {
            name: "Maria Garcia",
            phone: "+34-91-555-0192",
          },
          {
            name: "Hiroshi Tanaka",
            phone: "+81-3-5555-0193",
          },
          {
            name: "Lena Müller",
            phone: "+49-30-5555-0194",
          },
          {
            name: "Francesco Rossi",
            phone: "+39-06-5555-0195",
          },
          {
            name: "Johan Svensson",
            phone: "+46-8-5555-0196",
          },
          {
            name: "Chen Wei",
            phone: "+86-10-5555-0197",
          },
        ]);
    },
  },
};
</script>
