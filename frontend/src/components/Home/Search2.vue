<template>
  <div class="container">
    <div class="links flex flex-space-evenly main-background">
      <div :class="{active: this.filterStatus.isLocation}"  @click="setFilterStatus('isLocation')">Location</div>
      <div>|</div>
      <div :class="{active: this.filterStatus.isTime}" @click="setFilterStatus('isTime')">Time</div>
      <div>|</div>
      <div>Rating</div>
    </div>

    <div class="inputs second-background flex flex-space-between">

<!-- START LOCATION TAB -->
      <div v-if="this.filterStatus.isLocation" class="location">

        <i v-if="this.filter.location.lat" class="fas fa-check"></i>
        <i v-else class="fas fa-crosshairs"></i>
        <input
          ref="autocomplete"
          style="padding-left:30px;"
          :placeholder="filter.location.address"
          onfocus="value = ''"
          type="text"
        >
      </div>

<!-- START TIME TAB -->

      <div v-else-if="this.filterStatus.isTime"  class="time">

                 <div>
            <i class="far fa-calendar-alt"> </i> 
      <date-pick style="padding-left:30px;font-size:16px" v-model="filter.date" :displayFormat="'DD.MM.YYYY'" ></date-pick>
          </div>

          <div>
            <i class="far fa-clock"> </i>
            <vue-timepicker
          format="HH:mm"
          :minute-interval="30"
          hide-clear-button
          v-model="filter.startTime"
        ></vue-timepicker>
          </div>

          <div>
            <i class="fas fa-clock"> </i>
            <vue-timepicker
          format="HH:mm"
          :minute-interval="30"
          hide-clear-button
          v-model="filter.endTime"
        ></vue-timepicker>
          </div>



      </div>
    </div>

    <!-- 

        <div class="search">
          <div>
          </div>

          <br>
        </div>





    -->
    <!-- <div class="address">
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
      <button @click="setFilter">Find Sitter</button>
    </div>-->
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
      filterStatus: {
        isLocation: true,
        isTime: false,
        isRating: false
      },
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
      },
      normalizeFilter: {
        coords: { lat: null, lon: null, radius: 10000 },
        schedule: { startTime: null, endTime: null }
      }
    };
  },
  created() {
    if (this.$store.getters.filter)
      this.filter = this.$store.getters.filterLocation;
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
    setFilterStatus(status){
      console.log(status)
    this.filterStatus = {
      isLocation: false,
      isTime: false,
      isRating: false,
    }
    this.filterStatus[status] = true;
    },
    setFilter() {
      this.setNormalizeFilter();
      this.$store.dispatch("setFilterLocation", this.normalizeFilter);
      this.$router.push({ path: "/baby/list" });
    },
    setNormalizeFilter() {
      this.normalizeFilter.schedule.startTime = Date.parse(
        new Date(
          `${this.filter.date} ${this.filter.startTime.HH}:${
            this.filter.startTime.mm
          }:00`
        )
      );

      this.normalizeFilter.schedule.endTime = Date.parse(
        new Date(
          `${this.filter.date} ${this.filter.endTime.HH}:${
            this.filter.endTime.mm
          }:00`
        )
      );

      this.normalizeFilter.coords.lat = this.filter.location.lat;
      this.normalizeFilter.coords.lon = this.filter.location.lon;

      // console.log(this.normalizeFilter);
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
  max-width: 360px;
  width: 100%;
  padding-bottom:15px;
  // border: solid 1px red;

  .links {
    cursor: pointer;
    color: white;
    width: 100%;
    padding: 5px 0;
    .active {
      color: black;
    }
  }
  .inputs {
    width: 100%;
    height: 18px;
    padding: 10px 0;
    text-align: left;
    position: relative;
    .location,.time,.rating{
      width:100%;
    }
    i {
      position: absolute;
      display: inline-block;
      padding: 0 5px;
      //  min-width: 48px;
      //  min-height: 48px;
    }
  }
}

// .container div {
//   box-sizing: border-box;
//   margin: 5px 0;
// }

// .container div:not(:last-child) {
//   background-color: white;
// }

.search {
  width: 320px;
  // height: 200px;
  background-color: rgba(0, 0, 0, 0.3);
  div {
    background-color: #ccc;
    // padding: 10px;
    // margin: 10px 0;
    min-width: 248px;
    max-width: 248px;
    text-align: left;
    i {
      padding-right: 5px;
    }
  }
  .shalosh {
    // width: 30%;
    // min-width: 48px;
    // max-width: 70px;
    display: inline-block;
  }
}

.time .start {
  width: 100%;
}

.time .end {
  width: 100%;
}

input[type="text"],
input[type="password"],
.button > button {
  box-sizing: border-box;
  background-color: transparent;
  padding-left:30px;
  background: none;
  border: none;
  width: 100%;
  // height: 2em;
  // line-height: 2em;
  // font-size: 1.2em;
  color: rgb(136, 136, 136);
  outline: none;
  text-align: left;
}

.button {
  background-color: transparent;
}

.button > button {
  cursor: pointer;
  background-color: #a26ea1;
  color: white;
  border-radius: 10px;
}

.time {
  display: flex;
  justify-content: space-evenly;
}

@media (min-width: 767px) {
  input[type="text"],
  input[type="password"],
  button {
    background: none;
    border: none;
    width: 100%;
    height: 1em;
    line-height: 1em;
    font-size: 1em;
    color: rgb(136, 136, 136);
    outline: none;
    text-align: left;
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
    // max-width: 300px;
  }
}
</style>
