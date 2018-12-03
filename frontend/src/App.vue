<template>
  <div id="app">
    <!-- <Menu></Menu> -->
    <!-- START HEADER -->
    <header class="flex flex-space-between">
      <div>
        <!-- <router-link @click="checkIfLogin"> -->
        <i class="fas fa-user" @click="checkIfLogin"></i>
        <span class="welcome-title" v-if="currUser">Hello {{currUser.name}}</span>
        <!-- </router-link> -->
      </div>
      <h1 class="logo">
        <router-link to="/">BabySitter</router-link>
      </h1>
      <nav>
        <i class="fas fa-bars"></i>
      </nav>
    </header>
    <!-- END HEADER -->
    <main>
      <router-view/>
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
    return {
      currUser: null
    };
  },
  created() {
    this.$store.dispatch({ type: "getsittersList" });
    this.$store.dispatch({ type: "checkIfLogin" });
    this.currUser = this.$store.getters.setLoginUser;
  },
  methods: {
    checkIfLogin() {
      this.$store.dispatch({ type: "checkIfLogin" }).then(ans => {
        if (ans) this.$router.push("/");
        else this.$router.push("/login");
      });
      this.currUser = this.$store.getters.setLoginUser;
    }
  },
  computed: {
    setCurrUser() {
      this.currUser = this.$store.getters.setLoginUser;
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
    font-size: 1.5em;
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
</style>
