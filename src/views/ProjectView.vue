<template>
  <div class="project">
    <div class="project_1">
      <div class="project_text">
        <h1>프로젝트를 <br />소개합니다.</h1>
      </div>
      <div class="project_text2">
        <p>룬소프트의 최신 프로젝트를 <br />지금 바로 확인해보세요</p>
      </div>
      <div class="project_img1">
        <img src="@/assets/banner/project/project1.jpg" />
      </div>
    </div>

    <div class="project_2">
      <div class="position_box">
        <div class="n_project">
          <img src="@/assets/banner/project/Nproject.jpg" />
          <div class="n_project_text">
            <p>새 <br />프로젝트</p>
          </div>
          <div class="n_project_text2">
            <p>{{ np_num }}개</p>
          </div>
        </div>

        <div class="c_project">
          <img src="@/assets/banner/project/cproject.jpg" />
          <div class="c_project_text">
            <p>완성 프로젝트</p>
          </div>
          <div class="c_project_text2">
            <p>{{ cp_num }}개</p>
          </div>
        </div>

        <div class="r_project">
          <img src="@/assets/banner/project/rproject.jpg" />
          <div class="r_project_text">
            <p>계획중인 프로젝트</p>
          </div>
          <div class="r_project_text2">
            <p>{{ rp_num }}개</p>
          </div>
        </div>

        <div class="search">
          <div class="search_box"><input id="search_text_bar" /></div>

          <div class="search_text">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.25 26.25L20.8125 20.8125"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- dd -->
    <div class="project_name">
      <div v-for="(dbdata, index) in dbdata" :key="index">
        <img class="image" :src="dbdata.image" />
        <div class="project_name_text" :style="atr" @click="view = ture">
          <P>프로젝트 명: {{ dbdata.title }} </P>
        </div>
        <!-- 속성 데이터 바인딩은 속성 앞에 :(콜론을 붙인다.) -->
        <div class="projectnamebox">
          <div class="project_explain_text">
            <p>{{ dbdata.content }}</p>
          </div>
        </div>
        <div class="d_t_name2">
          <p>개발 도구</p>
          <div class="line3"></div>
        </div>
        <img class="image2" :src="dbdata.dt_image" />
        <!-- {{ 오브젝트 키 }} 형식으로 데이터 주입-->
        <button @click="increase(index)">프로젝트 좋아요</button>
        <span> 좋아요 수 : {{ num[index] }} </span>
        <!--@click vue 문법임 -->
      </div>
    </div>
  </div>
</template>

<script>
import project3 from "@/project.js"; // js 데이터를 불러와서 사용할때

export default {
  data() {
    //데이터 바인딩 데이터를 사용할때 오브젝트 형식 {} 으로 저장
    return {
      dbdata: project3, // 데이터 바인딩을 사용하여 데이터를 주입 할 수 있음
      view: false,
      atr: "color : black", // 속성 또한 바인딩 가능
      // App.vue 의 경로가 src안에 있는데 왜 ./assets/room0.jpg 는 안되는건지....
    };
  },
  // 이곳이 함수(메소드)를 만들고 관리하는 공간.
  methods: {
    increase(index) {
      this.num[index]++;
    },
  },
  setup() {
    return {
      np_num: 0,
      cp_num: 0,
      rp_num: 1,
    };
  },
};
</script>

<style scoped>
.project {
  position: relative;
  width: 1440px;

  left: 50%;
  transform: translateX(-50%);
}
.project_1 {
  position: relative;
  z-index: 1;
  background-color: gray;
  width: 1440px;
  height: 350px;
  margin-top: -56px;
}
.project_text {
  left: 200px;
  top: 20px;
  position: absolute;
  z-index: 1;
  color: black;
  font-size: 27px;
}
.project_text2 {
  left: 200px;
  top: 220px;
  color: black;
  position: absolute;
  z-index: 1;
}

