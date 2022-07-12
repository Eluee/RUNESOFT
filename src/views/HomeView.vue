<template>
  <div>
    <div class="bannerimg">
      <div class="icon"></div>
      <p>안녕하세요.<br />룬 소프트에 오신 것을 환영합니다.</p>
      <svg
        class="right-arrow"
        width="70"
        height="70"
        viewBox="-10 -10 95 70 "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 59L30 29.5L0 0"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        class="left-arrow"
        width="70"
        height="70"
        viewBox="0 0 95 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 59L0 29.5L30 0"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
    <div class="contentsct">
      <div id="context2ct">
        <p class="conhdtext">가능할 것 같은데?</p>
        <p class="conextext">
          새로운 가치를 만들기 위한 끊임없는 학습과 도전하는<br />
          대학생들의 개발 첫 발자국
        </p>
      </div>
      <img
        src="@/assets/maincontents/mainpagecontents2.png"
        id="contents2img"
      />
    </div>
    <div class="contentsct">
      <div id="context3ct">
        <p class="conhdtext">더 좋은 방법은 없을까?</p>
        <p class="conextext">
          우리는 더좋은 선택을 하기위해 비판과 사고를 멈추지 않습니다.
        </p>
      </div>
      <img
        src="@/assets/maincontents/mainpagecontents3.png"
        id="contents3img"
      />
    </div>
    <div class="contentsct">
      <p class="conhdtext">우리의 비전을 향해!</p>
      <p class="conextext">우리의 상상을 현실로</p>
      <img
        src="@/assets/maincontents/mainpagecontents4.png"
        id="contents4img"
      />
    </div>
  </div>
</template>

<script></script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap);
.icon {
  position: relative;
  top: 25%;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  width: 150px;
  height: 150px;
  margin: 0 auto;
}
.right-arrow {
  position: absolute;
  right: 10%;
  top: 53.7%;
}
.right-arrow {
  stroke: white;
  transition: all 0.5s;
}
.right-arrow:hover {
  transform: translateX(25px);
  transition: all 0.5s;
  transition-timing-function: ease;
}
.left-arrow {
  position: absolute;
  left: 13.4%;
  top: 55%;
}
.left-arrow {
  stroke: white;
  transition: all 0.5s;
}
.left-arrow:hover {
  transform: translateX(-25px);
  transition: all 0.5s;
  transition-timing-function: ease;
}
.bannerimg {
  position: relative;
  left: 50%;
  margin-top: -57px;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.49);
  width: 1440px;
  height: 600px;
}
.bannerimg p {
  position: relative;
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  top: 180px;
  font-weight: 700;
  font-size: 35px;
  line-height: 50px;
}
.contents {
  position: relative;
  margin-top: 100px;
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
.contentsct {
  position: relative;
  max-width: 1440px;
  height: 500px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
#contents2img {
  position: absolute;
  top: 30px;
  width: 350px;
  right: 30px;
}
.conhdtext {
  position: relative;
  z-index: 1;
  font-family: Noto Sans KR Font;
  font-size: 50px;
  margin: 0px;
  color: black;
}
.conextext {
  position: relative;
  z-index: 1;
  font-family: Noto Sans KR Font;
}
#context2ct {
  position: absolute;
  right: 410px;
  top: 30px;
  height: 400px;
  width: 500px;
  text-align: right;
}
#contents3img {
  position: absolute;
  top: 40px;
  width: 350px;
  left: 30px;
}
#context3ct {
  position: absolute;
  left: 410px;
  top: 40px;
  height: 400px;
  width: 500px;
  text-align: left;
}
#contents4img {
  position: relative;
  z-index: 0;
  top: -120px;
  width: 330px;
}
</style>
