<template>
  <div id="topBanner">
    <div id="photosGroup">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
  <div id="infoBanner">
    <div class="infoGroup">
      <div class="infoIcon" color="#9979c1">
        <img src="@/assets/banner/infoIcon1.svg" />
      </div>
      <div class="infoTitleCtn">
        <div style="font-size: 28px">1</div>
        <div>st.</div>
        <div style="color: #9979c1; font-size: 28px">&nbsp;몽상가</div>
        <div>처럼 상상하기</div>
      </div>
      <div class="infoBodyCtn">
        <div>
          생각을 나누고 질문하는 것은 회의에 있어서 가장 중요한 부분이라고
          생각합니다.<br />어떤 터무니없는 상상도 가능할 것 같다는 열린 생각으로
          회의를 하고 아이디어를 공유합니다!<br />우리에게 있어서 상상은
        </div>
        <div style="color: #333333">필수적</div>
        <div>입니다.</div>
      </div>
    </div>
    <div class="infoGroup">
      <div class="infoIcon" color="#799ac1">
        <img src="@/assets/banner/infoIcon2.svg" />
      </div>
      <div class="infoTitleCtn">
        <div style="font-size: 28px">2</div>
        <div>nd.</div>
        <div style="color: #799ac1; font-size: 28px">&nbsp;완벽주의자</div>
        <div>처럼 계획하기</div>
      </div>
      <div class="infoBodyCtn">
        <div>
          계획은 신경써야하는 부분이 많습니다.<br />
          그러므로 우리는 철저하게 그리고 치밀하게 계획해야 합니다.<br />
          그러나 모든 일들이 다 계획대로 흘러가는 것 또한 아닙니다.<br />
          우리는 계획을 과감하게 포기하고 다시 시작할 수 있는
        </div>
        <div style="color: #333333">끈기</div>
        <div>가 필요합니다.</div>
      </div>
    </div>
    <div class="infoGroup">
      <div class="infoIcon" color="#7ac179">
        <img src="@/assets/banner/infoIcon3.svg" />
      </div>
      <div class="infoTitleCtn">
        <div style="font-size: 28px">3</div>
        <div>rd.</div>
        <div style="color: #7ac179; font-size: 28px">&nbsp;탐험가</div>
        <div>처럼 행동하기</div>
      </div>
      <div class="infoBodyCtn">
        <div>
          새로운 계획이 언제나 익숙한 것들로만 이루어질 수는 없습니다.<br />
          익숙하지 않은 도구와 새로운 기술에 대해 연구하고 학습하는 과정을 서로
          공유합니다.<br />
          실패를 두려워하지 않고 계속해서 행동해나가는
        </div>
        <div style="color: #333333">탐험가</div>
        <div>와 같은 정신을 필요로 합니다.</div>
      </div>
    </div>
    <div class="infoGroup">
      <div class="infoIcon" color="#c1a979">
        <img src="@/assets/banner/infoIcon4.svg" />
      </div>
      <div class="infoTitleCtn">
        <div style="font-size: 28px">4</div>
        <div>st.</div>
        <div style="color: #c1a979; font-size: 28px">&nbsp;프로</div>
        <div>처럼 일하기</div>
      </div>
      <div class="infoBodyCtn">
        <div>
          여러가지 프로젝트를 진행하면서 프로젝트 하나하나에 영혼을 담고 최선을
          다해서 고민합니다.<br />
          단순 양산형을 벗어나 우리는 그안에서 코드의 가치를 찾으며,<br />
          단순한 기능을 구현일지라도 사용자에게 가장 중요한 것이 무엇인지,
          필요한 것이 무엇인지<br />
          분석하고 만들어가는 것들을 가장
        </div>
        <div style="color: #333333">가치</div>
        <div>있게 여깁니다.</div>
      </div>
    </div>
  </div>
  <div id="devInfoBanner">
    <div id="devInfoTitle">
      <div id="devInfoTitleTxt" style="color: #333333; font-size: 24px">
        #개발자의말
      </div>
    </div>
  </div>
</template>
<style>
@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap);
#topBanner {
  width: 1440px;
  height: 300px;
  margin: 0 auto;
  background: #ddf1ff;
}
#photosGroup {
  width: 960px;
  height: 300px;
  margin: 0 auto;
  background-color: #ffffff;
}
#photosGroup ul {
  padding: 0px;
}
#photosGroup ul li {
  width: 240px;
  height: 300px;
  margin: 0 auto;
  display: inline-block;
  background-size: cover;
}
#photosGroup ul li:nth-child(1) {
  background-image: url(@/assets/banner/value1.jpg);
}
#photosGroup ul li:nth-child(2) {
  background-image: url(@/assets/banner/value2.jpg);
}
#photosGroup ul li:nth-child(3) {
  background-image: url(@/assets/banner/value3.jpg);
}
#photosGroup ul li:nth-child(4) {
  background-image: url(@/assets/banner/value4.jpg);
}

#infoBanner {
  width: 1440px;
  height: 2500px;
  margin: 0 auto;
}
.infoGroup {
  width: 700px;
  height: 400px;
  margin: 200px auto;
}
.infoIcon {
  width: 150px;
  height: 150px;
  margin: 0 auto;
}
.infoTitleCtn {
  width: 400px;
  height: 41px;
  margin: auto;
  margin-top: 20px;
}
.infoTitleCtn div {
  display: inline;
  font-size: 20px;
  font-family: Noto Sans KR;
  color: #777777;
}
.infoBodyCtn {
  width: 650px;
  height: 90px;
  margin: auto;
  margin-top: 40px;
}
.infoBodyCtn div {
  display: inline;
  font-size: 16px;
  font-family: Noto Sans KR;
  line-height: 30px;
  color: #777777;
}

/*개발자의말*/
#devInfoBanner {
  position: relative;
  width: 1440px;
  height: 1600px;
  margin: 0 auto;
  background: url(@/assets/banner/devInfo.jpg);
  background-size: cover;
}
#devInfoTitle {
  background: border-box;
  height: 50px;
  width: 200px;
  border-radius: 25px;
  background-color: #d9d9d9;
  margin: 0 auto;
}
#devInfoTitleTxt {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
