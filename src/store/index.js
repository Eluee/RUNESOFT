import { createStore } from "vuex";

export default createStore({
  state: {
    allData: {
      project: [
        {
          title: "mbti AI 분석 프로그램",
          keyWord: ["AI", "mbti", "심리학", "python"],
          link: "https://github.com/Eluee/VueExample",
          infoLink: "https://www.naver.com",
          explain:
            "당신의 mbti를 AI로 분석해보자! 숨겨진 당신의 성격을 좀더 자세히 분석해드립니다.",
          searchFlag: false,
        },
        {
          title: "드론 자율주행 프로젝트",
          keyWord: ["AI", "드론", "자율주행", "python"],
          link: "https://github.com/Eluee/VueExample",
          infoLink: "https://www.naver.com",
          explain:
            "우리의 삶에 없어서는 안될 배달 드론으로 대체할 순 없을까? 드론자율주행을 파해쳐보았다.",
          searchFlag: false,
        },
        {
          title: "AI가 매칭해주는 데이팅 어플",
          keyWord: ["AI", "어플", "JAVA"],
          link: "https://github.com/Eluee/VueExample",
          infoLink: "https://www.naver.com",
          explain:
            "우리주변에는 누가 있을까? 주변친구와의 새로운 인연을 만들어주는 어플을 만들어보았다.",
          searchFlag: false,
        },
      ],
      notice: [
        {
          title: "1차 신입 모집 공고",
          keyWord: ["모집공고", "1차"],
          infoLink: "https://www.naver.com",
          explain: "RUNE SOFT에서 새로운 인원을 모집합니다.",
          searchFlag: false,
        },
      ],
    },
    totalSearchResort: {
      inputText: "",
      keyWord: [],
      element: [],
      fillter: {
        all: true,
        project: true,
        notice: true,
      },
    },
    totalSearchClick: {
      click: false,
    },
  },
  getters: {
    test: (state) => {
      state.totalSearchClick.click = !state.totalSearchClick.click;
      console.log(state.totalSearchClick.click);
    },
  },
  mutations: {
    totalSearch: (state, payload) => {
      var reg = new RegExp(`${payload.inputText}`);
      //검색결과 내부 초기화
      delete state.totalSearchResort.element, state.totalSearchResort.keyWord;
      state.totalSearchResort.keyWord = Array.from(payload.keyWord);
      state.totalSearchResort.inputText = payload.inputText;
      state.totalSearchResort.element = [];
      //데이터 탐색
      for (var category in state.allData) {
        state.allData[category].forEach((item) => {
          if (item.title.search(reg) != -1 && payload.inputText != "") {
            state.totalSearchResort.element.push(item);
          } else if (isSuperset(payload.keyWord, item.keyWord)) {
            state.totalSearchResort.element.push(item);
          }
        });
      }
      for (var a = 0; a < state.totalSearchResort.element.length; a++) {
        console.log(state.totalSearchResort.element[a].title);
      }
      // 교집합이 있을경우
      function isSuperset(keyWordset, list) {
        for (var i in list) {
          console.log(i + " " + list[i]);
          if (keyWordset.has(list[i])) {
            return true;
          }
        }
        return false;
      }
    },
    allselect: (state) => {
      console.log("allselect");
      state.totalSearchResort.fillter["all"] =
        !state.totalSearchResort.fillter["all"];
      for (var key in state.totalSearchResort.fillter) {
        state.totalSearchResort.fillter[key] =
          state.totalSearchResort.fillter["all"];
      }
    },
    fillterselect: (state, key) => {
      if (state.totalSearchResort.fillter[key]) {
        state.totalSearchResort.fillter[key] = false;
        state.totalSearchResort.fillter["all"] = false;
      } else {
        state.totalSearchResort.fillter[key] = true;
        examineallselect();
      }
      function examineallselect() {
        var fillterflag = true;
        for (var key in state.totalSearchResort.fillter) {
          if (key != "all") {
            fillterflag = state.totalSearchResort.fillter[key] && fillterflag;
          }
        }
        state.totalSearchResort.fillter["all"] = fillterflag;
      }
    },
  },
  actions: {},
  modules: {},
});
