<template>
  <section v-if="this.sitters">
    <div class="list">
      <div class="search">
        <search2></search2>
      </div>
      <hr>
      <div class="grid-container">
        <second-filter class="filter"></second-filter>

        <div class="cards">
          <sitter-card v-if="sitters" v-for="sitter in sitters" :sitter="sitter" :key="sitter._id"></sitter-card>
          <!-- <sitter-card></sitter-card>
          <sitter-card></sitter-card> -->
        </div>
      </div>
    </div>
    <hr>
    <!-- <sitter-preview v-if="sitters" v-for="sitter in sitters" :sitter="sitter" :key="sitter._id"></sitter-preview> -->
  </section>
</template>

<script>
import SitterPreview from "./SitterPreview";
import SitterFilter from "./SitterFilter";
import Search2 from "./Home/Search2.vue";
import SitterCard from "./List/SitterCard.vue";
import SecondFilter from "./List/SecondFilter.vue";

export default {
  created() {},

  methods: {},
  computed: {
    sitters() {
      return this.$store.getters.getSitters;
    }
  },
  components: {
    SitterPreview,
    Search2,
    SitterFilter,
    SitterCard,
    SecondFilter
  }
};
</script>

<style lang="scss" scoped>
.search {
  padding: 15px;
  background: black;
  margin-bottom: 20px;
}
.grid-container {
  display: block;
  max-width: 100%;
}
@media (min-width: 767px) {
  .grid-container {
    display: grid;
    grid-template-areas: "menu main main main";
    grid-gap: 10px;
    padding: 10px;
  }

  .filter {
    grid-area: menu;
    // color: white;
    width: 300px;
    // height: 300px;
  }
  .cards {
    grid-area: main;
    display: grid;
    grid-row-gap: 20px;
    grid-template-columns: auto auto;
    grid-gap: 20px;
  }
}
@media (min-width: 1400px) {
  .cards {
    grid-template-columns: auto auto auto;
    grid-gap: 5px;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.19);

  }
}
</style>
