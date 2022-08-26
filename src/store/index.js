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
      element: [],
      keyWord: [],
    },
  },
  getters: {},
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
          } else if (payload.keyWord.size > 0) {
            item.keyWord.forEach((i) => {
              console.log(payload.keyWord.has(i));
              if (payload.keyWord.has(i)) {
                state.totalSearchResort.element.push(item);
                //한번이라도 조건을 충족하면 반복문 탈출
                return false;
              }
            });
          }
        });
      }
      for (var a = 0; a < state.totalSearchResort.keyWord.length; a++) {
        console.log(state.totalSearchResort.keyWord[a]);
      }
    },
  },
  actions: {},
  modules: {},
});
