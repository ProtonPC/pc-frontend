<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" @click="$router.push('/products')" color="primary" variant="text" icon="mdi-arrow-left"></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} product
    </h3>
    <v-sheet class="mx-auto">
      <v-form>
        <v-row>
          <v-col cols="4">
            <v-select
              label="Product type"
              v-model="product.type"
              :items="product_types"
              item-value="id"
              item-title="name"
            >
            </v-select>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="product.name" label="Product Name"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="product.hts_code" label="HTS Code"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field v-model="product.glory_bee_number" label="Glory Bee Number"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field type="number" min="1" v-model="product.units_per_pallet_20_feet" label="Units per pallet (20 feet)"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field type="number" min="1" v-model="product.units_per_container_20_feet" label="Units per container (20 feet)"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field type="number" min="1" v-model="product.units_per_pallet_40_feet" label="Units per pallet (40 feet)"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field type="number" min="1" v-model="product.units_per_container_40_feet" label="Units per container (40 feet)"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field type="number" min="1" step="0.5" v-model="product.net_weight_lb" label="Net Weight LB"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
          <v-select
              label="Storage Type"
              v-model="product.storage_type"
              :items="product_types"
              item-value="id"
              item-title="name"
            >
            </v-select>
          </v-col>
          <v-col cols="6">
          <v-select
              label="Packaging type"
              v-model="product.packaging_type"
              :items="product_types"
              item-value="id"
              item-title="name"
            >
            </v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-divider class="mb-5" color="black"></v-divider>
            <div class="bg-secondary ps-3 py-3 text-white">
              Product files
            </div>
          </v-col>
        </v-row>

        <div v-for="(file, key) in files" :key="key" class="">
          <v-divider :thickness="4" class="border-opacity-100" color="info"></v-divider>
          <span class="d-flex justify-space-between bg-light_grey px-3 mb-2">
            <span class="">product file: #{{ key + 1 }}</span>
            <span class="cursorPointer" @click="removefile(key)">
              <v-icon color="danger" icon="mdi-close"></v-icon>
            </span>
          </span>
          <v-row>
            <v-col cols="6">
              <v-file-input
                v-model="file.path"
                chips
                label="Select your file"
              ></v-file-input>
            </v-col>
            <v-col cols="6">
              <v-select
                label="File Type"
                v-model="file.file_type"
                :items="file_types"
                item-value="id"
                item-title="name"
              >
              </v-select>
            </v-col>
          </v-row>
        </div>

        <v-row>
          <v-col cols="12">
            <v-divider class="mb-5" color="black"></v-divider>
            <div class="bg-light_grey ps-3 py-3 text-info">
              <span class="cursorPointer" @click="addNewFile">
                <v-icon color="success" icon="mdi-plus" size="large"></v-icon>
                Add another product file
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
      product: {},
      files: [],
      product_types: [],
      file_types: [],
    };
  },
  mounted() {
    this.loadData();
  },
  computed: {
    netWeightKgInKg() {
      return this.product.net_weight_kg * 1000; // have to verify backend name
    },
    dutyTotal() {
      return this.product.duty * 1000;
    },
    dutyByKg() {
      return this.product.duty * 1000;
    },
    missingDocuments() {
      const allTypes = [];
      return this.product.files
        .map((file) => file.file_type)
        .filter((type) => allTypes.contains(type)); // item not in array
    },
  },
  methods: {
    loadData() {
      this.product_types = this.getProductTypes();
      this.file_types = this.getFileTypes();
      if(this.$route.params.id === 'new') {
        return;
      }
      this.product = this.getproduct(this.$route.params.id)
      this.files = { ...this.product.files };
    },
    getProduct(id) {
      const newProduct = id; // Backend query searching for id
      return newProduct;
    },
    submit() {
      // save product
      // after saving
      this.$router.push('/products');
    },
    submitAndCreateNew() {
      // save product
      // after saving
      this.$router.push('/products/new');
    },
    submitAndEdit() {
      // save product and get id
      const id = 5 // response.data.id
      // after saving
      this.$router.push(`/products/${id}`);
    },
    addNewFile() {
      this.files.push({
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
    getProductTypes() {
      return [
        {
          id: '1',
          name: 'Rice Syrup - India',
        },
        {
          id: '2',
          name: 'Rice Syrup - Bahamas',
        },
        {
          id: '3',
          name: 'Rice Syrup',
        },
      ];
    },
    getFileTypes() {
      return [
        {
          id: '1',
          name: 'Supplier Specification',
        },
        {
          id: '2',
          name: 'Glory Bee Specifications',
        },
        {
          id: '3',
          name: 'Packaging Specifications',
        },
        {
          id: '4',
          name: 'Stacking Specifications',
        },
        {
          id: '5',
          name: 'Other',
        },
      ];
    },

    removefile(key) {
      this.files.splice(key, 1);
    },
  }
};
</script>

<style>
.cursorPointer:hover {
  cursor: pointer;
}
</style>
