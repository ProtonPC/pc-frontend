<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" @click="$router.push('/ports')" color="primary" variant="text" icon="mdi-arrow-left"></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} port
    </h3>
    <v-sheet class="mx-auto">
    <v-form @submit.prevent="submit">
      <v-text-field
        v-model="port.name"
        label="Port Name"
      ></v-text-field>
      <v-textarea
        v-model="port.notes"
        label="Notes"
      ></v-textarea>
      <v-btn @click="submit()" color="primary" class="mt-2">Submit</v-btn>
      <v-btn @click="submitAndCreateNew()" color="secondary" class="ms-5 mt-2">Save and add another</v-btn>
      <v-btn @click="submitAndEdit()" color="secondary" class="ms-5 mt-2">Save and continue editing</v-btn>
    </v-form>
  </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      port: {
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
      this.port = this.getport(this.$route.params.id)
    },
    getport(id) {
      const newport = id; // Backend query searching for id
      return newport;
    },
    submit() {
      // save product type
      // after saving
      this.$router.push('/ports');
    },
    submitAndCreateNew() {
      // save product type
      // after saving
      this.$router.push('/ports/new');
    },
    submitAndEdit() {
      // save product type and get id
      const id = 5 // response.data.id
      // after saving
      this.$router.push(`/ports/${id}`);
    },
  }
};
</script>
