import { createStore } from "vuex";

export default createStore({
  state: {
    return: {
      allData: {
        project: [
          {
            title: "mbti AI 분석 프로그램",
            keyWord: ["AI", "mbti", "심리학", "python"],
            link: "https://github.com/Eluee/VueExample",
            infoLink: "https://www.naver.com",
            explain:
              "당신의 mbti를 AI로 분석해보자! 숨겨진 당신의 성격을 좀더 자세히 분석해드립니다.",
          },
          {
            title: "드론 자율주행 프로젝트",
            keyWord: ["AI", "드론", "자율주행", "python"],
            link: "https://github.com/Eluee/VueExample",
            infoLink: "https://www.naver.com",
            explain:
              "우리의 삶에 없어서는 안될 배달 드론으로 대체할 순 없을까? 드론자율주행을 파해쳐보았다.",
          },
          {
            title: "AI가 매칭해주는 데이팅 어플",
            keyWord: ["AI", "어플", "JAVA"],
            link: "https://github.com/Eluee/VueExample",
            infoLink: "https://www.naver.com",
            explain:
              "우리주변에는 누가 있을까? 주변친구와의 새로운 인연을 만들어주는 어플을 만들어보았다.",
          },
        ],
        notice: [
          {
            title: "1차 신입 모집 공고",
            keyWord: ["모집공고", "1차"],
            infoLink: "https://www.naver.com",
            explain: "RUNE SOFT에서 새로운 인원을 모집합니다.",
          },
        ],
      },
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
