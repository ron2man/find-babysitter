<template>
  <section class="main-color-background">
    <div class="container">
      <img src="@/assets/images/heart.png">
    </div>
    <h2>{{deals}}</h2>
    <h3>Already Found Sitters</h3>
  </section>
</template>

<script>
export default {
  data() {
    return {
      deals: 1047,
      interval: null
    };
  },
  created() {
    this.interval = setInterval(() => {
      var rdm = Math.floor(Math.random() * 9);
      this.deals += rdm;
    }, 1500);
  },
  destroyed() {
    this.interval = clearInterval();
  }
};
</script>

<style lang="scss" scoped>
section {
    min-height: 250px;
  .container {
    padding-top:20px;
    width: 50%;
    margin: 20px auto;

    img {
      width: 50%;
    }
  }
  h2 {
    font-size: 2.5em;
    color: white;
  }

  h3 {
    font-size: 2em;
    padding-bottom: 25px;
  }
}
</style>
