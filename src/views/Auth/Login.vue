<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-screen py-5 px-5 flex-column d-flex justify-center align-center">
    <div class="text-h5 my-4">
      Login to Price Calculator
    </div>
    <v-sheet
      :elevation="24"
      :width="500"
      color="light_grey"
      class="px-8 py-16"
      rounded
    >
      <v-form @submit.prevent>
        <v-text-field
          v-model="username"
          :rules="userNameRules"
          label="Email/username"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :type="passwordHidden ? 'password' : 'text' "
          :append-inner-icon="!passwordHidden ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="passwordHidden = !passwordHidden"
          :rules="passwordRules"
          label="Password"
        >
        </v-text-field>
        <v-btn :disabled="!userNameRules" type="button" @click="submit" block color="primary">Login</v-btn>
        <span class="text-body-1 d-flex justify-center mt-3">
          Forget your password?&nbsp;<router-link to="/auth/forget-password" color="primary">Click here!
        </router-link>
        </span>
      </v-form>

      <my-toast
        v-model:message="message"
        v-model:color="color"
      >
      </my-toast>

    </v-sheet>
  </div>
</template>
<script>

import { login } from '@/services/auth';
import { postToastMessage } from '@/services/channels';

export default {
  data() {
    return {
      message: '',
      color: '',
      username: '',
      passwordHidden: true,
      userNameRules: [
        value => {
          if (value?.length > 3) return true
          return 'Username must be at least 3 characters.'
        },
      ],
      password: '',
      passwordRules: [
        value => {
          if (value?.length > 3) return true
          return 'Password must be at least 3 characters.'
        },
      ],
    };
  },
  computed: {
    canSubmit() {
      return this.username?.length > 3 && this.password?.length > 3
    }
  },
  methods: {
    async submit() {
      if ((this.canSubmit)){
        await login(this.username, this.password)
        await this.$router.push('/quotes')
      } else {
        this.message = 'You must to provide a valid email/username and password'
        this.color = 'error'

        postToastMessage({
          toggleVisible: true
        })
      }

    }
  },
};
</script>
