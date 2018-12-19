<template>
  <!-- DISABLE - SELECT - THE USER CANNOT SELECT TEXT - SETTINGS => STYLE.SCSS -->
  <div id="app" class="disable-select">
  
    <!-- START HEADER -->
    <HeaderCmp></HeaderCmp>
    <!-- END HEADER -->
  
  
    <main>
      <div v-if="isLoading" class="loader-container">
        <div class="lds-dual-ring"></div>
      </div>
      <router-view v-else></router-view>
    </main>

    <footer class="main-background flex align-items-center flex-space-evenly outline-second-color">
      <!-- CONECTED -->
      <template v-if="currUser" class="footer-items">
        <div
          class="profile-image main"
          :style="{backgroundImage: 'url(' + currUser.imgUrl + ')' }"
          @click="goToProfile"
        ></div>
        <p class="name" @click="goToProfile">Hey {{currUser.name.fName}}</p>
        <p class="second-color">|</p>
        <p class="messages" @click="goToProfile">
          <i class="fas fa-comments"></i>
          <span>{{getUnredNotificationLength()}}</span>
        </p>
        <p class="second-color">|</p>
        <p class="schedules" @click="goToProfile">
          <i class="fas fa-calendar-alt"></i>
          <span>{{currUser.reservations.length}}</span>
        </p>
        <p class="second-color">|</p>
        <p class="logout" @click="checkIfLogin">Logout</p>
      </template>
      <!-- BEFORE LOGIN -->
      <template v-else>
        <p class="login-txt" @click="checkIfLogin">Login</p>
        <p class="second-color">|</p>
        <p class="signup-txt">Signup</p>
      </template>
      <!-- <div class="login">Login</div> -->
    </footer>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import HeaderCmp from "./components/App/Header";

export default {
  components: {
    HeaderCmp,
    Menu
  },
  data() {
    return {};
  },
  mounted() {
    console.log(
      "%c  ",
      "font-size: 176px; background: url(https://ih1.redbubble.net/image.15114079.5257/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u2.jpg) no-repeat;"
    );
    console.log(
      "%c App Created Succusfully ->  \n It's all good, man",
      "color:black;background-color:#a26ea1;font-size:1.2em"
    );

    // INJECT NOTIFICATIONS TO DOCUMENT>TITLE
    console.log(this.currUser);
    if (this.currUser)
      document.title = `Find a BabySitter (${this.currUser.reservations.length +
        this.currUser.notifications.length})`;
    else document.title = "Find a BabySitter";
  },
  created() {
    this.$store.dispatch({ type: "getsittersList" });
    this.$store.dispatch({ type: "checkIfLogin" });
  },
  sockets: {
    getNotifactions() {
      this.$store.dispatch({ type: "checkIfLogin" });
    }
  },
  methods: {
    checkIfLogin() {
      if (this.currUser) {
        this.$router.push("/login");
        this.$store.dispatch("logout");
      } else {
        this.$store.dispatch({ type: "checkIfLogin" }).then(ans => {
          if (ans) this.$router.push("/");
          else this.$router.push("/login");
        });
        this.curFrUser = this.$store.getters.setLoginUser;
      }
    },
    getUnredNotificationLength() {
      var unreadSum = this.currUser.notifications.filter(
        notice => notice.isRead === false
      );
      return unreadSum.length;
    },
    goToProfile() {
      if (!this.currUser) this.$router.push("/login");
      else if (this.currUser.type === "sitter")
        this.$router.push(
          // `/baby/profile/sitter/${this.currUser.username}/notifications`
          `/baby/profile/${this.currUser.username}`
        );
      else if (this.currUser.type === "parent")
        this.$router.push(
          // `/baby/profile/parent/${this.currUser.username}/notifications`
          `/baby/profile/${this.currUser.username}`
        );
    }
  },
  computed: {
    currUser() {
      return this.$store.getters.getCurrentProfile;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    }
  }
};
</script>


<style lang="scss" scoped>
.profile-image:hover {
  cursor: pointer;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-decoration: none;
}

// .welcome-title {
//   text-decoration: none;
//   margin-left: 20px;
// }

// .login-icon {
//   margin-top: 20px;
// }

.footer-items,
p:hover {
  cursor: pointer;
}

.login-txt {
  font-size: 16px;
  line-height: 2;
}

.login-txt:hover {
  cursor: pointer;
}

.signup-txt:hover {
  cursor: pointer;
}

// .right-nav-items {
//   width: 100px;
// }

.loader-container {
  height: 50vh;
  display: flex;
}

.lds-dual-ring {
  margin: auto;
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid black;
  border-color: #a26ea1 transparent #a26ea1 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

footer {
  color: white;
  height: 50px;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  .profile-image {
    width: 40px;
    height: 40px;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border-radius: 50%;
    align-self: center;
    margin: 0 5px;
  }
  .name {
    text-transform: capitalize;
  }
  i {
    padding: 0 5px;
  }
}
</style>
