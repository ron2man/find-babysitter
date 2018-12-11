<template>
  <div class="inbox" v-if="user">
    <!-- TODO:
    1. CHANGE - isRead to isUnread-->
    <!-- START MESSAGE -->
    <div
      @click="goToChat(notification.from)"
      class="message flex align-items-center"
      :class="{ active: !notification.isRead }"
      v-for="(notification, index) in user.notifications"
      :key="index"
    >
      <div class="profile-image" :style="{backgroundImage: 'url(' + notification.img + ')' }"></div>
      <div class="msg-text">
        <!-- {{notification}} -->
        <h3 class="sender-name">{{notification.from}}</h3>
        <!-- <h3 class="text-preview">this is my message to you</h3> -->
        <h4 class="time">{{notification.createdAt | relativeTime}}</h4>
      </div>
      <div class="icon">
        <i v-if="notification.isRead" class="far fa-comment-alt"></i>
        <i v-else class="fas fa-circle"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  date(){
    return {
      currentUser:null
=======
  // props: ['notifications'],
  computed: {
    getNotifications() {
      return this.$store.getters.getCurrentProfile.notifications;
>>>>>>> fb224596a73497afd35bc54ba85c64436af99cea
    }
  },
  created(){
    this.currentUser = this.$store.getters.getCurrentProfile
    const id = this.currentUser._id
    if(this.currentUser.type === 'sitter') this.$store.dispatch({ type: "getById", id })
    else this.$store.dispatch({ type: "getParentById", id })
  },
  computed: {
    user() { 
      if(this.currentUser.type === 'sitter') return this.$store.getters.getCurrentSitter;
      else return this.$store.getters.getCurrentParent;
    },
  },
  methods: {
    goToChat(from) {
      this.$store.dispatch({ type: "changeNotificationStatus", from });
      this.$router.push(`/baby/profile/sitter/${from}/contact`);
    }
  },
};
</script>

<style lang="scss" scoped>
.profile-image {
  width: 60px;
  height: 60px;
  background-color: #ccc;
  background-image: url(https://ffx-small-sites.s3.amazonaws.com/findababysitter/production/ProfileImages/9062d7166ec64150bfcb0a8fe4addb13.jpg);
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border-radius: 50%;
  align-self: center;
  margin: 0 15px;
}

.profile-image.main {
  width: 85px;
  height: 85px;
}
.inbox .message {
  text-align: left;
  padding: 10px 0;
  margin-top: 5px;
  border-bottom: 1px solid black;
}

.message .msg-text > * {
  padding: 5px 0;
}

.message .msg-text .time {
  font-size: 0.8em;
}

.message .icon {
  margin: 0 10px;
}

.active {
  font-weight: bold;
  text-transform: capitalize;
}
</style>
