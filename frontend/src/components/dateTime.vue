<template>
  <section class="date-time">
    <div class="date-time-container">
      <datepicker
        :inline="true"
        v-model="date"
        :format="customFormatter"
        :disabledDates="disabledDates"
        :highlighted="highlighted"
        @click="closeMsg()"
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
    <div class="book-answer" v-if="this.alertMsg">
      <i class="fas fa-exclamation-circle" v-if="!sent"></i>
      <i class="fas fa-check-circle" v-if="sent"></i>
      <div class="alert-msg">{{this.bookMsg}}</div>
    </div>
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
    makeArrayOfSchedule() {
      const schedules = this.sitter.schedule;
      const arrayDates = []
      schedules.map(schedule => {
        const dateToPush = moment(schedule.start).format("YYYY,MM,D");
        const newDate = new Date(dateToPush);
        arrayDates.push(newDate);
      });
      return arrayDates
    },
    book(sitter) {
      if (!this.startTimestamp || !this.startTimestamp || !this.date) {
        this.alertMsg = true;
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
        status: "pending",
        imgUrl: ""
      };
      if (reservation.start >= reservation.end) {
        this.alertMsg = true;
        this.bookMsg = "Please enter valid time";
        return;
      }
      this.$store
        .dispatch({ type: "checkAvalability", reservation })
        .then(res => {
          if (res.length !== 0) {
            this.alertMsg = true;
            this.bookMsg = "Sorry, this date already booked";
          } else {
            this.alertMsg = true;
            this.bookMsg = "Invatation sent, waiting for reply";
            this.sent = true;
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
      this.alertMsg = false;
      if (this.date) {
        this.startTimestamp = moment(
          `${this.date},${time.HH}:${time.mm}`
        )._d.getTime();
      }
    },
    getTimestampEnd(time, data) {
      this.alertMsg = false;
      if (this.date) {
        this.endTimestamp = moment(
          `${this.date},${time.HH}:${time.mm}`
        )._d.getTime();
      }
    }
  },
  data() {
    return {
      today: new Date(),
      startTimestamp: null,
      endTimestamp: null,
      startTime: {
        HH: "HH",
        mm: "MM"
      },
      endTime: {
        HH: "HH",
        mm: "MM"
      },
      year: "2018",
      day: "",
      month: "",
      date: new Date(2018, 12, 5),
      highlighted: {
        from: "", // Disable all dates after specific date
        days: "", // Disable Saturday's and Sunday's
        daysOfMonth: "", // Disable 29th, 30th and 31st of each month
        dates: this.makeArrayOfSchedule()
          // Disable an array of dates
      },
      disabledDates: {
        to: new Date(2018, 12, 5) // Disble all dates after specific date
      },
      bookMsg: "",
      alertMsg: false,
      sent: false
    };
  }
};
</script>

<style  scoped lang="scss">
.fa-exclamation-circle:before {
  color: #951555;
  font-size: 40px;
  content: "\F06A";
}

.fa-check-circle:before {
  color: #951555;
  font-size: 40px;
}

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

.alert-msg {
  margin-left: 10px;
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

.book-answer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  width: 280px;
  padding: 10px;
}
</style>
