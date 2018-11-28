<template>
  <section v-if="sitter" class="details-sitter">
    <!-- //link back to list -->
    <router-link class="router" to="/baby/list">Back to list</router-link>
    <div class="summery-container">
      <img
        src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
      >
      <div class="summery-detail-container">
        <p class="sitter-name">{{sitter.nickName}}</p>
        <p>{{sitter.adrress.city}} | {{sitter.age}}</p>
      </div>
    </div>
    <div class="btn-container">
      <button class="contact-btn btn">
        <i class="fas fa-comments"></i>
        <p class="btn-head">Contact</p>
      </button>
      <button class="fav-btn btn">
        <i class="fas fa-heart"></i>
        <p class="btn-head">Favorite</p>
      </button>
    </div>
    <div class="about">
      <h2 class="about-head">About</h2>
      <div class="about-box">
        <p class="date">{{sitter.joinedAt}}</p>
        <div class="rank">
          <i class="fas fa-medal"></i>
          <p class="qualification-expa">{{sitter.expaAbout}}</p>
        </div>
        <div class="about-details">
          <p class="about-details-item">Looking for: dklskdsjd</p>
          <p class="about-details-item description">{{sitter.description}}</p>
          <span class="head-span">education:</span><p class="about-details-item"> highschool</p>
          <span class="head-span">Language:</span><p class="about-details-item"> english russian</p>
        </div>
      </div>
      <h2 class="about-head">Credentials</h2>
      <div class="font-awsome-box">
          <div class="icon-box" :class="{black: sitter.license}"><i class="fas fa-id-card item-awsome"></i><span>Has driver License</span></div>
          <div class="icon-box" :class="{black: sitter.vehicle}"><i class="fas fa-car item-awsome"></i><span>Has car</span></div>
          <div class="icon-box" :class="{black: sitter.smoking}"><i class="fas fa-smoking item-awsome"></i><span>Smoking</span></div>
          <div class="icon-box" :class="{black: sitter.medical}"><i class="fas fa-briefcase-medical item-awsome"></i><span>Medical treatment</span></div>
          <div class="icon-box" :class="{black: sitter.recomandation}"><i class="fas fa-file item-awsome"></i><span>Have recomendation</span></div>
          <div class="icon-box" :class="{black: sitter.smoking}"><i class="fas fa-broom item-awsome"></i><span>Clean</span></div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    const nickName = this.$route.params.nickName;
    this.$store.dispatch({ type: "getById", nickName })
  },
      computed:{
        sitter(){
           return this.$store.getters.getCurrentSitter
        }
  }
}
</script>

<style scoped lang="scss">
.details-sitter{
    text-transform: capitalize;
}

.router {
  background-color: blue;
  display: block;
  color: white;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  margin-bottom: 20px;
}

.summery-container {
  height: 120px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
}

img {
  height: 120px;
  margin: 30px;
}

.sitter-name {
  color: blue;
  font-weight: bold;
}

.btn-container {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.btn {
  height: 40px;
  line-height: 40px;
}

.btn-head {
  display: inline-block;
  width: 100px;
}

.about-box {
  border: 1px solid black;
  padding: 20px;
}

.about-head {
  margin-bottom: 20px;
  font-weight: bold;
  color: blue;
}

.date {
  text-align: left;
  margin-bottom: 20px;
}

.rank {
  display: flex;
  width: 240px;
  margin: auto;
}

.qualification-expa {
  width: 210px;
  margin-bottom: 20px;
}

.about-details{
    text-align: left;
    margin-left: 10px;
}

.about-details-item{
    margin-bottom: 20px;
    margin-top: 5px;
}

.head-span{
    font-weight: bold;
}

.description{
    line-height: 22px;
}

.about-box{
    margin-bottom: 20px;
}

.font-awsome-box{
    width: 97%;
    margin: 5px;
}

.icon-box{
    height: 40px;
    border: 1px solid black;
    line-height: 40px;
    text-align: left;
    color:rgb(185, 185, 185);
}

.item-awsome{
margin: 0 30px;
}

.black{
    color:black;
}
</style>
