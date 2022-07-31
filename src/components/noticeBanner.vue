<template>
  <div id="background-circle2">
    <div id="background-circle1">
      <div id="wrap-notice-contents">
        <div>
          <img id="people-img" src="@/assets/noticeBanner/people.png" />
        </div>
        <div id="notice-details">
          <ul id="wrap-icons">
            <li>
              <img
                class="icon-img"
                src="@/assets/noticeBanner/photoshop_icon.png"
              />
            </li>
            <li>
              <img
                class="icon-img"
                src="@/assets/noticeBanner/illustrator_icon.png"
              />
            </li>
            <li>
              <img
                class="icon-img"
                src="@/assets/noticeBanner/figma_icon.png"
              />
            </li>
          </ul>
          <div id="wrap-texts">
            <h1 style="font-weight: 600; font-size: 2em">디자이너 모집 안내</h1>
            <span>~2022.xx.xx일 까지</span>
          </div>
          <div id="wrap-hyperlink">
            <img src="@/assets/noticeBanner/arrow-right.svg" />
            <a
              id="notice-hyperlink"
              href="http://localhost:8080/notice"
              target="_self"
              >더 알아보기</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#background-circle1 {
  position: absolute;
  width: 800px;
  height: 800px;
  top: 50%;
  left: 50%;
  border-radius: 400px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  transition-delay: 0.1s;
  transition: 0.25s;
}
#background-circle2 {
  position: absolute;
  width: 1000px;
  height: 1000px;
  top: 50%;
  left: 50%;
  border-radius: 500px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  transition: 0.25s;
}
#background-circle1:hover {
  width: 900px;
  height: 900px;
  border-radius: 450px;
}
#background-circle2:hover {
  width: 1100px;
  height: 1100px;
  border-radius: 550px;
}
#wrap-notice-contents {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: flex-start;
  align-items: center;
}
#people-img {
  width: 400px;
  height: 400px;
}
#notice-details {
  display: flex;

  flex-direction: column;
  flex-wrap: nowrap;

  justify-content: center;
  align-items: flex-start;
}
#wrap-icons {
  display: inline-flex;
  list-style: none;
  padding: 0px;

  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: flex-start;
  align-items: flex-start;
}
.icon-img {
  width: 80px;
  height: 80px;
}
#wrap-texts {
  display: inline-flex;
  width: 370px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
#wrap-hyperlink {
  padding: 10px 20px;
  margin: 30px 0px 0px 0px;
  background-color: rgba(15, 15, 15, 0.8);
}
#notice-hyperlink {
  padding: 10px 20px;
  text-decoration: none;
  color: #ffffff;
}
</style>
