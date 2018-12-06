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
    <div
      class="requests-item-container"
      v-for="(reservation,i) in sitter.reservations"
      :key="i"
      :class="getClass(reservation)"
    >
      <i class="fas fa-comments message-awsome"></i>
      <p class="notice-head">Parent: {{reservation.from}}</p>
      <p class="notice-head">date: {{reservation.date}}</p>
      <p class="notice-head">From: {{getTime(reservation.start)}}</p>
      <p class="notice-head">To: {{getTime(reservation.end)}}</p>
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
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const id = currentUser._id;
    this.$store.dispatch({ type: "getSitterId", id }).then(console.log());
  },
  methods: {
    getClass(reservation) {
      if (reservation.status === "pending") return { yellow: true };
      else if (reservation.status === "confirmed") return { green: true };
      else return { red: true };
    },
    getTime(timeStamp) {
      return moment(timeStamp).format("hh:mm");
    },
    answerReservation(reservation, state) {
      this.$store.dispatch({ type: "request", details: reservation, state });
    }
  },
  computed: {
    // sitter() {
    //   return this.$store.getters.getCurrentUser;
    // },

    sitter() {
      return this.$store.getters.getCurrentProfile;
    }
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

.yellow {
  background-color: yellow;
}

.red,
.declined {
  background-color: red;
}

.green,
.approve {
  background-color: green;
}
</style>
