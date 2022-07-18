<template>
  <div>
    <!-- 메인 슬라이드 컨테이너 -->
    <div class="mainbannerct">
      <div
        class="carousel slide carousel slide"
        id="mainbannerslide"
        data-bs-ride="carousel"
      >
        <!--슬라이드-->
        <div class="carousel-inner">
          <div class="carousel-item active" id="mainslide1">
            <div class="bannerimg">
              <div class="icon"></div>
              <p>안녕하세요.<br />룬 소프트에 오신 것을 환영합니다.</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bannerimg">
              <p>2 page</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bannerimg">
              <p>3 page</p>
            </div>
          </div>
        </div>
        <!--컨트롤러-->
        <div id="controlbar">
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#mainbannerslide"
            data-bs-slide="next"
          >
            <!-- 컨트롤러 아이콘 -->
            <svg
              class="right-arrow"
              width="25"
              height="59"
              viewBox="0 0 30 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_253_346)">
                <path
                  d="M0 59L30 29.5L0 0"
                  stroke="wight"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_253_346">
                  <rect width="30" height="59" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#mainbannerslide"
            data-bs-slide="prev"
          >
            <!-- 컨트롤러 아이콘 -->
            <svg
              class="left-arrow"
              width="25"
              height="59"
              viewBox="0 0 30 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_253_344)">
                <path
                  d="M30 59L0 29.5L30 0"
                  stroke="wight"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_253_344">
                  <rect width="30" height="59" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- 컨텐츠 시작 -->
    <div class="contents">
      <p class="contents_head_1">소규모로 구성된 팀</p>
      <p class="contents_text">룬 소프트는 대학생들로 모인 소규모 팀입니다.</p>
      <div id="user_ct">
        <img class="user_1" src="@/assets/icon/user.svg" />
        <img class="user_2" src="@/assets/icon/user.svg" />
        <img class="user_3" src="@/assets/icon/user.svg" />
      </div>
    </div>
    <div class="contentsct">
      <div id="context2ct">
        <p class="conhdtext">가능할 것 같은데?</p>
        <p class="conextext">
          우리에게 가능성만큼 설레는 단어는 없습니다.<br />
          상상하고 계획하기 꿈과 같은 이야기들은 우리에게 많은 영감을 줍니다.
        </p>
      </div>
      <img
        src="@/assets/maincontents/mainpagecontents2.png"
        id="contents2img"
      />
    </div>
    <div class="contentsct">
      <div id="context3ct">
        <p class="conhdtext">더 좋은 방법은 없을까?</p>
        <p class="conextext">
          우리는 더좋은 선택을 하기위해 비판과 사고를 멈추지 않습니다.
        </p>
      </div>
      <img
        src="@/assets/maincontents/mainpagecontents3.png"
        id="contents3img"
      />
    </div>
    <div class="contentsct">
      <p class="conhdtext">우리의 비전을 향해!</p>
      <p class="conextext">우리의 상상을 현실로</p>
      <img
        src="@/assets/maincontents/mainpagecontents4.png"
        id="contents4img"
      />
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
import "pathseg";
import Matter from "matter-js";
import { removeDotSegments } from "uri-js";

const paths = [
  "M289.05,84.63L98.225,308.136c-6.35,7.44-9.126,17.291-7.594,26.954l10.514,66.144c1.32,8.312,8.484,14.441,16.901,14.44h66.971c9.785,0,19.079-4.283,25.434-11.725l206.015-241.29c5.93-6.943,5.104-17.379-1.841-23.305l-42.83-36.57c-6.946-5.928-17.38-5.104-23.31,1.837l-152.4,178.477c-3.312,3.872-1.941,7.557-0.754,15.562c0.647,4.358,4.409,7.572,8.817,7.528c8.201-0.082,11.959,0.677,15.254-3.186l104.745-122.653l30.031,25.641l-108.396,126.93c-5.823,6.821-14.307,10.795-23.272,10.904h-40.639c-10.349,0.124-19.191-6.943-20.691-17.18l-5.896-40.215c-1.304-8.875,1.292-17.878,7.118-24.697L321.757,75.111c18.261-21.39,50.409-23.929,71.803-5.664l50.576,43.18c21.395,18.265,23.932,50.414,5.666,71.806L235.457,435.479c-10.447,12.243-25.735,19.284-41.83,19.271h-89.321c-19.688-0.012-36.449-14.382-39.549-33.821l-14.072-88.213c-2.53-15.89,2.027-32.097,12.479-44.339L259.017,58.988L289.05,84.63z",
];

