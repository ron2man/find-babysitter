


<template>
  <section class="login-container flex column">
    <h1 class="login-title">Sign up</h1>
    <form @submit.prevent="setUser" class="flex column">
      <input type="text" placeholder="Choose nick name">
      <input type="text" placeholder="Insert password">
      <input type="text" placeholder="Insert password again">
      <input type="text" placeholder="Insert password again">
      <input type="text" placeholder="Insert password again">
      <input type="text" placeholder="Insert password again">
      <input type="text" placeholder="Insert password again">
      <span v-if="isWrong">worng credinatls</span>
      <button>Submit</button>
      <p class="sign-in">not yet registered?
        <router-link to="/sign" class="pwd-forgot">sign in</router-link>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: "SignPage",
  data() {
    return {
      newUser: {
        id:'makeId()',
        nickName:'',
        pwd:'',
        name: '',
        children:[
            {
                name:'',
                age:'',
            },
        ],
        phone: '',
        adrress:{
            district:'',
            city:'',
        },
        parentGender: '',
        languages:[],
        descritption:'',
        shortCall: true,
        joinedAt: 'moment()',
        lastVisit: '',
        imgUrl: '',
      },
      isWrong: flase
    };
  },
  methods: {
    setUser() {
      this.$store.dispatch({ type: "setUser", user: this.newUser });
    }
  }
};
</script>

<style>
</style>
