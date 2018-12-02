


<template>
  <section class="sign-container">
    <form @submit.prevent="setNewSitter">
      <h1 class="sign-title">Sign up</h1>
      <div class="name-container flex wrap flex-space-around align-space-around">
        <input type="text" placeholder="Username" v-model="sitter.username" required>
        <input type="text" placeholder="Password" v-model="sitter.pwd" required>
        <input type="text" placeholder="Email" v-model="sitter.email" required>
        <input type="text" placeholder="Name" v-model="sitter.fName" required>
        <input type="text" placeholder="Last name" v-model="sitter.lName" required>
        <input type="text" placeholder="Insert city adrress" v-model="sitter.adrress.city" required>
        <input type="text" placeholder="Insert Street adrress" v-model="sitter.adrress.street" required>
      </div>
      <section class="extra-container flex wrap">
        <div class="prefs-container flex column flex-space-around">
          <h4 class="title">position?</h4>

          <input list="position" placeholder="position" v-model="sitter.position">
          <datalist id="position">
            <option value="nanny"/>
            <option value="opper"/>
            <option value="Cook"/>
          </datalist>
        </div>

        <div class="age-container flex column flex-space-around">
          <h4 class="title">What age?</h4>

          <input list="ageprefs" placeholder="What age" v-model="sitter.ages">
          <datalist id="ageprefs">
            <option value="Babies"/>
            <option value="Toddlers"/>
            <option value="Children"/>
            <option value="All of them"/>
          </datalist>
        </div>

        <div class="lang-container flex column flex-space-around">
          <h4 class="title">languages</h4>

          <label>
            Hebrew
            <input type="checkbox" value="he" v-model="sitter.languages.english">
          </label>
          <label>
            English
            <input type="checkbox" value="en" v-model="sitter.languages.hebrew">
          </label>
          <label>
            Russian
            <input type="checkbox" value="ru" checked v-model="sitter.languages.russian">
          </label>
        </div>
        <div class="trans-container flex column flex-space-around">
          <h4 class="title">Mobility</h4>

          <label>
            license
            <input type="checkbox" name="pref1" value="license" v-model="sitter.license">
          </label>
          <label>
            vehicle
            <input type="checkbox" name="pref2" value="Car" v-model="sitter.vehicle">
          </label>
        </div>
      </section>

      <input list="time" placeholder="Scope of Position" v-model="sitter.ages">
      <datalist id="time">
        <option value="Part-time"/>
        <option value="Full-time"/>
      </datalist>

      <section class="about-container flex wrap flex-space-around align-space-around">
        <textarea rows="4" cols="50" v-model="sitter.about">
          About yourself
        </textarea>
        
        <input list="exp" placeholder="Exprerience" v-model="sitter.exprerience">
        <datalist id="exp">
          <option value="inexperienced"/>
          <option value="Up to three years of experience"/>
          <option value="Over 3 years of experience"/>
        </datalist>

        <input list="age" placeholder="Choose age" v-model="sitter.age">
        <datalist id="age">
          <option value="16-18"/>
          <option value="18-20"/>
          <option value="20-22"/>
          <option value="22-25"/>
          <option value="25-30"/>
          <option value="Over 30"/>
        </datalist>

        <input list="studies" placeholder="Studies" v-model="sitter.studies">
        <datalist id="studies">
          <option value="12 school years"/>
          <option value="BA"/>
          <option value="MA"/>
        </datalist>
        <button class="btn-submit">Submit</button>
      </section>
    </form>
  </section>
</template>

<script>
import moment from "moment";

export default {
  name: "Sign",
  data() {
    return {
      sitter: {
        type: "sitter",
        username: "",
        pwd: "",
        email:'',
        fName: "",
        lName: "",
        age: "",
        phone: "",
        adrress: {
          district: "",
          city: "",
          street: ""
        },
        position: "",
        time: "",
        ages: "",
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
        recomandation: "",
        clean: "",
        about: "",
        joinedAt: moment().format("L"),
        // todo - calc with filter last visited
        lastVisit: "",
        // todo - option to uplaod img from the pfone
        imgUrl: ""
      }
    };
  },
  methods: {
    setNewSitter() {
      this.$store
        .dispatch({ type: "setNewSitter", newSitter: this.sitter })
        .then(newSitter => {          
          if (newSitter) this.$router.push(`/baby/profile/sitter/${newSitter.username}/notifications`)
        });
    }
  }
};
</script>

<style lang="scss" scope>
</style>
