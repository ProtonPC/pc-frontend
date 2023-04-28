<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select product type to change</div>
      <div class="">
        <v-btn @click="$router.push('product-types/new')" rounded="xl" color="primary" append-icon="mdi-plus"
          >Add product type</v-btn
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
      headers: [],
      items: [],
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      let vm  = this
      this.headers = [
        {
          name: "Name",
          notes: "Notes",
        }
      ]
      await fetch("/api/productTypes")
      .then(response => response.json())
      .then(data => {
        //store.set
        //const doubleValue = computed(() => store.doubleCount)
        console.log(data)
        vm.items =  data;
      })
    },
  }
};
</script>
