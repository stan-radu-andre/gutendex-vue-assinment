<template>
  <div id="app" class="v-application" data-app>
    <div id="nav">
      <v-card class="mx-auto">
        <v-navigation-drawer permanent expand-on-hover>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Books Gutendex
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["books"],
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        {
          title: "Visited Books",
          icon: "mdi-book-open-variant",
          route: "/visitedBooks",
        },
        { title: "About", icon: "mdi-help-box", route: "/about" },
      ],
      right: null,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
