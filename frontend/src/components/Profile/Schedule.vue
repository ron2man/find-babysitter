<template>
  <div class="schedule">
    <div class="schedule-item" v-for="(item, idx) in getSchedules" :key="idx">
      <div class="top flex flex-space-evenly">
        <div class="date-time">
          <p>{{item.start | getDate}}</p>
          <p>{{item.start | getTime}} - {{item.end | getTime}}</p>
          <p class="bold">
            Start in
            <span>4 Days</span>
          </p>
        </div>
        <div class="border"></div>
        <div class="parent-address">
          <p>{{item.from}}</p>
          <p>Habonim 4 Ramat Gan</p>
          <p class="bold">14Km From You</p>
        </div>
      </div>

      <div class="buttons flex flex-space-evenly">
        <a :href="getCalenderUrl(item)" target="_blank">Add To Calender</a>
        |
        <p>Send Message</p>|
        <p>Cancel</p>
      </div>
    </div>
  </div>
</template>


<script>
// TODO - 
// - AGRIGATE DATA WITH PARENT OBJECT
// IN STORE - SORT SCHEDULE 
// 1. Add Send MSG link
// 2. Calculate days to the event
// 3. Calculate Distance from you
// 4. cancel link
// 
export default {

  computed: {
    getSchedules() {
      return this.$store.getters.getCurrentProfile.schedule;
    }
  },
  filters: {
    getDate(timestamp) {
      var time = new Date(timestamp);
      return `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
    },
    getTime(timestamp) {
      var time = new Date(timestamp);
      var minutes = new Date(timestamp).getMinutes();
      if (minutes === 0) minutes = "00";
      return `${time.getHours()}:${minutes}`;
    }
  },
  methods: {
    getCalenderUrl(schedule) {
      var startTime = new Date(schedule.start).toISOString();
      startTime = startTime.replace(/-/g, "");
      startTime = startTime.replace(/:/g, "");
      startTime = startTime.replace(".", "");
      startTime = startTime.substring(0,15) + "Z"
      var endTime = new Date(schedule.end).toISOString();
      endTime = endTime.replace(/-/g, "");
      endTime = endTime.replace(/:/g, "");
      endTime = endTime.replace(".", "");
      endTime = endTime.substring(0,15) + "Z"

      var url = `https://calendar.google.com/calendar/r/eventedit?text=BabySitting+at+${
        schedule.from
      }+&dates=${startTime}/${endTime}&details=For+more+details+go+to+find+a+Babysitter+App&location=Habonim+-+4+Street+-+Ramat+Gan`;
      return url;
    }
  }
};
</script>

<style>
.schedule .schedule-item {
  padding-top: 15px;
  /* text-align: left; */
  border-bottom: 3px solid black;
}

.schedule-item .date-time p,
.parent-address p {
  padding: 5px 0;
  /* font-size: 0.8em; */
}

.schedule-item .border {
  /* border-left: 1px solid #ccc; */
}

.schedule-item .buttons {
  margin-top: 10px;
  padding: 5px 0;
  background-color: #ffff9d;
  color: black;
}
</style>
