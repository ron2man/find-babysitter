<template>
  <div class="card">
    <!-- PICTURE - NAME - DISTANCE - AGE -->
    <div class="card-header flex flex-space-evenly second-background">
      <div class="image" :style="{backgroundImage: 'url(' + sitter.imgUrl + ')' }"></div>
      <div class="details">
        <h3 class="name main-color">{{sitter.name.fullName}}</h3>
        <h4 class="address">{{showDistance}}</h4>
        <h5>{{sitter.age}} years old</h5>
        <!-- <h5 class="rating">
          {{sitter.aveRate}}
          <i style="font-size:1rem" class="fas fa-star star"></i> (1234)
        </h5> -->
      </div>
      <!-- <div class="buttons">
        <div v-if="notSitter" class="contact" @click="sendMessage(sitter)">
          <h4 class="book-now">Book Now</h4>
          <i class="far fa-comments"></i>
        </div>
        <div class="bookmark">
          <div class="flex">
            <i class="fas fa-star star"></i>
            <span class="rating-big bold">{{sitter.aveRate}}</span>
          </div>
          <span>
            (
            <span class="bold">429</span>)
          </span>
        </div>
      </div>-->
    </div>


    <!-- START BUTTONS - BOOK ME + MORE DETAILS -->
    <div class="card-buttons flex align-items-center flex-space-evenly main-background">
      <!-- <router-link class="more-details" :to="sitterUrl" v-if="notSitter">More details</router-link> -->
      <router-link class="btn main-color" :to="sitterUrl"><i class="far fa-calendar-plus"></i> Book Me</router-link>
      <p class="main-color"> | </p>
      <router-link class="btn main-color" :to="sitterUrl"><i class="fas fa-info"></i> More details</router-link>
    </div>
    <!-- END BUTTONS - BOOK ME + MORE DETAILS -->

    <!-- START DETAILS - WAGE + RATING -->
    <div class="card-wage-rating flex align-items-center flex-space-evenly main-background">
      <h5 class="wage">{{sitter.hWage}} ILS</h5>
              <h5><span class="rate flex align-items-center">{{sitter.aveRate}}  <i style="font-size:1rem" class="fas fa-star star"></i></span>
                <span class="votes">(1234)</span>
           
        </h5>
    </div>

    <!-- <div class="card-body">
      <div class="verifaction">
        <div class="icon">
          <i class="fas fa-medal"></i>
        </div>
        <div class="text">
          <p class="bold">Several children at the same time</p>
        </div>
      </div>

      <div class="looking-for">
        <p>
          <span class="bold">Looking For:</span>
          {{sitter.time}}
        </p>
      </div>
      <div class="looking-for" v-if="sitter.experience">
        <p>
          <span class="bold">Experience:</span>
          {{sitter.experience}} years
        </p>
      </div>
      <div class="looking-for">
        <p>
          <span class="bold">Love to work with:</span>
          {{sitter.agePrefs}}
        </p>
      </div>
      <div class="looking-for">
        <p>
          <span class="bold">Age:</span>
          {{sitter.age}}
        </p>
      </div>
      <div class="looking-for">
        <p>
          <span class="bold">Hourly wages:</span>
          {{sitter.hWage}} ILS
        </p>
      </div> -->

      <!-- <div class="about-me"> -->
      <!-- <p> -->
      <!-- About {{sitter.name.fName}}: -->
      <!-- <br> -->
      <!-- CHECK IF IN SITTER LIST OR PROFILE  -->
      <!-- RENDER FULL DEATAILS - ABOUT -->
      <!-- </p> -->
      <!-- <p v-if="this.sitter._id === this.$route.params.id">{{sitter.about}}</p> -->
      <!-- RENDER SHORT DEATAILS - ABOUT + READ MORE -->
      <!-- <p v-else> -->
      <!-- {{shortDetails}} ... -->
      <!-- <div class="more-details" @click="sitterUrl" v-if="notSitter">More details</div> -->
      <!-- </p> -->
      <!-- </div> -->
    <!-- </div> -->

    <div class="card-icons">
      <div class="icon tooltip">
        <i class="fas fa-smoking-ban" :class="{black: !sitter.smoking}"></i>
        <span class="tooltiptext tooltip-top">Non-Smoker</span>
      </div>

      <div class="icon tooltip">
        <i class="fas fa-id-card item-awsome" :class="{black: sitter.license}"></i>
        <span class="tooltiptext tooltip-top">Has driver License</span>
      </div>

      <div class="icon tooltip">
        <i class="fas fa-car item-awsome" :class="{black: sitter.car}"></i>
        <span class="tooltiptext tooltip-top">Has car</span>
      </div>

      <div class="icon tooltip">
        <i class="fas fa-briefcase-medical item-awsome" :class="{black: sitter.medical}"></i>
        <span class="tooltiptext tooltip-top">Medical treatment</span>
      </div>

      <div class="icon tooltip">
        <i class="fas fa-file item-awsome" :class="{black: sitter.recomandation}"></i>
        <span class="tooltiptext tooltip-top">Has recomendation</span>
      </div>

      <div class="icon tooltip">
        <i class="fas fa-broom item-awsome" :class="{black: sitter.clean}"></i>
        <span class="tooltiptext tooltip-top">Clean</span>
      </div>
    </div>
  </div>
</template>

<script>
import BusService, { SITTER_DET } from "@/service/EventBusService.js";

