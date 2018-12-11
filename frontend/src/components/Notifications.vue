<template>
  <section class="notification-box" v-if="sitter">
    <div
      class="notice-item-container"
      v-for="notification in sitter.notifications"
      :key="notification.from"
    ><i class="fas fa-comments message-awsome" :class="{grey: notification.isRead}"></i>
      <div class="details-container">
        <p class="notice-head">{{notification.from}}</p>
        <p class="notice-head">{{notification.createdAt | relativeTime}}</p>
      </div>
      <button class="notification-item" @click="goToChat(notification.from)">Send Message!</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      counter:0
    };
  },
  created() {
    this.user = this.$store.getters.getCurrentProfile
    const id = user._id;
    console.log(id)
    this.$store.dispatch({ type: "getById", id })

  },
  methods: {
    goToChat(from) {
      this.$store.dispatch({ type: "changeNotificationStatus", from });
      this.$router.push(`/baby/profile/sitter/${from}/contact`);
    }
  },
  computed:{
        sitter() {
      return this.$store.getters.getCurrentSitter;
    },
  }
};
</script>

<style scoped lang="scss">

.message-awsome{
    font-size:40px;
    margin-right: 20px;
    color: black;
}

.notice-item-container{
    margin: 5px;
    border: 1px solid black;
    padding: 5px;
    display: flex
}

.notification-item {
  border: 1px solid grey;
  width: 200px;
  box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.75);
  cursor: pointer;
}

.details-container{
    text-align: left;
    margin-right: 20px;
}

.grey{
    color:grey;
    opacity: 0.4;
}

.notice-head{
    margin-bottom:10px;
    text-transform: capitalize
}
</style>
