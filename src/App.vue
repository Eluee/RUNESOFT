<template>
  <div class="topbar">
    <a>Rune Soft</a>
  </div>
  <div class="navber">
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/info">INFO</router-link>
      <router-link to="/project">PROJECT</router-link>
      <router-link to="/community">COMMUNITY</router-link>
    </nav>
  </div>
  <div class="bannerimg">
    <img src="@\assets\banner\TopBanner_1.png" />
  </div>
  <router-view />
</template>

<style>
.navber {
  position: relative;
  z-index: 2;
}

.bannerimg {
  position: relative;
  z-index: 1;
  top: -79px;
}

.bannerimg img {
  height: 500px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

nav {
  padding-top: 33px;
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
  width: 100%;
  height: 30px;
  left: 0px;
  top: 0px;
  text-align: left;
}

.topbar a {
  padding-left: 60px;
  padding-top: 2px;

  font-family: "Paytone One";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
}
</style>
