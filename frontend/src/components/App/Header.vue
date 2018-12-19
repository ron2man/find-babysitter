<template>
    <header class="border-bottom-second-color main-background">

      <div class="content-wraper flex max-width flex-space-between align-items-center">
        <router-link to="/" class="flex">
          <img class="align-self-center logo-img" src="@/../public/logo.png">
        </router-link>

        <nav class="flex flex-space-between">
       <router-link class="hide-on-mobile" tag="a" to="/baby/list">BabySitters</router-link>
       <router-link class="hide-on-mobile" tag="a" to="/about">About</router-link>
       <div class="flex">
       <router-link class="hide-on-mobile" tag="a" to="/">Login </router-link>
       <p  class="hide-on-mobile" style="padding:0 10px">|</p>
       <router-link class="hide-on-mobile" tag="a" to="/"> Signup</router-link>
       </div>
          <i class="fas fa-bars show-on-mobile"></i>
        </nav>
      </div>

    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

header {
  font-size: 1.5em;
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  color: white;
  @media (min-width:767px) {
  nav {
    width:50%;
  }  
  }
}
@media (min-width:767px){
  header{
    height:70px;
    line-height: 70px;
  }
}

.content-wraper{
  height: 100%;
}


.logo-img {
    height: 40px;
  }

@media (min-width:767px){
  
  .logo-img {
    height: auto;
  }
}

</style>
