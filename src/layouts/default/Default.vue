<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application {{ variavel }}</v-toolbar-title>
      icon
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item title="Navigation drawer">teste 1</v-list-item>
        <v-list-item title="Navigation drawer">teste 2</v-list-item>
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
    data: () => ({ drawer: null, variavel: 'nome' }),
  }
</script>
