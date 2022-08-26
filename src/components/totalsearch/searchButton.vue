<template>
  <div class="whole">
    <button v-on:click="$store.getters.test" class="inventory">
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

    <button v-on:click="$store.getters.test" class="grid">
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
  </div>
</template>
<script>
import SearchResorts from "./searchResorts.vue";
export default {
  methods: {
    //ture일땐 리스트, false일떈 그리드

    components: { SearchResorts },
  },
};
</script>

<style scoped>
.whole {
  position: relative;
  width: 1440px;
  background-color: brown;
  left: 50%;
  transform: translateX(-50%);
}
.inventory {
  position: relative;
  width: 70px;
  height: 30px;
  border-radius: 15px;
  background-color: #474d61;
  top: 0px;
  left: 15%;
}
.grid {
  position: relative;
  width: 80px;
  height: 30px;
  top: 0px;
  left: 15.2%;
  border-radius: 15px;
}
</style>
