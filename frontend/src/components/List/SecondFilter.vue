<template>
  <div class="filter" :class="{ active: isOpen }">
    <p class="filter-title">Filter By:</p>
    <div class="btn-filer" @click="useFilter">
      <i class="fas fa-filter filter-item"></i>
    </div>

    <div class="flex column">
      <!-- FILTER BY NAME -->
      <div class="full-name">
        <input type="text" v-model="secondFilter.fullName" placeholder="Sitter name">
      </div>

      <!-- FILTER BY AGE -->
      <div class="age">
        <p>Age - Range</p>
        <vue-slider v-model="secondFilter.ageRange"></vue-slider>
      </div>

      <!-- FILTER BY WAGE -->
      <div class="wage">
        <p>Wage - Range</p>
        <vue-slider v-model="secondFilter.wageRange"></vue-slider>
      </div>

      <!-- FILTER isMEDICAL -->
      <div class="medical">
        <p class="prefs-title">Preference:</p>
        <div class="filter-pref-item">
          <label for="medical" :class="{black: secondFilter.isMedical}">
            <input
              class="input-check-item"
              v-model="secondFilter.isMedical"
              type="checkbox"
              id="medical"
              name="medical"
            >
            <p>Medical treatment</p>
            <i class="fas fa-briefcase-medical item-awsome"></i>
          </label>
        </div>

        <br>
        <div class="filter-pref-item">
          <label for="non-smoker" :class="{black: secondFilter.isNonSmoking}">
            <input
              class="input-check-item"
              v-model="secondFilter.isNonSmoking"
              type="checkbox"
              id="non-smoker"
              name="non-smoker"
            >
            <p>Non Smoker</p>
            <i class="fas fa-smoking item-awsome"></i>
          </label>
        </div>

        <br>
        <div class="filter-pref-item">
          <label for="cleaner" :class="{black: secondFilter.isCleaner}">
            <input
              class="input-check-item"
              v-model="secondFilter.isCleaner"
              type="checkbox"
              id="cleaner"
              name="cleaner"
            >
            <p>Cleaner</p>
            <i class="fas fa-broom"></i>
          </label>
        </div>
      </div>

      <el-select class="sort-item" v-model="sortBy" clearable placeholder="Sort">
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
      this.setSort()
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
.filter-title {
  margin-top: 15px;
}

.filter .full-name {
  margin-top: 40px;
}
.filter.filter {
  width: 65%;
  background-color: #ffff9d;
  color: black;
}

.filter {
  .full-name input {
    background-color: #c0a1a1;
        color: white;
    }
  .btn-filer {
    display: flex;
    position: fixed;
    left: 270px;
    top: 330px;
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
  transform: translate(-105%);
  div {
    // max-width: 90%;
    // margin: 0 auto;
    margin-bottom: 17px;
    input {
      background-color: white;
      width: 80%;
    }
  }

  .vue-slider-process {
    background-color: #a26ea1;
  }

  .vue-slider-tooltip {
    background-color: #a26ea1;
    border: none;
  }

  .vue-slider-component {
    margin-bottom: 0;
  }

  p {
    font-size: 25px;
  }
}
.filter.active {
  transform: translate(0);
}

.input-check-item {
  opacity: 0;
}

.prefs-title {
  margin-bottom: 10px;
}
.filter-pref-item {
  border: solid 1px blueviolet;
  width: 130px;
  margin: 0 auto;
  border-radius: 5px;
  color: #c79c9c;

  p {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .fas {
    margin-bottom: 10px;
  }

  .sort-item {
    width: 200px;
  }
  

}
      button {
      margin: 0 auto;
      background-color: #ffb480;
      width: 150px;
      border-radius: 5px;
    }

.el-input .el-input__inner {
    background-color: #c0a1a1; 
     border-radius: 10px;
}

.black {
  color: black;
}


</style>
