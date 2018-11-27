

<template>
  <section class="login-container flex column">
    <h1 class="login-title">Login to registrants</h1>
    <form @submit.prevent="checkUser" class="flex column">
      <input type="text" placeholder="Insert nick name" v-model="typedDetails.nickName">
      <input type="text" placeholder="Insert password" v-model="typedDetails.pwd">
      <a href="#" class="pwd-forgot">Forgot password?</a>
      <button>login</button>
      <span v-if="isWrong">worng credinatls</span>
      <p class="sign-in">not yet registered?<router-link to="/sign" class="pwd-forgot" >sign in</router-link></p>
    </form>
  </section>
</template>

<script>
export default {
name:'LoginPage',
data(){
return {
    typedDetails:{
        nickName:'',
        pwd:'',
    },
    isWrong:false,
}

},
methods:{
    checkUser(){
      this.$store.dispatch({
        type: 'checkUser',
        details: this.typedDetails
      })
      .then(user => {          
          if(!user){
            this.isWrong = true
          } else {
            this.isWrong = false
            this.$router.push('/');
            }  
      })
    },
},

computed:{
    onLogin(){
        this.$store.getters.onLogin
    },



}

}
</script>

<style lang="scss" scoped>

</style>
