<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-screen py-5 px-5 flex-column d-flex justify-center align-center">
    <div class="text-h5 my-4">
      Insert your email to recovery your password
    </div>
    <v-sheet
      :elevation="24"
      width="500"
      color="light_grey"
      class="px-8 py-16"
      rounded
    >
      <v-form @submit.prevent class="mt-5">
        <v-text-field
          v-model="username"
          :rules="userNameRules"
          label="Email/username"
        ></v-text-field>
        <v-btn :disabled="!userNameRules" type="button" @click="submit" block color="primary">Reset Password</v-btn>
        <span class="text-body-1 d-flex justify-center mt-3">
          <router-link to="/auth/login" color="primary">Back to login
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
      snackbar: false,
    };
  },
  computed: {
    canSubmit() {
      if (this.username?.length > 3) return true
      return false
    },
  },
  methods: {
    submit() {
      if ((this.canSubmit === true)){
        alert("Success");
      } else {
        this.snackbar = true;
      }
    }
  },
};
</script>
