<template>
  <div class="filter">
    <h1>HELLO WORLD</h1>
    {{secondFilter.fullName}}
    <div>
      <div class="full-name">
        <p>Full Name:</p>
        <input type="text" v-model="secondFilter.fullName" placeholder="text search">
      </div>

      <div class="age">
        <p>by Age - Range</p>
        <vue-slider v-model="secondFilter.ageRange"></vue-slider>
        <!-- <input type="number"> -->
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

      <button @click="setFilter">Send</button>
    </div>
  </div>
</template>

<script>
import vueSlider from "vue-slider-component";

export default {
  data() {
    return {
      secondFilter: {
        fullName: "",
        ageRange: [25, 65],
        query: "",
        position: "",
        language: "",
        experience: [0, 4],
        isNonSmoking: "",
        isMedical: "",
        hasRecomendation: "",
        hasDriverLicense: "",
        hasCar: "",
        isCleaning: ""
      }
    };
  },
  methods: {
    setFilter() {
      console.log("SECOND FILTER - ",this.secondFilter);
      this.$store.dispatch("setFilterProperty", this.secondFilter);
    }
  },
  components: {
    vueSlider
  }
};
</script>

<style lang="scss">
.filter {
  background-color: black;
  color: white;
}
</style>
