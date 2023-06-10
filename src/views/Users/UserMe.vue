<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            @click="$router.go(-1)"
            color="primary"
            variant="text"
            icon="mdi-arrow-left"
          ></v-btn>
        </template>
      </v-tooltip>
      Edit your User
    </h3>
    <v-sheet class="mx-auto">
      <v-form @submit.prevent="submit">
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="user.name"
              label="User Name"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="user.email"
              label="User Email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn @click="submit()" color="primary" class="mt-2">Save</v-btn>
        <v-btn @click="editPassword()" color="secondary" class="ms-5 mt-2">Edit password</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
import { saveUser } from '@/services/users';
import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export default {
  data() {
    return {
      user: {},
      loggedInUser: 1,
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.user = await this.getUser(this.loggedInUser)
    },
    async getUser(id) {
      return await httpClient.get(apiRoutes.getUser(id))
    },
    async submit() {
      return await saveUser(this.user)
      .then(() => {
        this.$router.push('/users');
      })
    },
    async editPassword() {
      // alert('Now we can edit your password calling editPassaword function')
      this.$router.push('/users/edit-password')
    },
  }
};
</script>
