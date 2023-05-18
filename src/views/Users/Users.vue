<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select user type to change</div>
      <div class="">
        <v-btn @click="$router.push('user-types/new')" rounded="xl" color="primary" append-icon="mdi-plus"
          >Add user type</v-btn
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
      let items = await fetch("/api/users").then(response => response.json())
      this.items = items;
    },
  }
};
</script>

