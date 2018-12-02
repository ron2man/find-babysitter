


<template>
  <section class="sign-container">
    <img class="login-bcg" src="@/assets/images/login2.png">
    <form @submit.prevent="setNewSitter">
      <h1 class="sign-title">SIGN UP</h1>

      <div v-if="pageNum===1" class="name-container flex wrap flex-space-around align-space-around">
        <input type="text" placeholder="Username" v-model="sitter.username" required>
        <input type="text" placeholder="Password" v-model="sitter.pwd" required>
        <input type="text" placeholder="Email" v-model="sitter.email" required>
      </div>

      <div v-if="pageNum===2">
        <div class="name-container flex wrap flex-space-around align-space-around">
          <input type="text" placeholder="Name" v-model="sitter.name.fName" required>
          <input type="text" placeholder="Last name" v-model="sitter.name.lName" required>
          <input type="text" placeholder="City" v-model="sitter.adrress.city" required>
          <input type="text" placeholder="Street" v-model="sitter.adrress.street" required>
        </div>
        <section class="extra-container">
          <div class="prefs-container flex column flex-space-around">
            <el-select
              class="about-item"
              v-model="sitter.position"
              clearable
              placeholder="position?"
            >
              <el-option
                v-for="item in positions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <el-select
              class="about-item"
              v-model="sitter.agePrefs"
              clearable
              placeholder="What age?"
            >
              <el-option
                v-for="item in ages"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>

          <div class="tot-lang-container flex column flex-space-around">
            <h4 class="title">
              languages
              <i class="fas fa-globe"></i>
            </h4>

            <div class="lang-container flex flex-space-around">
              <label class="lang-item">
                Hebrew
                <i class="fas fa-check-circle" v-if="sitter.languages.english"></i>
                <input
                  class="input-check-item"
                  type="checkbox"
                  value="he"
                  v-model="sitter.languages.english"
                >
              </label>
              <label>
                English
                <i class="fas fa-check-circle" v-if="sitter.languages.hebrew"></i>
                <input
                  class="input-check-item"
                  type="checkbox"
                  value="en"
                  v-model="sitter.languages.hebrew"
                >
              </label>
              <label>
                Russian
                <i class="fas fa-check-circle" v-if="sitter.languages.russian"></i>
                <input
                  class="input-check-item"
                  type="checkbox"
                  value="ru"
                  checked
                  v-model="sitter.languages.russian"
                >
              </label>
            </div>
          </div>
        </section>
      </div>

      <div v-if="pageNum===3">
        <section class="about-container">
          <h4 class="check-title">Mobility</h4>
          <div class="trans-container flex wrap flex-space-around">
            <label class="prefs-check-item" :class="{black: sitter.license}">Drive license
              <div>
                <i class="fas fa-id-card item-awsome"></i>
              </div>
              <input
                class="input-check-item"
                type="checkbox"
                name="pref1"
                value="license"
                v-model="sitter.license"
              >
            </label>
            <label class="prefs-check-item" :class="{black: sitter.vehicle}">Has car
              <div>
                <i class="fas fa-car item-awsome"></i>
              </div>
              <input
                class="input-check-item"
                type="checkbox"
                name="pref2"
                value="Car"
                v-model="sitter.vehicle"
              >
            </label>
          </div>
          <h2 class="check-title">Others</h2>
          <div class="others-container flex flex-space-around">
            <label class="prefs-check-item" :class="{black: sitter.medical}">Medical
              <div>
                <i class="fas fa-briefcase-medical item-awsome"></i>
              </div>
              <input
                class="input-check-item"
                type="checkbox"
                name="Medical"
                value="Medical"
                v-model="sitter.medical"
              >
            </label>
            <label class="prefs-check-item" :class="{black: sitter.recomendations}">Recomendations
              <div>
                <i class="fas fa-file item-awsome"></i>
              </div>
              <input
                class="input-check-item"
                type="checkbox"
                name="recomendations"
                value="recomendations"
                v-model="sitter.recomendations"
              >
            </label>
            <label class="prefs-check-item" :class="{black: sitter.clean}">Clean
              <div>
                <i class="fas fa-broom item-awsome"></i>
              </div>
              <input
                class="input-check-item"
                type="checkbox"
                name="clean"
                value="clean"
                v-model="sitter.clean"
              >
            </label>
          </div>

          <p class="about-item">A few words about yourself</p>
          <textarea rows="4" cols="20" v-model="sitter.description" placeholder=" write here..."></textarea>

          <el-select class="about-item" v-model="sitter.scopeOfPos" clearable placeholder="Scope">
            <el-option
              class="option-item"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <el-select
            class="about-item"
            v-model="sitter.exprerience"
            clearable
            placeholder="Exprerience"
          >
            <el-option
              v-for="item in expreriences"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <div class="block about-item">
            <span class="demonstration">Choose age</span>
            <el-slider v-model="sitter.age"></el-slider>
          </div>

          <el-select class="about-item" v-model="sitter.studies" clearable placeholder="Studies">
            <el-option
              v-for="item in Studies"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </section>
      </div>
      <div class="btn-container flex">
        <button v-if="pageNum>1" type="button" class="btn-submit" @click="pageNumChange('-')">Back</button>
        <button v-if="pageNum<3" type="button" class="btn-submit" @click="pageNumChange('+')">Next</button>
        <button v-if="pageNum===3" class="btn-submit">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
