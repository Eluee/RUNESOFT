<template>
  <div>
    <!-- 메인 슬라이드 컨테이너 -->
    <BannerView />
    <div ref="matterjs" id="canvas"></div>
    <!-- 컨텐츠 시작 -->
    <MainContents />
  </div>
</template>
<script>
//import Matter from "matter-js"; //나중에 작업
import BannerView from "@/components/main/banner/bannerView.vue";
import MainContents from "@/components/main/mainContents.vue";
export default {
  components: {
    BannerView,
    MainContents,
  },
  /*mounted() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Common = Matter.Common,
      World = Matter.World,
      Vertices = Matter.Vertices,
      Svg = Matter.Svg,
      Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
      world = engine.world;

    // create render
    var render = Render.create({
      element: this.$refs.matterjs,
      engine: engine,
      options: {
        width: 1440,
        height: 600,
        background: "wight",
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
    // 여기까지가 월드 렌더링
    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine); // 월드 렌더링

    //원 만들기
    const circle = Bodies.circle(500, 100, 70, {
      friction: 0.2,
      // 단어 그대로 마찰력 값입니다. (0~1)
      restitution: 0.8,
      // 단어 그대로 복원력 입니다. (0~1)
      render: {
        sprite: {},
      },
    });

    // 임시바닥
    World.add(world, [
      Bodies.rectangle(0, 600, 3000, 10, { isStatic: true }),
      circle,
    ]);
  },*/
};
</script>

<style scoped></style>
