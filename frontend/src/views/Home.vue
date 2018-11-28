<template>
  <div class="home">
    <!-- START HERO SECTION -->
    <section class="hero">
      <img alt="babysitter" src="../assets/babysitter.jpg">
      <Search></Search>
    </section>
    <!-- END HERO SECTION -->
    
    <!-- START SECOND SECTION -->
    <TopSitters></TopSitters>
    <!-- END SECOND SECTION -->
    
    <!-- START THIRD SECTION -->
    <HowManyUsed></HowManyUsed>
    <!-- END THIRD SECTION -->

        <!-- START SECOND SECTION -->
    <TopSitters></TopSitters>
    <!-- END SECOND SECTION -->
    <section style="background-color:blue;">
      <h2>בואו ללמוד איך משתמשים באתר</h2>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Home/Search.vue";
import TopSitters from "@/components/Home/TopSitters.vue";
import HowManyUsed from "@/components/Home/HowManyUsed.vue";



export default {
  name: "home",
  components: {
    Search,
    TopSitters,
    HowManyUsed
  }

};
</script>

<style lang="scss" scoped>
section {
  margin-bottom:5%;
}
.home {
  .hero{
  background-color: lightblue;
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
