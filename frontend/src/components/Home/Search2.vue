<template>
  <div class="container">
    <div class="address">
      <input
        ref="autocomplete"
        :placeholder="filter.location.address"
        onfocus="value = ''"
        type="text"
      >
    </div>

    <div class="date">
      <date-pick v-model="filter.date" :displayFormat="'DD.MM.YYYY'"></date-pick>
    </div>
    <div class="time">
      <div class="start">
        <vue-timepicker
          format="HH:mm"
          :minute-interval="30"
          hide-clear-button
          v-model="filter.startTime"
        ></vue-timepicker>
      </div>
      <div class="end">
        <vue-timepicker
          format="HH:mm"
          :minute-interval="30"
          hide-clear-button
          v-model="filter.endTime"
        ></vue-timepicker>
      </div>
    </div>

    <div class="button">
      <button @click="setFilter">Search</button>
    </div>
  </div>
</template>

<script>
import VueTimepicker from "./Form/vue-timepicker.vue";
import DatePick from "./Form/vueDatePick.vue";
export default {
  components: {
    VueTimepicker,
    DatePick
  },
  data() {
    return {
      filter: {
        location: { lon: "", lat: "", address: "Where Do You Live?" },
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
  created() {
    if (this.$store.getters.filter) this.filter = this.$store.getters.filter;
    else {
      // SET TODAY TO FILTER.DATE => DATE PICKER
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDay();
      this.filter.date = `${year}-${month}-${day}`;
    }
  },
  methods: {
    setFilter() {
      this.$store.dispatch("setFilter", this.filter);
      this.$router.push({ path: "/baby/list" });
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
      this.filter.location.address = this.$refs.autocomplete.value;
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 10px;
  text-align: center;
  border: black 1px solid;
}

.container div {
  box-sizing: border-box;
  margin: 5px 0;
}

.container div:not(:last-child) {
  background-color: white;
}

.time .start {
  width: 100%;
}

.time .end {
  width: 100%;
}

input[type="text"],
input[type="password"],
button {
  background: none;
  border: none;
  width: 100%;
  height: 2em;
  line-height: 2em;
  font-size: 1.2em;
  color: rgb(136, 136, 136);
  outline: none;
  text-align: center;
}

.button {
  background-color: transparent;
}

button {
  cursor: pointer;
  background-color: #9054ef;
  color: white;
  border-radius: 10px;
}

.time {
  display: flex;
  justify-content: space-evenly;
}

@media (min-width: 767px) {
  .container {
    display: flex;
    width: 100%;
  }

  .container div {
    margin: 0;
    margin-right: 10px;
  }

  input[type="text"],
  input[type="password"],
  button {
    background: none;
    border: none;
    width: 100%;
    height: 2em;
    line-height: 2em;
    font-size: 1.2em;
    color: rgb(136, 136, 136);
    outline: none;
    text-align: center;
  }
  .button {
    background-color: transparent;
  }
  button {
    cursor: pointer;
    background-color: #9054ef;
    color: white;
    border-radius: 10px;
    padding: 0 25px;
  }

  .address {
    flex-grow: 5;
  }

  .date {
    max-width: 150px;
  }

  .time .start {
    width: 100%;
    max-width: 150px;
  }

  .time .end {
    width: 100%;
    max-width: 150px;
  }

  .time {
    max-width: 300px;
  }
}
</style>
