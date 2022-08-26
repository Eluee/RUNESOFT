<template>
  <!-- 모바일 -->
  <div class="mobile_banner"></div>
  <!-- 컴푸터-->
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
  </div>
  <div class="all_project">
    <div class="project3">
      <div class="n_p">
        <div class="n">
          <p>새 프로젝트</p>
        </div>
        <div class="n_line"></div>
      </div>
      <!-- vue html 반복문 문법 사용 -->
      <!-- value: menu의 각 원소를 가져옴 , index: 0부터 1씩 증가하는 정수  :key=횟수 가 들어가는것이 일반적임 -->
      <a v-for="(value, index) in menu" :key="index"> {{ value }} </a>

      <div v-for="(dbdata, index) in dbdata" :key="index">
        <div class="projectbox" style="float: left">
          <div class="project_name">
            <img class="image" :src="dbdata.image" />
            <h3 class="project_name_text" :style="atr" @click="view = ture">
              프로젝트 명: {{ dbdata.title }}
            </h3>
            <!-- 속성 데이터 바인딩은 속성 앞에 :(콜론을 붙인다.) -->
            <div class="projectnamebox">
              <div class="project_explain_text">
                <p>{{ dbdata.content }}</p>
              </div>
            </div>
            <div class="d_t_name2">
              <p>개발 도구</p>
              <div class="line3"></div>
              <img class="image2" :src="dbdata.image2" />
            </div>
            <!-- {{ 오브젝트 키 }} 형식으로 데이터 주입-->
          </div>
        </div>
      </div>
    </div>
    <div class="project4">
      <div class="c_p">
        <div class="c">
          <p>완성 프로젝트</p>
        </div>
        <div class="c_line"></div>
      </div>
      <!-- vue html 반복문 문법 사용 -->
      <!-- value: menu의 각 원소를 가져옴 , index: 0부터 1씩 증가하는 정수  :key=횟수 가 들어가는것이 일반적임 -->
      <a v-for="(value, index) in menu" :key="index"> {{ value }} </a>

      <div v-for="(dbdata2, index) in dbdata2" :key="index">
        <div class="projectbox" style="float: left">
          <div class="project_name">
            <img class="image" :src="dbdata2.image" />
            <h3 class="project_name_text" :style="atr" @click="view = ture">
              프로젝트 명: {{ dbdata2.title }}
            </h3>
            <!-- 속성 데이터 바인딩은 속성 앞에 :(콜론을 붙인다.) -->
            <div class="projectnamebox">
              <div class="project_explain_text">
                <p>{{ dbdata2.content }}</p>
              </div>
            </div>
            <div class="d_t_name2">
              <p>개발 도구</p>
              <div class="line3"></div>
              <img class="image2" :src="dbdata2.image2" />
            </div>
            <!-- {{ 오브젝트 키 }} 형식으로 데이터 주입-->
          </div>
        </div>
      </div>
    </div>

    <div class="project5">
      <div class="r_p">
        <div class="r">
          <p>계획중인 프로젝트</p>
        </div>
        <div class="r_line"></div>
      </div>
      <!-- vue html 반복문 문법 사용 -->
      <!-- value: menu의 각 원소를 가져옴 , index: 0부터 1씩 증가하는 정수  :key=횟수 가 들어가는것이 일반적임 -->
      <a v-for="(value, index) in menu" :key="index"> {{ value }} </a>

      <div v-for="(dbdata3, index) in dbdata3" :key="index">
        <div class="projectbox" style="float: left">
          <div class="project_name">
            <img class="image" :src="dbdata3.image" />
            <h3 class="project_name_text" :style="atr" @click="view = ture">
              프로젝트 명: {{ dbdata3.title }}
            </h3>
            <!-- 속성 데이터 바인딩은 속성 앞에 :(콜론을 붙인다.) -->
            <div class="projectnamebox">
              <div class="project_explain_text">
                <p>{{ dbdata3.content }}</p>
              </div>
            </div>
            <div class="d_t_name2">
              <p>개발 도구</p>
              <div class="line3"></div>
              <img class="image2" :src="dbdata3.image2" />
            </div>
            <!-- {{ 오브젝트 키 }} 형식으로 데이터 주입-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  position: relative;
  width: 1440px;

  left: 50%;
  transform: translateX(-50%);
}
.project_1 {
  position: relative;
  background-color: gray;
  width: 1440px;
  height: 350px;
  margin-top: 32px;
}
.project_text {
  left: 200px;
  top: 20px;
  position: absolute;
  color: black;
  font-size: 27px;
}
.project_text2 {
  left: 200px;
  top: 220px;
  color: black;
  position: absolute;
}

