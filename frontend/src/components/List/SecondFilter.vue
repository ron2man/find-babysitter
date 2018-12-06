<template>
  <div class="filter" :class="{ active: isOpen }">
    <div class="btn-filer" @click="useFilter">
      <i class="fas fa-filter filter-item"></i>
    </div>

    <div class="flex column">
      <!-- FILTER BY NAME -->
      <div class="full-name">
        <!-- <p>Full Name:</p> -->
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
          <input
            v-model="secondFilter.isNonSmoking"
            type="checkbox"
            id="non-smoker"
            name="non-smoker"
          >
          Non Smoker
        </label>
        <br>
        <label for="cleaner">
          <input v-model="secondFilter.isCleaner" type="checkbox" id="cleaner" name="cleaner">
          Cleaner
        </label>
      </div>

      <el-select
        class="filter sort-item"
        v-model="sortBy"
        clearable
        placeholder="Sort"
        @input="setSort"
      >
        <el-option
          v-for="item in sortTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <button @click="setFilter">Send</button>
    </div>
  </div>
</template>

<script>
import vueSlider from "vue-slider-component";

export default {
  name: "secondFilter",
  data() {
    return {
      isOpen: false,
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
        isCleaner: ""
        // hasDriverLicense: "",
        // hasCar: "",
        // isCleaning: ""
      },
      sortTypes: [
        {
          value: "aveRate",
          label: "Rate"
        },
        {
          value: "age",
          label: "Age"
        }
      ],
      sortBy: ""
    };
  },
  methods: {
    setFilter() {
      this.$store.dispatch("setFilterProperty", this.secondFilter);
    },
    setSort() {
      sortBy: "",
        this.$store.dispatch({ type: "setSort", sortBy: this.sortBy });
    },
    useFilter() {
      this.isOpen = !this.isOpen;
    }
  },

  components: {
    vueSlider
  }
};
</script>

<style lang="scss">
.filter .full-name {
  margin-top: 40px;
}

.filter {
  .btn-filer {
    display: flex;
    position: fixed;
   left: 130px;
    top: 337px;
    color: black;
    z-index: 3;
    background-color: rgb(192, 161, 161);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    justify-content: center;
  }

  .filter-item {
    align-self: center;
  }

  .btn-filer :hover {
cursor: pointer;
  }

  transition: 0.3s;
  // max-width: 100%;
  background-color: black;
  color: white;
  margin-top: 10px;
  grid-area: menu;
  width: 300px;
  width: 26%;
  position: fixed;
  top: -9px;
  height: 100%;
  z-index: 1;
  transform: translate(-100%);
  div {
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    input {
      background-color: white;
    }
  }
}
.filter.active {
  transform: translate(0);
}
</style>
