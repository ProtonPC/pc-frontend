<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" @click="$router.push('/customers')" color="primary" variant="text" icon="mdi-arrow-left"></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} customer
    </h3>
    <v-sheet class="mx-auto">
      <v-form>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="customer.name" label="Customer Name"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="customer.email" label="Email address"></v-text-field>
          </v-col>
        </v-row>
        <v-textarea v-model="customer.notes" label="Notes"></v-textarea>

        <v-row>
          <v-col cols="12">
            <v-divider class="mb-5" color="black"></v-divider>
            <div class="bg-secondary ps-3 py-3 text-white">
              CUSTOMER ADDRESSES
            </div>
          </v-col>
        </v-row>

        <div v-for="(address, key) in addressess" :key="key" class="">
          <v-divider :thickness="4" class="border-opacity-100" color="info"></v-divider>
          <span class="d-flex justify-space-between bg-light_grey px-3 mb-2">
            <span class="">Customer address: #{{ key + 1 }}</span>
            <span class="cursorPointer" @click="removeAddress(key)">
              <v-icon color="danger" icon="mdi-close"></v-icon>
            </span>
          </span>
          <v-row>
            <v-col cols="4">
              <v-text-field v-model="address.phone" label="Address/Customer phone"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="address.country" label="Address Country"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="address.zipcode" label="Address Zipcode"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field v-model="address.state" label="Address State"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="address.city" label="Address City"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-select
                clearable
                v-model="address.type"
                label="Address Type"
                :items="['Headquarters', 'Subsidiary', 'Other']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="address.street_1" label="Address Street 1"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="address.street_2" label="Address Street 2"></v-text-field>
            </v-col>
          </v-row>
          <v-textarea v-model="address.notes" label="Notes"></v-textarea>
        </div>

        <v-row>
          <v-col cols="12">
            <v-divider class="mb-5" color="black"></v-divider>
            <div class="bg-light_grey ps-3 py-3 text-info">
              <span class="cursorPointer" @click="addNewAddress">
                <v-icon color="success" icon="mdi-plus" size="large"></v-icon>
                Add another Customer address
              </span>
            </div>
          </v-col>
        </v-row>

        <v-btn @click="submit()" color="primary" class="mt-2">Submit</v-btn>
        <v-btn @click="submitAndCreateNew()" color="secondary" class="ms-5 mt-2"
          >Save and add another</v-btn
        >
        <v-btn @click="submitAndEdit()" color="secondary" class="ms-5 mt-2"
          >Save and continue editing</v-btn
        >
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customer: {},
      addressess: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      if(this.$route.params.id === 'new') {
        return;
      }
      this.customer = this.getCustomer(this.$route.params.id)
      this.addressess = { ...this.customer.addressess };
    },
    getCustomer(id) {
      const newCustomer = id; // Backend query searching for id
      return newCustomer;
    },
    submit() {
      // save customer
      // after saving
      this.$router.push('/customers');
    },
    submitAndCreateNew() {
      // save customer
      // after saving
      this.$router.push('/customers/new');
    },
    submitAndEdit() {
      // save customer and get id
      const id = 5 // response.data.id
      // after saving
      this.$router.push(`/customers/${id}`);
    },
    addNewAddress() {
      this.addressess.push({
        phone: '',
        country: '',
        zipcode: '',
        state: '',
        city: '',
        street_1: '',
        street_2: '',
        type: '',
        notes: '',
      })
    },
    removeAddress(key) {
      this.addressess.splice(key, 1);
    }
  }
};
</script>

<style>
.cursorPointer:hover {
  cursor: pointer;
}
</style>
