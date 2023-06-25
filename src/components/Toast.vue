<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-snackbar
    :timeout="2000"
    :color="color"
    elevation="24"
    v-model="snackbar"
  >
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'success',
    }
  },
  data() {
    return {
      snackbar: false,
    };
  },
  mounted() {
  },
  watch: {
    show(){
      console.log("mudou");
    },
  },
  methods: {
  },
};
</script>
<style>
</style>
