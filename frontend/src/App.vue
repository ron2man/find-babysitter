<template>
  <div id="app">
    <!-- <Menu></Menu> -->
    <!-- START HEADER -->
    <header class="flex flex-space-between">
      <!-- <div> -->
      <!-- <router-link @click="checkIfLogin"> -->
      <div class="flex column">
        <i class="fas fa-user login-icon" @click="goToProfile"></i>
        
      </div>

      <!-- <span class="welcome-title" v-if="currUser">Hello {{currUser.name}}</span> -->
      <!-- </router-link> -->
      <!-- </div> -->
      <h1 class="logo">
        <router-link to="/">BabySitter</router-link>
      </h1>

    
      <nav class="right-nav-items flex flex-space-between align-items-center">
      <h2 class="login-txt" @click="checkIfLogin">{{(currUser)? 'Logout' : 'Login'}}</h2>
        <i class="fas fa-bars"></i>
      </nav>
    </header>
    <!-- END HEADER -->
    <main>
      <div v-if="isLoading"  class="loader-container">
      <div class="lds-dual-ring"></div>
      </div>
      <router-view v-else></router-view>
    </main>

    <footer></footer>
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
  created() {
    this.$store.dispatch({ type: "getsittersList" });
    this.$store.dispatch({ type: "checkIfLogin" });
  },
  methods: {
    checkIfLogin() {
      if(this.currUser){
        this.$router.push("/login");
        this.$store.dispatch("logout")
      } 
      else {
        this.$store.dispatch({ type: "checkIfLogin" }).then(ans => {
          if (ans) this.$router.push("/");
          else this.$router.push("/login");
        });
        this.curFrUser = this.$store.getters.setLoginUser;
      }
    },
    goToProfile(){
      if (!this.currUser) this.$router.push('/login')
      else if (this.currUser.type==='sitter') this.$router.push(`/baby/profile/sitter/${this.currUser.username}/notifications`);
      else if (this.currUser.type==='parent') this.$router.push(`/baby/profile/parent/${this.currUser.username}/notifications`);
    }
   
  },
  computed: {
    currUser() {
      return this.$store.getters.setLoginUser;
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
  font-size: 1.7em;
  text-decoration: none;
  height: 75px;
  line-height: 75px;
  padding: 0 15px;
  background-color: #9054ef;
  color: white;
  h1 {
    a,
    a:active,
    a:hover {
      color: white;
      text-decoration: none;
    }
  }
}

#nav {
  // padding: 30px;
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

.right-nav-items{
    width: 100px;
}

.loader-container{
  height: 50vh;
  display:flex;
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
  border-color: #9054ef transparent #9054ef transparent;
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
</style>
