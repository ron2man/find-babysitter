



<template>
  <section>
    <router-link class="back-route" to="/baby/list">Back to list</router-link>
    <div class="profile-header-container">
      <img
        src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
      >
      <div class="summery-detail-container"  v-if="this.userName">
        <h1>Send  {{this.userName}} a message</h1>
        <!-- <p class="sitter-name"> hello{{parent.nickName}}</p> -->
      </div>
    </div>
    <div class="tabs-container flex flex-space-around">
      <router-link class="item-route align-self-center" to="notifications">Inbox</router-link>
      <router-link class="item-route align-self-center" to="requests">Requests</router-link>
      <router-link class="item-route align-self-center" to="details">Schedule</router-link>
      <router-link class="last-item-route align-self-center" to="Schedule">Album</router-link>
    </div>
    <router-view/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currSitter: null,
      userName:''
    };
  },

  created() {
    this.userName = this.$route.params.userName;
  }
};
</script>





<style lang="scss" scoped>
.summery-detail-container {
  font-size: 25px;
  font-weight: bold;
}

.back-route {
  background-color: #ffb480;
  display: block;
  color: white;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  margin-bottom: 20px;
  width: 150px;
  float: right;
}

.profile-header-container {
  height: 120px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
}

img {
  height: 120px;
  margin: 30px;
}

.tabs-container {
  font-size: 30px;
  height: 50px;
  color: buttontext;
  background-color: buttonface;
  padding: 2px 6px 3px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonface;
}

.item-route {
  text-decoration: none;
  border-right: solid 1px gray;
  padding: 0 10px;
}

.last-item-route {
  text-decoration: none;
}
</style>
