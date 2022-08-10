<template>
  <div id="mainapp" style="overflow-x: hidden">
    <!--overflow-x: hidden 가로 공백 스크롤 숨기기-->
    <div v-if="width > 425"><ResolutionWeb /></div>
    <div v-else><ResolutionMobile /></div>
    <div>
      <p>{{ width }} : width {{ height }} : height</p>
    </div>
  </div>
</template>

<script>
import ResolutionWeb from "./components/resolutionui/resolutionWeb.vue";
import ResolutionMobile from "./components/resolutionui/resolutionMobile.vue";
export default {
  data() {
    return {
      //기본은 웹
      width: 1440,
      height: 0,
    };
  },
  mounted() {
    // console.log("ready...");
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    // console.log("beforeDestroy...");
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize(event) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
  components: {
    ResolutionWeb,
    ResolutionMobile,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
