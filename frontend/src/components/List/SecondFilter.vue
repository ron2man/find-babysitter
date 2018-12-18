<template>
  <div class="filter" :class="{ active: isOpen }">
    <p class="filter-title">{{(windowWidth > 680) ? 'Filter By:' : ''}}</p>
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
      <p class="prefs-title">Pick preference:</p>
      <div class="medical flex">
          <label class="filter-pref-item" for="medical" :class="{black: secondFilter.isMedical}">
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

        <br>
          <label class="filter-pref-item" for="non-smoker" :class="{black: secondFilter.isNonSmoking}">
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

        <br>
          <label  class="filter-pref-item" for="cleaner" :class="{black: secondFilter.isCleaner}">
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

      <el-select class="sort-item" v-model="sortBy" clearable placeholder="Sort">
        <el-option
          v-for="item in sortTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <button class="btn-send" @click="setFilter">Send</button>
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
      this.setSort();
      if(window.innerWidth >680) return 
      this.useFilter();
    },
    setSort() {
      sortBy: "",
        this.$store.dispatch({ type: "setSort", sortBy: this.sortBy });
    },
    useFilter() {
      this.isOpen = !this.isOpen;
    }
  },
  computed:{

    windowWidth(){
      return window.innerWidth
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
  width: 80%;
  height: 92%;
  background-color: #f5f5f5;
  color: black;
  padding: 15px;
  height: 84%;
  top: 41px;
  padding-top: 0;
  padding-bottom: 0;
}

.filter {
  .full-name input {
    background-color: gainsboro;
    color: white;
  }
  .btn-filer {
    display: flex;
    position: fixed;
    left: 110%;
    bottom: 50px;
    color: black;
    z-index: 3;
    background-color: rgb(192, 161, 161);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    justify-content: center;
    transition:0.4s;
  }

  .filter-item {
    align-self: center;
  }

  .btn-filer :hover {
    cursor: pointer;
  }
  .btn-send{
    transition: 0.4s;
  }

  .btn-send:hover{
        cursor: pointer;
        background: #a26ea1;
        color:white;

  }

  transition: 0.3s;
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
    margin-bottom: 15px;
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
  .btn-filer{
    left: 80%;
    bottom: 6px;

  }
}

.input-check-item {
  opacity: 0;
}

.prefs-title {
  margin-bottom: 10px;
}

.filter-pref-item {
  border: solid 1px gainsboro;
  width: 90px;
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
 .filter-pref-item :hover{
    cursor: pointer;
  }
button {
  margin: 0 auto;
  background-color: #d0afd6;
  width: 150px;
  border-radius: 5px;
}

.el-input .el-input__inner {
  background: whitesmoke;
}

.black {
  color: #d0afd6;
}

@media (min-width: 900px) {
    .filter.filter {
      top: 43px;
      left: 315px;
      position: absolute;
      top: 145px;
      z-index: 0;
      left: 379px;
      width: 340px;
      padding: 20px;
    }

  .grid-container[data-v-3c7b02fb] {
    display: grid;
    grid-template-areas: "menu main main main";
  }
 
  .filter .btn-filer{
    display: none;
  }
}
</style>
