<template>
  <section>
    <section class="requests-header">
      <div class="request">
        <div class="request-item">
          <div class="flex align-items-center flex-space-evenly">
            <div class="notice-head">{{currUser.type==='parent' ? 'Sitter' : 'Parent'}}</div>
            <div class="notice-head">date</div>
            <div class="notice-head">From</div>
            <div class="notice-head">To</div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="currUser.type==='sitter'">
      <div
        class="request"
        v-if="currUser"
        v-for="(reservation,i) in currUser.reservations"
        :key="i"
      >
        <div class="request-item">
          <div class="flex align-items-center flex-space-evenly">
            <div class="notice-head">{{reservation.from}}</div>
            <!-- <div class="from">Gabi</div> -->
            <div class="notice-head">{{reservation.date}}</div>
            <!-- <div class="date">22/10/2018</div> -->
            <div class="notice-head">{{reservation.start | formatTime}}</div>
            <!-- <div class="time-start">22:00</div> -->
            <div class="notice-head">{{reservation.end | formatTime}}</div>
            <!-- <div class="time-end">23:30</div> -->
          </div>
          <div class="buttons flex flex-space-evenly">
            <i class="fas fa-check" @click="answerReservation(reservation,'confirmed')"></i>
            <i class="fas fa-times" @click="answerReservation(reservation,'decline')"></i>
          </div>
        </div>
      </div>
      <div
        v-if="sitter.type === 'parent'"
        class="requests-item-container"
        v-for="(reservation,i) in sitter.reservations"
        :key="i"
        :class="getClass(reservation)"
      >
        <i class="fas fa-comments message-awsome"></i>
        <p class="notice-head">Sitter: {{reservation.to}}</p>
        <p class="notice-head">From: {{getTime(reservation.start)}}</p>
        <p class="notice-head">To: {{getTime(reservation.end)}}</p>
        <p class="notice-head">date: {{reservation.date}}</p>
        <p class="notice-head">Status: {{reservation.status}}</p>
      </div>
    </section>
  </section>
</template>
<script>
import moment from "moment";

export default {
  name: "RequestsSitter",
  methods: {
    getClass(reservation) {
      if (reservation.status === "pending") return { yellow: true };
      else if (reservation.status === "confirmed") return { green: true };
      else return { red: true };
    },
    answerReservation(reservation, status) {
      this.$store.dispatch({ type: "request", reservation, status });
    },
    getTime(timeStamp) {
      return moment(timeStamp).format("hh:mm");
    }
  },
  computed: {
    sitter() {
      return this.$store.getters.getCurrentProfile;
    },
    currUser() {
      return this.$store.getters.getCurrentProfile;
    }
  },
  filters: {
    formatTime(timeStamp) {
      return moment(timeStamp).format("hh:mm");
    }
  }
};
</script>

<style scoped lang="scss">
.requests-header {
  background: beige;
}

.request .request-item {
  padding: 10px 0;
  font-size: 1.3em;
  border-bottom: 1px solid black;
}

.request-item .buttons {
  padding: 10px 0;
  text-align: center;
}

.request-item .buttons i {
  margin: 0 5px;
}
.requests-item-container {
  display: flex;
}

.notification-item {
  cursor: pointer;
}

.yellow {
  background-color: yellow;
}

.red,
.declined {
  background-color: rgb(151, 0, 0);
}

.declined:hover {
  background-color: rgb(255, 0, 0);
}

.green,
.approve {
  background-color: rgb(0, 71, 0);
}

.approve:hover {
  background-color: rgb(0, 255, 0);
}
</style>
