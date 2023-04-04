<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> {{ variavel }}</v-toolbar-title>
      icon
    </v-app-bar>

    <v-navigation-drawer color="primary" v-model="drawer">
      <v-list>
        <router-link to="/" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Home">
          </v-list-item>
        </router-link>

        <router-link to="/entries" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Entries"></v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
      Conteudo
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null, variavel: 'Purchase Order Control' }),
  }
</script>

<style scoped>
a{
  text-decoration: none;
  font-size: x-large;
}
</style>
