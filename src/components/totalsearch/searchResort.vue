<template>
  <p>this component is search resort</p>
  <div class="whole">
    <button class="inventory">
      <svg
        width="43"
        height="17"
        viewBox="0 0 43 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.33325 5H13.9999"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33325 9H13.9999"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33325 13H13.9999"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 5H2.00667"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 9H2.00667"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 13H2.00667"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.2489 4.472V8.264H29.6529V4.472H22.2489ZM28.4169 5.468V7.268H23.4849V5.468H28.4169ZM21.0009 9.488V10.496H30.9129V9.488H21.0009ZM25.3329 8.024V9.812H26.5809V8.024H25.3329ZM22.1049 11.48V12.476H28.4529V14.996H29.7009V11.48H22.1049ZM32.04 9.992V11H41.976V9.992H32.04ZM33.288 4.28V5.24H39.492V6.164H33.3V8.42H34.548V7.076H40.728V4.28H33.288ZM33.3 8.036V9.008H40.956V8.036H33.3ZM36.384 8.516V10.52H37.632V8.516H36.384ZM33.144 11.744V12.752H39.54V14.924H40.8V11.744H33.144Z"
          fill="white"
        />
      </svg>
    </button>
    <button class="grid">
      <svg
        width="55"
        height="17"
        viewBox="0 0 55 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66667 3H2V7.66667H6.66667V3Z"
          fill="#474D61"
          stroke="#474D61"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.9999 3H9.33325V7.66667H13.9999V3Z"
          fill="#474D61"
          stroke="#474D61"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.9999 10.3333H9.33325V14.9999H13.9999V10.3333Z"
          fill="#474D61"
          stroke="#474D61"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.66667 10.3333H2V14.9999H6.66667V10.3333Z"
          fill="#474D61"
          stroke="#474D61"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.0374 5.12V6.128H30.0454V5.12H23.0374ZM21.9934 12.44V13.472H31.9054V12.44H21.9934ZM29.3734 5.12V6.308C29.3734 7.724 29.3734 9.332 28.9534 11.504L30.2134 11.624C30.6214 9.308 30.6214 7.772 30.6214 6.308V5.12H29.3734ZM40.8205 4.016V15.008H42.0805V4.016H40.8205ZM33.6445 11.372V12.404H34.5805C36.5125 12.404 38.1445 12.332 40.0405 12.008L39.9085 10.988C38.0605 11.3 36.4645 11.372 34.5805 11.372H33.6445ZM33.6205 5V6.02H37.4605V8.06H33.6445V11.756H34.9165V9.068H38.7325V5H33.6205ZM45.2835 9.2V10.208H52.8915V9.2H45.2835ZM44.0715 12.548V13.58H54.0075V12.548H44.0715ZM45.2835 4.988V9.632H46.5315V6.02H52.7955V4.988H45.2835Z"
          fill="#474D61"
        />
      </svg>
    </button>

    <div class="projects">
      <a v-for="(value, index) in menu" :key="index"> {{ value }} </a>

      <div v-for="(dbdata, index) in dbdata" :key="index">
        <div class="projectbox">
          <div class="project_name">
            <img class="image" :src="dbdata.image" />
            <h3 class="project_name_text" :style="atr" @click="view = ture">
              {{ dbdata.title }}
            </h3>
            <!-- 속성 데이터 바인딩은 속성 앞에 :(콜론을 붙인다.) -->
            <div v-for="(dbdata2, index) in dbdata2" :key="index">
              <div class="box">
                <div class="tag">
                  <p>#{{ dbdata2.tag }}</p>
                </div>
              </div>
            </div>
            <div class="project_explain">
              <div class="project_explain_text">
                <p>{{ dbdata.content }}</p>
              </div>
            </div>

            <button class="g_bt">
              <svg
                width="85"
                height="24"
                viewBox="0 0 85 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 19.5C13.1421 19.5 16.5 16.1421 16.5 12C16.5 7.85786 13.1421 4.5 9 4.5C4.85786 4.5 1.5 7.85786 1.5 12C1.5 16.1421 4.85786 19.5 9 19.5Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 15L12 12L9 9"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 12H12"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.6496 5.204V19.828H34.3296V5.204H32.6496ZM33.9456 10.82V12.228H36.6016V10.82H33.9456ZM23.5136 6.404V16.372H30.4576V6.404H28.7936V10.132H25.1776V6.404H23.5136ZM25.1776 11.444H28.7936V15.012H25.1776V11.444ZM37.7204 16.74V18.116H50.9684V16.74H37.7204ZM43.4804 13.764V17.3H45.1444V13.764H43.4804ZM39.2724 6.228V7.572H47.7204V9.524H39.3044V13.572H40.9684V10.852H49.3844V6.228H39.2724ZM39.3044 12.884V14.244H49.7204V12.884H39.3044ZM65.6809 5.188V19.812H67.3609V5.188H65.6809ZM66.9129 10.98V12.356H69.5529V10.98H66.9129ZM61.8889 6.74V7.028C61.8889 10.932 59.9529 13.86 56.0009 15.876L56.9449 17.156C61.7289 14.756 63.5369 10.996 63.5369 6.74H61.8889ZM56.7369 6.74V8.1H62.7529V6.74H56.7369ZM81.1356 5.204V19.828H82.8156V5.204H81.1356ZM76.8476 6.756V7.044C76.8476 10.948 75.0716 13.844 70.8636 15.876L71.7436 17.22C76.7676 14.772 78.4956 11.092 78.4956 6.756H76.8476ZM71.5836 6.756V8.1H77.5996V6.756H71.5836Z"
                  fill="white"
                />
              </svg>
            </button>
            <button class="s_bt">
              <svg
                width="85"
                height="24"
                viewBox="0 0 85 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 16.5L11.25 12L6.75 7.5"
                  stroke="#34364E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.8576 8.884V10.26H33.9136V8.884H30.8576ZM33.4336 5.204V13.908H35.1136V5.204H33.4336ZM30.2336 14.292C27.1776 14.292 25.3056 15.332 25.3056 17.06C25.3056 18.82 27.1776 19.828 30.2336 19.828C33.2896 19.828 35.1616 18.82 35.1616 17.06C35.1616 15.332 33.2896 14.292 30.2336 14.292ZM30.2336 15.588C32.3136 15.588 33.4976 16.1 33.4976 17.06C33.4976 18.02 32.3136 18.532 30.2336 18.532C28.1696 18.532 26.9696 18.02 26.9696 17.06C26.9696 16.1 28.1696 15.588 30.2336 15.588ZM26.5696 6.676V7.748C26.5696 9.748 25.2736 11.7 22.9856 12.5L23.8496 13.828C26.4416 12.9 27.9296 10.484 27.9296 7.748V6.676H26.5696ZM26.9056 6.676V7.732C26.9056 10.26 28.3296 12.564 30.8576 13.444L31.6896 12.116C29.4976 11.364 28.2496 9.556 28.2496 7.732V6.676H26.9056ZM23.4656 6.196V7.54H31.3056V6.196H23.4656ZM37.7204 16.66V18.036H50.9684V16.66H37.7204ZM43.4804 13.332V17.028H45.1444V13.332H43.4804ZM39.1924 6.196V13.732H49.4324V6.196H47.7684V8.644H40.8724V6.196H39.1924ZM40.8724 9.972H47.7684V12.372H40.8724V9.972ZM56.0329 16.66V18.036H69.2809V16.66H56.0329ZM61.7929 13.332V17.028H63.4569V13.332H61.7929ZM57.5049 6.196V13.732H67.7449V6.196H66.0809V8.644H59.1849V6.196H57.5049ZM59.1849 9.972H66.0809V12.372H59.1849V9.972ZM81.1356 5.204V19.828H82.8156V5.204H81.1356ZM76.8476 6.756V7.044C76.8476 10.948 75.0716 13.844 70.8636 15.876L71.7436 17.22C76.7676 14.772 78.4956 11.092 78.4956 6.756H76.8476ZM71.5836 6.756V8.1H77.5996V6.756H71.5836Z"
                  fill="#34364E"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="bottom_number"></div>
    </div>
  </div>
