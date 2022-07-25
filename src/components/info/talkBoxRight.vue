<template>
  <div class="devTalkBox">
    <div class="wrap-profileImg">
      <slot class="profileImg" name="profileImg"></slot>
    </div>
    <div class="wrap-nameAndTalk">
      <div class="wrap-ProfileName">
        <slot class="profileName" name="profileName"></slot>
      </div>
      <div class="wrap-TalkBox">
        <div class="TalkBox">
          <slot name="devTalk"></slot>
          <div class="hyperlinkBox">
            <img class="gitIcon" src="@/assets/info/gitIcon.svg" />
            <slot class="gitAccount" name="gitAccount"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.devTalkBox {
  display: flex;
  width: 600px;
  float: right;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);

  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: flex-start;
}
.wrap-profileImg {
  display: inline-block;
  width: 70px;
}
.profileImg {
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-size: cover;
}
.wrap-nameAndTalk {
  display: inline-block;
  width: 530px;
}
.wrap-ProfileName {
  width: 510px;
  height: 20px;
}
.wrap-TalkBox {
  width: 530px;
}
.TalkBox {
  position: relative;
  background: #472923;
  box-sizing: border-box;
  border-radius: 5px;
  width: 510px;
  padding: 20px;
}
.TalkBox:after {
  left: 100%;
  top: 40px;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(217, 217, 217, 0);
  border-left-color: #472923;
  border-width: 20px;
  margin-top: -20px;
}
.hyperlinkBox {
  position: relative;
  display: inline-flex;
  height: 40px;
  padding: 0px 20px;
  background-color: #e7e4e2;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: 0.5s;
}
.gitIcon {
  filter: invert(16%) sepia(33%) saturate(772%) hue-rotate(322deg)
    brightness(89%) contrast(92%);
  transition: 0.5s;
  transition-delay: 0.25s;
}
</style>
