<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <div class="d-flex justify-space-between">
      <div class="">Select user to change</div>
      <div class="">
        <v-btn
          @click="$router.push('users/new')"
          rounded="xl"
          color="primary"
          append-icon="mdi-plus"
        >
          Add user
        </v-btn>
      </div>
    </div>
    <my-data-table
      v-model:headers="headers"
      v-model:items="items"
      :onDelete="onDelete"
      :onEdit="onEdit"
    ></my-data-table>
  </div>
</template>
<script>
import { getUsers, deleteUsers } from '@/services/users';

export default {
  data() {
    return {
      headers: [],
      items: [],
    };
  },
  async mounted() {
    this.headers = {
      name: "Name",
      email: "Email",
    }
    await this.loadData();
  },
  methods: {
    async loadData() {
      let items = await getUsers()
      this.items = items;
    },

    onEdit(id){
      this.$router.push("/users/"+id)
    },
    async onDelete(id){
      await deleteUsers(id)
      console.log('delete: ' + id)
      window.location.reload()
    }
  }
};
</script>
