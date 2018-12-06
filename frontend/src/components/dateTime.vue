<template>
  <section class="date-time">
    <div class="date-time-container">
      <datepicker
        :inline="true"
        v-model="date"
        :format="customFormatter"
        :highlighted="highlighted"
      ></datepicker>
      <div class="time-container">
        <div class="inputs time-start">
          <p class="time-head">Start Time:</p>
          <vue-timepicker
            format="HH:mm"
            :minute-interval="30"
            hide-clear-button
            v-model="startTime"
            @change="getTimestampStart(startTime)"
          ></vue-timepicker>
        </div>
        <div class="inputs time-end">
          <p class="time-head">End Time:</p>
          <vue-timepicker
            format="HH:mm"
            :minute-interval="30"
            hide-clear-button
            v-model="endTime"
            @change="getTimestampEnd(endTime)"
          ></vue-timepicker>
        </div>
        <button @click="book(sitter)">Book Now!</button>
      </div>
    </div>
    <div class="book-answer">{{bookMsg}}</div>
  </section>
</template>

<script>
import VueTimepicker from "./datetime/vue-timepicker";
import moment from "moment";
import Datepicker from "vuejs-datepicker";

export default {
  props: ["sitter"],
  components: {
    Datepicker,
    VueTimepicker
  },
  methods: {
    book(sitter) {
      decodeURI;
      if (!this.startTimestamp || !this.endTimestamp || !this.date) {
        this.bookMsg = "Feel All The fields please!";
        return;
      }
      const reservation = {
        start: this.startTimestamp,
        end: this.endTimestamp,
        date: this.date,
        to: sitter.username,
        from: JSON.parse(localStorage.getItem("loggedInUser")).username,
        id: this.makeId(),
        status: "pending"
      };
      if(reservation.start > reservation.end){
      this.bookMsg = "Please enter valid time"
      return;
      }
      this.$store
        .dispatch({ type: "checkAvalability", reservation })
        .then(res => {
          if (res.length !== 0)
            this.bookMsg = "Sorry, this date already booked";
          else {
            this.bookMsg = "Invatation sent, waiting for reply";
            this.$store.dispatch({ type: "sendRequest", reservation, sitter });
          }
        });
    },
    makeId(length = 3) {
      var txt = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return txt;
    },
    customFormatter(date) {
      this.date = moment(date).format("YYYY-MM-D");
    },
    getTimestampStart(time) {
      this.bookMsg = "";
      if(this.date){
        this.startTimestamp = moment(
          `${this.date},${time.HH}:${time.mm}`
        )._d.getTime();
      }
    },
    getTimestampEnd(time, data) {
      this.bookMsg = "";
        if(this.date){
        this.endTimestamp = moment(
          `${this.date},${time.HH}:${time.mm}`
        )._d.getTime();
    }
  }
  },
  data() {
    return {
      startTimestamp: "",
      endTimestamp: "",
      startTime: {
        HH: "HH",
        mm: "MM"
      },
      endTime: {
        HH: "HH",
        mm: "MM"
      },
      year: "",
      day: "",
      month: "",
      date: "",
      highlighted: {
        to: "", // Disable all dates up to specific date
        from: "", // Disable all dates after specific date
        days: "", // Disable Saturday's and Sunday's
        daysOfMonth: "", // Disable 29th, 30th and 31st of each month
        dates: [
          // Disable an array of dates
        ]
      },
      sent: false,
      bookMsg: ""
    }
  }
}
</script>

<style  scoped lang="scss">
.time-container {
  margin-left: 30px;
}
.date-time-container {
  display: flex;
  margin: auto;
  text-align: center;
}

.time-start {
  margin-bottom: 20px;
}

.date-time {
  width: 800px;
}

.time-end {
  margin-bottom: 20px;
}

button {
  border: 1px solid black;
  border-radius: 10px;
  height: 72px;
  width: 130px;
  margin-top: 40px;
  background-color: #951555;
  color: white;
  cursor: pointer;
  transition: 0.2s all;
}

button:hover {
  background-color: rgb(189, 28, 109);
}

.time-head {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
