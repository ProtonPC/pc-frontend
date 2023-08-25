<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip v-if="!isModal" text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            @click="$router.push('/product-types')"
            color="primary"
            variant="text"
            icon="mdi-arrow-left"
          ></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} product type
    </h3>
    <v-sheet class="mx-auto">
    <v-form @submit.prevent="submit">
      <v-text-field
        v-model="productType.name"
        label="Product Type Name"
      ></v-text-field>
      <v-textarea
        v-model="productType.notes"
        label="Notes"
      ></v-textarea>
      <v-btn @click="submit()" color="primary" class="mt-2">Submit</v-btn>
      <v-btn v-if="!isModal" @click="submitAndCreateNew()" color="secondary" class="ms-5 mt-2">Save and add another</v-btn>
      <v-btn v-if="!isModal" @click="submitAndEdit()" color="secondary" class="ms-5 mt-2">Save and continue editing</v-btn>
    </v-form>
  </v-sheet>
  </div>
</template>
<script>
import { saveProductType, getProductType } from '@/services/productTypes';
import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';
import { postMessageOtherTabs } from "@/services/channels";

export default {
  data() {
    return {
      productType: {},
    };
  },
  async mounted() {
    await this.loadData();
  },
  computed: {
    isUpdate(){
      return this.$route.params.id !== 'new'
    },
    isModal() {
      return this.$route.query.popup
    },
  },
  methods: {
    async loadData() {
      if(this.isUpdate) {
        this.productType = await getProductType(this.$route.params.id)
      }
    },
    async getProductType(id) {
      let response = await this.getProductType(apiRoutes.getProductType(id))
      return response;
    },
    async save() {
      let newProductType = await saveProductType(this.productType)
      postMessageOtherTabs({
        entity: newProductType,
        code: this.$route.query.code,
        target: this.$route.query.target,
      })
      return newProductType
    },
    async submit() {
      await this.save()
      if (this.isModal) window.close()
      this.$router.push('/product-types');
    },
    async submitAndCreateNew() {
      await this.save()
      this.$router.push('/product-types/new')
      .then(() => {
        window.location.reload();
      })
    },
    async submitAndEdit() {
      const response = await this.save()
      this.$router.push(`/product-types/${response.id}`);
    },
  }
};
</script>
