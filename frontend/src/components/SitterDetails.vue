<template>
  <section v-if="currSitter._id === this.$route.params.id" class="details-sitter">
    <!-- //link back to list -->
    <div class="btn-container flex justify-contesct-end">
      <button class="contact-btn btn" @click="sendMessage(sitter)">
        <i class="fas fa-comments"></i>
        <!-- <p class="btn-head">Contact</p> -->
      </button>
      <button class="fav-btn btn">
        <i class="fas fa-heart"></i>
        <!-- <p class="btn-head">Favorite</p> -->
      </button>
      <router-link class="router" to="/baby/list">Back to list</router-link>
    </div>
    <div class="summery-container">
      <img :src="sitter.imgUrl">
      <div class="summery-detail-container">
        <p class="sitter-name">{{sitter.name.fullName}}</p>
        <p>{{sitter.adress.city}} | {{sitter.age}}</p>
      </div>
    </div>
    <hr>

    <Button class="btn-book-open" @click="openDate" v-if="isBookButtonOpen">Book Now!</Button>
    <date-time v-if="isBookOpen" :sitter="sitter"></date-time>

    <hr>

    <div class="schedule"></div>

    <div class="about-conatainer flex column">
      <div class="about">
        <div class="about-box">
          <h2 class="about-head">About</h2>
          <p class="date">{{sitter.joinedAt}}</p>
          <div class="rank">
            <i class="fas fa-medal"></i>
            <p class="qualification-expa">{{sitter.description}}</p>
          </div>
          <div class="about-details">
            <p class="about-details-item">Looking for: {{sitter.time}}</p>
            <p class="about-details-item description">{{sitter.about}}</p>
            <span class="head-span">education:</span>
            <p class="about-details-item">highschool</p>
            <span class="head-span">Language:</span>
            <span
              class="about-details-item"
              v-for="(language,i) in sitter.languages"
              :key="i"
            >{{language}}</span>
          </div>
        </div>
        <div class="font-awsome-box flex justify-content-center">
          <div class="icon-box" :class="{black: sitter.license}" title="Has driver License">
            <i class="fas fa-id-card item-awsome"></i>
          </div>
          <div class="icon-box" :class="{black: sitter.vehicle}">
            <i class="fas fa-car item-awsome" title="Has car"></i>
          </div>
          <div class="icon-box" :class="{black: sitter.smoking}" title="Smoking">
            <i class="fas fa-smoking item-awsome"></i>
          </div>
          <div class="icon-box" :class="{black: sitter.medical}" title="Medical treatment">
            <i class="fas fa-briefcase-medical item-awsome"></i>
          </div>
          <div class="icon-box" :class="{black: sitter.recomandation}" title="Has recomendation">
            <i class="fas fa-file item-awsome"></i>
          </div>
          <div class="icon-box" :class="{black: sitter.clen}" title="Clean">
            <i class="fas fa-broom item-awsome"></i>
          </div>
        </div>
      </div>
      <div class="reviews-wrap">
      <h2 class="about-head">Reviews</h2>
        <div class="reviews-box">
          <p class="review" v-for="review in sitter.reviews" :key="review.txt">"{{review.txt}}"</p>
          <i class="fas fa-star orange stars" v-for="(n,i) in getNumberOfStars" :key="i"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dateTime from "./DateTime";

export default {
  components: {
    dateTime
  },
  data() {
    return {
      currSitter: "",
      isBookOpen:false,
      isBookButtonOpen:true
    };
  },
  created() {
    const id = this.$route.params.id;
    this.$store
      .dispatch({ type: "getById", id })
      .then(sitter => (this.currSitter = sitter));
  },
  methods: {
    getNumberOfStars() {
      var ratingSum = this.sitter.reviews.reduce(function(acc, { rating }) {
        return acc + rating;
      }, 0);
      ratingSum = parseInt(ratingSum / this.sitter.reviews.length);
      return ratingSum;
    },
    sendMessage(sitter) {
      this.$store.dispatch({ type: "checkLogin" }).then(user => {
        if (!user) this.$router.push("/login");
        else
          this.$router.push(`/baby/profile/parent/${sitter.username}/contact`);
      });
    },
    openDate(){
      this.isBookOpen = !this.isBookOpen
      this.isBookButtonOpen = !this.isBookButtonOpen
    }
  },
  computed: {
    sitter() {
      return this.$store.getters.getCurrentSitter;
    }
  }
};
</script>

<style scoped lang="scss">
.router {
  background-color: #ffb480;
  display: block;
  color: black;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  margin-bottom: 20px;
  width: 150px;
  float: right;
}

.summery-container {
  height: 120px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
}

img {
    height: 120px;
    width: 120px;
    margin: 30px;
    object-fit: cover;
    border-radius: 50%;
}

.sitter-name {
  color: #ffb480;
  font-weight: bold;
}

.btn {
  height: 40px;
  line-height: 40px;
}

.btn-head {
  width: 150px;
  // display: inline-block;
  // width: 100px;
}

.about-box {
  border: 1px solid black;
  padding: 20px;
  margin: 5px;
  margin-bottom: 20px;
  max-width: 650px;
  margin: 0 auto;
}

.about-head {
  font-size: 20;
  margin-bottom: 20px;
  font-weight: bold;
  color: #ffb480;
}

.date {
  text-align: left;
  margin-bottom: 20px;
}

.btn-book-open{
  border: 1px solid black;
  border-radius: 10px;
  height: 72px;
  width: 130px;
  background-color: #951555;
  color: white;
  cursor: pointer;
  transition: 0.2s all;
}

.rank {
  display: flex;
  width: 240px;
  margin: auto;
}

.qualification-expa {
  width: 210px;
  margin-bottom: 20px;
  line-height: 22px;
}

.about-details {
  text-align: left;
  margin-left: 10px;
}

.about-details-item {
  margin-bottom: 20px;
  margin-top: 5px;
}

.head-span {
  font-weight: bold;
}

.description {
  line-height: 22px;
}

.font-awsome-box {
  margin: 5px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
}

.icon-box {
  height: 60px;
  border: 1px solid black;
  line-height: 60px;
  text-align: left;
  color: rgb(185, 185, 185);
  width: 97px;
}

.item-awsome {
  margin: 0 30px;
  font-size: 30px;
}

.black {
  color: black;
}

.contact-btn {
  background-color: #ffff9d;
  color: black;
  border: 0;
  width: 150px;
}

.fav-btn {
  color: #ffff9d;
  background-color: #951555;
  border: 0;
  width: 150px;
}

.about {
  margin-bottom: 20px;
}

.reviews-box {
  padding: 0 20px;
  padding-top: 20px;
  border: 1px solid black;
  margin: 5px;
}

.review {
  font-style: italic;
  margin-bottom: 20px;
}

.orange {
  color: orange;
}

.medal {
  line-height: 22px;
}

.fa-medal {
  color: #a26ea1;
}

.fa-medal:before {
  line-height: 60px;
  font-size: 40px;
}

.stars {
  margin-bottom: 20px;
}

@media only screen and (min-width: 700px) {
  .about {
    display: flex;
  }
  .font-awsome-box {
    flex-direction: column;
  }

  .summery-container{
    font-size: 2rem;
    margin-bottom: 30px;
  }

  img{
     height: 140px;
    width: 140px;
  }
}

@media only screen and (min-width: 1000px) {
  .about {
    flex-direction: column;
    max-width: 575px;
  }

  .about-conatainer {
    flex-direction: row;
  }

  .font-awsome-box {
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .reviews-wrap{
    margin: 0 auto;
  }
}
</style>
