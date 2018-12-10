<template>
  <section v-if="this.sitters">
    <div class="filter-sort-container second-background flex flex-space-evenly">
      <p @click="toggleSort" class="main-color">Sort
        <i class="fas fa-caret-down"></i>
      </p>
      <p>|</p>
      <p @click="toggleFilter" class="main-color">Filter
        <i class="fas fa-caret-down"></i>
      </p>
    </div>
    <div class="list">
      <div class="search" v-if="isSortOpen">
        <search2></search2>
      </div>
      <!-- <hr> -->
      <div class="grid-container">
        <second-filter v-if="isFilterOpen" class="filter"></second-filter>

        <div class="cards">
          <sitter-card v-if="sitters" v-for="(sitter,i) in sitters" :sitter="sitter" :key="i"></sitter-card>
          <!-- <sitter-card></sitter-card>
          <sitter-card></sitter-card>-->
        </div>
      </div>
    </div>
    <!-- <hr> -->
    <!-- <sitter-preview v-if="sitters" v-for="sitter in sitters" :sitter="sitter" :key="sitter._id"></sitter-preview> -->
  </section>
</template>

<script>
import SitterPreview from "@/components/List/SitterPreview";
import SitterFilter from "@/components/List/SitterFilter";
import SitterCard from "@/components/List/SitterCard.vue";
import SecondFilter from "@/components/List/SecondFilter.vue";
import Search2 from "@/components/Home/Search2.vue";

export default {
  name: "sitterList",
  data() {
    return {
      //START FILTER - SORT - CONTAINER
      isFilterOpen: false,
      isSortOpen: false
      //END FILTER - SORT - CONTAINER
    };
  },
  methods: {
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
      this.isSortOpen = false;
    },
    toggleSort() {
      this.isSortOpen = !this.isSortOpen;
      this.isFilterOpen = false;
    }
  },
  created() {},

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
.filter-sort-container {
  padding: 15px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
}

.search {
  padding: 15px;
  background: black;
  margin-bottom: 20px;
}
.grid-container {
  display: block;
  // max-width: 100%;
}
@media (min-width: 767px) {
  .grid-container {
    display: grid;
    grid-template-areas: "menu main main main";
    // grid-gap: 5px;
    // padding: 10px;
  }

  .filter {
    grid-area: menu;
    // color: white;
    width: 300px;
    // height: 300px;
    // width: 100%;
  }
  .cards {
    grid-area: main;
    // display: grid;
    // grid-template-columns: auto auto;
    // grid-gap: 5px;
  }
}
@media (min-width: 1250px) {
    .grid-container {
      border: 1px solid #ccc;
    max-width: 1250px;
    margin: 0 auto;
    // grid-gap:10px;
    }
  .cards {
    
    // grid-template-columns: auto auto auto;
    grid-gap: 15px;
    // box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2),
    //   0 12px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
