

<template>
  <section>
    <h1>login page</h1>
    <form @submit.prevent="checkUser">
      <input type="text" placeholder="Insert nick name" v-model="typedDetails.nickName">
      <input type="text" placeholder="Insert password" v-model="typedDetails.pwd">
      <button>login</button>
      <span v-if="isWrong">worng credinatls</span>
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

<style>

</style>
