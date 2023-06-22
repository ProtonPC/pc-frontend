<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            @click="$router.push('/suppliers')"
            color="primary"
            variant="text"
            icon="mdi-arrow-left"
          ></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} supplier
    </h3>
    <v-sheet class="mx-auto">
      <v-form>
        <v-row>
          <v-col cols="4">
            <v-text-field v-model="supplier.name" label="Supplier Name"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field type="email" v-model="supplier.email" label="Supplier Email"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="supplier.phone" label="Supplier Phone"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field v-model="supplier.country" label="Supplier Country"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="supplier.zipcode" label="Supplier Zipcode"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="supplier.state" label="Supplier State"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field v-model="supplier.city" label="Supplier City"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="supplier.street_1" label="Supplier Street 1"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="supplier.street_2" label="Supplier Street 2"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="11" class="pt-7">
            <v-select
              v-model="supplier.products"
              :items="products"
              item-value="id"
              item-title="name"
              chips
              label="Products"
              multiple
            ></v-select>
          </v-col>
          <v-col cols="1" class="align-self-center">
            <v-tooltip text="Add a new product" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn @click="addNewProduct" v-bind="props" icon="mdi-plus" class="bg-success" size="x-small"></v-btn>
                </template>
              </v-tooltip>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="supplier.notes"
              label="Notes"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-divider class="mb-5" color="black"></v-divider>
            <div class="bg-secondary ps-3 py-3 text-white">
              Freight Quotes
            </div>
          </v-col>
        </v-row>

        <div v-for="(freightQuote, key) in freightQuotes" :key="key" class="">
          <v-divider :thickness="4" class="border-opacity-100" color="info"></v-divider>
          <span class="d-flex justify-space-between bg-light_grey px-3 mb-2">
            <span class="">Supplier Freight Quote: #{{ key + 1 }}</span>
            <span class="cursorPointer" @click="removeFreightQuote(key)">
              <v-icon color="danger" icon="mdi-close"></v-icon>
            </span>
          </span>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Price"
                type="number"
                step="0.01"
                v-model="freightQuote.price"
              >
              </v-text-field>
              <v-textarea
                v-model="freightQuote.notes"
                label="Notes"
                rows="3"
              ></v-textarea>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-col cols="9">
                  <v-select
                    label="Origin"
                    v-model="freightQuote.origin"
                    :items="ports"
                    item-value="id"
                    item-title="name"
                  >
                  </v-select>
                </v-col>
                <v-col cols="3"  class="d-flex justify-space-between pt-6">
                  <v-tooltip text="Add a new port" location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn @click="addNewPort" v-bind="props" icon="mdi-plus" class="bg-success" size="x-small"></v-btn>
                    </template>
                  </v-tooltip>
                  <v-tooltip text="Change selected port" location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn @click="changePort(freightQuote.origin)" :disabled="!freightQuote.origin" v-bind="props" icon="mdi-pencil" class="bg-warning" size="x-small"></v-btn>
                    </template>
                  </v-tooltip>
                  <v-tooltip text="Delete selected port" location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn @click="deletePort(freightQuote.origin)" :disabled="!freightQuote.origin" v-bind="props" icon="mdi-delete" class="bg-danger" size="x-small"></v-btn>
                    </template>
                  </v-tooltip>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="9">
                  <v-select
                    label="Destination"
                    v-model="freightQuote.destination"
                    :items="ports"
                    item-value="id"
                    item-title="name"
                  >
                  </v-select>
                </v-col>
                <v-col cols="3"  class="d-flex justify-space-between pt-6">
                  <v-tooltip text="Add a new port" location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn @click="addNewPort" v-bind="props" icon="mdi-plus" class="bg-success" size="x-small"></v-btn>
                    </template>
                  </v-tooltip>
                  <v-tooltip text="Change selected port" location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn @click="changePort(freightQuote.destination)" :disabled="!freightQuote.destination" v-bind="props" icon="mdi-pencil" class="bg-warning" size="x-small"></v-btn>
                    </template>
                  </v-tooltip>
                  <v-tooltip text="Delete selected port" location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn @click="deletePort(freightQuote.destination)" :disabled="!freightQuote.destination" v-bind="props" icon="mdi-delete" class="bg-danger" size="x-small"></v-btn>
                    </template>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>

        <v-row>
          <v-col cols="12">
            <v-divider class="mb-5" color="black"></v-divider>
            <div class="bg-light_grey ps-3 py-3 text-info">
              <span class="cursorPointer" @click="addNewFreightQuote">
                <v-icon color="success" icon="mdi-plus" size="large"></v-icon>
                Add another Freight Quote
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
import { saveSupplier } from "@/services/suppliers";
import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export default {
  data() {
    return {
      supplier: {},
      products: [],
      freightQuotes: [],
      ports: [],
    };
  },
  async mounted() {
    await this.loadData();
  },
  computed: {
    isUpdate() {
      return this.$route.params.id !== 'new'
    },
  },
  methods: {
    async loadData() {
      if (this.isUpdate) {
        this.supplier = await this.getSupplier(this.$route.params.id)
        this.freightQuotes = this.supplier.freightQuotes;
      }
      this.products = await httpClient.get(apiRoutes.listProducts);
      this.ports = await httpClient.get(apiRoutes.listPorts);
    },
    async getSupplier(id) {
      return await httpClient.get(apiRoutes.getSupplier(id));
    },
    async save(){
      this.supplier.freightQuotes = this.freightQuotes;
      return await saveSupplier(this.supplier);
    },
    async submit() {
      await this.save()
      this.$router.push('/suppliers');
    },
    async submitAndCreateNew() {
      await this.save()
      this.$router.push('/suppliers/new')
      .then(() => {
        window.location.reload();
      })
    },
    async submitAndEdit() {
      const response = await this.save()
      this.$router.push(`/suppliers/${response[0].id}`);
    },
    addNewFreightQuote() {
      this.freightQuotes.push({})
    },
    removeFreightQuote(key) {
      this.freightQuotes.splice(key, 1);
    },
    addNewProduct() {
      window.open('/products/new', '_blank', 'width=800,height=500')
    },
    addNewPort() {
      window.open('/ports/new', '_blank', 'width=800,height=500')
    },
    changePort(id) {
      window.open(`/ports/${id}`, '_blank', 'width=800,height=500')
    },
    deletePort(id) {
      console.log(id);
    },

  }
};
</script>

<style>
.cursorPointer:hover {
  cursor: pointer;
}
</style>