import moment from "moment";

export default {
  name: "Sign",
  data() {
    return {
      pageNum: 1,
      sitter: {
        type: "sitter",
        username: "",
        pwd: "",
        email: "",
        name: {
          fName: "",
          lName: "",
          fullNAme: this.fName + " " + this.lName
        },
        age: 0,
        phone: "",
        adrress: {
          district: "",
          city: "",
          street: ""
        },
        position: "",
        time: "",
        agePrefs: "",
        scopeOfPos: "",
        languages: {
          english: "",
          hebrew: "",
          russian: ""
        },
        exprerience: "",
        description: "",
        studies: "",
        license: "",
        vehicle: "",
        // todo
        shortCall: "",
        smoking: "",
        medical: "",
        recomandations: "",
        clean: "",
        about: "",
        joinedAt: moment().format("L"),
        // todo - calc with filter last visited
        lastVisit: "",
        // todo - option to uplaod img from the pfone
        imgUrl: ""
      },
      options: [
        {
          value: "Part-time",
          label: "Part-time"
        },
        {
          value: "Full-time",
          label: "Full-time"
        }
      ],
      expreriences: [
        {
          value: "inexperienced",
          label: "inexperienced"
        },
        {
          value: "Up to three years of experience",
          label: "Up to three years of experience"
        },
        {
          value: "Over 3 years of experience",
          label: "Over 3 years of experience"
        }
      ],
      Studies: [
        {
          value: "12 school years",
          label: "12 school years"
        },
        {
          value: "BA",
          label: "BA"
        },
        {
          value: "MA",
          label: "MA"
        }
      ],
      positions: [
        {
          value: "nanny",
          label: "nanny"
        },
        {
          value: "opper",
          label: "opper"
        },
        {
          value: "cook",
          label: "cook"
        }
      ],
      ages: [
        {
          value: "Babies",
          label: "Babies"
        },
        {
          value: "Toddlers",
          label: "Toddlers"
        },
        {
          value: "Children",
          label: "Children"
        },
        {
          value: "All of them",
          label: "All of them"
        }
      ]
    };
  },
  methods: {
    setNewSitter() {
      if (this.pageNum === 3) {
        this.$store
          .dispatch({ type: "setNewSitter", newSitter: this.sitter })
          .then(newSitter => {
            if (newSitter)
              this.$router.push(
                `/baby/profile/sitter/${newSitter.username}/notifications`
              );
          });
      }
    },
    pageNumChange(val) {
      console.log("num changed");
      if (val === "-") this.pageNum--;
      else this.pageNum++;
    }
  }
};
</script>

<style lang="scss" scope>
</style>
