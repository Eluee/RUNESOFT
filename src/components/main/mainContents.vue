<template>
  <div class="contents">
    <p class="contents-head-1">소규모로 구성된 팀</p>
    <p class="contents-text">룬 소프트는 대학생들로 모인 소규모 팀입니다.</p>
    <div class="user-ct">
      <img class="user-1" src="@/assets/icon/user.svg" />
      <img class="user-2" src="@/assets/icon/user.svg" />
      <img class="user-3" src="@/assets/icon/user.svg" />
    </div>
  </div>
  <div class="contents-ct">
    <div class="context2-ct">
      <p class="conhd-text">가능할 것 같은데?</p>
      <p class="conex-text">
        우리에게 가능성만큼 설레는 단어는 없습니다.<br />
        상상하고 계획하기 꿈과 같은 이야기들은 우리에게 많은 영감을 줍니다.
      </p>
    </div>
    <img
      src="@/assets/maincontents/mainpagecontents2.png"
      class="contents2-img"
    />
  </div>
  <div class="contents-ct">
    <div class="context3-ct">
      <p class="conhd-text">더 좋은 방법은 없을까?</p>
      <p class="conex-text">
        좋은 방법은 한번에 나오지 않습니다.<br />
        충분히 생각하며 충분한 수정을 거치고 끈기있게 관리합니다.
      </p>
    </div>
    <img
      src="@/assets/maincontents/mainpagecontents3.png"
      class="contents3-img"
    />
  </div>
  <div class="contents-ct-end">
    <p class="conhd-text">이제부터 시작합니다!</p>
    <p class="conex-text">우리들의 꿈을 위하여</p>
    <img
      src="@/assets/maincontents/mainpagecontents4.png"
      class="contents4-img"
    />
  </div>
</template>
<style scoped>
.contents {
  position: relative;
  margin-top: 100px;
  margin-bottom: 50px;
}

.contents-head-1 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 56px;
  margin-top: 0px;
  color: #333333;
}

.contents-text {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  margin-top: -30px;
  color: #999999;
}

.user-ct {
  position: relative;
  max-width: 800px;
  height: 300px;
  display: inline-block;
}

.user-1,
.user-2,
.user-3 {
  transition: all 0.5;
}

.user-1 {
  position: absolute;
  left: calc(50% - 260px);
  transform: translate(-50%, 0);
}

.user-2 {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}

.user-3 {
  position: absolute;
  left: calc(50% + 260px);
  transform: translate(-50%, 0);
}

.contents-ct {
  position: relative;
  max-width: 1440px;
  height: 500px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
.contents-ct-end {
  position: relative;
  max-width: 1440px;
  height: 500px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}

.contents2-img {
  position: absolute;
  top: 30px;
  width: 350px;
  right: 30px;
}

.conhd-text {
  position: relative;
  z-index: 1;
  font-family: Noto Sans KR Font;
  font-size: 50px;
  margin: 0px;
  color: black;
}

.conex-text {
  position: relative;
  z-index: 1;
  font-family: Noto Sans KR Font;
}

.context2-ct {
  position: absolute;
  right: 410px;
  top: 30px;
  height: 150px;
  max-width: 550px;
  text-align: right;
}

.contents3-img {
  position: absolute;
  top: 40px;
  width: 350px;
  left: 30px;
}

.context3-ct {
  position: absolute;
  left: 410px;
  top: 40px;
  height: 400px;
  max-width: 600px;
  text-align: left;
}

.contents4-img {
  position: relative;
  z-index: 0;
  top: -120px;
  width: 330px;
}
@media (max-width: 1024px) {
  .user-1,
  .user-2,
  .user-3 {
    width: 250px;
  }
  .user-1 {
    left: calc(50% - 190px);
  }
  .user-3 {
    left: calc(50% + 190px);
  }
  .contents-ct {
    height: 700px;
  }
  .context2-ct {
    right: 30px;
  }
  .contents2-img {
    top: 200px;
  }
  .context3-ct {
    left: 30px;
  }
  .contents3-img {
    top: 200px;
  }
}
@media (max-width: 600px) {
  .contents-ct,
  .contents {
    margin-top: 100px;
  }
  .user-1,
  .user-2,
  .user-3 {
    width: 180px;
  }
  .user-1 {
    left: calc(50% - 135px);
  }

  .user-3 {
    left: calc(50% + 135px);
  }
  .conhd-text {
    font-size: 40px;
  }
  .contents2-img {
    max-width: 500px;
  }
  .contents3-img {
    max-width: 500px;
  }
}
@media (max-width: 375px) {
  .contents-ct,
  .contents {
    margin-top: 100px;
  }

  .user-1,
  .user-2,
  .user-3 {
    width: 160px;
  }

  .user-1 {
    left: calc(50% - 120px);
  }

  .user-3 {
    left: calc(50% + 120px);
  }

  .conhd-text {
    font-size: 36px;
  }
}
</style>
