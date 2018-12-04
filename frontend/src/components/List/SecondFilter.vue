<template>
  <div class="filter">
    <div>
      <!-- FILTER BY NAME -->
      <div class="full-name">
        <p>Full Name:</p>
        <input type="text" v-model="secondFilter.fullName" placeholder="Search by Name">
      </div>

      <!-- FILTER BY AGE -->
      <div class="age">
        <p>by Age - Range</p>
        <vue-slider v-model="secondFilter.ageRange"></vue-slider>
      </div>

      <!-- FILTER BY WAGE -->
      <div class="wage">
        <p>Wage - Range</p>
        <vue-slider v-model="secondFilter.wageRange"></vue-slider>
      </div>

      <!-- FILTER isMEDICAL -->
      <div class="medical">
        <p>Choose the preference:</p>
        <label for="medical">
          <input v-model="secondFilter.isMedical" type="checkbox" id="medical" name="medical">
         Medical treatment
        </label>
        <br>
        <label for="non-smoker">
          <input v-model="secondFilter.isNonSmoking" type="checkbox" id="non-smoker" name="non-smoker">
         Non Smoker
        </label>
        <br>
        <label for="cleaner">
          <input v-model="secondFilter.isCleaner" type="checkbox" id="cleaner" name="cleaner">
         Cleaner
        </label>
      </div>



      <button @click="setFilter">Send</button>
    </div>
  </div>
</template>

<script>
import vueSlider from "vue-slider-component";

export default {
  name:'secondFilter',
  data() {
    return {
      secondFilter: {
        fullName: "",
        ageRange: [0, 100],
        wageRange: [0, 100],
        // query: "",
        // position: "",
        // language: "",
        // experience: [0, 4],
        isNonSmoking: "",
        isMedical: "",
        isCleaner: "",
        // hasDriverLicense: "",
        // hasCar: "",
        // isCleaning: ""
      }
    };
  },
  methods: {
    setFilter() {
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
  // max-width: 80%;
  background-color: black;
  color: white;
  margin-top: 10px;

  div {
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;
    input {
      background-color: white;
    }
  }
}
</style>
