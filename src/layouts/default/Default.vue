<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" class="text-white">
            {{ variavel }}
          </router-link>
        </v-toolbar-title>
      icon
    </v-app-bar>

    <v-navigation-drawer color="primary" v-model="drawer">
      <v-list>
        <router-link to="/" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Home">
          </v-list-item>
        </router-link>

        <router-link to="/product-types" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Product Types"></v-list-item>
        </router-link>

        <router-link to="/products" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Products"></v-list-item>
        </router-link>

        <router-link to="/ports" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Ports"></v-list-item>
        </router-link>

        <router-link to="/suppliers" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Suppliers"></v-list-item>
        </router-link>

        <router-link to="/customers" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Customers"></v-list-item>
        </router-link>

        <router-link to="/warehouses" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Warehouses"></v-list-item>
        </router-link>

        <router-link to="/users" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Users"></v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
      <router-view />
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
