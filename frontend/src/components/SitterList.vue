<template>
  <section class="list">
    <div class="search">
      <search2></search2>
    </div>

    <hr>

    <div class="grid-container">
      <div class="filter">
        <div style="background-color:black;">
          <div class="full-name">
            <p>Full Name:</p>
            <input type="text" placeholder="text search">
          </div>

          <div class="age">
            <p>by Age - Range</p>
            <input type="number">
          </div>

          <div class="position">
            <p>position select Multi</p>
            <input type="number">
          </div>

          <div class="language">
            <p>language select Multi</p>
            <input type="number">
          </div>

          <div class="experience">
            <p>experience range</p>
            <input type="number">
          </div>

          <div class="smoking">
            <p>check - non smoking</p>
            <input type="number">
          </div>

          <div class="medical">
            <p>check - medical</p>
            <input type="number">
          </div>

          <div class="recommendation">
            <p>check - Recomendation</p>
            <input type="number">
          </div>
        </div>
      </div>

      <div class="cards">
        <sitter-card></sitter-card>
        <sitter-card></sitter-card>
        <sitter-card></sitter-card>
      </div>
    </div>
    <hr>

    <sitter-preview v-if="sitters" v-for="sitter in sitters" :sitter="sitter" :key="sitter._id"></sitter-preview>
  </section>
</template>

<script>
import SitterPreview from "./SitterPreview";
import SitterFilter from "./SitterFilter";
import Search2 from "./Home/Search2.vue";
import SitterCard from "./List/SitterCard.vue";

export default {
  methods:{
    sitters() {
      return this.$store.getters.getSitters;
    }
  },
  computed: {
  },
  components: {
    SitterPreview,
    Search2,
    SitterFilter,
    SitterCard
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
    color: white;
    width: 300px;
    height: 300px;
  }
  .cards {
    grid-area: main;
    display: grid;
    grid-template-columns: auto auto;
  }
}
@media (min-width: 1200px) {
  .cards {
    grid-template-columns: auto auto auto;
  }
}
</style>
