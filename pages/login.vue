<template>
  <div class="login_conatiner">
    <NuxtLink to="/">
      <img class="logo" width="100%" src="~assets/icons/logo.svg" alt="" />
    </NuxtLink>
    <div class="login_card">
      <h2 class="titleH2">Kirish</h2>
      <div class="formControl">
        <label for="login">Login</label><br />
        <input
          class="inputText"
          id="login"
          name="login1"
          value=""
          placeholder="adm8904"
        />
      </div>
      <div class="formControl">
        <label for="name">Parol</label><br />
        <input
          class="inputText"
          id="name"
          name="name1"
          value=""
          type="password"
          placeholder=""
        />
      </div>
      <img class="robot" width="100%" src="~assets/image/robot.png" alt="" />
      <button @click.prevent="sendData" class="sendButton">
          Kirish  
        </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  methods: {
    sendData() {
      this.$router.push('/admin')
    }
  },
};
</script>

<style scoped>
.login_conatiner {
  margin: 3rem auto;
  padding: 0 12px;
}
.logo {
  max-width: 315px;
  margin:  0 auto 48px;
}
.login_card {
  max-width: 380px;
  background-color: white;
  border: 1px solid #EBEEFC;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 32px;
}


  .titleH2 {
    margin-bottom: 41px;
  }

.robot {
  margin-bottom: 22.5px;
}
</style>