<template>
  <div class="relative bg">
    <v-container class="homePage">
      <div class="leftContent">
        <Success v-if="$route.query.message" />
        <SponsorForm  v-else/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div class="rightContent">
        <div class="sitata_blok">
          <div class="contentText">
            <p>
              Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi.
              Ayni oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib
              qoʻymaslik kerak.
            </p>
          </div>
          <div class="avtor_block">
            <img src="~assets/image/sh.m.jpg" alt="" />
            <h6>Shavkat Mirziyoyev</h6>
            <p>O‘zbekiston Respublikasi Prezidenti</p>
          </div>
        </div>
      </div>
    </v-container>

  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>


<style scoped>
.bg {
  background: #f5f5f7;
  background-image: url(~assets/image/clip-work-searches3.png);
  background-position: right bottom;
  background-repeat: no-repeat;
}
.homePage {
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  max-width: 1220px;
  margin: 0 auto;
}
.leftContent {
  position: relative;
  width: 56%;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  min-height: 1000px;
}
.leftContent::before {
  content: "";
  background: #fff;
  height: 100%;
  width: calc(100vw - 50%);
  position: absolute;
  right: 100%;
}
.rightContent {
  width: 44%;
}



.leftContent h1 {
  margin: 76px 0 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #1d1d1f;
}



@media (max-width: 1250px) {
  .homePage {
    flex-direction: column;
  }
  .leftContent {
    width: 100%;
    border-right: none;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.08); */
  }
  .leftContent:after {
    content: "";
    background: #fff;
    height: 100%;
    width: 50px;
    position: absolute;
    left: 100%;
    top: 0;
  }

  .rightContent {
    width: 100;
    display: none;
  }
  .sitata_blok {
    padding-left: 0;
  }
}


.sitata_blok {
  margin-top: 67px;
  float: right;
  max-width: 436px;
  padding-left: 12px;
}
.contentText {
  position: relative;
  font-family: "SF-Pro-Display";
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  text-align: justify;
  color: #28293d;
  margin-bottom: 24px;
}
.contentText p {
  position: relative;
}
.contentText:before {
  position: absolute;
  content: url(~assets/icons/start.svg);
  top: -15px;
  left: -27px;
}
.contentText:after {
  position: absolute;
  content: url(~assets/icons/end.svg);
  bottom: -15px;
  right: -27px;
}

.avtor_block img {
  width: 55px;
  height: 55px;
  margin-right: 16px;
  float: left;
  filter: drop-shadow(0px 20px 60px rgba(0, 0, 0, 0.15));
  border-radius: 16px;
}
.avtor_block h6 {
  font-family: "SF-Pro-Text";
  font-weight: 600;
  font-size: 17px;
  line-height: 150%;
  text-align: justify;
  letter-spacing: -0.352px;
  color: #000000;
}
.avtor_block p {
  font-family: "SF-Pro-Text";
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.352px;
  color: #86868b;
  margin-top: 4px;
}

</style>