<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select product type to change</div>
      <div class="">
        <v-btn @click="createNew" rounded="xl" color="primary" append-icon="mdi-plus"
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
export default {
  data() {
    return {
      headers: [],
      items: [],
      id: "new",
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.headers = [
        {
          name: "Name",
          calories: "Calories",
        }
      ],
      this.items = [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ]
    },
    createNew() {
      this.$router.push(`product-types/${this.id}`);
    }
  }
};
</script>
