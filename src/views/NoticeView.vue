<template>
  <div id="topbar"></div>
  <div id="noticeTopbanner"></div>
  <div id="notice_icon_ct">
    <div id="iconList">
      <img src="@/assets/icon/iconBell2.svg" class="noticeIcon" />
    </div>
  </div>
  <div id="notice_contents_body">
    <div id="notice_contents_ct">
      <div class="notice_card_ct">
        <div class="notice_card_img"></div>
        <div class="notice_contents_ct">
          <p class="notice_contents_title">공지 타이틀</p>
          <p class="notice_contents_subtitle">프로젝트 서브 타이틀 적는 곳</p>
        </div>
      </div>
      <div class="notice_card_ct">
        <div class="notice_card_img"></div>
      </div>
      <div class="notice_card_ct">
        <div class="notice_card_img"></div>
      </div>
      <div class="notice_card_ct">
        <div class="notice_card_img"></div>
      </div>
      <div class="notice_card_ct">
        <div class="notice_card_img"></div>
      </div>
      <div class="notice_card_ct">
        <div class="notice_card_img"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#topbar {
  position: absolute;
  top: 50px;
  width: 100%;
  height: 56px;
  background-color: black;
}
#noticeTopbanner {
  width: 100%;
  height: 230px;
  background-image: url(@/assets/notice/noticebannerimg.png);
  background-size: cover;
}
#notice_icon_ct {
  width: 100%;
  height: 70px;
  margin-top: 30px;
  margin-bottom: 30px;
}
#iconList {
  margin: auto;
  height: 70px;
  width: 50px;
  display: flex;
}
#notice_contents_body {
  position: relative;
  max-width: 100%;
  height: auto;
  margin-top: 100px;
  margin-bottom: 30px;
  background-color: beige;
}
#notice_contents_ct {
  position: relative;
  max-width: 960px;
  height: 740px;
  left: 50%;
  transform: translateX(-50%);
  background-color: aquamarine;
}
.notice_card_ct {
  position: relative;
  float: left;
  width: 300px;
  height: 300px;
  margin: 10px;
  margin-top: 50px;
  background-color: white;
  border-color: black;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.notice_card_img {
  position: relative;
  top: -50px;
  left: 50px;
  width: 200px;
  height: 200px;
  background-color: #ababab;
  border-radius: 10px;
}
.notice_contents_ct {
  position: relative;
  top: -25px;
  width: 100%;
  height: 75px;
  background-color: salmon;
}
.notice_contents_title {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
}
@media (max-width: 960px) {
  #notice_contents_ct {
    max-width: 640px;
    height: 1110px;
  }
}
@media (max-width: 640px) {
  #notice_contents_ct {
    max-width: 320px;
    height: 2220px;
  }
}
</style>
