<template>
  <div class="mainbannerct">
    <div
      class="carousel slide carousel slide"
      id="mainbannerslide"
      data-bs-ride="carousel"
    >
      <!--슬라이드-->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <MainBanner />
        </div>
        <div class="carousel-item">
          <div class="banner-img">
            <NoticeBanner />
          </div>
        </div>
        <div class="carousel-item">
          <div class="banner-img">
            <p>3 page</p>
          </div>
        </div>
      </div>
      <!--컨트롤러-->
      <div></div>
      <div class="control-bar">
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#mainbannerslide"
          data-bs-slide="next"
        >
          <!-- 컨트롤러 아이콘 -->
          <svg
            class="right-arrow"
            width="25"
            height="59"
            viewBox="0 0 30 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_253_346)">
              <path
                d="M0 59L30 29.5L0 0"
                stroke="wight"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_253_346">
                <rect width="30" height="59" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#mainbannerslide"
          data-bs-slide="prev"
        >
          <!-- 컨트롤러 아이콘 -->
          <svg
            class="left-arrow"
            width="25"
            height="59"
            viewBox="0 0 30 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_253_344)">
              <path
                d="M30 59L0 29.5L30 0"
                stroke="wight"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_253_344">
                <rect width="30" height="59" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NoticeBanner from "@/components/main/banner/noticeBanner.vue";
import MainBanner from "@/components/main/banner/mainBanner.vue";

export default {
  components: {
    NoticeBanner,
    MainBanner,
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap);

.carousel-inner p {
  color: white;
}

.right-arrow {
  position: absolute;
  stroke: white;
  transition: all 0.5s;
  right: 30%;
}
.right-arrow:hover {
  transform: translateX(25px);
  transition: all 0.5s;
  transition-timing-function: ease;
}
.left-arrow {
  position: absolute;
  stroke: white;
  transition: all 0.5s;
  left: 30%;
}
.left-arrow:hover {
  transform: translateX(-25px);
  transition: all 0.5s;
  transition-timing-function: ease;
}

.mainbannerct {
  position: relative;
  max-width: 1440px;
  height: 700px;
  margin: 0 auto;
}

.banner-img {
  position: relative;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.49);
  max-width: 1440px;
  height: 600px;
}

.banner-img p {
  position: relative;
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  top: 180px;
  font-weight: 700;
  font-size: 35px;
  line-height: 50px;
}
@media (max-width: 600px) {
  .right-arrow {
    bottom: 30px;
    right: 80%;
    width: 20px;
    pointer-events: none;
  }
  .left-arrow {
    bottom: 30px;
    left: 80%;
    width: 20px;
    pointer-events: none;
  }
}
</style>