export default {
  props: ["sitter"],
  created() {},
  methods: {
    calcDistance() {
      // calculates great-circle distances between the two points
      let userLng = this.currUser.location.coordinates[0];
      let userLat = this.currUser.location.coordinates[1];
      let sitterLng = this.sitter.location.coordinates[0];
      let sitterLat = this.sitter.location.coordinates[1];

      var R = 6371; // Radius of the earth in km
      let dLat = deg2rad(sitterLat - userLat); // deg2rad below
      let dLon = deg2rad(sitterLng - userLng);
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(userLat)) *
          Math.cos(deg2rad(sitterLat)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;

      function deg2rad(deg) {
        return deg * (Math.PI / 180);
      }
    },
    goToDetails(id) {
      this.$router.push(`/baby/${id}`);
    },
    sendMessage(sitter) {
      BusService.$emit(SITTER_DET, sitter);
      this.$store.dispatch({ type: "checkLogin" }).then(user => {
        const path = `/baby/profile/parent/${sitter.username}/contact`;
        if (!user) this.$router.push(`/login?path=${path}`);
        else this.$router.push(path);
      });
    },
    sitterUrl() {
      console.log(this.sitter._id)
      this.$router.push(`/baby/list/${this.sitter._id}`);
    }
  },
  computed: {
    showDistance() {
      let distance = this.calcDistance();
      let roundDistance = Math.round(distance);

      if (distance < 1)
        return `${Math.round(distance * 1000)} m - can't get closer`;
      else if (roundDistance < 10) return `${roundDistance} Km - very close`;
      else return `${roundDistance} Km`;

      return distance;
    },
    getLength() {
      if (this.sitter.description.length > 180) {
        const newDesc = this.sitter.description.substring(180, length - 1);
        return newDesc;
      } else {
        return this.sitter.description;
      }
    },
    shortDetails() {
      return this.sitter.about.substring(0, 100);
    },
    currUser() {
      return this.$store.getters.setLoginUser;
    },
    notSitter() {
      if (this.currUser) {
        if (this.currUser.type !== "sitter") return true;
      } else return true;
    }
  }
};
</script>

<style lang="scss" scoped>
/* MOBILE FIRST   */
.card {
  margin: 0 auto;
  text-align: left;
  max-width: 466px;
  min-width: 320px;
  max-width: 320px;
  box-sizing: border-box;
  // border: 1px solid grey;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.card-header {
  height: 120px;
  border-bottom: 1px solid gray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-header .image {
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100px;
  height: 100px;
  background-color: #ccc;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border-radius: 50%;
  align-self: center;
  margin-left: 10px;
}

.card-header .details {
  align-self: center;
  padding: 0 10px;
  h4 {
    padding: 5px 0;
    font-size: 1.3em;
  }
  h5 {
    // font-size: 1.2em;
  }
}

.card-buttons {
  padding: 10px;
  .btn{
    i{
      padding: 0 10px;
      font-size: 1rem;
    }
    text-decoration: none;
    padding:10px;
    border-radius:3px;
  }
}

.card-wage-rating {
  padding: 10px;
  .wage{
    font-size:2em;
  }
  .rate{
    font-size:1.7em;
  }
  .votes{
    font-size:1em;
  }
}

.star {
  color: orange;
}

.rating-big {
  font-size: 30px;
  color: white;
}

i {
  font-size: 1.5em;
}

.card-header .buttons {
  text-align: center;
  max-width: 80px;
  width: 80px;
}

.card-header .buttons .contact {
  cursor: pointer;

  background-color: #ffb480;
  color: black;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.2s all;
}

.contact:hover {
  background-color: #951555;
}

.book-now {
  color: black;
}

.card-header .buttons .bookmark {
  background-color: #ffff9d;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.rating-big {
  color: black;
}

.card-body {
  padding: 0 10px;
  margin-bottom: 20px;
}

.card-body .verifaction {
  display: flex;
  flex: 1;
  height: 75px;
  align-items: center;
  margin-bottom: 20px;
}

.card-body .verifaction .icon {
  width: 48px;
  padding: 0 10px;
  display: inline-block;
}

.card-body .verifaction .icon i {
  font-size: 3em;
  color: #a26ea1;
}

.bold {
  font-weight: bold;
}

.card-body .verifaction .text {
  padding: 0 10px;
  display: inline-block;
}

.card-body .verifaction .text p {
  padding-bottom: 5px;
}

.card-body .looking-for {
  margin-bottom: 30px;
}

.card-body .about-me {
  line-height: 2em;
}

.card-icons {
  border: 0;
  border-top: 1px gray solid;
  padding: 15px 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}

.tooltip {
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; */
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tooltip-top {
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:nth-child(1) .tooltip-top {
  margin-left: 0;
  left: 0;
}

.tooltip:nth-last-child(1) .tooltip-top {
  margin-left: 0;
  left: -75px;
}

.black {
  color: black;
}

.icon {
  color: #d5d5d5;
}

.name {
  font-weight: bold;
  text-transform: capitalize;
  font-size: 25px;
  margin-bottom: 3px;
}

.more-details {
  text-decoration: none;
  border: 1px gray solid;
  width: 110px;
  height: 34px;
  margin: 0 auto;
  text-align: center;
  line-height: 2;
  background-color: #ffb480;
  color: black;
  border-radius: 10px;
}

.more-details:hover {
  cursor: pointer;
}

@media (min-width: 767px) {
  .card-header {
    height: 200px;
  }

  .card-header .image {
    width: 100px;
    height: 100px;
  }

  i {
    font-size: 2em;
  }

  .card-header .buttons {
    max-width: 90px;
    width: 90px;
  }
}
</style>