.project_img1 {
  position: absolute;
  width: 429px;
  height: 268px;
  top: 50px;
  left: 850px;
}
.project_2 {
  position: relative;
  width: 1440px;
  height: 460px;
}

.position_box {
  position: absolute;
  width: 550px;
  height: 400px;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
}
.n_project {
  position: absolute;
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
}
.n_project_text2 {
  position: absolute;
  color: black;
  font-size: 30px;
  right: 3%;
  top: 82%;
}
.c_project {
  position: absolute;
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
}
.c_project_text2 {
  position: absolute;
  color: aliceblue;
  top: 80%;
  left: 85%;
}
.r_project {
  position: absolute;
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
}
.r_project_text2 {
  position: absolute;
  color: aliceblue;
  top: 80%;
  left: 85%;
}
.search {
  position: absolute;
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
  left: 47%;
  top: -15px;
  transition: all 0.5s;
}
#search_text_bar {
  position: absolute;
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
.all_project {
  position: relative;
  width: 1440px;
  height: max-content;
  left: 50%;
  transform: translateX(-50%);
}
.project3 {
  position: relative;
  width: 1440px;
  height: 720px;
  left: 50%;
  transform: translateX(-50%);
}
.projectbox {
  background-color: white;
  position: relative;
  width: 450px;
  height: 620px;
  left: 4%;
}

.n_p {
  position: relative;
  width: 1440px;
  height: 70px;
}
.n {
  position: absolute;
  top: 0%;
  left: 6%;
  font-size: xx-large;
}
.n_line {
  position: absolute;
  width: 1100px;
  height: 1px;
  background-color: #cccccc;
  top: 70%;
  left: 4%;
}

.project4 {
  position: relative;
  width: 1440px;
  height: 720px;
  left: 50%;
  transform: translateX(-50%);
}
.c_p {
  position: relative;
  width: 1440px;
  height: 70px;
}
.c {
  position: absolute;
  top: 0%;
  left: 6%;
  font-size: xx-large;
}
.c_line {
  position: absolute;
  width: 1100px;
  height: 1px;
  background-color: #cccccc;
  top: 70%;
  left: 4%;
}

.project5 {
  position: relative;
  width: 1440px;
  height: 720px;
  left: 50%;
  transform: translateX(-50%);
}
.r_p {
  position: relative;
  width: 1440px;
  height: 70px;
}
.r {
  position: absolute;
  top: 0%;
  left: 6%;
  font-size: xx-large;
}
.r_line {
  position: absolute;
  width: 1100px;
  height: 1px;
  background-color: #cccccc;
  top: 70%;
  left: 4%;
}

.project_name {
  background-color: aliceblue;
  width: 400px;
  height: 570px;
  position: absolute;
}

.program_name a {
  padding: 20px;
}

.image {
  position: absolute;
  width: 400px;
  height: 230px;
  left: 0%;
  top: 0%;
}
.project_name_text {
  position: absolute;
  top: 42%;
  left: 3%;
  font-size: 20px;
}

.project_explain_text {
  position: absolute;
  top: 5%;
  left: 3%;
  font-size: 15px;
}
.d_t_name2 {
  position: absolute;
  left: 4%;
  top: 78%;
  font-size: 20px;
}
.line3 {
  position: absolute;
  width: 370px;
  height: 1px;
  border-top: 1.33px solid #cccccc;
  left: 3%;
  top: 90%;
}
.projectnamebox {
  position: absolute;
  width: 400px;
  height: 160px;
  top: 48%;
  left: 0%;
  background-color: rgb(252, 252, 250);
}

