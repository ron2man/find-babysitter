<template>
  <form @submit.prevent="test">
    <input ref="autocomplete" 
        placeholder="Search" 
        class="search-location"
        onfocus="value = ''" 
        type="text" />
    <div class="search">
      <!-- ADRESS INPUT -->
      <div class="inputs adress">
        <label for="text">&#32;</label>
        <!-- <label for="adress">Your Adress:</label> -->
        <input
          v-model="search.where"
          required
          type="search"
          name="adress"
          placeholder="Where do you live?"
        >
      </div>

      <!-- DATE AND TIME INPUTS -->
      <div class="date-and-time flex">
        <div class="inputs date">
          <label for="date">When</label>
          <date-pick v-model="date" :displayFormat="'DD.MM.YYYY'"></date-pick>
          <!-- <input required v-model="search.date" ref="today" id="date" type="date"> -->
        </div>
        <div class="inputs time-start">
          <label for="time-start">From</label>
          <!-- <input ref="thistime" v-model="search.timeStart" type="time"> -->
          <vue-timepicker
            format="HH:mm"
            :minute-interval="30"
            hide-clear-button
            v-model="yourTimeValue"
          ></vue-timepicker>
        </div>
        <div class="inputs time-end">
          <label for="time-end">Till</label>
          <vue-timepicker
            name="time-end"
            format="HH:mm"
            :minute-interval="30"
            hide-clear-button
            v-model="yourTimeValue"
          ></vue-timepicker>

          <!-- <input ref type="time" v-model="search.timeEnd"> -->
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
      yourTimeValue: {
        HH: "13",
        mm: "00"
      },
      date: "2019-01-01",
      search: { where: "", date: "", timeStart: "", timeEnd: "00:00" }
    };
  },
  methods: {
    test() {
      console.log("this search params -", this.search);
    }
  },
  mounted() {
    let today = new Date().toISOString().substr(0, 10);
    this.search.date = today;

    let now = new Date().toString().substr(16, 5);
    this.search.timeStart = now;

  // GOOGLE AUTOCOMPLETE
      this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );

    this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace();
      let ac = place.address_components;
      let lat = place.geometry.location.lat();
      let lon = place.geometry.location.lng();
      let city = ac[0]["short_name"];

      console.log(`The user picked ${city} with the coordinates ${lat}, ${lon}`);
    });

  }
};
</script>

<style lang="scss" scoped>
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
  height: 50px;
}
.inputs > * {
  display: block;
  width: 100%;
}
input[type="search"] {
  height: 32px;
}

input {
  text-align: center;
  font-size: 1.2em;
  height: 30px;
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
  }
  .button {
    width: 30%;
  }
}
</style>
