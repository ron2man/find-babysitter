<template>
  <div id="app">
    <!-- OLD HEADER -->
    <!-- START HEADER -->
    <!-- <header class="flex flex-space-between align-items-center"> -->
    <!-- <div> -->
    <!-- <router-link @click="checkIfLogin"> -->
    <!-- <div class="flex column"> -->
    <!-- <i class="fas fa-user login-icon" @click="goToProfile"></i> -->
    <!-- </div> -->
    <!-- <span class="welcome-title" v-if="currUser">Hello {{currUser.name}}</span> -->
    <!-- </router-link> -->
    <!-- </div> -->
    <!-- <h1 class="logo">
        <router-link to="/">BabySitter</router-link>
      </h1>  
      <nav class="right-nav-items flex flex-space-between align-items-center">
      <h2 class="login-txt" @click="checkIfLogin">{{(currUser)? 'Logout' : 'Login'}}</h2>
        <i class="fas fa-bars"></i>
      </nav>
    </header>-->
    <!-- END OLD HEADER -->
    <header class="flex border-bottom-second-color main-background">
      <nav>
        <i class="fas fa-bars"></i>
      </nav>
      <h1 class="logo">
        <router-link to="/">Find a BabySitter</router-link>
      </h1>
    </header>

    <main>
      <div v-if="isLoading" class="loader-container">
        <div class="lds-dual-ring"></div>
      </div>
      <router-view v-else></router-view>
    </main>


    <footer class="main-background flex align-items-center flex-space-evenly outline-second-color">
      <!-- CONECTED -->
      <template v-if="currUser">
        <div class="profile-image main" :style="{backgroundImage: 'url(' + currUser.imgUrl + ')' }" @click="goToProfile" ></div>
        <p class="name" @click="goToProfile" >Hey {{currUser.name.fName}}</p>
        <p class="second-color">|</p>
        <p class="messages" @click="goToProfile" ><i class="fas fa-comments"></i> <span>{{getUnredNotificationLength()}}</span></p>
        <p class="second-color">|</p>
        <p class="schedules" @click="goToProfile" ><i class="fas fa-calendar-alt"></i> <span>{{currUser.reservations.length}}</span></p>
        <p class="second-color">|</p>
        <p class="logout" @click="checkIfLogin">Logout</p>

      </template>
      <!-- BEFORE LOGIN -->
      <template v-else>
        <p class="login-txt" @click="checkIfLogin">Login</p>
        <p class="second-color">|</p>
        <p>Signup</p>
      </template>
      <!-- <div class="login">Login</div> -->
    </footer>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  components: {
    Menu
  },
  data() {
    return {};
  },
  mounted(){
    // INJECT NOTIFICATIONS TO DOCUMENT>TITLE
    if (this.currUser) document.title = `Find a BabySitter (${this.currUser.reservations.length + this.currUser.notifications.length})`
    else document.title = 'Find a BabySitter'
  },
  created() {
    this.$store.dispatch({ type: "getsittersList" });
    this.$store.dispatch({ type: "checkIfLogin" });
  },
  sockets:{
    getNotifactions(){
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
    getUnredNotificationLength(){
            var unreadSum = this.currUser.notifications.filter(notice => notice.isRead === false)
            return unreadSum.length
           },
    goToProfile() {
      if (!this.currUser) this.$router.push("/login");
      else if (this.currUser.type === "sitter")
        this.$router.push(
          `/baby/profile/sitter/${this.currUser.username}/notifications`
        )
      else if (this.currUser.type === "parent")
        this.$router.push(
          `/baby/profile/parent/${this.currUser.username}/notifications`
        );
    },
    
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
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-decoration: none;
}
header {
  font-size: 1.5em;
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  color: white;
  
  h1 {
    a,
    a:active,
    a:hover {
      color: white;
      text-decoration: none;
    }
  }
  nav {
    padding-right: 20px;
  }
}

#nav {
  padding: 0 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.welcome-title {
  text-decoration: none;
  margin-left: 20px;
}

.login-icon {
  margin-top: 20px;
}

.login-txt {
  font-size: 16px;
  line-height: 2;
}

.right-nav-items {
  width: 100px;
}

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
  .name{
    text-transform: capitalize;
  }
  i {
    padding: 0 5px;
  }
}
</style>
