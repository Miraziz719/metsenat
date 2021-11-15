<template>
  <div class="formHomePage">
    <h1 class="text-4xll">Homiy sifatida ariza topshirish</h1>

    <div class="btnGroup">
      <button @click.stop="isLegal = false" :class="{ active: !isLegal }">
        Jismoniy shaxs
      </button>
      <button @click.stop="isLegal = true" :class="{ active: isLegal }">
        Yuridik shaxs
      </button>
    </div>

    <div class="formControl">
      <label>F.I.Sh. (Familiya Ism Sharifingiz)</label><br />
      <input
        class="inputText"
        v-model="name"
        placeholder="Abdullayev Abdulla Abdulla o’g’li"
      />
    </div>
    <div class="formControl">
      <label>Telefon raqamingiz</label><br />
      <input class="inputText" v-model="tel" placeholder="+998 00 000-00-00" />
    </div>
    <div class="formControl">
      <label>To‘lov summasi</label><br />
      <div class="chekboxGroup grid grid-cols-3 gap-4">
        <label class="" v-for="item in paymentTypes" :key="item">
          <input
            type="radio"
            :value="item"
            :checked="item === payment"
            v-model="payment"
          />
          <div>
            {{ getSum(item) }}
            <span v-if="!isNaN(item)">Uzs</span>
          </div>
        </label>
      </div>
    </div>

    <transition name="fade">
      <div v-if="payment === 'Boshqa'" class="formControl">
        <input
          type="number"
          class="inputText"
          v-model="customPayment"
          placeholder="Orient group"
        />
      </div>
    </transition>

    <transition name="fade">
      <div v-if="isLegal" class="formControl">
        <label>Tashkilot nomi</label><br />
        <input class="inputText" v-model="company" placeholder="Orient group" />
      </div>
    </transition>
    <button @click.prevent="sendData" class="sendButton transition">
      Yuborish
    </button>
  </div>
</template>

<script>
export default {

  data: () => ({
    isLegal: false,
    name: "",
    tel: "",
    paymentTypes: [1000000, 5000000, 7000000, 10000000, 30000000, "Boshqa"],
    payment: 1000000,
    customPayment: 0,
    company: "",
  }),
  methods: {
    getSum(item) {
      return isNaN(item) ? item : new Intl.NumberFormat("ru-RU").format(item);
    },
    sendData() {
      console.log("aa");
      this.$router.push('/?message="success"');
    },
  },
};
</script>

<style scoped>
.formHomePage {
  max-width: 598px;
  padding-right: 12px;
}
.formHomePage h1 {
  margin: 76px 0 40px;
  max-width: 450px;
  font-family: Poppins;
  font-weight: bold;
}

@media (max-width: 1250px) {
  .homePage {
    flex-direction: column;
  }
  .formHomePage {
    padding-right: 0;
    margin: 0 auto;
  }
}

.btnGroup {
  margin-bottom: 28px;
}
.btnGroup button {
  width: calc(50% + 2px);
}

.chekboxGroup {
  margin-top: 7.1px;
}
.chekboxGroup div {
  cursor: pointer;
  position: relative;
  height: 61px;
  background: #fff;
  border: 1px solid #e0e7ff;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #2e384d;
  line-height: 61px;
  text-align: center;
}
.chekboxGroup div:after {
  content: url(~assets/icons/checked.svg);
  position: absolute;
  top: -24px;
  right: -8px;
  display: none;
}
.chekboxGroup input:checked ~ div {
  background: #f9faff;
  border: 2px solid #2e5bff;
}
.chekboxGroup input:checked ~ div:after {
  display: block;
}
.chekboxGroup div span {
  font-weight: 400;
  font-size: 12px;
  color: #2e5bff;
}
.chekboxGroup input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>