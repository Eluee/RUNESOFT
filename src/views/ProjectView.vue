<template>
  <div class="project">
    <h1>This is an Project page</h1>
  </div>
  <div class="project_1">
    <img src="@/assets/banner/project1.jpg" />
  </div>

  <div class="project_2">
    <img src="@/assets/banner/project2.jpg" />
    <!-- 각 클래스 별 구별되는 줄 -->
    <div class="position_p2">
      <div class="n_project">
        <img src="@/assets/banner/Nproject.jpg" />
        <div class="n_project_text">
          <p>새 <br />프로젝트</p>
        </div>
        <div class="n_project_text2">
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
    </div>
  </div>

  <div class="project_3">
    <div class="project_name">
      <div class="project_name_text">
        <h1>프로젝트 명</h1>
      </div>
      <div class="project_explain_text">
        <p>프로젝트 설명</p>
      </div>
      <img src="@/assets/banner/projectname.jpg" />
      <div class="line"></div>
      <div class="d_t_name">
        <h1>개발자</h1>
      </div>
      <div class="d_t_name2">
        <h1>개발 도구</h1>
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
  </div>
</template>

<style scoped>
.project_1 {
  position: relative;
  z-index: 1;
}
.project_1 img {
  width: 95%;
  height: 472px;
}
.project_2 {
  position: relative;
  z-index: 1;
}
.project_2 img {
  width: 95%;
  height: 472px;
}

.n_project {
  position: absolute;
  z-index: 2;
  background-color: aliceblue;
  width: 300px;
  height: 290px;
  left: 392px;
  border-top-left-radius: 50px;
  top: 50px;
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
.n_project_text2 {
  position: absolute;
  color: black;
  font-size: 30px;
  z-index: 2;
  right: 3%;
  top: 75%;
}
.c_project {
  position: absolute;
  z-index: 2;
  left: 700px;
  top: 50px;
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
  top: 50%;
  z-index: 1;
}
.c_project_text2 {
  position: absolute;
  color: aliceblue;
  top: 70%;
  left: 85%;
  z-index: 1;
}
.r_project {
  position: absolute;
  z-index: 2;
  left: 700px;
  top: 200px;
}
.r_project img {
  width: 200px;
  height: 140px;
}
.r_project_text {
  position: absolute;
  color: aliceblue;
  transform: translate(27%, -150%);

  z-index: 1;
}
.r_project_text2 {
  position: absolute;
  color: aliceblue;
  top: 70%;
  left: 85%;
  z-index: 1;
}
.search {
  position: absolute;
  z-index: 2;
  top: 345px;
  left: 391px;
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
  top: -100%;
}

.project_name {
  background-color: aliceblue;
  width: 95%;
  height: 547px;
  position: relative;
  z-index: 1;
  left: 30px;
}
.project_name img {
  position: absolute;
  width: 675px;
  height: 547px;
  left: 0px;
  top: 0px;
}
.project_name_text {
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 700px;
}
.project_explain_text {
  position: absolute;
  z-index: 1;
  top: 70px;
  left: 710px;
}
.d_t_name {
  position: absolute;
  z-index: 1;
  left: 710px;
  top: 290px;
}
.d_t_name2 {
  position: absolute;
  z-index: 1;
  left: 1050px;
  top: 290px;
}
.d_name {
  position: relative;
  z-index: 1;
  left: 207px;
  top: 430px;
}
.line {
  position: absolute;
  z-index: 1;
  width: 480px;
  height: 1px;
  background-color: #cccccc;
  left: 705px;
  top: 300px;
}
.f_img img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 720px;
  top: 370px;
  border-radius: 25px;
}
.f_img2 img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 783px;
  top: 370px;
  border-radius: 25px;
}
.f_img3 img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 850px;
  top: 370px;
  border-radius: 25px;
}
.v_img img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 1050px;
  top: 370px;
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
