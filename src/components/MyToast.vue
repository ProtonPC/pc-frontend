<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-snackbar
    :color="color"
    elevation="24"
    v-model="visible"
  >
    {{ message }}
  </v-snackbar>
</template>

<script>
import { ref, watchEffect } from 'vue';
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
    },
  },
  setup(props) {
    let visible = ref(false);
    watchEffect(() => {
      if (props.show){
        visible.value = true;
        this.$emit("show", false);
      }
    });
    return {
      visible,
    }
  },
};
</script>
<style>
</style>
