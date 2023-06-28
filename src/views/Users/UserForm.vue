<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 px-5">
    <h3 class="py-5">
      <v-tooltip text="Go back" location="top">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            @click="$router.push('/users')"
            color="primary"
            variant="text"
            icon="mdi-arrow-left"
          ></v-btn>
        </template>
      </v-tooltip>
      {{ $route.params.id === 'new' ? 'Add' : 'Edit' }} User
    </h3>
    <v-sheet class="mx-auto">
      <v-form @submit.prevent="submit">
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="user.name"
              label="User Name"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="user.email"
              label="User Email"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
              label="User Group"
              v-model="user.user_group_id"
              :items="userGroups"
              item-value="id"
              item-title="name"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="user.password"
              :type="passwordHidden ? 'password' : 'text' "
              :append-inner-icon="!passwordHidden ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="passwordHidden = !passwordHidden"
              label="User Password"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="user.password_confirmation"
              :type="passwordConfirmationHidden ? 'password' : 'text'"
              :append-inner-icon="!passwordConfirmationHidden ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="passwordConfirmationHidden = !passwordConfirmationHidden"
              label="Password Confirmation"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn @click="submit()" color="primary" class="mt-2">Submit</v-btn>
        <v-btn @click="submitAndCreateNew()" color="secondary" class="ms-5 mt-2">Save and add another</v-btn>
        <v-btn @click="submitAndEdit()" color="secondary" class="ms-5 mt-2">Save and continue editing</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
import { saveUser } from '@/services/users';
import { getUserGroups } from '@/services/userGroups';
import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export default {
  data() {
    return {
      user: {},
      passwordHidden: true,
      passwordConfirmationHidden: true,
      userGroups: [],
    };
  },
  async mounted() {
    await this.loadData();
  },
  computed: {
    isUpdate(){
      return this.$route.params.id !== 'new'
    }
  },
  methods: {
    async loadData() {
      if(this.isUpdate) {
        this.user = await this.getUser(this.$route.params.id)
      }
      this.userGroups = await getUserGroups();
    },
    async getUser(id) {
      let response = await httpClient.get(apiRoutes.getUser(id))
      return response;
    },
    checkIfEqualsPassword() {
      return this.user.password === this.user.password_confirmation;
    },
    async save() {
      if(this.checkIfEqualsPassword()) {
        return await saveUser(this.user)
      }
    },
    async submit() {
      await this.save()
      this.$router.push('/users');
    },
    async submitAndCreateNew() {
      await this.save()
      this.$router.push('/users/new')
      .then(() => {
        window.location.reload();
      })
    },
    async submitAndEdit() {
      const response = await this.save()
      this.$router.push(`/users/${response.id}`);
    },
  }
};
</script>
