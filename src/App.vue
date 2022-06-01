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
