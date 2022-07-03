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
        <img src="@/assets/banner/project1.jpg" />
      </div>
    </div>

    <div class="project_2">
      <div class="position_box">
        <div class="n_project">
          <img src="@/assets/banner/Nproject.jpg" />
          <div class="n_project_text">
            <p>새 <br />프로젝트</p>
          </div>
          <div class="n_project_text2">
            <p>{{ np_num }}개</p>
          </div>
        </div>

        <div class="c_project">
          <img src="@/assets/banner/cproject.jpg" />
          <div class="c_project_text">
            <p>완성 프로젝트</p>
          </div>
          <div class="c_project_text2">
            <p>{{ cp_num }}개</p>
          </div>
        </div>

        <div class="r_project">
          <img src="@/assets/banner/rproject.jpg" />
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
    <div class="project_3">
      <div class="project_name">
        <div class="project_name_text">
          <h3>프로젝트 명</h3>
        </div>
        <div class="project_explain_text">
          <p>프로젝트 설명</p>
        </div>
        <img src="@/assets/banner/projectname.jpg" />
        <div class="line"></div>
        <div class="d_t_name">
          <h3>개발자</h3>
        </div>
        <div class="line2"></div>
        <div class="d_t_name2">
          <h3>개발 도구</h3>
        </div>
        <div class="line3"></div>
        <div class="d_name">
          <p>정성화 &nbsp; 이병준 &nbsp; 김태호</p>
        </div>
        <div class="f_imgs">
          <div class="f_img">
            <img src="@/assets/banner/face.jpg" />
          </div>
          <div class="f_img2">
            <img src="@/assets/banner/face.jpg" />
          </div>
          <div class="f_img3">
            <img src="@/assets/banner/face.jpg" />
          </div>
        </div>
        <div class="v_img">
          <img src="@/assets/banner/vue.png" />
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
  z-index: 1;
  background-color: gray;
  width: 1440px;
  height: 350px;
  margin-top: -45px;
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
  background-color: aliceblue;
  width: 400px;
  height: 570px;
  position: relative;
  z-index: 1;
  left: 100px;
  top: 0px;
}
.project_name img {
  position: absolute;
  width: 400px;
  height: 230px;
  left: 0px;
  top: 0px;
}
.project_name_text {
  position: absolute;
  z-index: 1;
  top: 220px;
  left: 10px;
  font-size: 20px;
}
.line {
  position: absolute;
  z-index: 1;
  width: 370px;
  height: 1px;
  border-top: 1.33px solid #cccccc;
  left: 12px;
  top: 280px;
}
.d_t_name {
  position: absolute;
  z-index: 1;
  left: 10px;
  top: 280px;
  font-size: 20px;
}
.d_t_name2 {
  position: absolute;
  z-index: 1;
  left: 10px;
  top: 425px;
  font-size: 20px;
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
.d_name {
  position: absolute;
  z-index: 1;
  left: 8px;
  top: 390px;
}
.line2 {
  position: absolute;
  z-index: 1;
  width: 370px;
  height: 1px;
  border-top: 1.33px solid #cccccc;
  left: 12px;
  top: 340px;
}
.f_imgs {
  position: absolute;
  left: 10px;
  top: 350px;
}
.f_img img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 0px;
  top: 0px;
  border-radius: 25px;
}
.f_img2 img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 65px;
  top: 0px;
  border-radius: 25px;
}
.f_img3 img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 130px;
  top: 0px;
  border-radius: 25px;
}
.v_img img {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  left: 10px;
  top: 510px;
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
