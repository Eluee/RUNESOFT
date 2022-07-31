<template>
  <div id="mainapp" style="overflow-x: hidden">
    <!--overflow-x: hidden 가로 공백 스크롤 숨기기-->
    <div class="topbar">
      <a>RUNE SOFT</a>
      <img src="@/assets/icon/users.svg" />
      <p id="guestnum">{{ guest }}</p>
    </div>
    <div class="navbar">
      <nav class="navbar_group">
        <router-link to="/">HOME</router-link>
        <router-link to="/info">INFO</router-link>
        <router-link to="/project">PROJECT</router-link>
        <!--<router-link to="/community">COMMUNITY</router-link>-->
        <router-link to="/notice">NOTICE</router-link>
      </nav>
    </div>
    <router-view />
    <footer>
      <div id="footer_0_ct">
        <nav>
          <router-link to="/">메인홈</router-link>
          <router-link to="/info">개발자정보</router-link>
          <router-link to="/project">프로젝트</router-link>
          <!--<router-link to="/community">커뮤니티</router-link>-->
          <router-link to="/notice">공지사항</router-link>
        </nav>
      </div>
      <div id="footer_1_ct">
        <div id="footer_1_1_ct">
          <p class="footer_1_1_text">팀소개</p>
          <img src="@/assets/icon/footer_bar_icon.svg" />
          <p class="footer_1_1_text">이용약관</p>
          <img src="@/assets/icon/footer_bar_icon.svg" />
          <p class="footer_1_1_text">개인정보처리방침</p>
          <img src="@/assets/icon/footer_bar_icon.svg" />
          <p class="footer_1_1_text">전화문의</p>
        </div>
        <div id="footer_1_2_ct">
          <p>고객센터</p>
          <img src="@/assets/icon/inv_triangle.svg" />
        </div>
      </div>
      <div id="footer_2_ct">
        <h id="footer_text">ⓣ RUNESOFT, TEAM</h>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guest: 10,
    };
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#footer_0_ct {
  width: 100%;
  height: 40px;
  margin-top: 100px;
  border-top: 1px solid #d9d9d9;
}

#footer_0_ct nav {
  position: relative;
  top: 25%;
}

#footer_0_ct nav a {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #191919;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
}

#footer_1_ct {
  position: relative;
  width: 100%;
  height: 40px;
  background-color: black;
  border-bottom: 1px solid #666666;
}

#footer_1_1_ct {
  position: absolute;
  left: 100px;
  top: 20%;
  display: inline-flex;
}

#footer_1_2_ct {
  position: absolute;
  right: 100px;
  top: 20%;
  display: inline-flex;
}

#footer_1_2_ct p {
  color: white;
  padding-right: 5px;
  margin: 0 auto;
}

.footer_1_1_text {
  color: #d9d9d9;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
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

.navbar {
  position: relative;
  z-index: 2;
  margin: 0 auto;
}

.navbar nav {
  position: relative;
  height: 40px;
  text-align: center;
  margin: 0 auto;
}

.navbar nav a {
  position: relative;
  top: 15%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #999999;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
}

.navbar nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
}

#guestnum {
  position: absolute;
  left: 230px;
  top: 11px;
  font-family: "Roboto";
  font-style: normal;
  font-size: 20px;

  color: #777777;
}

.topbar {
  position: relative;
  width: 100%;
  height: 50px;
  left: 0px;
  top: 0px;
  text-align: left;
  border-bottom: 1px solid #d9d9d9;
}

.topbar a {
  position: absolute;
  top: 30%;
  left: 80px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  align-items: center;
  text-align: center;
  color: #9979c1;
}

.topbar img {
  position: absolute;
  top: 30%;
  left: 200px;
}
</style>
