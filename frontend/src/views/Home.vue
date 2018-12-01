<template>
  <div class="home">
    <!-- START HERO SECTION -->
    <section class="hero">
      <h2>
        <i class="fas fa-child"></i> Find a BabySitter -
        <br class="show-in-mobile">by Location, Date and Time:
      </h2>
    </section>
    <!-- END HERO SECTION -->

    <!-- START SEARCH SECTION -->
    <section class="search">
      <Search2></Search2>
    </section>
    <!-- END SEARCH SECTION -->

    <!-- START SECOND SECTION -->
    <section class="top-sisters">
      <TopSitters></TopSitters>
    </section>
    <!-- END SECOND SECTION -->
    <!-- START THIRD SECTION -->
    <HowManyUsed></HowManyUsed>
    <!-- END THIRD SECTION -->


  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Home/Search.vue";
import Search2 from "@/components/Home/Search2.vue";
import TopSitters from "@/components/Home/TopSitters.vue";
import HowManyUsed from "@/components/Home/HowManyUsed.vue";

export default {
  name: "home",
  components: {
    Search,
    Search2,
    TopSitters,
    HowManyUsed
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 767px) {
  .show-in-mobile {
    display: none;
  }
}

.hero {
  position: relative;
  height: calc(100vh - 400px);
  background: linear-gradient(
      rgba(87, 11, 185, 0.15),
      rgba(87, 11, 185, 0.15),
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.95)
    ),
    url(../assets/babysitter.jpg);

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;


  h2 {
    color: white;
    position: absolute;
    bottom: 0;
    font-size: 1.3em;
    line-height: 1.3em;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 767px) {

    h2 {
      font-size: 1.7em;
      line-height: 1.7em;
    }
  }
}

.search {
  padding: 15px;
  background: black;
  margin-bottom: 20px;
}

.top-sisters{
  max-width:1200px;
  margin: 0 auto;
}
</style>
