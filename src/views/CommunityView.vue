<template>
  <div class="community_main">
    <div class="m_p">
      <img src="@/assets/banner/community_main_page.jpg" />
    </div>
    <div class="community_main_text">
      <h2>다양한 커뮤니티 활동을 만나보세요.</h2>
    </div>
  </div>
  <div class="community_menu">
    <div class="m_pp">
      <img src="@/assets/banner/community_p_menu.jpg" />
    </div>
    <div class="m_text">
      <p>
        설명글입니다.설명글입니다.설명글입니다.설명글입니다. <br />
        설명글입니다.설명글입니다.설명글입니다.설명글입니다. <br />
        설명글입니다.설명글입니다.설명글입니다.설명글입니다.
      </p>
    </div>
  </div>
</template>

<style scoped>
.community_main {
  position: relative;
  z-index: 1;
  margin-top: -45px;
}
.m_p img {
  width: 1440px;
  height: 1000px;
}
.community_main_text {
  position: absolute;
  z-index: 1;
  top: 455px;
  left: 520px;
  font-size: 20px;
  font-style: bold;
  color: aliceblue;
}
.community_menu {
  position: relative;
  z-index: 1;
  width: 1440px;
  height: 600px;
  background-color: blueviolet;
}
.m_pp {
  top: 200px;
  left: 100px;
  margin: auto;
}
.m_pp img {
  width: 289px;
  height: 265px;
}
.m_text {
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
}
</style>
