<template>
  <div class="bannertext">
    <div class="icon"></div>
    <p>안녕하세요.<br />룬 소프트에 오신 것을 환영합니다.</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon {
  border-width: 1px;
  border-color: white;
  border-style: solid;
  width: 150px;
  height: 150px;
  margin: auto;
}

.bannertext {
  margin-top: -76px;
  padding: 200px;
  background-image: url(../../src/assets/banner/TopBanner_1.png);
  background-size: cover;
}

.bannertext p {
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
}
</style>
