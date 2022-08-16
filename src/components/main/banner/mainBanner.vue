<template>
  <div class="banner-ct">
    <img
      src="@/assets/banner/mianbannertestimg1.jpeg"
      class="banner-background"
    />
    <div class="banner-layer">
      <img src="@/assets/icon/logo.svg" class="main-logo" />
      <p>안녕하세요.<br />룬 소프트에 오신 것을 환영합니다.</p>
    </div>
  </div>
</template>
<style scoped>
.main-logo {
  position: relative;
  width: 160px;
  top: 150px;
}
.banner-ct,
.banner-layer {
  position: relative;
  max-width: 1440px;
  height: 600px;
}
.banner-layer {
  background-color: rgba(0, 0, 0, 0.49);
}
.banner-background {
  position: absolute;
  transform: translateX(-50%);
}
p {
  position: relative;
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  top: 180px;
  font-weight: 700;
  font-size: 35px;
  line-height: 50px;
}

@media (max-width: 600px) {
  .main-logo {
    width: 130px;
    top: 45%;
    transform: translateY(-50%);
  }
  p {
    line-height: 30px;
    font-size: 25px;
    top: 280px;
  }
}
@media (max-width: 335px) {
  p {
    font-size: 20px;
  }
}
</style>
