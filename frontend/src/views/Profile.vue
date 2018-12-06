<template>
  <div class="profile-container">
    <!-- La La La {{user}} -->
    <div class="profile-head flex space-between align-items-center">
      <div class="profile-image main" :style="{backgroundImage: 'url(' + user.imgUrl + ')' }"></div>
      <div class="name">
        <h2>{{user.name.fullName}}</h2>
        <!-- <h3>Edit Profile</h3> -->
      </div>
      <div class="edit-icon">
        <i class="fas fa-user-edit"></i>
      </div>
    </div>
    <div class="buffer"></div>
    <div class="tabs flex space-evenly">
      <a href class="tab inbox active">inbox
        <!-- HERE COMES NOTIFICATION -->
        <span>(1)</span>
      </a>
      <p class="div">|</p>
      <a href class="tab schedule">
        Calender
        <span>(2)</span>
      </a>
      <p class="div">|</p>
      <a href class="tab history">Requested</a>
    </div>

    <div class="inbox">
      <!-- START MESSAGE -->
      <div class="message flex align-items-center space-between active" :class="{ active: notification.isRead }" v-for="(notification, index) in user.notifications" :key="index" >
        <div class="profile-image"></div>
        <div class="msg-text">
            <!-- {{notification}} -->
          <h3 class="sender-name">{{notification.from}}</h3>
          <h3 class="text-preview">this is my message to you</h3>
          <h4 class="time">{{notification.createdAt}} - 10 days ago</h4>
        </div>
        <div class="icon">
          <!-- <i class="far fa-comment-alt"></i> -->
          3
          <i class="fas fa-circle"></i>
        </div>
      </div>
      <!-- END MESSAGE -->
      <!-- START MESSAGE -->
      <!-- <div class="message flex align-items-center space-between">
        <div class="profile-image"></div>
        <div class="msg-text">
          <h3 class="sender-name">Lilah Asulin</h3>
          <h3 class="text-preview">this is my message to you</h3>
          <h4 class="time">26/11/2018 - 10 days ago</h4>
        </div>
        <div class="icon">
          <i class="far fa-comment-alt"></i> -->
          <!-- <i class="fas fa-circle"></i> -->
        <!-- </div> -->
      <!-- </div> -->
      <!-- END MESSAGE -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {};
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
  background-color: gray;
  /* height: 85px; */
  padding: 10px 0;
}

.buffer {
  height: 15px;
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
  background-color: #ccc;
}

.tabs .tab {
  text-align: center;
  color: red;
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
</style>
