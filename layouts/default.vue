<template>
  <div>
    <div class="app_bar_full">
      <v-container class="my_container app_bar">
        <NuxtLink to="/">
          <img class="logo" width="100%" src="~assets/icons/logo.svg" alt="" />
        </NuxtLink>

        <v-spacer></v-spacer>

        <div class="navContent">
          <NavContent />
        </div>

        <v-app-bar-nav-icon
          class="mabileButton"
          @click.stop="drawer = !drawer"
        />
      </v-container>
    </div>
    <v-navigation-drawer v-model="drawer" right temporary fixed>
      <v-list-item>
        <NuxtLink to="/">
          <img width="100%" src="~assets/icons/logo.svg" alt="" />
        </NuxtLink>
      </v-list-item>
      <v-divider />
      <NavContent />
    </v-navigation-drawer>
    <main class="main">
      
      <Nuxt />
      
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.app_bar_full {
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
  position: relative;
  z-index: 10;
}
.my_container {
  max-width: 1220px;
  margin: 0 auto;
}
.app_bar {
  overflow: hidden;
  display: flex;
  height: 88px;
  align-items: center;
}
.mabileButton {
  display: none;
}
.logoSidebar {
  padding: 5px;
}
.main{
  overflow-x: hidden;
}
@media (max-width: 1000px) {
  .app_bar {
    height: 65px;
  }
  .navContent {
    display: none;
  }
  .mabileButton {
    display: block;
  }
  .logo {
    width: 220px;
  }
}
</style>