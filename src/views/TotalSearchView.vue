<template>
  <searchTab></searchTab>
  <searchButton></searchButton>
  <div v-if="$store.state.totalSearchClick.click">
    <searchResort></searchResort>
  </div>
  <div v-else>
    <searchResorts></searchResorts>
  </div>
</template>

<script>
import searchResort from "@/components/totalsearch/searchResort.vue";
import searchTab from "@/components/totalsearch/searchTab.vue";
import searchButton from "@/components/totalsearch/searchButton.vue";
import searchResorts from "@/components/totalsearch/searchResorts.vue";

export default {
  components: {
    searchButton,
    searchResorts,
    searchResort,
    searchTab,
  },
};
</script>
