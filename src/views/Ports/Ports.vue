<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select port to change</div>
      <div class="">
        <v-btn
          @click="$router.push('ports/new')"
          rounded="xl"
          color="primary"
          append-icon="mdi-plus"
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
      (this.headers = [
        {
          name: "Name",
          phone: "Location",
          country: "Country",
          zipcode: "Zip Code",
          state: "State",
        },
      ]),
        (this.items = [
          {
            name: "John Doe",
            phone: "+1-202-555-0163",
            country: "United States",
            zipcode: "20001",
            state: "District of Columbia",
          },
          {
            name: "Jane Smith",
            phone: "+44-20-5555-0190",
            country: "United Kingdom",
            zipcode: "SW1A 2AA",
            state: "London",
          },
          {
            name: "Juan Perez",
            phone: "+52-55-5555-0191",
            country: "Mexico",
            zipcode: "06000",
            state: "Mexico City",
          },
          {
            name: "Maria Garcia",
            phone: "+34-91-555-0192",
            country: "Spain",
            zipcode: "28001",
            state: "Madrid",
          },
          {
            name: "Hiroshi Tanaka",
            phone: "+81-3-5555-0193",
            country: "Japan",
            zipcode: "100-0005",
            state: "Tokyo",
          },
          {
            name: "Lena Müller",
            phone: "+49-30-5555-0194",
            country: "Germany",
            zipcode: "10178",
            state: "Berlin",
          },
          {
            name: "Francesco Rossi",
            phone: "+39-06-5555-0195",
            country: "Italy",
            zipcode: "00186",
            state: "Rome",
          },
          {
            name: "Johan Svensson",
            phone: "+46-8-5555-0196",
            country: "Sweden",
            zipcode: "111 57",
            state: "Stockholm",
          },
          {
            name: "Chen Wei",
            phone: "+86-10-5555-0197",
            country: "China",
            zipcode: "100006",
            state: "Beijing",
          },
          {
            name: "Ravi Patel",
            phone: "+91-22-5555-0198",
            country: "India",
            zipcode: "400001",
            state: "Mumbai",
          },
        ]);
    },
  },
};
</script>
