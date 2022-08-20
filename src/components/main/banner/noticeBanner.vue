<template>
  <div class="container-box">
    <div class="outer-circle">
      <div class="inner-circle">
        <div class="contents-box">
          <div class="left-content-box">
            <img class="people-img" src="@/assets/noticeBanner/people2.png" />
          </div>
          <div class="right-contents-box">
            <div class="icons-box">
              <img
                class="icon-img"
                src="@/assets/noticeBanner/photoshop_icon.png"
              />
              <img
                class="icon-img"
                src="@/assets/noticeBanner/illustrator_icon.png"
              />
              <img
                class="icon-img"
                src="@/assets/noticeBanner/figma_icon.png"
              />
            </div>
            <div class="text-box">
              <h1 class="title-text">디자이너 모집 안내</h1>
              <h1 class="date-text">~20xx.xx.xx일 까지</h1>
            </div>
            <div class="hyperlink-box">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a class="hyperlink-text" href="http://localhost:8080/notice"
                >더 알아보기</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      class="source-link"
      href="https://kr.freepik.com/vectors/school"
      target="_blank"
      >School 벡터는 upklyak - kr.freepik.com가 제작함</a
    >
  </div>
</template>
<script>
export default {
  mounted() {},
};
</script>
<style scoped>
.container-box {
  display: flex;
  position: relative;
  height: 800px;
  top: 50%;
  transform: translateY(-50%);

  justify-content: center;
  align-items: center;
}
.outer-circle {
  position: absolute;
  display: flex;
  width: 1000px;
  height: 1000px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);

  justify-content: center;
  align-items: center;

  transition: 0.25s;
}
.inner-circle {
  display: flex;
  width: 900px;
  height: 900px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);

  justify-content: center;
  align-items: center;

  transition: 0.25s;
}
.contents-box {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.left-content-box {
  display: inline-block;
  margin: 5%;
}
.right-contents-box {
  display: inline-flex;
  height: 240px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5%;
}
.people-img {
  width: 240px;
}
.icons-box {
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
}
.icon-img {
  width: 100px;
}
.title-text {
  font-size: 2em;
  font-weight: 800;
}
.date-text {
  font-size: 1.2em;
  font-weight: 600;
  color: rgba(60, 60, 60, 0.7);
}
.hyperlink-box {
  display: inline-block;
  padding: 10px 20px;
  background-color: #34364e;
  border-radius: 5px;
  transition: 0.25s;
}
.hyperlink-box:hover {
  padding: 20px 40px;
}
.hyperlink-text {
  text-decoration: none;
  color: #fff;
  text-align: center;
}
.source-link {
  position: absolute;
  right: 0px;
  bottom: 100px;
  text-decoration: none;
  color: rgba(60, 60, 60, 0.7);
}

/*1024px 이하*/
@media screen and (max-width: 1024px) {
  .outer-circle {
    width: 800px;
    height: 800px;
  }
  .inner-circle {
    width: 700px;
    height: 700px;
  }
}

/*768px 이하*/
@media screen and (max-width: 768px) {
  .outer-circle {
    width: 600px;
    height: 600px;
  }
  .inner-circle {
    width: 500px;
    height: 500px;
  }
  .right-contents-box {
    height: 220px;
  }
  .people-img {
    width: 200px;
  }
  .icons-box {
    width: 240px;
  }
  .icon-img {
    width: 80px;
  }
  .title-text {
    font-size: 1.6em;
  }
  .date-text {
    font-size: 1em;
  }
}
/*475px 이하*/
@media screen and (max-width: 475px) {
  .contents-box {
    flex-direction: column;
    flex-wrap: wrap;
  }
  .right-contents-box {
    height: 200px;
  }
  .people-img {
    width: 160px;
  }
  .icons-box {
    width: 210px;
  }
  .icon-img {
    width: 70px;
  }
  .title-text {
    font-size: 1.3em;
  }
  .date-text {
    font-size: 0.8em;
  }
  .source-link {
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.7em;
    word-break: keep-all;
  }
}
</style>
