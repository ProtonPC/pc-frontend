<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-app-bar v-if="!isModal" color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" class="text-white">
          {{ variavel }}
        </router-link>
      </v-toolbar-title>
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="warning" v-bind="props"> Profile </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="text-center">
              <v-btn variant="text" @click="$router.push('/users/me')">
                Edit Profile
              </v-btn>
            </v-list-item-title>
            <v-list-item-title class="text-center">
              <v-btn variant="text"> Logout </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-if="!isModal" color="primary" v-model="drawer">
      <v-list>
        <router-link to="/" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
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

        <router-link to="/quotes" class="text-white">
          <v-list-item prepend-icon="mdi-home" title="Quotes"></v-list-item>
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
  data: () => ({ drawer: null, variavel: "Price Calculator" }),
  computed: {
    isModal() {
      return this.$route.query.popup;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: smaller;
}
</style>
