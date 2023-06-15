<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-screen py-5 px-5 flex-column d-flex justify-center align-center">
    <div class="text-h5 my-4">
      Create your new password
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
          v-model="password"
          :type="passwordHidden ? 'password' : 'text' "
          :append-icon="!passwordHidden ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="passwordHidden = !passwordHidden"
          label="User Password"
        ></v-text-field>
        <v-text-field
          v-model="password_confirmation"
          :type="passwordConfirmationHidden ? 'password' : 'text'"
          :append-icon="!passwordConfirmationHidden ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="passwordConfirmationHidden = !passwordConfirmationHidden"
          label="Password Confirmation"
        ></v-text-field>
        <v-btn type="button" @click="submit" block color="primary">Reset Password</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>

export default {
  data() {
    return {
      password: '',
      password_confirmation: '',
      passwordHidden: true,
      passwordConfirmationHidden: true,
    };
  },
  methods: {
    isEqualsPassword() {
      return this.password === this.password_confirmation;
    },
    submit() {
      if (this.isEqualsPassword()){
        alert('Passwords match.');
      } else {
        alert('Passwords do not match.');
      }
    }
  },
};
</script>
