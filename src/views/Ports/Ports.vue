<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select port to change</div>
      <div class="">
        <v-btn @click="$router.push('ports/new')" rounded="xl" color="primary" append-icon="mdi-plus"
          >Add port</v-btn
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
          location: "Location",
          country: "Country",
          status: "Status",
        }
      ],
      this.items = [
        {
          "name": "Port A",
          "location": "City A",
          "country": "Country A",
          "status": "Open"
        },
        {
          "name": "Port B",
          "location": "City B",
          "country": "Country B",
          "status": "Closed"
        },
        {
          "name": "Port C",
          "location": "City C",
          "country": "Country C",
          "status": "Open"
        },
        {
          "name": "Port D",
          "location": "City D",
          "country": "Country D",
          "status": "Closed"
        },
        {
          "name": "Port E",
          "location": "City E",
          "country": "Country E",
          "status": "Open"
        },
        {
          "name": "Port F",
          "location": "City F",
          "country": "Country F",
          "status": "Closed"
        },
        {
          "name": "Port G",
          "location": "City G",
          "country": "Country G",
          "status": "Open"
        },
        {
          "name": "Port H",
          "location": "City H",
          "country": "Country H",
          "status": "Closed"
        },
        {
          "name": "Port I",
          "location": "City I",
          "country": "Country I",
          "status": "Open"
        },
        {
          "name": "Port J",
          "location": "City J",
          "country": "Country J",
          "status": "Closed"
        }
      ]
    },
  }
};
</script>
