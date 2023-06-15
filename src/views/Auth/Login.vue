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
          :append-icon="!passwordHidden ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="passwordHidden = !passwordHidden"
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
      <v-snackbar
        :timeout="2500"
        color="danger"
        elevation="24"
        v-model="snackbar"
      >
        You must to provide a valid email/username and password
      </v-snackbar>
    </v-sheet>
  </div>
</template>
<script>

export default {
  data() {
    return {
      passwordHidden: true,
      username: '',
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
      snackbar: false,
    };
  },
  computed: {
    canSubmit() {
      if (this.username?.length > 3 && this.password?.length > 3) return true
      return false
    },
  },
  methods: {
    submit() {
      if ((this.canSubmit === true)){
        alert('logged in');
      } else {
        this.snackbar = true;
      }
    }
  },
};
</script>
