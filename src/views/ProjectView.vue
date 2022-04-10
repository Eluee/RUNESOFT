<template>
  <div class="project">
    <h1>This is an Project page</h1>
  </div>
  <div class="project_1">
    <img src="@/assets/banner/project1.jpg" />
  </div>
  <div class="project_2">
    <img src="@/assets/banner/project2.jpg" />
  </div>
  <div class="project_3">
    <img src="@/assets/banner/project3.jpg" />
  </div>
  <!-- 각 클래스 별 구별되는 줄 -->
  <div class="n_project">
    <img src="@/assets/banner/Nproject.jpg" />
    <div class="n_project_text">
      <p>새 <br />프로젝트</p>
    </div>
    <div class="p_rectangle">
      <p>{{ np_num }}개</p>
    </div>
  </div>
  <!-- 각 클래스 별 구별되는 줄 -->
  <div class="c_project">
    <img src="@/assets/banner/cproject.jpg" />
    <div class="c_project_text">
      <p>완성 프로젝트</p>
    </div>
    <div class="c_project_text2">
      <p>{{ cp_num }}개</p>
    </div>
  </div>
  <!-- 각 클래스 별 구별되는 줄 -->
  <div class="r_project">
    <img src="@/assets/banner/rproject.jpg" />
    <div class="r_project_text">
      <p>계획중인 프로젝트</p>
    </div>
    <div class="r_project_text2">
      <p>{{ rp_num }}개</p>
    </div>
  </div>
  <!-- 각 클래스 별 구별되는 줄 -->
  <div class="search">
    <div class="search_box"></div>
    <div class="search_text">
      <p>⌕</p>
    </div>
  </div>
  <div class="project_name">
    <div class="project_name_text"></div>
    <h1>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;프로젝트 명</h1>
    <p>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;프로젝트 설명
    </p>
    <img src="@/assets/banner/projectname.jpg" />
    <div class="line"></div>
    <div class="d_t_name">
      <h1>
        개발자 &emsp;&emsp;&emsp;&emsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 개발도구
      </h1>
    </div>
    <div class="d_name">
      <p>정성화 &nbsp; 이병준 &nbsp; 김태호</p>
    </div>
    <div class="f_img">
      <img src="@/assets/banner/face.jpg" />
    </div>
    <div class="f_img2">
      <img src="@/assets/banner/face.jpg" />
    </div>
    <div class="f_img3">
      <img src="@/assets/banner/face.jpg" />
    </div>
    <div class="v_img">
      <img src="@/assets/banner/vue.png" />
    </div>
  </div>
</template>

<style scoped>
.project_1 {
  position: relative;
  z-index: 1;
  top: -710px;
}
.project_1 img {
  width: 95%;
}
.project_2 {
  position: relative;
  z-index: 1;
  top: -710px;
}
.project_2 img {
  width: 95%;
  height: 600px;
}
.project_3 {
  position: relative;
  z-index: 1;
  top: -710px;
}
.project_3 img {
  width: 95%;
}
.n_project {
  position: relative;
  top: -1900px;
  z-index: 1;
  background-color: aliceblue;
  width: 300px;
  height: 290px;
  left: 31%;
  border-top-left-radius: 50px;
}
.n_project img {
  height: 230px;
  width: 300px;
  border-top-left-radius: 50px;
}
.n_project_text {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 65%;
  left: 20%;
  color: azure;
  text-align: left;
  z-index: 1;
}
.p_rectangle {
  position: absolute;
  color: black;
  font-size: 30px;
  z-index: 1;
  right: 3%;
  top: 75%;
}
.c_project {
  position: relative;
  top: -2210px;
  z-index: 1;
  left: 13%;
}
.c_project img {
  width: 200px;
  height: 145px;
  border-top-right-radius: 50px;
}
.c_project_text {
  position: absolute;
  color: aliceblue;
  top: 45px;
  left: 46%;
  z-index: 1;
}
.c_project_text2 {
  position: absolute;
  color: aliceblue;
  top: 100px;
  left: 55%;
  z-index: 1;
}
.r_project {
  position: relative;
  top: -2230px;
  z-index: 1;
  left: 13%;
}
.r_project img {
  width: 200px;
  height: 140px;
}
.r_project_text {
  position: absolute;
  color: aliceblue;
  top: 45px;
  left: 45%;
  z-index: 1;
}
.r_project_text2 {
  position: absolute;
  color: aliceblue;
  top: 100px;
  left: 55%;
  z-index: 1;
}
.search {
  top: 890px;
  z-index: 1;
  left: 31%;
  position: absolute;
}
.search_box {
  background-color: aliceblue;
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
  top: -70px;
}
.project_name img {
  position: relative;
  width: 575px;
  height: 467px;
  left: -24%;
  top: -21.7%;
}
.project_name {
  background-color: aliceblue;
  width: 1100px;
  height: 467px;
  position: relative;
  z-index: 1;
  left: 6%;
  top: -1960px;
}
.project_name_text {
  position: relative;
  z-index: 1;
}
.d_t_name {
  position: relative;
  z-index: 1;
  top: -300px;
  left: 25%;
}
.d_name {
  position: relative;
  z-index: 1;
  top: -230px;
  left: 13%;
}
.line {
  position: relative;
  z-index: 1;
  width: 480px;
  height: 1px;
  background-color: #cccccc;
  top: -300px;
  left: 54%;
}
.f_img img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 55%;
  top: 361px;
  border-radius: 25px;
}
.f_img2 img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 61%;
  top: 361px;
  border-radius: 25px;
}
.f_img3 img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 67%;
  top: 361px;
  border-radius: 25px;
}
.v_img img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 83.5%;
  top: 361px;
}
</style>

<script>
export default {
  data() {
    return {
      np_num: 0,
      cp_num: 0,
      rp_num: 1,
    };
  },
};
</script>
