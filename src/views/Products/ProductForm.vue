<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip v-if="!isModal" text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            @click="$router.push('/products')"
            color="primary"
            variant="text"
            icon="mdi-arrow-left"
          ></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} product
    </h3>
    <v-sheet class="mx-auto">
      <v-form>
        <v-row>
          <v-col cols="10">
            <v-select
              label="Product type"
              v-model="product.type"
              :items="product_types"
              item-value="id"
              item-title="name"
            >
            </v-select>
          </v-col>
          <v-col cols="2"  class="d-flex justify-space-between pt-6">
            <v-tooltip text="Add a new Product type" location="top">
              <template v-slot:activator="{ props }">
                <v-btn @click="addNewProductType" v-bind="props" icon="mdi-plus" class="bg-success" size="x-small"></v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Change selected Product type" location="top">
              <template v-slot:activator="{ props }">
                <v-btn @click="changeProductType(product.type)" :disabled="!product.type" v-bind="props" icon="mdi-pencil" class="bg-warning" size="x-small"></v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Delete selected Product type" location="top">
              <template v-slot:activator="{ props }">
                <v-btn @click="deleteProductType(product.type)" :disabled="!product.type" v-bind="props" icon="mdi-delete" class="bg-danger" size="x-small"></v-btn>
              </template>
            </v-tooltip>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="product.name" label="Product Name"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="product.hts_code" label="HTS Code"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="product.glory_bee_number" label="Glory Bee Number"></v-text-field>
          </v-col>
        </v-row>
        <v-row>

          <v-col cols="6">
            <v-text-field type="number" min="1" step="0.5" v-model="product.net_weight_lb" label="Net Weight LB"></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field readonly v-model="product.total_weight" type="number" label="Net Weight"
            bg-color="light_grey"></v-text-field>
          </v-col>
        </v-row>

        <v-row>

          <v-col cols="3">
            <v-text-field type="number" min="1" v-model="product.units_per_pallet_20_feet" label="Units per pallet (20 feet)"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field type="number" min="1" v-model="product.units_per_container_20_feet" label="Units per container (20 feet)"></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field type="number" min="1" v-model="product.units_per_pallet_40_feet" label="Units per pallet (40 feet)"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field type="number" min="1" v-model="product.units_per_container_40_feet" label="Units per container (40 feet)"></v-text-field>
          </v-col>

        </v-row>

        <v-row>
          <v-col cols="6">
          <v-select
              label="Storage Type"
              v-model="product.storage_type"
              :items="storageTypes"
              item-value="id"
              item-title="name"
            >
            </v-select>
          </v-col>
          <v-col cols="6">
          <v-select
              label="Packaging type"
              v-model="product.packaging_type"
              :items="packagingTypes"
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

        <div v-for="(file, key) in product.files" :key="key" class="">
          <v-divider :thickness="4" class="border-opacity-100" color="info"></v-divider>
          <span class="d-flex justify-space-between bg-light_grey px-3 mb-2">
            <span class="">product file: #{{ key + 1 }}</span>
            <span class="cursorPointer" @click="removefile(key)">
              <v-icon color="danger" icon="mdi-close"></v-icon>
            </span>
          </span>
          <v-row>
            <v-col cols="6">
              <!-- v-model="file.path" -->
              <v-btn
              primary
              target="_blank"
              :href="file.url"
              v-if="file.url">Download File</v-btn>
              <v-file-input
                v-else
                @change="handleFile($event, file)"
                chips
                label="Select your file"
              ></v-file-input>
            </v-col>
            <v-col cols="6">
              <v-select
                label="File Type"
                v-model="file.file_type"
                :items="fileTypes"
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
        <v-btn v-if="!isModal" @click="submitAndCreateNew()" color="secondary" class="ms-5 mt-2"
          >Save and add another</v-btn
        >
        <v-btn v-if="!isModal" @click="submitAndEdit()" color="secondary" class="ms-5 mt-2"
          >Save and continue editing</v-btn
        >
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
//import { getProductTypes  } from "@/services/productTypes";
//import { saveProduct, getProduct } from "@/services/products";
import { uploadFile } from "@/plugins/firebase";
import { packagingTypes, storageTypes, fileTypes } from '@/config/constants';
import { postMessageOtherTabs } from "@/services/channels";
import { receiveMessageOtherTabs } from "@/services/channels";
import { getFirebaseHandler } from "@/services/firebase"
import { baseMixin } from '@/utils/mixins'

export default {
  data() {
    return {
      product: {
        files: [],
      },
      product_types: [],
      storageTypes,
      packagingTypes,
      fileTypes,
      productHandler: getFirebaseHandler("products"),
      productTypesHandler: getFirebaseHandler("product-types"),
    };
  },
  mixins: [baseMixin],
  async mounted() {
    await this.loadData();
  },
  watch: {
    'product.net_weight_lb'(newValue) {
      if(newValue)
        this.product.total_weight = Math.ceil(parseFloat(newValue) / 2.2046)
      else
        this.product.total_weight = 0
    }
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
      let existing = JSON.parse(JSON.stringify(this.product.files))
      return existing
      .filter((type) => fileTypes.contains(type))
      //.map((file) => file.file_type)
      ; // item not in array
    },
  },
  methods: {
    async handleFile(evt, fileRef){
      let { files } = evt.target
      let file = files[0]
      let { bucket, fullPath, url } = await uploadFile(file)
      fileRef.path = fullPath
      fileRef.bucket = bucket
      fileRef.url = url
    },
    async loadData() {
      if (this.isUpdate) {
        this.product = await this.productHandler.get(this.id)
      }
      this.product_types = await this.productTypesHandler.getAllAsync()
    },
    async save(){
      let newProduct = await this.productHandler.save(this.product);
      postMessageOtherTabs({
        entity: newProduct,
        code: this.$route.query.code,
        target: this.$route.query.target,
      })
      return newProduct
    },
    async submit() {
      await this.save()
      if (this.isModal)
        window.close()
      this.$router.push('/products')
    },
    async submitAndCreateNew() {
      await this.save()
      this.$router.push('/products/new')
      .then(() => {
        this.reload()
      })
    },
    async submitAndEdit() {
      let response = await this.save()
      this.$router.push(`/products/${response.id}`);
    },
    addNewFile() {
      this.product.files.push({})
    },
    removefile(key) {
      this.product.files.splice(key, 1)
    },
    addNewProductType() {
      let target = 'product_type_id';
      let code = Date.now().toString()
      window.open(`/product-types/new?popup=1&target=${target}&code=${code}`, '_blank', 'width=800,height=500')
      receiveMessageOtherTabs((data) => {
        let { target: receivedTarget, code: receivedCode, entity } = data;
        if(target == receivedTarget && code == receivedCode){
          this.product_types.push(entity)
          this.product.type = entity.id
        }
      })
    },
    changeProductType(id) {
      let target = 'update_port';
      let code = Date.now().toString()
      window.open(`/product-types/${id}?popup=1&target=${target}&code=${code}`, '_blank', 'width=800,height=500')
      receiveMessageOtherTabs((data) => {
        let { target: receivedTarget, code: receivedCode, entity } = data;
        if(target == receivedTarget && code == receivedCode){
          let index = this.product_types.findIndex((product_type) => product_type.id == entity.id)
          this.product_types[index] = entity
        }
      })
    },
    async deleteProductType(id) {
      await this.productTypesHandler.delete(id)
    },
  }
};
</script>

<style>
.cursorPointer:hover {
  cursor: pointer;
}
</style>
