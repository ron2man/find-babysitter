<template>
  <section v-if="this.currParent">
    <div
      class="requests-item-container"
      v-for="(reservation,i) in this.currParent.reservations"
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
    // this.currentUser = this.$store.getters.getCurrentProfile._id
    const parentId = this.$store.getters.getCurrentProfile._id;
    this.$store.dispatch('getParentById',parentId);
  },
  methods: {
    getClass(reservation) {
      if (reservation.status === "pending") return { yellow: true };
      else if (reservation.status === "confirmed") return { green: true };
      else return { red: true };
    },
    getTime(timeStamp) {
      return moment(timeStamp).format("hh:mm");
    }
  },
  computed:{
      currParent(){
         return this.$store.getters.getCurrentProfile
      }
  }
};
</script>

<style scoped lang="scss">
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
