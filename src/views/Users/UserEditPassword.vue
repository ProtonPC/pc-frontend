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
      Edit your password
    </h3>
    <v-sheet class="mx-auto">
      <v-form @submit.prevent="submit">
        <v-row justify-md="center">
          <v-col cols="12" md="7">
            <v-text-field
              v-model="user.old_password"
              :type="oldPasswordHidden ? 'password' : 'text'"
              :append-inner-icon="!oldPasswordHidden ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="oldPasswordHidden = !oldPasswordHidden"
              label="Old Password"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="7">
            <v-text-field
              v-model="user.password"
              :type="passwordHidden ? 'password' : 'text' "
              :append-inner-icon="!passwordHidden ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="passwordHidden = !passwordHidden"
              label="New Password"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="7">
            <v-text-field
              v-model="user.password_confirmation"
              :type="passwordConfirmationHidden ? 'password' : 'text'"
              :append-inner-icon="!passwordConfirmationHidden ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="passwordConfirmationHidden = !passwordConfirmationHidden"
              label="New Password Confirmation"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn @click="submit()" color="primary" class="mt-2">Submit</v-btn>
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
      oldPasswordHidden: true,
      passwordHidden: true,
      passwordConfirmationHidden: true,
      userGroups: [],
      loggedInUser: 1
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
        this.user = await this.getUser(this.loggedInUser)
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
  }
};
</script>
