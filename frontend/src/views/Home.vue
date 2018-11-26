<template>
  <div class="home">
    

    <!-- TO DO : MAKE THIS CODE - A FILTER CMP -->
    <form @submit.prevent="test">
        <input required type="search" placeholder="הזן את מקום המגורים">


        <label>תאריך
        <input required ref="today" type="date" >
        </label>

        <div class="time flex flex-space-between">

        <label>
          שעת התחלה
        <input ref="thistime" type="time">
        </label>

        <label>
          שעת סיום
        <input ref="" type="time" value="00:45">
        </label>

        </div>

        <button type="submit">חיפוש</button>
    </form>
    <!-- TO DO : MAKE THIS CODE - A FILTER CMP -->

    <section>
    <img alt="babysitter" src="../assets/babysitter.jpg">
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

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    test() {
      console.log("test");
    }
  },
  mounted() {
    let today = new Date().toISOString().substr(0, 10);
    this.$refs.today.value = today;

    let now = new Date().toString().substr(16, 5);
    this.$refs.thistime.value = now;
  }
};
</script>

<style lang="scss" scoped>
.home {
  background-color: lightblue;
  direction: rtl;

  form {
    width: 80%;
    padding: 30px 0;
    margin: 0 auto;
    label {
      width: 47%;
    }

    input {
      height: 3em;
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
      border-radius: 5px;
    }

    button {
      width: 100%;
      font-size:1.5em;
      border-radius: 20px;
      padding: 5px;
      background-color: blue;
      color: white;
    }
  }
  section{
    min-height: 300px;

  img {
    width: 100%;
    height: 175px;
    object-fit: cover;
  }
  @media (min-width: 767px){
    img{
      height: 400px;
    }
  }
  h2 {
    padding: 10px 0;
    font-size:26px;
  }
  }

}
</style>
