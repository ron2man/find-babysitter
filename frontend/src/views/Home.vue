<template>
  <div class="home">
    
    <!-- <img alt="babysitter" src="../assets/babysitter.jpg"> -->
    <form>
      <label>
        Where?
        <input type="text">
      </label>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 300px;
  background-image: url('../assets/babysitter.jpg');
  background-size: cover;
  img{
    width: 100%;
    height: 175px;
    object-fit: cover;
  }
}
</style>
