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
  float: left;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);

  justify-content: flex-start;
  align-items: flex-start;
}
.wrap-profileImg {
  display: inline-block;
  width: 11.7%;
}
.profileImg {
  width: 100%;
  border-radius: 50%;
  background-size: cover;
}
.wrap-nameAndTalk {
  display: inline-block;
  width: 88.3%;
}
.wrap-ProfileName {
  width: 95%;
  height: 20px;
  transform: translateX(5%);
}
.wrap-TalkBox {
  width: 95%;
}
.TalkBox {
  position: relative;
  background: #d9d9d9;
  box-sizing: border-box;
  border-radius: 1%;
  width: 100%;
  padding: 5%;
  left: 5%;
}
.TalkBox:after {
  right: 100%;
  top: 40%;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(217, 217, 217, 0);
  border-right-color: #d9d9d9;
  border-width: 20px;
  margin-top: -20px;
}
.hyperlinkBox {
  position: relative;
  display: inline-flex;
  height: 40px;
  padding: 0px 20px;
  background-color: #3d3d3d;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: 0.5s;
}
.gitIcon {
  filter: invert(100%) sepia(1%) saturate(1134%) hue-rotate(336deg)
    brightness(97%) contrast(76%);
  transition: 0.5s;
  transition-delay: 0.25s;
}

/*640px 이하*/
@media screen and (max-width: 640px) {
  .devTalkBox {
    width: 100%;
  }
  .TalkBox:after {
    display: none;
  }
}
</style>
