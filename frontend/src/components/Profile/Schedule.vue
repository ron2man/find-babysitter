<template>
  <div class="schedule">
    <div class="schedule-item" v-for="(item, idx) in getSchedules" :key="idx">
        <!-- {{item}}  -->
      <div class="date-time flex align-items-center flex-space-evenly">
        <div class="date">
          <i class="fas fa-calendar-alt" style="padding:0 10px"></i>
          <span>{{item.start | getDate}}</span>
        </div>
        <div class="start-time">{{item.start | getTime}}</div>
        <p>-</p>
        <div class="end-time">{{item.end | getTime}}</div>
      </div>
      <div class="address">Habonim 4 Ramat Gan</div>
    </div>
  </div>
</template>

<script>
export default {
      computed: {
    getSchedules() {
      return this.$store.getters.getCurrentProfile.schedule;
      // return this.$store.getters.getCurrentProfile;
    }
  },
  filters: {
      getDate(timestamp){
          var time = new Date(timestamp)
          return `${time.getDay()}/${time.getMonth()}/${time.getFullYear()}`
      },
      getTime(timestamp){
          var time = new Date(timestamp)
          var minutes = new Date(timestamp).getMinutes()
          console.log(minutes)
          if (minutes === 0) minutes = '00'
          return `${time.getHours()}:${minutes}`
      }
  }
};
</script>

<style>
.schedule .schedule-item {
  padding: 10px 0;
  font-size: 1.3em;
  border-bottom: 1px solid black;
}

.schedule-item .address {
  padding: 10px 0;
  text-align: center;
}
</style>
