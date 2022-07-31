<template>
  <div id="topbar"></div>
  <div id="noticeTopbanner"></div>
  <div id="notice_icon_ct">
    <div id="iconList">
      <img src="@/assets/icon/iconBell2.svg" class="noticeIcon" />
    </div>
  </div>
  <div id="notice_contents_ct">
    <div class="notice_card_ct"></div>
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
#notice_contents_ct {
  position: relative;
  max-width: 1440px;
  height: 100px;
  background-color: beige;
  margin: auto;
}
</style>
