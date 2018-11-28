



<template>
  <section>
    <router-link class="back-route" to="/baby/list">Back to list</router-link>
    <div class="profile-header-container">
      <img
        src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
      >
      <div class="summery-detail-container">
        <h1>hello alis</h1>
        <!-- <p class="sitter-name"> hello{{parent.nickName}}</p> -->
      </div>
    </div>
    <div class="tabs-container flex flex-space-around">
      <router-link class="item-route align-self-center" to="details">Details</router-link>
      <router-link class="item-route align-self-center" to="contact"></router-link>
      <router-link class="item-route align-self-center" to="sceduale">sceduale</router-link>
    </div>
    <router-view/>
  </section>
</template>

<script>
export default {};
</script>


data(){
    return {
        currSitter:null
    }
},

created(){
    this.currSitter = this.$rout.params
}


<style lang="scss" scoped>
.summery-detail-container{
    font-size: 25px;
    font-weight: bold;
}


.back-route {
  background-color: #3D9970;
  display: block;
  color: white;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  margin-bottom: 20px;
}

.profile-header-container {
  height: 120px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
}

img {
  height: 120px;
  margin: 30px;
}

.tabs-container{
    font-size: 30px;
    // background:rgb(185, 185, 185);
    height: 50px;
    //  align-items: flex-start;
    // text-align: center;
    // cursor: default;
    color: buttontext;
    background-color: buttonface;
    // box-sizing: border-box;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    // border-image: initial;
}

.item-route{
    text-decoration: none;
    border-right:solid 1px gray;
    padding:0 10px;

    
}


</style>