.project_img1 {
  position: absolute;
  z-index: 1;
  width: 429px;
  height: 268px;
  top: 50px;
  left: 850px;
}
.project_2 {
  position: relative;
  z-index: 2;
  width: 1440px;
  height: 460px;
}
.position_box {
  position: absolute;
  z-index: 1;
  width: 550px;
  height: 400px;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
}
.n_project {
  position: absolute;
  z-index: 2;
  background-color: aliceblue;
  width: 300px;
  height: 290px;
  left: 20px;
  border-top-left-radius: 50px;
  top: 20px;
  background: linear-gradient(93.7deg, #ddf1ff 20.14%, #c7c4f7 90.04%);
}
.n_project img {
  height: 230px;
  width: 300px;
  border-top-left-radius: 50px;
}
.n_project_text {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 70%;
  left: 20%;
  color: azure;
  text-align: left;
  z-index: 1;
}
.n_project_text2 {
  position: absolute;
  color: black;
  font-size: 30px;
  z-index: 2;
  right: 3%;
  top: 82%;
}
.c_project {
  position: absolute;
  z-index: 2;
  left: 325px;
  top: 20px;
}
.c_project img {
  width: 200px;
  height: 145px;
  border-top-right-radius: 50px;
}

.c_project_text {
  position: absolute;
  transform: translate(50%, -50%);
  color: aliceblue;
  top: 60%;
  z-index: 1;
}
.c_project_text2 {
  position: absolute;
  color: aliceblue;
  top: 80%;
  left: 85%;
  z-index: 1;
}
.r_project {
  position: absolute;
  z-index: 2;
  left: 325px;
  top: 170px;
}
.r_project img {
  width: 200px;
  height: 140px;
}
.r_project_text {
  position: absolute;
  color: aliceblue;
  transform: translate(27%, -150%);
  top: 85%;
  z-index: 1;
}
.r_project_text2 {
  position: absolute;
  color: aliceblue;
  top: 80%;
  left: 85%;
  z-index: 1;
}
.search {
  position: absolute;
  z-index: 2;
  top: 315px;
  left: 20px;
}
.search_box {
  background-color: #ddf1ff;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  width: 510px;
  height: 72px;
}
.search_text {
  position: absolute;
  font-size: 60px;
  z-index: 1;
  left: 47%;
  top: -15px;
  transition: all 0.5s;
}
#search_text_bar {
  position: absolute;
  z-index: 1;
  width: 350px;
  height: 25px;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
  border: none;
  outline: none;
  background: none;
  font-style: normal;
  font-size: 20px;
  text-align: center;
}
.search_text :hover {
  transform: translateX(200px);
  transition: all 1s;
  transition-timing-function: ease;
}

.project_name {
  background-color: rgb(242, 246, 249);
  width: 400px;
  height: 570px;
  position: relative;
  z-index: 1;
  left: 100px;
  top: 0px;
}
.image img {
  position: absolute;
  width: 400px;
  height: 230px;
  top: 0px;
  left: 100px;
  z-index: 1;
}
.project_name_text {
  position: absolute;
  z-index: 1;
  top: 240px;
  left: 10px;
  font-size: 20px;
}

.project_explain_text {
  position: absolute;
  top: 10px;
  left: 14px;
  font-size: 15px;
}
.d_t_name2 {
  position: absolute;
  z-index: 1;
  left: 10px;
  top: 445px;
  font-size: 20px;
}
.d_t_name2 img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 10px;
  top: 510px;
}
.line3 {
  position: absolute;
  z-index: 1;
  width: 370px;
  height: 1px;
  border-top: 1.33px solid #cccccc;
  left: 12px;
  top: 490px;
}
.projectnamebox {
  position: absolute;
  z-index: 2;
  width: 400px;
  height: 160px;
  top: 280px;
  left: 0px;
  background-color: rgb(252, 252, 250);
}
</style>
