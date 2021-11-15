<template>
  <div class="d-flex">
    <ul class="list_ul">
      <li class="list_li" v-for="item in routes" :key="item">
        <NuxtLink to="/">{{ item }}</NuxtLink>
      </li>
    </ul>

    <v-spacer></v-spacer>

    <div class="list_ul">
      <NuxtLink to="/login" class="log_in_link">
        <Icon name="log-in" :margin="true"/>
        <span>Kirish</span>
      </NuxtLink>
      <button
        class="register_btn"
      >
        Ro‘yxatdan o’tish
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    routes: ["Asosiy", "Grantlar", "Soliq imtiyozlari"],
  }),
};
</script>

<style scoped>
.d-flex {
  display: flex;
  align-items: center;
}
.list_ul {
  display: flex;
  list-style: none;
}
.list_li {
  margin-right: 39px;
  text-decoration: none;
}
.list_li a,
.log_in_link {
  font-size: 14px;
  font-family: 'SF-Pro-Text';
  font-weight: 500;
  text-decoration: none;
  color: #28293d;
  transition: color 0.2s ease-in;
}
.list_li a:hover,
.log_in_link:hover {
  color: #2044a0;
}

.log_in_link {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-right: 39px;
}
.log_in_link img {
  margin-right: 7px;
}
.register_btn {
  position: relative;
  border: 2px solid #3366ff;
  border-radius: 8px;
  font-family: 'SF-Pro-Text';
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.35px;
  text-transform: none;
  color: #3366ff;
  width: 175px;
  height: 40px;
  transition: 0.1s ease-in-out;
}
.register_btn:hover{
  background: #2a54eb3b;
}
.register_btn:active{
  top: 2px
}

@media (max-width: 1000px) {
  .d-flex {
    flex-direction: column;
    height: calc(100% - 49px);
  }
  .list_ul {
    flex-direction: column;
    margin-top: 15px;
  }
  .list_li {
    margin-top: 9px;
  }
  .list_li a,
  .log_in_link {
    display: flex;
    padding: 8px 10px;
  }
  .register_btn {
    margin: 9px 0 24px;
    
  }
}
</style>