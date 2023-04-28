<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-text-field
    v-model="search"
    class="mt-5"
    label="Search"
    :loading="loading"
    hint="Seach for a specific item"
    clearable
    @click:clear="onClear"
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
  <v-table hover>
    <thead>
      <tr v-for="item in headers" :key="item.name">
        <th class="w-0">
          <v-btn @click="deleteMany" color="danger" variant="text" icon="mdi-trash-can-outline">
          </v-btn>
        </th>
        <th v-for="header in item" :key="header">{{ header }}</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in itemsLocal" :key="item.name">
        <td class="pt-4">
          <v-checkbox
            v-model="selectedItems"
            color="red"
            :value="item.name"
          ></v-checkbox>
        </td>
        <td v-for="content in item" :key="content">{{ content }}</td>
        <td>
          <v-tooltip text="Edit Item" location="top">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" @click="editItem(item)" color="info" variant="text" icon="mdi-pencil"></v-btn>
            </template>
          </v-tooltip>
          <v-tooltip text="Delete Item" location="top">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" @click="deleteItem(item)" color="danger" variant="text" icon="mdi-trash-can-outline"></v-btn>
            </template>
          </v-tooltip>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      search: "",
      itemsLocal: {},
      loading: true,
      selectedItems: [],
      itemsForDelete: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      // get data from backend
      setTimeout(() => {
        this.filterData();
        this.loading = !this.loading;
      }, 200);
    },
    filterData() {
      this.itemsLocal = this.items.filter((item) => {
        for(let attribute in item) {
          if (item[attribute].toString().toLowerCase().includes(this.search.toLowerCase()))
            return true;
        }
      });
    },
    onClear() {
      this.search = "";
    },
    editItem(item) {
      console.log("Item to edit: " + item.name);
    },
    deleteItem(item) {
      console.log("Item to delete: " + item.name);
    },
    deleteMany() {
      this.itemsForDelete = [];
      this.selectedItems.forEach((item) => {
        this.itemsForDelete.push(item); // must to be item.id
      });
      console.log("Items to delete: " + this.itemsForDelete);
    }
  },
  watch: {
    search() {
      this.filterData();
    },
  },
};
</script>
<style>
</style>
