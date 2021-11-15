<template>
  <div class="bg min-h-screen header">
    <div class=''></div>
    <div class="app_bar_full">
      <div class="container app_bar">
        <NuxtLink to="/admin">
          <img src="~assets/icons/logo-pro.svg" alt="" />
        </NuxtLink>
        <v-spacer></v-spacer>
        <div class="leftBlock">
          <div class="personBox">
            <span>Shoxrux</span>
            <Icon name="green-person" />
          </div>
          <button class="btn_logout">
            <Icon name="log-out" />
          </button>
        </div>
      </div>
    </div>
    
    <main>
      <Nuxt />
    </main>
    <AdminFilterModal v-if="modal"/>
  </div>
</template>

<script>
export default {
  computed: {
    modal () {
      return this.$store.state.modal
    }
  }
}
</script>

<style scoped>
.bg {
  background: #f5f5f7;
}
.app_bar_full {
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
  position: relative;
  z-index: 10;
  background-color: white;
}
.app_bar {
  height: 64px;
  display: flex;
  align-items: center;
}
.leftBlock {
  display: flex;
}
.personBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f3;
  border-radius: 6px;
  height: 40px;
  padding: 4px 4px 4px 20px;
  font-family: "SF-Pro-Text";
  font-weight: bold;
  font-size: 13px;
  line-height: 150%;
  text-align: right;
  letter-spacing: -0.35px;
  color: #28293d;
  margin-right: 40px;
}
.personBox span {
  padding-right: 20px;
}
.btn_logout {
  position: relative;
}
.btn_logout:active {
  top: 2px;
}
</style>