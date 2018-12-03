<template>
  <section>
    <datepicker :inline="true" v-model="date" :format="customFormatter" :highlighted="highlighted"></datepicker>
    {{customFormatter(date)}}
  </section>
</template>

<script>
import moment from "moment";
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker
  },
  methods: {
    book(date) {
      const start = "date" + "time" - "timstamp";
      const end = " date" + "time" - "timestamp";
      const reservation = {
        start: "",
        end: "",
        year: this.year,
        month: this.month,
        day: this.day
      };
    }
  },
  customFormatter(date) {
    this.year = moment(date).format("YYYY");
    this.day = moment(date).format("MM");
    this.month = moment(date).format("D");
    console.log(year, "year", day, "day", month, "month");
    return moment(date).format("YYYY-MM-D");
  },
  data() {
    return {
      year: "",
      day: "",
      month: "",
      date: null,
      highlighted: {
        to: "", // Disable all dates up to specific date
        from: "", // Disable all dates after specific date
        days: "", // Disable Saturday's and Sunday's
        daysOfMonth: "", // Disable 29th, 30th and 31st of each month
        dates: [
          // Disable an array of dates
          new Date(2018, 11, 3),
          new Date(2018, 11, 4),
          new Date(2018, 9, 18)
        ]
      }
    };
  }
};
</script>

<style>
</style>
