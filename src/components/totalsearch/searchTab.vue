<template>
  <div class="nav-background"></div>
  <div class="search-body">
    <div class="search-ct">
      <div class="search-main">
        <!--사실 이부분 뭔소리인지 모르겠지만 일단 진행을 위해 추가..-->
        <input type="text" class="search-main-input" @keyup.enter="searching" />
      </div>
      <button class="search-button">검색</button>
      <div class="fillter-ct">
        <button
          class="fillter-icon"
          :class="{ 'fillter-selected': search.fillter.notice }"
          v-on:click="fillterselect('notice')"
        >
          <p>공지사항</p>
        </button>
        <button
          class="fillter-icon"
          :class="{ 'fillter-selected': search.fillter.project }"
          v-on:click="fillterselect('project')"
        >
          <p>프로젝트</p>
        </button>
        <button
          class="fillter-icon"
          :class="{ 'fillter-selected': search.fillter.all }"
          v-on:click="allselect()"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6666 2H1.33325L6.66658 8.30667V12.6667L9.33325 14V8.30667L14.6666 2Z"
              fill="white"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="fillter-svg"
              :class="{ 'fillter-svg-selected': search.fillter.all }"
            />
          </svg>
          <p>전체</p>
        </button>
      </div>
      <div class="key-word-ct">
        <div
          class="key-word-icon"
          v-for="(list, i) in search.keyWord"
          :key="i"
          v-on:click="search.keyWord.delete(list)"
        >
          <p>{{ list }}</p>
        </div>
      </div>
      <p class="resort-text">
        총 <span>{{ $store.state.totalSearchResort.element.length }}</span> 건이
        검색되었습니다
      </p>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
var keyWord = new Set();
export default {
  data() {
    return {
      search: {
        //입력한 값
        inputText: "",
        //키워드 값
        keyWord,
        //필터값
        fillter: {
          all: true,
          project: true,
          notice: true,
        },
      },
    };
  },
  methods: {
    ...mapMutations(["totalSearch"]),
    // all 필터 버튼
    allselect() {
      this.search.fillter["all"] = !this.search.fillter["all"];
      for (var key in this.search.fillter) {
        this.search.fillter[key] = this.search.fillter["all"];
      }
    },
    // 필터 선택 버튼
    fillterselect(key) {
      if (this.search.fillter[key]) {
        this.search.fillter[key] = false;
        this.search.fillter["all"] = false;
      } else {
        this.search.fillter[key] = true;
        this.examineallselect();
      }
    },
    examineallselect() {
      var fillterflag = true;
      for (var key in this.search.fillter) {
        if (key != "all") {
          fillterflag = this.search.fillter[key] && fillterflag;
        }
      }
      this.search.fillter["all"] = fillterflag;
    },
    // 매개변수가 e로 설정되어있고 넘겨준것도 없지만 e에 접근이 가능하다...
    searching(e) {
      console.log("test32");
      this.search.inputText = this.keywordSeparator(e.target.value);
      this.totalSearch(this.search);
    },
    keywordSeparator(text) {
      if (text.length == 0) return;
      //정규식
      const reg = new RegExp(/#[ㄱ-힣|\w]+/, "g");
      //정규식으로 문자열에서 키워드만 빼기
      var keywordarr = text.match(reg);
      if (keywordarr != null) {
        keywordarr.forEach((item) => {
          this.search.keyWord.add(item.replace("#", ""));
        });
        //키워드가 아닌 택스트 return
        text = text.replace(reg, "");
      }
      return text;
    },
  },
};
</script>

<style scoped>
.nav-background {
  width: 100%;
  height: 40px;
  background-color: black;
}
.search-body {
  position: relative;
  width: 100%;
  height: auto;
}
.search-ct {
  position: relative;
  left: 50%;
  margin-top: 50px;
  transform: translateX(-50%);
  max-width: 600px;
  height: fit-content;
}
.search-main {
  position: relative;
  width: 100%;
  background: #ffffff;
  border: 1px solid #2697ff;
  border-radius: 40px;
  height: 60px;
}
.search-main-input {
  position: relative;
  width: 90%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
}
.search-button {
  position: absolute;
  width: 70px;
  height: 50px;
  left: 0px;
  background: #474d61;
  border-radius: 25px;
  border: none;
  color: white;
  top: 75px;
}
.fillter-ct {
  position: absolute;
  top: 80px;
  right: 0px;
  width: 70%;
  height: 50px;
}
.fillter-icon {
  position: relative;
  width: 80px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #474d61;
  border-radius: 20px;
  margin-left: 4px;
  margin-bottom: 4px;
  float: right;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
}
.fillter-selected {
  background: #474d61;
}

.fillter-icon > * {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: #474d61;
}
.fillter-selected > * {
  color: white;
}
.fillter-svg {
  fill: #474d61;
  stroke: #474d61;
}
.fillter-svg-selected {
  fill: white;
  stroke: white;
}
.key-word-ct {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
}
.key-word-icon {
  width: fit-content;
  height: 28px;

  background: linear-gradient(
    102.97deg,
    rgba(108, 185, 255, 0.4) 0%,
    rgba(173, 123, 255, 0.4) 100%
  );
  border-radius: 14px;
  margin-right: 4px;
  margin-bottom: 4px;
}
.key-word-icon > p {
  position: relative;
  font-size: 16px;
  padding-left: 13px;
  padding-right: 13px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
}
.resort-text {
  position: relative;
  text-align: left;
  left: 0px;
}
.resort-text > span {
  color: #e96060;
}
</style>
