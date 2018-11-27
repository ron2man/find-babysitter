<template>
  <div class="home">

    <!-- START HERO SECTION -->
    <section class="hero">
      <img alt="babysitter" src="../assets/babysitter.jpg">
    <Search></Search>
    </section>
    <!-- END HERO SECTION -->


    <section>
      <h2>2589 שמרטפים זמינים עכשיו</h2>
    </section>

    <section style="background-color:blue;">
      <h2>בואו ללמוד איך משתמשים באתר</h2>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Search from "@/components/Home/Search.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Search,
  }

};
</script>

<style lang="scss" scoped>
.home {
  background-color: lightblue;

  .hero{
    img {
      width: 100%;
    height: 175px;
    object-fit: cover;
  }
  @media  (min-width: 767px) {
   img{
     height: 400px;
     margin-bottom:20px;
   } 
  }
  


  }

}
</style>