</template>

<script>
import aa from "@/components/totalsearch/aa.js";
import ab from "@/components/totalsearch/ab.js";

// js 데이터를 불러와서 사용할때

//모바일에서 볼 때
export default {
  data() {
    //데이터 바인딩 데이터를 사용할때 오브젝트 형식 {} 으로 저장
    return {
      dbdata: aa,
      dbdata2: ab,
      // 데이터 바인딩을 사용하여 데이터를 주입 할 수 있음
      view: false,
      atr: "color : blue", // 속성 또한 바인딩 가능
    };
  },
  methods: {
    increase(index) {
      this.num[index]++;
    },
  },
};
</script>

<style scoped>
p {
  top: 0px;
}
.whole {
  position: relative;
  width: 1440px;

  left: 50%;
  transform: translateX(-50%);
}

.inventory {
  position: relative;
  width: 70px;
  height: 30px;
  border-radius: 15px;
  background-color: #474d61;
  top: -20px;
  left: 12%;
}
.grid {
  position: absolute;
  width: 80px;
  height: 30px;
  top: -20px;
  left: 65%;
  border-radius: 15px;
}

.projects {
  position: relative;
  width: 1440px;
  height: 1450px;
  left: 50%;
  top: 7px;
  transform: translateX(-50%);
}
.projectbox {
  position: relative;
  width: 600px;
  height: 160px;
  top: -21px;
  left: 50%;
  transform: translateX(-50%);
  background-color: aqua;
}
.project_name {
  position: absolute;
  width: 600px;
  height: 150px;
  background-color: aliceblue;
  border-radius: 10px;
}
.image {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 0px;
  left: 0px;
}
.project_name_text {
  position: absolute;
  top: 8%;
  left: 27%;
  font-size: 20px;
}
.box {
  position: absolute;
  border-radius: 14px;
  stroke: #34364e;
  top: 0%;
  left: 0%;
}
.tag {
  position: absolute;
  font-size: 12px;
  width: auto;
  height: auto;
  top: 27%;
  left: 27%;
  padding: 5px;
}

.project_explain {
  position: absolute;
  width: 267px;
  height: 63px;
  background-color: aquamarine;
  top: 55%;
  left: 27%;
  text-align: left;
}
.project_explain_text {
  position: absolute;
  text-align: left;
  top: 5px;
  left: 4px;
  font-size: 13.5px;
}
.g_bt {
  position: absolute;
  width: 120px;
  height: 55px;
  top: 10%;
  left: 78%;
  color: aliceblue;
  background-color: #34364e;
  border-radius: 5px;
}
.s_bt {
  position: absolute;
  width: 120px;
  height: 55px;
  top: 53%;
  left: 78%;
  color: aliceblue;
  stroke: #474d61;
  border-radius: 5px;
}
</style>
