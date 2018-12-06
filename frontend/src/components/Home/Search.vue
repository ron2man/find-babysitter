<template>
  <!-- <form @submit.prevent="setFilter"> -->
  <div class="search-container">
    <!-- ADRESS INPUT START -->
    <div class="inputs row-container adress">
      <!-- <label for="text">&#32;</label> -->
      <input
        ref="autocomplete"
        :placeholder="filter.location.address"
        class="s1earch-location"
        onfocus="value = ''"
        type="text"
      >
    </div>
    <!-- ADRESS INPUT END -->
    <!-- DATE AND TIME INPUTS STARTS-->
    <div class="date-and-time row-container flex flex-space-evenly">
      <!-- INPUT DATE START -->
      <div class="inputs date">
        <date-pick v-model="filter.date" input-class="test" :displayFormat="'DD.MM.YYYY'"></date-pick>
      </div>
      <!-- INPUT DATE END -->
      <div class="inputs time-start">
        <vue-timepicker
          format="HH:mm"
          :minute-interval="30"
          hide-clear-button
          v-model="filter.startTime"
        ></vue-timepicker>
      </div>
      <div class="inputs time-end">
        <vue-timepicker
          format="HH:mm"
          :minute-interval="30"
          hide-clear-button
          v-model="filter.endTime"
        ></vue-timepicker>
      </div>
    </div>
    <!-- DATE AND TIME INPUTS STARTS-->
    <!-- BUTTON INPUTS STARTS-->
    <div class="inputs button">
      <button @click="setFilter">Search</button>
    </div>
    <!-- BUTTON INPUTS END-->
  </div>
  <!-- </form> -->
</template>

<script>
// import VueTimepicker from "vue2-timepicker";
import VueTimepicker from "./Form/vue-timepicker.vue";
import DatePick from "./Form/vueDatePick.vue";
// import DatePick from "vue-date-pick";

export default {
  components: {
    VueTimepicker,
    DatePick
  },
  data() {
    return {
      filter: {
        location: { lon: "", lat: "", address: "Where Do You Live?????" },
        date: "2019-1-1",
        startTime: {
          HH: "20",
          mm: "00"
        },
        endTime: {
          HH: "21",
          mm: "00"
        },
        radius: 15
      }
    };
  },
  methods: {
    setFilter() {
      this.$store.dispatch("setFilter", this.filter);
      // console.log(this.$route.params)
      // if (this.router.params)
      this.$router.push({ path: "/baby/list" });
    }
  },
  created() {
    if (this.$store.getters.filter) this.filter = this.$store.getters.filter;
  },
  mounted() {
    // GOOGLE AUTOCOMPLETE
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.autocomplete,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", () => {
      let place = this.autocomplete.getPlace();
      let ac = place.address_components;
      let lat = place.geometry.location.lat();
      let lon = place.geometry.location.lng();
      let city = ac[0]["short_name"];

      this.filter.location.lat = lat;
      this.filter.location.lon = lon;
      this.filter.location.address = this.$refs.autocomplete.value;
    });
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  background: white;
  border: 1px blue solid;
  width: 90%;
  padding: 0 10px;
  margin: 0 auto;

  .inputs {
    border: 3px black solid;
    input {
      width: 100%;
      border: 0;
      outline: none;
      padding: 10px 0;
      text-align: center;
      font-size: 1.2em;
    }
  }
}
@media (min-width: 767px) {
  .search-container {
    display: flex;
    justify-content: space-evenly;
    input {
      display: inline-block;
    }
    .date-and-time .inputs {
      width: 100%;
    }
  }
}
// }

// * > input {
//   text-align: center;
//   font-size: 1.2em;
//   height: 30px;
//   padding: 0;
//   margin: 0;
//   border: 0;
//   outline: none;
// }

// .search {
//   background-color: white;
//   input,
//   input:focus {
//     border: 0;
//     outline: none;
//   }
// }

// .search-location {
//   display: block;
//   width: 60vw;
//   margin: 0 auto;
//   margin-top: 5vw;
//   font-size: 20px;
//   font-weight: 400;
//   outline: none;
//   height: 30px;
//   line-height: 30px;
//   text-align: center;
//   border-radius: 10px;
// }
// form {
//   width: 90%;
//   margin: 0 auto;
//   padding-bottom: 15px;
// }
// .inputs {
//   width: 100%;
//   margin-bottom: 10px;

//   // height: 50px;
// }
// .inputs > * {
//   // display: block;
//   width: 100%;
// }
// input[type="search"] {
//   height: 32px;
// }

// label {
//   height: 16px;
//   text-align: initial;
//   padding-left: 10px;
// }
// button {
//   height: 32px;
// }

// @media (min-width: 767px) {
//   .search {
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//   }
//   .button {
//     width: 30%;
//   }
// }
</style>
