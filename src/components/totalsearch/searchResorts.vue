<template>
  <div class="whole">
    <div class="projects">
      <a v-for="(value, index) in menu" :key="index"> {{ value }} </a>

      <div v-for="(dbdata, index) in dbdata" :key="index">
        <div class="projectbox" style="float: left">
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

            <button class="g_bt">바로가기</button>
            <button class="s_bt">정보보기</button>
          </div>
        </div>
      </div>
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
  width: 600px;
  height: 1000px;
  left: 50%;
  top: 28px;
  transform: translateX(-50%);
}
.projectbox {
  position: relative;
  width: 200px;
  height: 330px;
  top: -21px;
  left: 0%;

  background-color: aqua;
}
.project_name {
  position: absolute;
  width: 190px;
  height: 320px;
  background-color: aliceblue;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.image {
  position: absolute;
  width: 190px;
  height: 190px;
  top: 0px;
  left: 0px;
  border-radius: 10px;
}
.project_name_text {
  position: absolute;
  top: 60%;
  left: 3%;
  font-size: 16px;
}

.tag {
  position: absolute;
  font-size: 12px;
  width: auto;
  height: auto;
  top: 69%;
  left: 3%;
  padding: 5px;
  font-size: 15px;
}
.g_bt {
  position: absolute;
  width: 81px;
  height: 40px;
  top: 85%;
  left: 5%;
  color: aliceblue;
  background-color: #34364e;
  border-radius: 5px;
  border: 1px solid #34364e;
  outline: none;
  font-size: 12px;
}
.s_bt {
  position: absolute;
  width: 81px;
  height: 40px;
  top: 85%;
  left: 52%;
  color: black;
  border: 1px solid #34364e;
  border-radius: 5px;
  outline: none;
  font-size: 12px;
}

@media screen and (max-width: 426px) {
  .whole {
    position: relative;
    width: 425px;

    left: 50%;
    transform: translateX(-49.5%);
  }
  .projects {
    position: relative;
    width: 420px;
    height: 1000px;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }
  .projectbox {
    position: relative;
    width: 140px;
    height: 266px;
    top: -21px;
    left: 0%;

    background-color: aqua;
  }
  .project_name {
    position: absolute;
    width: 135px;
    height: 260px;
    background-color: aliceblue;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .image {
    position: absolute;
    width: 135px;
    height: 150px;
    top: 0px;
    left: 0px;
    border-radius: 10px;
  }
  .project_name_text {
    position: absolute;
    top: 60%;
    left: 3%;
    font-size: 16px;
  }

  .tag {
    position: absolute;
    font-size: 12px;
    width: auto;
    height: auto;
    top: 69%;
    left: 3%;
    padding: 5px;
  }
  .g_bt {
    position: absolute;
    width: 60px;
    height: 40px;
    top: 82%;
    left: 5%;
    color: aliceblue;
    background-color: #34364e;
    border-radius: 5px;
    border: 1px solid #34364e;
    outline: none;
    font-size: 11.5px;
  }
  .s_bt {
    position: absolute;
    width: 60px;
    height: 40px;
    top: 82%;
    left: 52%;
    color: black;
    border: 1px solid #34364e;
    border-radius: 5px;
    outline: none;
    font-size: 11.5px;
  }
}

@media screen and (max-width: 400px) {
  .whole {
    position: relative;
    width: 320px;

    left: 50%;
    transform: translateX(-49.5%);
  }
  .projects {
    position: relative;
    width: 320px;
    height: 1000px;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }
  .projectbox {
    position: relative;
    width: 106px;
    height: 205px;
    top: -21px;
    left: 0%;

    background-color: aqua;
  }
  .project_name {
    position: absolute;
    width: 104px;
    height: 200px;
    background-color: aliceblue;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .image {
    position: absolute;
    width: 104px;
    height: 120px;
    top: 0px;
    left: 0px;
    border-radius: 10px;
  }
  .project_name_text {
    position: absolute;
    top: 60%;
    left: 3%;
    font-size: 12px;
  }

  .tag {
    position: absolute;
    font-size: 5px;
    width: auto;
    height: auto;
    top: 65%;
    left: 3%;
    padding: 5px;
  }
  .g_bt {
    position: absolute;
    width: 48px;
    height: 30px;
    top: 82%;
    left: 3%;
    color: aliceblue;
    background-color: #34364e;
    border-radius: 5px;
    border: 1px solid #34364e;
    outline: none;
    font-size: 10px;
  }
  .s_bt {
    position: absolute;
    width: 48px;
    height: 30px;
    top: 82%;
    left: 51%;
    color: black;
    border: 1px solid #34364e;
    border-radius: 5px;
    outline: none;
    font-size: 11.5px;
  }
}
</style>
