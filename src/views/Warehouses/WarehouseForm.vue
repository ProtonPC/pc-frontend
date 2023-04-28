<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" @click="$router.push('/warehouses')" color="primary" variant="text" icon="mdi-arrow-left"></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} warehouse
    </h3>
    <v-sheet class="mx-auto">
      <v-form>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="warehouse.name" label="Warehouse Name"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="warehouse.phone" label="Address Phone"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="warehouse.country" label="Address Country"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="warehouse.zipcode" label="Address Zipcode"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="warehouse.state" label="Address State"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="warehouse.city" label="Address City"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="warehouse.street" label="Address Street 1"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="warehouse.street2" label="Address Street 2"></v-text-field>
          </v-col>
        </v-row>
        <v-textarea v-model="warehouse.notes" label="Notes"></v-textarea>
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
      warehouse: {},
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
      this.warehouse = this.getWarehouse(this.$route.params.id)
    },
    getWarehouse(id) {
      const newWarehouse = id; // Backend query searching for id
      return newWarehouse;
    },
    submit() {
      // save warehouse
      // after saving
      this.$router.push('/warehouses');
    },
    submitAndCreateNew() {
      // save warehouse
      // after saving
      this.$router.push('/warehouses/new');
    },
    submitAndEdit() {
      // save warehouse and get id
      const id = 5 // response.data.id
      // after saving
      this.$router.push(`/warehouses/${id}`);
    },
  }
};
</script>
