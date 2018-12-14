

<template>
  <section>
    <img class="login-bcg" src="@/assets/images/login3.jpg">
    <div class="login-container flex column">
      <h1 class="login-title">LOG IN</h1>
      <form @submit.prevent="checkUser" class="flex column">
        <div class="wrap-input validate-input">
          <input
            class="input"
            type="text"
            name="username"
            placeholder="Username"
            v-model="typedDetails.nickName"
            required
          >
          <span class="focus-input">
            <span>
              <i class="fas fa-user login-icon"></i>
            </span>
          </span>
        </div>

        <div class="wrap-input validate-input">
          <input
            class="input"
            type="password"
            name="pass"
            placeholder="Password"
            v-model="typedDetails.pwd"
            required
          >
          <span class="focus-input">
            <span>
              <i class="fas fa-unlock-alt login-icon"></i>
            </span>
          </span>
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
// check if good
import BusService, { SITTER_DET } from "@/service/EventBusService.js";

export default {
  name: "LoginPage",
  created() {
    BusService.$on(SITTER_DET, payload => {
      console.log("evetbbus", payload);
    });
  },
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
            this.$socket.emit("createMyOwnRoom", user._id);
            this.isWrong = false;
            const path = this.$route.query.path;
            if (path) return this.$router.push(path);
            // if (user.type === "parent") this.$router.push(-1);
            if (user.type === "parent") this.$router.push("/");
            else if (user.type === "sitter")
              this.$router.push(`/baby/profile/${user.username}/notifications`);
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
  max-width: 370px;
  min-width: 215px;
  overflow: hidden;
  background: palegoldenrod;
  padding: 55px 55px 37px 55px;
  opacity: 0.9;
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.19);
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
  width: 200px;
  margin: 0 auto;
  border: none;
  background-color: #d0da9e;
  border-radius: 15px;
  line-height: 40px;
  margin-bottom: 10px;
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
  border-radius: 15px;
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
  border-radius: 15px;
  background-color: beige;
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
  cursor: pointer;
}

.login-form-btn:hover:before {
  opacity: 0;
}

.wrap-input {
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  margin-bottom: 30px;
}

.wrap-input {
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  margin-bottom: 30px;
}

.input {
  font-family: Poppins-Regular;
  font-size: 16px;
  color: #5a6b69;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 45px;

}

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
.login-icon {
  line-height: 40px;
  margin-right: 100px;
}

.login-title {
  margin-bottom: 40px;
  font-size: 2rem;
  color: #947f7c;
}

.focus-input::before,
.fas .fa-user {
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

.pwd-forgot {
  margin-bottom: 20px;
  color: #a26ea1;
}

.login-bcg {
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
}

@media only screen and (min-width: 600px) {
  .login-bcg {
    width: 70%;
  }

  .login-container {
    margin: 0;
    position: fixed;
    top: 117px;
    right: 23px;
    opacity: 1;
  }
}
</style>
