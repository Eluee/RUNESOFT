<template>
  <div class="top-bar">
    <router-link to="/" class="top-logo">RUNE SOFT</router-link>
    <img src="@/assets/icon/users.svg" />
    <p class="guest-num">{{ guest }}</p>
    <div class="search-bar" type="text" placeholder="fjw">
      <input
        class="search-input"
        placeholder="통합 검색"
        v-on:keyup.enter="totalsearch()"
      />
      <svg
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="search-icon"
        v-on:click="totalsearch()"
      >
        <path
          d="M5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5Z"
          stroke="#191919"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.5 10.5L8.325 8.32501"
          stroke="#191919"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
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
  methods: {
    totalsearch() {
      this.$router.push("totalsearch");
    },
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

.search-bar {
  position: absolute;
  width: 45%;
  height: 35px;
  background-color: #e9f0f2;
  left: 50%;
  border-radius: 15px;
  top: 50%;
  transform: translateY(-50%);
}
.search-icon {
  position: absolute;
  width: 25px;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
.search-input {
  position: absolute;
  top: 50%;
  width: calc(100% - 80px);
  right: 60px;
  border: none;
  outline: none;
  background: none;
  text-align: right;
  transform: translateY(-50%);
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
