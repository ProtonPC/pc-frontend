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
import { receiveToastMessage } from '@/services/channels';
import { ref } from 'vue';

export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: 'success',
    },
  },
  setup(props) {
    let visible = ref(false);
    receiveToastMessage(() => {
      visible.value = true
      setTimeout(() => {
        visible.value = false
        props.show = false
      }, 2000)
    })
    return {
      visible
    }
  },
};
</script>
<style>
</style>
