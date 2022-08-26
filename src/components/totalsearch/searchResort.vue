<template>
  <div class="whole">
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

            <div class="tag">
              <p>{{ dbdata.tag }}</p>
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
import aa from "@/script/search/aa.js";
// js 데이터를 불러와서 사용할때

//모바일에서 볼 때
export default {
  data() {
    //데이터 바인딩 데이터를 사용할때 오브젝트 형식 {} 으로 저장
    return {
      dbdata: aa,

      // 데이터 바인딩을 사용하여 데이터를 주입 할 수 있음
      view: false,
      atr: "color : blue", // 속성 또한 바인딩 가능
    };
  },

  methods: {
    increase(index) {
      this.num[index]++;
    },
    grid() {
      this.$router.push("totalsearch2");
    },
  },
};
</script>

<style scoped>
.whole {
  position: relative;
  width: 1440px;

  left: 50%;
  transform: translateX(-50%);
}

.projects {
  position: relative;
  width: 1440px;
  height: 1450px;
  left: 50%;
  top: 28px;
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
  border-radius: 10px;
}
.project_name_text {
  position: absolute;
  top: 8%;
  left: 27%;
  font-size: 20px;
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
  border: 1px solid #34364e;
  outline: none;
}
.s_bt {
  position: absolute;
  width: 120px;
  height: 55px;
  top: 53%;
  left: 78%;
  color: aliceblue;
  border: 1px solid #34364e;
  border-radius: 5px;
  outline: none;
  font-size: small;
}
@media screen and (max-width: 426px) {
  .whole {
    position: relative;
    width: 420px;
    top: 0px;
    left: 0%;
    transform: translateX(47%);
  }

  .projects {
    position: relative;
    width: 410px;
    height: 1000px;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }
  .projectbox {
    position: relative;
    width: 410px;
    height: 105px;
    top: -21px;
    left: 10px;
    transform: translateX(-50%);
    background-color: aqua;
  }
  .project_name {
    position: absolute;
    width: 410px;
    height: 100px;
    background-color: aliceblue;
    border-radius: 10px;
  }
  .image {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0px;
    left: 0px;
    border-radius: 10px;
  }
  .project_name_text {
    position: absolute;
    top: 8%;
    left: 27%;
    font-size: 15px;
  }

  .tag {
    position: absolute;
    font-size: 5px;
    width: auto;
    height: auto;
    top: 23%;
    left: 27%;
    padding: 5px;
  }

  .project_explain {
    position: absolute;
    width: 180px;
    height: 43px;
    background-color: aquamarine;
    top: 52%;
    left: 27%;
    text-align: left;
  }
  .project_explain_text {
    position: absolute;
    text-align: left;
    top: 2px;
    left: 2px;
    font-size: 10px;
  }
  .g_bt {
    position: absolute;
    width: 100px;
    height: 40px;
    top: 6%;
    left: 74%;
    color: aliceblue;
    background-color: #34364e;
    border-radius: 5px;
    border: 1px solid #34364e;
    outline: none;
    font-size: 5px;
  }
  .s_bt {
    position: absolute;
    width: 100px;
    height: 40px;
    top: 53%;
    left: 74%;
    color: aliceblue;
    border-radius: 5px;
    border: 1px solid #34364e;
    outline: none;
    font-size: 5px;
  }
}
@media screen and (max-width: 400px) {
  .whole {
    position: relative;
    width: 375px;
    top: 0px;
    left: 0%;
    transform: translateX(47%);
  }

  .projects {
    position: relative;
    width: 360px;
    height: 1000px;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }
  .projectbox {
    position: relative;
    width: 360px;
    height: 100px;
    top: -21px;
    left: 10px;
    transform: translateX(-50%);
    background-color: aqua;
  }
  .project_name {
    position: absolute;
    width: 360px;
    height: 95px;
    background-color: aliceblue;
    border-radius: 10px;
  }
  .image {
    position: absolute;
    width: 90px;
    height: 90px;
    top: 0px;
    left: 0px;
    border-radius: 10px;
  }
  .project_name_text {
    position: absolute;
    top: 8%;
    left: 27%;
    font-size: 15px;
  }

  .tag {
    position: absolute;
    font-size: 5px;
    width: auto;
    height: auto;
    top: 23%;
    left: 27%;
    padding: 5px;
  }

  .project_explain {
    position: absolute;
    width: 150px;
    height: 40px;
    background-color: aquamarine;
    top: 52%;
    left: 27%;
    text-align: left;
  }
  .project_explain_text {
    position: absolute;
    text-align: left;
    top: 2px;
    left: 2px;
    font-size: 10px;
  }
  .g_bt {
    position: absolute;
    width: 90px;
    height: 40px;
    top: 6%;
    left: 73%;
    color: aliceblue;
    background-color: #34364e;
    border-radius: 5px;
    border: 1px solid #34364e;
    outline: none;
    font-size: 5px;
  }
  .s_bt {
    position: absolute;
    width: 90px;
    height: 40px;
    top: 53%;
    left: 73%;
    color: aliceblue;
    border-radius: 5px;
    border: 1px solid #34364e;
    outline: none;
    font-size: 5px;
  }
}

@media screen and (width: 320px) {
  .whole {
    position: relative;
    width: 310px;
    top: 0px;
    left: 0%;
    transform: translateX(46.5%);
  }

  .projects {
    position: relative;
    width: 300px;
    height: 800px;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }
  .projectbox {
    position: relative;
    width: 300px;
    height: 80px;
    top: -21px;
    left: 10px;
    transform: translateX(-50%);
    background-color: aqua;
  }
  .project_name {
    position: absolute;
    width: 300px;
    height: 75px;
    background-color: aliceblue;
    border-radius: 10px;
  }
  .image {
    position: absolute;
    width: 75px;
    height: 75px;
    top: 0px;
    left: 0px;
    border-radius: 10px;
  }
  .project_name_text {
    position: absolute;
    top: 8%;
    left: 27%;
    font-size: 10px;
  }

  .tag {
    position: absolute;
    font-size: 5px;
    width: auto;
    height: auto;
    top: 20%;
    left: 27%;
    padding: 5px;
  }

  .project_explain {
    position: absolute;
    width: 130px;
    height: 30px;
    background-color: aquamarine;
    top: 55%;
    left: 27%;
    text-align: left;
  }
  .project_explain_text {
    position: absolute;
    text-align: left;
    top: 2px;
    left: 2px;
    font-size: 7px;
  }
  .g_bt {
    position: absolute;
    width: 74px;
    height: 30px;
    top: 6%;
    left: 74%;
    color: aliceblue;
    background-color: #34364e;
    border-radius: 5px;
    border: 1px solid #34364e;
    outline: none;
    font-size: 5px;
  }
  .s_bt {
    position: absolute;
    width: 74px;
    height: 30px;
    top: 53%;
    left: 74%;
    color: aliceblue;
    border-radius: 5px;
    border: 1px solid #34364e;
    outline: none;
    font-size: 5px;
  }
}
</style>
