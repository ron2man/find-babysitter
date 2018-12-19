<template>
  <div class="home">
    <!-- START HERO SECTION -->
    <section class="hero">
      <div class="container-head flex flex-space-evenly">
        <div class="headlines">
          <h2>
            <i class="fas fa-child"></i> Find a BabySitter
          </h2>
          <!-- <br class="show-in-mobile"> -->
          <h3>by Location, Time and Rating</h3>
        </div>
        <div class="search">
          <div>
            <i class="fas fa-map-marker-alt"> </i> <i class="fas fa-check"></i> <i class="fas fa-crosshairs"></i> Where
          </div>
          <div class="shalosh" style="margin-right:20px;">
            <i class="far fa-calendar-alt"> </i> When
          </div>
          <div class="shalosh" style="margin-right:10px;">
            <i class="far fa-clock"> </i> Starts
          </div>
          <div class="shalosh">
            <i class="fas fa-clock"> </i> Ends
          </div>
          <br>
          <button>Find a BabySitter</button>
        </div>
      </div>
    </section>
    <!-- END HERO SECTION -->
    <!-- START SEARCH SECTION -->
    <!-- <section class="search">
        <Search2></Search2>
    </section>-->
    <!-- END SEARCH SECTION -->
    <!-- START SECOND SECTION -->
    <section class="top-sisters">
      <TopSitters></TopSitters>
    </section>
    <!-- END SECOND SECTION -->
    <!-- START THIRD SECTION -->
    <HowManyUsed></HowManyUsed>
    <!-- END THIRD SECTION -->
    <!-- START SECOND SECTION -->
    <section class="top-sisters">
      <TopSitters></TopSitters>
    </section>
    <!-- END SECOND SECTION -->
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
  .home {
    // max-width: 1200px;
    // margin: 0 auto;
  }
  .show-in-mobile {
    display: none;
  }
}

.hero {
  display: flex;
  position: relative;
  height: calc(100vh - 400px);
  background: linear-gradient(
      rgba(87, 11, 185, 0.15),
      rgba(87, 11, 185, 0.15),
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.95)
    ),
    url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s37-name-10565-job55-l_1.jpg?w=2560&dpr=1&fit=default&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&markpad=13&markalpha=90&markscale=10&markx=25&ixlib=js-1.1.1&s=f1ae2e65564f527a205c747335eed92a");
  // url('https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441564/76561490-peque%C3%B1os-ni%C3%B1os-amigos-sonriendo-juntos.jpg');
  // url(../assets/babysitter.jpg);

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: 25% 25%;
  .headlines {
    font-family: "Alfa Slab One", cursive;
    // position: absolute;
    // width: 100%;

    // bottom: 0;
  }
  .container-head {
    // display: flex;
    justify-content: space-evenly;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid red;
    // position: absolute;
    align-items: flex-end;
    // bottom: 0;
  }
  .search {
    width: 320px;
    // height: 200px;
    background-color: rgba(0, 0, 0, 0.3);
    div {
      background-color: #ccc;
      padding: 10px;
      margin: 10px 0;
      min-width: 248px;
      max-width: 248px;
      text-align: left;
      i{
        padding-right: 5px;
      }
    }
    .shalosh {
      width: 30%;
      min-width: 48px;
      max-width: 70px;
      display: inline-block;
    }
  }

  h2 {
    margin: 10px 0;
    color: white;
    font-size: 2em;
    // line-height: 2em;
    text-align: center;
  }
  h3 {
    color: #a26ea1;
    font-size: 1em;
    letter-spacing: 2px;
  }
  @media (min-width: 767px) {
    height: calc(100vh - 600px);
    h2 {
      font-size: 3.5em;
    }
    h3 {
      font-size: 2em;
    }
  }
}

.search {
  // padding: 15px;
  background: black;
  // margin-bottom: 20px;
}

.top-sisters {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
