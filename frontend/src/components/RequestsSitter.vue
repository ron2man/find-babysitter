<template>
  <section v-if="sitter">
    <div class="request">
      <div class="request-item ">
          <div class="flex align-items-center flex-space-evenly">
        <div class="from">Gabi</div>
        <div class="date">22/10/2018</div>
        <div class="time-start">22:00</div>
        <div class="time-end">23:30</div>
        </div>
        <div class="buttons flex flex-space-evenly">
          <i class="fas fa-check"></i>
          <i class="fas fa-times"></i>
        </div>
    </div>
    </div>

    <!-- {{sitter.reservations}} -->
    <div  v-if="sitter"
      class="requests-item-container"
      v-for="(reservation,i) in sitter.reservations"
      :key="i">
      <i class="fas fa-comments message-awsome"></i>
      <p class="notice-head">Parent: {{reservation.from}}</p>
      <p class="notice-head">date: {{reservation.date}}</p>
      <p class="notice-head">From: {{reservation.start | formatTime}}</p>
      <p class="notice-head">To: {{reservation.end | formatTime}}</p>
      <button
        class="notification-item approve"
        @click="answerReservation(reservation,'confirmed')"
      >Approve</button>
      <button
        class="notification-item declined"
        @click="answerReservation(reservation,'decline')"
      >Declined</button>
    </div>
  </section>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      currentUser: null
    };
  },
  created() {
    const currentUser = this.currentProfile()
    const id = currentUser._id;
    this.$store.dispatch({ type: "getById", id })
  },
  methods: {
    getClass(reservation) {
      if (reservation.status === "pending") return { yellow: true };
      else if (reservation.status === "confirmed") return { green: true };
      else return { red: true };
    },
    answerReservation(reservation, status) {
      this.$store.dispatch({ type: "request", reservation,status});
    },
      currentProfile() {
      return this.$store.getters.getCurrentProfile;
    }
  },
  computed: {
    sitter() {
      return this.$store.getters.getCurrentSitter;
    },
  },
  filters: {
    formatTime(timeStamp) {
      return moment(timeStamp).format("hh:mm");
    },
  }
};
</script>

<style scoped lang="scss">
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

.notification-item{
cursor: pointer;
}

.yellow {
  background-color: yellow;
}

.red,
.declined {
  background-color: rgb(151, 0, 0);
}

.declined:hover{
    background-color: rgb(255, 0, 0);
}

.green,
.approve {
  background-color: rgb(0, 71, 0);
}

.approve:hover{
    background-color: rgb(0, 255, 0);
}
</style>