.image2 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 5%;
  top: 120%;
}
@media (max-width: 1200px) {
  .project_1 {
    display: none;
  }
  .project3 {
    position: relative;
    width: 768px;
    height: 520px;
    left: 50%;
    transform: translateX(-48%);
  }
  .projectbox {
    background-color: white;
    position: relative;
    width: 250px;
    height: 420px;
    left: 0%;
  }

  .n_p {
    position: relative;
    width: 950px;
    height: 70px;
    left: 0%;
  }
  .n {
    position: absolute;
    top: 0%;
    left: 3%;
    font-size: xx-large;
  }
  .n_line {
    position: absolute;
    width: 750px;
    height: 1px;
    background-color: #cccccc;
    top: 70%;
    left: 0%;
  }

  .project4 {
    position: relative;
    width: 768px;
    height: 520px;
    left: 50%;
    transform: translateX(-48%);
  }
  .c_p {
    position: relative;
    width: 950px;
    height: 70px;
    left: 0%;
  }
  .c_p {
    position: relative;
    width: 950px;
    height: 70px;
    left: 0%;
  }
  .c {
    position: absolute;
    top: 0%;
    left: 3%;
    font-size: xx-large;
  }
  .c_line {
    position: absolute;
    width: 750px;
    height: 1px;
    background-color: #cccccc;
    top: 70%;
    left: 0%;
  }

  .project5 {
    position: relative;
    width: 768px;
    height: 520px;
    left: 50%;
    transform: translateX(-48%);
  }
  .r_p {
    position: relative;
    width: 1440px;
    height: 70px;
  }
  .r_p {
    position: relative;
    width: 950px;
    height: 70px;
    left: 0%;
  }
  .r {
    position: absolute;
    top: 0%;
    left: 3%;
    font-size: xx-large;
  }
  .r_line {
    position: absolute;
    width: 750px;
    height: 1px;
    background-color: #cccccc;
    top: 70%;
    left: 0%;
  }

  .project_name {
    background-color: aliceblue;
    width: 240px;
    height: 400px;
    position: absolute;
  }

  .program_name a {
    padding: 20px;
  }

  .image {
    position: absolute;
    width: 240px;
    height: 200px;
    left: 0%;
    top: 0%;
  }
  .project_name_text {
    position: absolute;
    top: 50%;
    left: 3%;
    font-size: 20px;
  }

  .project_explain_text {
    position: absolute;
    top: 5%;
    left: 3%;
    font-size: 15px;
  }
  .d_t_name2 {
    position: absolute;
    left: 4%;
    top: 80%;
    font-size: 20px;
  }
  .line3 {
    position: absolute;
    width: 220px;
    height: 1px;
    border-top: 1.33px solid #cccccc;
    left: 3%;
    top: 70%;
  }
  .projectnamebox {
    position: absolute;
    width: 240px;
    height: 90px;
    top: 57%;
    left: 0%;
    background-color: rgb(252, 252, 250);
  }
  .image2 {
    position: absolute;
    width: 35px;
    height: 35px;
    left: 5%;
    top: 86%;
  }
}
@media (max-width: 426px) {
  .project_1 {
    display: none;
  }
  .project_2 {
    display: none;
  }
  .mobile_banner {
    position: relative;
    width: 425px;
    height: 50px;
    background-image: "@/assets/banner/project/3d.jpg";
  }
  .project3 {
    position: relative;
    width: 425px;
    height: 550px;
    left: 50%;
    transform: translateX(-50%);
  }

  .n_p {
    position: relative;
    width: 380px;
    height: 50px;
  }
  .n {
    position: absolute;
    top: 0%;
    left: 6%;
    font-size: large;
  }
  .n_line {
    position: absolute;
    width: 363px;
    height: 1px;
    background-color: #cccccc;
    top: 70%;
    left: 4%;
  }

  .project4 {
    position: relative;
    width: 425px;
    height: 320px;
    left: 50%;
    transform: translateX(-50%);
  }
  .c_p {
    position: relative;
    width: 380px;
    height: 50px;
  }
  .c {
    position: absolute;
    top: 0%;
    left: 6%;
    font-size: large;
  }
  .c_line {
    position: absolute;
    width: 363px;
    height: 1px;
    background-color: #cccccc;
    top: 70%;
    left: 4%;
  }

  .project5 {
    position: relative;
    width: 425px;
    height: 500px;
    left: 50%;
    transform: translateX(-50%);
  }
  .r_p {
    position: relative;
    width: 380px;
    height: 50px;
  }
  .r {
    position: absolute;
    top: 0%;
    left: 6%;
    font-size: large;
  }
  .r_line {
    position: absolute;
    width: 363px;
    height: 1px;
    background-color: #cccccc;
    top: 70%;
    left: 4%;
  }

  .projectbox {
    background-color: white;
    position: relative;
    width: 200px;
    height: 250px;
    left: 4%;
  }

  .project_name {
    background-color: aliceblue;
    width: 170px;
    height: 220px;
    position: absolute;
  }

  .program_name a {
    padding: 20px;
  }

  .image {
    position: absolute;
    width: 170px;
    height: 80px;
    left: 0%;
    top: 0%;
  }
  .project_name_text {
    position: absolute;
    z-index: 1;
    top: 38.3%;
    left: 3%;
    font-size: 10px;
  }
  .projectnamebox {
    position: absolute;
    z-index: 2;
    width: 170px;
    height: 70px;
    top: 45%;
    left: 0%;
    background-color: rgb(252, 252, 250);
  }

  .project_explain_text {
    position: absolute;
    top: 3.5%;
    left: 3%;
    font-size: 4px;
  }
  .d_t_name2 {
    position: absolute;
    z-index: 1;
    left: 4%;
    top: 78%;
    font-size: 5px;
  }
  .line3 {
    position: absolute;
    z-index: 1;
    width: 150px;
    height: 1px;
    border-top: 1.33px solid #cccccc;
    left: 3%;
    top: 50%;
  }

  .image2 {
    position: absolute;
    z-index: 1;
    width: 25px;
    height: 25px;
    left: 5%;
    top: 63%;
  }
}
@media (max-width: 400px) {
  .project_1 {
    display: none;
  }
  .project_2 {
    display: none;
  }
  .mobile_banner {
    position: relative;
    width: 300px;
    height: 50px;
    background-image: "@/assets/banner/project/3d.jpg";
  }
  .project3 {
    position: relative;
    width: 320px;
    height: 500px;
    left: 50%;
    transform: translateX(-50%);
  }

  .n_p {
    position: relative;
    width: 380px;
    height: 40px;
  }
  .n {
    position: absolute;
    top: 0%;
    left: 6%;
    font-size: large;
  }
  .n_line {
    position: absolute;
    width: 310px;
    height: 1px;
    background-color: #cccccc;
    top: 70%;
    left: 4%;
  }

  .project4 {
    position: relative;
    width: 320px;
    height: 280px;
    left: 50%;
    transform: translateX(-50%);
  }

  .c_p {
    position: relative;
    width: 380px;
    height: 40px;
  }
  .c {
    position: absolute;
    top: 0%;
    left: 6%;
    font-size: large;
  }
  .c_line {
    position: absolute;
    width: 310px;
    height: 1px;
    background-color: #cccccc;
    top: 70%;
    left: 4%;
  }

  .project5 {
    position: relative;
    width: 320px;
    height: 280px;
    left: 50%;
    transform: translateX(-50%);
  }

  .r_p {
    position: relative;
    width: 380px;
    height: 40px;
  }
  .r {
    position: absolute;
    top: 0%;
    left: 6%;
    font-size: large;
  }
  .r_line {
    position: absolute;
    width: 310px;
    height: 1px;
    background-color: #cccccc;
    top: 70%;
    left: 4%;
  }

  .projectbox {
    background-color: white;
    position: relative;
    width: 150px;
    height: 230px;
    left: 4%;
  }

  .project_name {
    background-color: aliceblue;
    width: 145px;
    height: 220px;
    position: absolute;
  }

  .program_name a {
    padding: 20px;
  }

  .image {
    position: absolute;
    width: 145px;
    height: 80px;
    left: 0%;
    top: 0%;
  }
  .project_name_text {
    position: absolute;
    z-index: 1;
    top: 38.3%;
    left: 3%;
    font-size: 10px;
  }
  .projectnamebox {
    position: absolute;
    z-index: 2;
    width: 145px;
    height: 70px;
    top: 45%;
    left: 0%;
    background-color: rgb(252, 252, 250);
  }

  .project_explain_text {
    position: absolute;
    top: 3.5%;
    left: 3%;
    font-size: 4px;
  }
  .d_t_name2 {
    position: absolute;
    z-index: 1;
    left: 4%;
    top: 78%;
    font-size: 5px;
  }
  .line3 {
    position: absolute;
    z-index: 1;
    width: 120px;
    height: 1px;
    border-top: 1.33px solid #cccccc;
    left: 3%;
    top: 50%;
  }

  .image2 {
    position: absolute;
    z-index: 1;
    width: 25px;
    height: 25px;
    left: 5%;
    top: 63%;
  }
}
</style>

<script>
import n_p from "@/script/project/n_p.js";
import c_p from "@/script/project/c_p.js";
import r_p from "@/script/project/r_p.js";
// js 데이터를 불러와서 사용할때

//모바일에서 볼 때
export default {
  data() {
    //데이터 바인딩 데이터를 사용할때 오브젝트 형식 {} 으로 저장
    return {
      dbdata: n_p,
      dbdata2: c_p,
      dbdata3: r_p, // 데이터 바인딩을 사용하여 데이터를 주입 할 수 있음
      view: false,
      atr: "color : blue", // 속성 또한 바인딩 가능

      np_num: 3,
      cp_num: 2,
      rp_num: 1,
    };
  },

  methods: {
    increase(index) {
      this.num[index]++;
    },
  },
};
</script>
