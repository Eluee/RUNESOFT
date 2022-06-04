<template>
  <div class="bannerimg">
    <div class="icon"></div>
    <p>안녕하세요.<br />룬 소프트에 오신 것을 환영합니다.</p>
    <img class="right-arrow" src="@/components/icon/rightArrow.svg" />
    <img class="left-arrow" src="@/components/icon/leftArrow.svg" />
  </div>
  <div class="contents">
    <p class="contents_head_1">소규모로 구성된 팀</p>
    <p class="contents_text">룬 소프트는 대학생들로 모인 소규모 팀입니다.</p>
    <div id="user_ct">
      <img class="user_1" src="@/components/icon/user.svg" />
      <img class="user_2" src="@/components/icon/user.svg" />
      <img class="user_3" src="@/components/icon/user.svg" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.icon {
  border-width: 1px;
  border-color: lightslategray;
  border-style: solid;
  width: 150px;
  height: 150px;
  margin: auto;
}

.right-arrow {
  position: absolute;
  right: 10%;
  top: 50%;
}

.left-arrow {
  position: absolute;
  left: 10%;
  top: 50%;
}

.bannerimg {
  position: relative;
  margin-top: -70px;
  padding: 150px;
  background-image: url(../../src/assets/banner/TopBanner_1.png);
  right: 0%;
  left: 0%;
}

.bannerimg p {
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
}

.contents {
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
}

.contents_head_1 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 56px;
  margin-top: 0px;
  color: #333333;
}

.contents_text {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  margin-top: -30px;
  color: #999999;
}

#user_ct {
  position: relative;
  width: 800px;
  height: 300px;
  display: inline-block;
}

.user_1 {
  position: absolute;
  left: calc(50% - 260px);
  transform: translate(-50%, 0);
}

.user_2 {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}

.user_3 {
  position: absolute;
  left: calc(50% + 260px);
  transform: translate(-50%, 0);
}
</style>
