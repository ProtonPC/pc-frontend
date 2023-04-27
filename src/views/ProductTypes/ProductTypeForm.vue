<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" @click="$router.push('/product-types')" color="primary" variant="text" icon="mdi-arrow-left"></v-btn>
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
      <v-btn @click="submit(1)" color="primary" class="mt-2">Submit</v-btn>
      <v-btn @click="submit(2)" color="secondary" class="ms-5 mt-2">Save and add another</v-btn>
      <v-btn @click="submit(3)" color="secondary" class="ms-5 mt-2">Save and continue editing</v-btn>
    </v-form>
  </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productType: {
        name: "",
        notes: "",
      },
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
      this.productType = this.getProductType(this.$route.params.id)
    },
    getProductType(id) {
      const newProductType = id; // Backend query searching for id
      return newProductType;
    },
    submit(submit_type = 1) {
      // save and get id
      const newItemId = '5';
      // after saving
      this.redirect(submit_type, newItemId);
    },
    redirect(submit_type, newItemId) {
      if(submit_type === 1) {
        this.$router.push('/product-types')
      } else if(submit_type === 2) {
        this.$router.push('/product-types/new')
      } else if(submit_type === 3) {
        this.$router.push(`/product-types/${newItemId}`)
      }
    }
  }
};
</script>
