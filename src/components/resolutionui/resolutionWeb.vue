<template>
  <div class="top-bar">
    <router-link to="/" class="top-logo">RUNE SOFT</router-link>
    <img src="@/assets/icon/users.svg" />
    <p class="guest-num">{{ guest }}</p>
    <div class="nav-bar">
      <nav>
        <router-link to="/">HOME</router-link>
        <router-link to="/info">INFO</router-link>
        <router-link to="/project">PROJECT</router-link>
        <!--<router-link to="/community">COMMUNITY</router-link>-->
        <router-link to="/notice">NOTICE</router-link>
      </nav>
    </div>
  </div>
  <router-view />
  <footer>
    <div class="footer-ct0">
      <nav>
        <router-link to="/">메인홈</router-link>
        <router-link to="/info">개발자정보</router-link>
        <router-link to="/project">프로젝트</router-link>
        <!--<router-link to="/community">커뮤니티</router-link>-->
        <router-link to="/notice">공지사항</router-link>
      </nav>
    </div>
    <div class="footer-ct1">
      <h class="footer-text">ⓣ RUNESOFT, TEAM</h>
    </div>
  </footer>
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

<style scoped>
/* footer ct 0 */
.footer-ct0 {
  width: 100%;
  height: 40px;
  margin-top: 100px;
  border-top: 1px solid #d9d9d9;
}

.footer-ct0 nav {
  position: relative;
  top: 25%;
}

.footer-ct0 nav a {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-size: 15px;
  line-height: 22px;
  color: #191919;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
}
/* footer ct 1 */
.footer-ct1 {
  width: 100%;
  background-color: black;
  height: 70px;
}
.footer-text {
  position: relative;
  top: 35%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #555555;
}
/* top */
.top-bar a {
  text-decoration: none;
}
.nav-bar {
  position: absolute;
  width: 100%;
  height: 40px;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.49);
  /* 배경 블러처리 */
  backdrop-filter: blur(5px);
}
.top-logo {
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
.guest-num {
  position: absolute;
  left: 230px;
  top: 11px;
  font-family: "Roboto";
  font-style: normal;
  font-size: 20px;
  color: #777777;
}
.nav-bar nav {
  position: relative;
  height: 40px;
}

.nav-bar nav a {
  position: relative;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  padding-left: 10px;
  padding-right: 10px;
  top: 15%;
  color: #999999;
}
.nav-bar nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
}

.top-bar {
  position: relative;
  z-index: 4;
  width: 100%;
  height: 50px;
  background-color: white;
  /*border-bottom: 1px solid #d9d9d9; */
}

.top-bar img {
  position: absolute;
  top: 30%;
  left: 200px;
}
</style>
