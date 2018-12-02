

<template>
  <section>
    <img class="login-bcg" src="@/assets/images/loginbcg.png">
   <div class="login-container flex column">
    <h1 class="login-title">LOG IN</h1>
    <form @submit.prevent="checkUser" class="flex column">
    
      <div class="wrap-input validate-input">
        <input class="input" type="text" name="username" placeholder="Username" v-model="typedDetails.nickName" required>
        <span class="focus-input"><span><i class="fas fa-user login-icon"></i></span></span>
      </div>

      <div class="wrap-input validate-input">
        <input class="input" type="password" name="pass" placeholder="Password" v-model="typedDetails.pwd" required>
        <span class="focus-input" ><span><i class="fas fa-unlock-alt login-icon"></i></span></span>
      </div>

      <a href="#" class="pwd-forgot">Forgot password?</a>
      <div class="container-login-form-btn">
        <button class="login-form-btn">Login</button>
      </div>

      <!-- <span v-if="isWrong">worng credinatls</span> -->
      <p class="sign-in">not yet registered?
        <router-link to="/sign" class="pwd-forgot">sign in</router-link>
      </p>
    </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      typedDetails: {
        nickName: "",
        pwd: ""
      },
      isWrong: false
    };
  },
  methods: {
    checkUser() {
      this.$store
        .dispatch({
          type: "checkUser",
          typedDetails: this.typedDetails
        })
        .then(user => {
          if (!user) {
            this.isWrong = true;
          } else {
            this.isWrong = false;
            if (user.type === "parent") this.$router.push("/");
            else if (user.type === "sitter")
              this.$router.push(
                `/baby/profile/sitter/${user.username}/notifications`
              );
          }
        });
    }
  },

  computed: {
    onLogin() {
      this.$store.getters.onLogin;
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 500px;
  overflow: hidden;
  padding: 55px 55px 37px 55px;

  background: #9152f8;
  background: -webkit-linear-gradient(top, #7579ff, #b224ef);
  background: -o-linear-gradient(top, #7579ff, #b224ef);
  background: -moz-linear-gradient(top, #7579ff, #b224ef);
  background: linear-gradient(top, #7579ff, #b224ef);
  width: 30%;
  margin: 0 auto;
  margin-top: 50px;
}

.container-login-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.login-form-btn {
  font-size: 16px;
  color: #555555;
  line-height: 1.2;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 120px;
  height: 50px;
  border-radius: 25px;

  background: #9152f8;
  background: -webkit-linear-gradient(bottom, #7579ff, #b224ef);
  background: -o-linear-gradient(bottom, #7579ff, #b224ef);
  background: -moz-linear-gradient(bottom, #7579ff, #b224ef);
  background: linear-gradient(bottom, #7579ff, #b224ef);
  position: relative;
  z-index: 1;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login-form-btn::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-color: #fff;
  top: 0;
  left: 0;
  opacity: 1;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login-form-btn:hover {
  color: #fff;
}

.login-form-btn:hover:before {
  opacity: 0;
}

button {
  width: 200px;
  margin: 0 auto;
  border: none;
  background-color: rgb(235, 194, 194);
  border-radius: 5px;
  line-height: 40px;
  margin-bottom: 10px;
}

.wrap-input {
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  margin-bottom: 30px;
}

// [ Input ]*/

.wrap-input {
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255,255,255,0.24);
  margin-bottom: 30px;
}

.input {
  font-family: Poppins-Regular;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 45px;
  background: transparent;
  // padding: 0 5px 0 38px;
}

/*---------------------------------------------*/ 
.focus-input {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  line-height: 40px;
  margin-right: 40px;
}
.login-icon{
   line-height: 40px;
  margin-right: 100px;
}

.login-title{
  margin-bottom: 40px;
}



.focus-input::before , .fas .fa-user {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  -moz-transition: all 0.6s;
  transition: all 0.6s;
  background: #fff;
  
}


.input:focus + .focus-input::before {
  width: 100%;
  
}

.pwd-forgot{
  margin-bottom: 20px;
}

.login-bcg{
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    top: 0;
    left: 0;
    z-index: -1;
}


</style>
