<template>
  <div class="topbar">
    <a>Rune Soft</a>
    <img src="@/components/icon/menu.svg" />
  </div>
  <div class="navber">
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/info">INFO</router-link>
      <router-link to="/project">PROJECT</router-link>
      <router-link to="/community">COMMUNITY</router-link>
    </nav>
  </div>
  <router-view />
  <footer>
    <div id="footer_1_ct">
      <div id="footer_1_1_ct">
        <p class="footer_1_1_text">팀소개</p>
        <img src="@/components/icon/footer_bar_icon.svg" />
        <p class="footer_1_1_text">이용약관</p>
        <img src="@/components/icon/footer_bar_icon.svg" />
        <p class="footer_1_1_text">개인정보처리방침</p>
        <img src="@/components/icon/footer_bar_icon.svg" />
        <p class="footer_1_1_text">전화문의</p>
      </div>
    </div>
    <div id="footer_2_ct">
      <h id="footer_text">ⓣ RUNESOFT, TEAM</h>
    </div>
  </footer>
</template>

<style>
.navber {
  position: relative;
  z-index: 2;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#footer_1_ct {
  width: 100%;
  height: 40px;
  background-color: black;
  border-bottom: 1px solid #666666;
}

#footer_1_1_ct {
  position: relative;
  left: 100px;
  top: -5px;
  display: flex;
}

.footer_1_1_text {
  color: #d9d9d9;
  padding-left: 10px;
  padding-right: 10px;
}

#footer_2_ct {
  width: 100%;
  background-color: black;
  height: 70px;
}

#footer_text {
  position: relative;
  top: 35%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #555555;
}

nav {
  padding-top: 66px;
}

nav a {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #999999;
  padding: 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
}

.topbar {
  position: absolute;
  width: 100%;
  height: 30px;
  left: 0px;
  top: 0px;
  text-align: left;
}

.topbar a {
  position: absolute;
  top: 50%;
  left: 10px;
  font-family: "Paytone One";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
}

.topbar img {
  position: absolute;
  top: 50%;
  right: 10px;
}
</style>
