<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-main>
      <div class="h-screen bg-secondary">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null, variavel: 'Price Calculator' }),
  }
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: smaller;
}
</style>
