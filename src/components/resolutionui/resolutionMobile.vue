<template>
  <div class="top-bar">
    <p class="logo">RUNESOFT</p>
    <img class="guest-icon" src="@/assets/icon/users.svg" />
    <p class="guest">{{ guest }}</p>
    <div class="search-bar">
      <img class="search-icon" src="@/assets/icon/search.svg" />
    </div>
  </div>
  <router-view />
  <div class="icon-ct list" v-on:click="menuchanger">
    <img class="icon menu" src="@/assets/icon/menu.svg" />
  </div>
  <div class="icon-ct" :class="{ notice: menuflag }">
    <router-link to="/notice">
      <img class="icon" src="@/assets/icon/bell.svg" />
    </router-link>
  </div>
  <div class="icon-ct" :class="{ project: menuflag }">
    <router-link to="/project">
      <img class="icon" src="@/assets/icon/layers.svg" />
    </router-link>
  </div>
  <div class="icon-ct" :class="{ info: menuflag }">
    <router-link to="/info">
      <img class="icon" src="@/assets/icon/info.svg" />
    </router-link>
  </div>
  <div class="icon-ct" :class="{ home: menuflag }">
    <router-link to="/">
      <img class="icon" src="@/assets/icon/home.svg" />
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      guest: 0,
      menuflag: false,
    };
  },
  methods: {
    menuchanger() {
      if (this.menuflag == true) {
        this.menuflag = false;
      } else {
        this.menuflag = true;
      }
    },
  },
};
</script>

<style scoped>
.top-bar {
  position: fixed;
  z-index: 5;
  height: 50px;
  width: 100%;
  text-align: left;
  background-color: white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}
.top-bar > * {
  float: left;
  top: 50%;
  transform: translateY(-50%);
}
.logo {
  position: relative;
  padding-left: 10px;
  padding-right: 6px;
  width: fit-content;
  font-weight: 500;
  font-size: 19px;
  line-height: 16px;
  color: #9979c1;
}
.guest {
  position: relative;
  width: fit-content;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  padding-left: 4px;
  color: #777777;
}
.guest-icon {
  position: relative;
  width: 12px;
  height: 12px;
}
.search-bar {
  position: absolute;
  width: calc(100% - 160px);
  height: 30px;
  background: #e9f0f2;
  border-radius: 20px;
  left: 150px;
}
.search-icon {
  position: relative;
  float: right;
  right: 10px;
  top: 50%;
  width: 15px;
  transform: translateY(-50%);
}

.icon-ct {
  position: fixed;
  z-index: 5;
  width: 60px;
  height: 60px;
  background-color: white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  right: 20px;
  bottom: 20px;
  transition: all 0.5s;
}
.list {
  bottom: 20px;
  z-index: 10;
}
.notice {
  bottom: calc(20px + 66px);
  transform: rotate(1turn);
  z-index: 9;
}
.project {
  bottom: calc(20px + 66px * 2);
  transform: rotate(1turn);
  z-index: 8;
}
.info {
  bottom: calc(20px + 66px * 3);
  transform: rotate(1turn);
  z-index: 7;
}
.home {
  bottom: calc(20px + 66px * 4);
  transform: rotate(1turn);
  z-index: 6;
}
.icon {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
/* 아이콘 공백 때문에 MENU 아이콘은 따로만듬 (아이콘 중앙정렬)*/
.menu {
  transform: translateY(-60%);
}
</style>
