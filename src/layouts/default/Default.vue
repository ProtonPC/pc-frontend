<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> {{ variavel }}</v-toolbar-title>
      icon
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <router-link to="/test">
          <v-list-item title="Navigation drawer">teste 1</v-list-item>
        </router-link>

        <router-link to="/">
          <v-list-item title="Navigation drawer">teste 2</v-list-item>
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

<style>
a{
  text-decoration: none;
}
</style>
