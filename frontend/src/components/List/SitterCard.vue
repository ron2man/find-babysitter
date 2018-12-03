<template>
  <div class="card">
    <div class="card-header">
      <div class="image" :style="{backgroundImage: 'url(' + sitter.imgUrl + ')' }"></div>
      <div class="details">
        <h2 class="name">{{sitter.name.fullName}}</h2>
        <h3 class="address">{{sitter.adress.street}} {{sitter.adress.city}}</h3>
        <p>{{sitter.adress.district}}</p>
      </div>
      <div class="buttons">
        <div class="contact"  @click="sendMessage(sitter)">
          <h4>Contact</h4>
          <i class="far fa-comments"></i>
        </div>
        <div class="bookmark">
          <h4>Bookmark</h4>
          <i class="far fa-heart"></i>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="verifaction">
        <div class="icon">
          <i class="fas fa-medal"></i>
        </div>
        <div class="text">
          <p class="bold">Several children at the same time</p>
          <p>Rating:
            <span class="bold">4.4</span>
            <span> (Rated
              <span class="bold">429</span> Times)
            </span>
          </p>
        </div>
      </div>

      <div class="looking-for">
        <p>
          <span class="bold">Looking For:</span> {{sitter.time}}
        </p>
      </div>

      <div class="about-me">
        <!-- CHECK IF IN SITTER LIST OR PROFILE  -->
        <!-- RENDER FULL DEATAILS - ABOUT -->
        <p v-if="this.sitter._id === this.$route.params.id">
         {{sitter.about}} 
        </p>
        <!-- RENDER SHORT DEATAILS - ABOUT + READ MORE -->
        <p v-else>
         {{shortDetails}} ... <router-link :to="sitterUrl">read more</router-link>
        </p>
      </div>
    </div>
    <div class="card-icons">
      <div class="icon tooltip">
        <i class="fas fa-smoking-ban"  :class="{black: !sitter.smoking}"></i>
        <span class="tooltiptext tooltip-top">Non-Smoker</span>
      </div>

      <div class="icon tooltip">
        <i class="fas fa-id-card item-awsome"  :class="{black: sitter.license}"></i>
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
        <i class="fas fa-file item-awsome"  :class="{black: sitter.recomandation}"></i>
        <span class="tooltiptext tooltip-top">Has recomendation</span>
      </div>

      <div class="icon tooltip">
        <i class="fas fa-broom item-awsome"  :class="{black: sitter.clean}"></i>
        <span class="tooltiptext tooltip-top">Clean</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sitter"],
  created(){
    // console.log(this.sitter)
  },
  methods: {
    goToDetails(id) {
      this.$router.push(`/baby/${id}`);
    },
    sendMessage(sitter) {
      this.$store.dispatch({type:'checkLogin'})
        .then(user => {
          if(!user)this.$router.push("/login")
          else this.$router.push(`profile/parent/${sitter.username}/contact`)
        })
    },
  },
  computed: {
    getLength() {
      if (this.sitter.description.length > 180) {
        const newDesc = this.sitter.description.substring(180, length - 1);
        return newDesc;
      } else {
        return this.sitter.description;
      }
    },
    shortDetails(){
      return this.sitter.about.substring(0,275)
    },
    sitterUrl(){
      return `/baby/list/${this.sitter._id}`
    }
  },
 
};</script>

<style lang="scss" scoped>
/* MOBILE FIRST   */
.card {
  text-align: left;
  max-width: 466px;
  min-width: 360px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.card-header {
  height: 150px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
}

.card-header .image {
  width: 60px;
  height: 60px;
  background-color: #ccc;
  background-image: url(https://ffx-small-sites.s3.amazonaws.com/findababysitter/production/ProfileImages/9062d7166ec64150bfcb0a8fe4addb13.jpg);
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
}

.card-header .details .name {
  color: #9054ef;
}

h2,
h3,
h4,
p,
div,
body,
html {
  padding: 0;
  margin: 0;
}

i {
  font-size: 1.5em;
}

.card-header .buttons {
  text-align: center;
  max-width: 80px;
  width: 80px;
  cursor: pointer;
}

.card-header .buttons .contact {
  background-color: #771144;
  color: white;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: .2s all
}

.contact:hover{
    background-color: #c19aff;
}

.card-header .buttons .bookmark {
  background-color: #fd0054;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  color: #9054ef;
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

.black{
  color:black;
}

.icon{
  color: #d5d5d5;
}

.name{
  font-weight: bold;
  text-transform: capitalize;
  font-size: 25px;
  margin-bottom: 3px;
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
