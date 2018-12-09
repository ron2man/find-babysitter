<template>
  <div class="profile-container">
    <div class="profile-head flex space-between align-items-center">
      <div class="profile-image main" :style="{backgroundImage: 'url(' + user.imgUrl + ')' }"></div>
      <div class="name">
        <h2>{{user.name.fullName}}</h2>
      </div>
      <div class="edit-icon">
        <i class="fas fa-user-edit"></i>
      </div>
    </div>
    <div class="buffer"></div>
    <div class="tabs flex space-evenly">
      <router-link to="notifications" class="tab inbox">
        inbox
        <span>({{user.notifications.length}})</span>
      </router-link>

      <p class="div">|</p>

      <router-link to="schedule" class="tab schedule">
        Schedule
        <span>({{user.schedule.length}})</span>
      </router-link>

      <p class="div">|</p>

      <router-link to="requests" class="tab history">Requested <span>({{user.reservations.length}})</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getCurrentProfile;
    }
  }
};
</script>

<style lang="scss" scoped>
a,
a:visited,
a:active,
a:hover,
a:link {
  color: initial;
  text-decoration: none;
}

.flex {
  display: flex;
}

.space-evenly {
  justify-content: space-evenly;
}

.space-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

.profile-head {
  background-color: #ffff9d;
  /* height: 85px; */
  padding: 10px 0;
}

.buffer {
  height: 3px;
  background-color: black;
}

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

.profile-head .name h2 {
  text-transform: capitalize;
  font-size: 1.6em;
  margin-bottom: 5px;
}

.profile-head .name h3 {
  text-decoration: underline;
  color: white;
}

.profile-head .edit-icon {
  padding: 0 15px;
  font-size: 1.4em;
}

/*  */
.tabs {
  /* border-bottom: 1px solid black; */
  background-color: #a26ea1;
}

.tabs .tab {
  text-align: center;
  color: white;
  text-transform: capitalize;
  /* font-weight: bold; */
  max-height: 50px;
  line-height: 50px;
  height: 50px;
}

p.div {
  line-height: 50px;
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

.router-link-active{
  font-weight: 700;
  color: black;
  text-transform: capitalize;
}
</style>
