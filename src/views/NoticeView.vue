<template>
  <div class="notice-banner-ct">
    <img class="notice-top-banner" src="@/assets/notice/noticebanner.png" />
  </div>
  <div id="notice_icon_ct">
    <div id="iconList">
      <img src="@/assets/icon/iconBell2.svg" class="noticeIcon" />
    </div>
  </div>
  <div id="notice_contents_body">
    <div class="notice_cardlist_ct" :class="{ notice_cardlist_hover: onmouse }">
      <div v-for="(ntlist, i) in noticelist" :key="i">
        <div
          class="assist_card_ct"
          @mouseover="cardmoveflagenter"
          @mouseout="cardmoveflagout"
        >
          <div class="notice_card_ct">
            <div class="notice_card_img"></div>
            <div class="notice_contents_ct">
              <p class="notice_contents_title">{{ ntlist.title }}</p>
              <p class="notice_contents_subtitle">{{ ntlist.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NoticeList from "@/script/notice/noticelist.js";
export default {
  name: "app",
  data() {
    return {
      noticelist: NoticeList,
      onmouse: false,
    };
  },
  methods: {
    cardmoveflagenter() {
      this.onmouse = true;
    },
    cardmoveflagout() {
      this.onmouse = false;
    },
  },
};
</script>
<style scoped>
.notice-banner-ct {
  position: relative;
  width: 1440px;
  height: 300px;
  left: 50%;
  transform: translate(-50%);
  background-color: beige;
  overflow: hidden;
}
.notice-top-banner {
  position: absolute;
  transform: translate(-50%);
  top: -100px;
  transition: all 0.5s;
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
}
.notice_cardlist_ct {
  position: relative;
  max-width: 960px;
  height: 880px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.4s;
}
/*마우스 호버시 가로 50px 새로 100px*/
.notice_cardlist_hover {
  max-width: 1010px;
}
.notice_card_ct {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: white;
  border-color: black;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.5s;
}
.assist_card_ct {
  position: relative;
  width: 300px;
  height: 400px;
  margin: 10px;
  margin-top: 20px;
  float: left;
  transition: all 0.4s;
}
.assist_card_ct:hover {
  width: 350px;
  transition: all 1s;
}
.assist_card_ct:hover .notice_card_ct {
  width: 350px;
  height: 400px;
  transition: all 1s;
}

.assist_card_ct:hover .notice_card_img {
  width: 300px;
  height: 210px;
  top: -10px;
  left: 25px;
  transition: all 1s;
}
.notice_card_img {
  position: relative;
  top: -20px;
  left: 50px;
  width: 200px;
  height: 200px;
  background-color: #ababab;
  border-radius: 10px;
  transition: all 0.5s;
}
.notice_contents_ct {
  position: relative;
  width: 100%;
  height: 75px;
}
.notice_contents_title {
  font-size: 25px;
  margin: 0px;
}
.notice_contents_subtitle {
  color: rgba(51, 51, 51, 0.5);
  margin: 0px;
}
/* 테블릿 */
@media (max-width: 1010px) {
  .notice_cardlist_ct {
    max-width: 640px;
    height: 1320px;
  }
  .notice_cardlist_hover {
    max-width: 690px;
    height: 1320px;
  }
  #noticeTopbanner {
    height: 300px;
    transition: all 0.5s;
  }
}
/* 테블릿 and 모바일 */
@media (max-width: 690px) {
  .assist_card_ct {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 10px;
    height: 300px;
    float: none;
  }
  .assist_card_ct:hover {
    height: 400px;
    width: 350px;
  }
  .notice_cardlist_ct {
    max-width: 320px;
    height: 2000px;
  }
  .notice_cardlist_hover {
    max-width: 370px;
    height: 2100px;
  }
}
/* 모바일 */
@media (max-width: 425px) {
  .notice_cardlist_ct,
  .assist_card_ct {
    max-width: 100%;
    width: 100%;
    /* hover 이벤트 제거 */
    pointer-events: none;
  }
  .notice_cardlist_ct {
    height: 2600px;
  }
  .assist_card_ct {
    height: 400px;
  }
  .notice_card_ct {
    width: 100%;
    height: 400px;
  }
  .notice_card_img {
    width: 80%;
    left: 10%;
  }
}
</style>
