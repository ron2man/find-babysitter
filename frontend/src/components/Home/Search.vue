<template>
  <form @submit.prevent="setFilter">
    <div class="search">
      <!-- ADRESS INPUT START -->
      <div class="inputs adress">
        <label for="text">&#32;</label>
        <input
          ref="autocomplete"
          placeholder="Search"
          class="s1earch-location"
          onfocus="value = ''"
          type="text"
        >
      </div>
      <!-- ADRESS INPUT END -->
      <!-- DATE AND TIME INPUTS -->
      <div class="date-and-time flex">
        <!-- INPUT DATE START -->
        <div class="inputs date">
          <label for="date"></label>
          <date-pick v-model="filter.date" input-class="test" :displayFormat="'DD.MM.YYYY'"></date-pick>
        </div>
        <!-- INPUT DATE END -->
        <div class="inputs time-start">
          <label for="time-start">From</label>
          <vue-timepicker
            format="HH:mm"
            :minute-interval="30"
            hide-clear-button
            v-model="filter.startTime"
          ></vue-timepicker>
        </div>
        <div class="inputs time-end">
          <label for="time-end">Till</label>
          <vue-timepicker
            format="HH:mm"
            :minute-interval="30"
            hide-clear-button
            v-model="filter.endTime"
          ></vue-timepicker>
        </div>
      </div>
      <div class="inputs button">
        <label for="button"></label>
        <button>Search</button>
      </div>
    </div>
  </form>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import DatePick from "vue-date-pick";

export default {
  components: {
    VueTimepicker,
    DatePick
  },
  data() {
    return {
      filter: {
        location: { lon: "", lat: "" },
        date: "",
        startTime: {
          HH: "13",
          mm: "00"
        },
        endTime: {
          HH: "13",
          mm: "00"
        },
        radius: 15
      }
    };
  },
  methods: {
    setFilter() {
      this.$store.dispatch("setFilter", this.filter);
    }
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
      // console.log(
      //   `The user picked ${city} with the coordinates ${lat}, ${lon}`
      //   , ac
      // );
    });
  }
};
</script>

<style lang="scss" scoped>
* > input {
  text-align: center;
  font-size: 1.2em;
  height: 30px;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
}
.search {
  background-color: white;
  input,
  input:focus {
    border: 0;
    outline: none;
  }
}

.search-location {
  display: block;
  width: 60vw;
  margin: 0 auto;
  margin-top: 5vw;
  font-size: 20px;
  font-weight: 400;
  outline: none;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
}
form {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 15px;
}
.inputs {
  width: 100%;
  margin-bottom: 10px;

  // height: 50px;
}
.inputs > * {
  // display: block;
  width: 100%;
}
input[type="search"] {
  height: 32px;
}

label {
  height: 16px;
  text-align: initial;
  padding-left: 10px;
}
button {
  height: 32px;
}

@media (min-width: 767px) {
  .search {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .button {
    width: 30%;
  }
}
</style>