export default {
  mounted() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Vertices = Matter.Vertices,
      Svg = Matter.Svg,
      Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
      world = engine.world;

    // create render
    var render = Render.create({
      element: this.$el,
      engine: engine,
      options: {
        width: 1440,
        height: 600,
        // pixelRatio: 'auto',
        wireframes: false,
        showDebug: false,
        showBroadphase: false,
        showBounds: false,
        showVelocity: false,
        showCollisions: false,
        showSeparations: false,
        showAxes: false,
        showPositions: false,
        showAngleIndicator: false,
        showIds: false,
        showShadows: false,
        showVertexNumbers: false,
        showConvexHulls: false,
        showInternalEdges: false,
        showMousePosition: false,
      },
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    var vertexSets = [],
      color = Common.choose([
        "#556270",
        "#4ECDC4",
        "#C7F464",
        "#FF6B6B",
        "#C44D58",
      ]);

    paths.forEach((path, i) => {
      var newElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      newElement.setAttribute("d", path);

      var points = Svg.pathToVertices(newElement, 30);
      vertexSets.push(Vertices.scale(points, 0.4, 0.4));

      World.add(
        world,
        Bodies.fromVertices(
          100 + i * 100,
          200 + i * 50,
          vertexSets,
          {
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        )
      );
    });

    World.add(world, [
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap);
#canvas {
  background-color: beige;
  height: 600px;
  width: 1440px;
}

#mainslide1 {
  background: url(@/assets/banner/mianbannertestimg1.jpeg);
}
#controlbar {
  position: absolute;
  top: 50%;
  z-index: 4;
  width: 1440px;
  height: 60px;
}
.carousel-inner p {
  color: white;
}
.icon {
  position: relative;
  top: 25%;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  width: 150px;
  height: 150px;
  margin: 0 auto;
}
.right-arrow {
  position: absolute;
  stroke: white;
  transition: all 0.5s;
  right: 130px;
}
.right-arrow:hover {
  transform: translateX(25px);
  transition: all 0.5s;
  transition-timing-function: ease;
}
.left-arrow {
  position: absolute;
  stroke: white;
  transition: all 0.5s;
  left: 130px;
}
.left-arrow:hover {
  transform: translateX(-25px);
  transition: all 0.5s;
  transition-timing-function: ease;
}
.mainbannerct {
  position: relative;
  width: 1440px;
  height: 600px;
  margin: 0 auto;
  top: -56.4px;
}
.bannerimg {
  position: relative;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.49);
  width: 1440px;
  height: 600px;
}
.bannerimg p {
  position: relative;
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  top: 180px;
  font-weight: 700;
  font-size: 35px;
  line-height: 50px;
}
.contents {
  position: relative;
  margin-top: 100px;
  margin-bottom: 50px;
}
.contents_head_1 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 56px;
  margin-top: 0px;
  color: #333333;
}
.contents_text {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  margin-top: -30px;
  color: #999999;
}
#user_ct {
  position: relative;
  width: 800px;
  height: 300px;
  display: inline-block;
}
.user_1 {
  position: absolute;
  left: calc(50% - 260px);
  transform: translate(-50%, 0);
}
.user_2 {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.user_3 {
  position: absolute;
  left: calc(50% + 260px);
  transform: translate(-50%, 0);
}
.contentsct {
  position: relative;
  max-width: 1440px;
  height: 500px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
#contents2img {
  position: absolute;
  top: 30px;
  width: 350px;
  right: 30px;
}
.conhdtext {
  position: relative;
  z-index: 1;
  font-family: Noto Sans KR Font;
  font-size: 50px;
  margin: 0px;
  color: black;
}
.conextext {
  position: relative;
  z-index: 1;
  font-family: Noto Sans KR Font;
}
#context2ct {
  position: absolute;
  right: 410px;
  top: 30px;
  height: 400px;
  width: 550px;
  text-align: right;
}
#contents3img {
  position: absolute;
  top: 40px;
  width: 350px;
  left: 30px;
}
#context3ct {
  position: absolute;
  left: 410px;
  top: 40px;
  height: 400px;
  width: 600px;
  text-align: left;
}
#contents4img {
  position: relative;
  z-index: 0;
  top: -120px;
  width: 330px;
}
</style>
