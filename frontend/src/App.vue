<template>
  <div id="app">
    <!-- <Menu></Menu> -->
    <!-- START HEADER -->
    <header class="flex flex-space-between">
      <div>
        <router-link to="/login"><i class="fas fa-user"></i></router-link>
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
  created() {
    this.$store.dispatch({ type: "getsittersList" });
  }
};
</script>


<style lang="scss" scoped>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
header {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  background-color: #9054ef;
  color:white;
  h1 {
    font-size: 1.5em;
    a, a:active, a:hover {
      color:white;
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
</style>
