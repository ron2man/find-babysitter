


<template>
  <section class="sign-container">
    <form @submit.prevent="setUser">
        <h1 class="sign-title">Sign up</h1>
        <div class="name-container flex wrap flex-space-around align-space-around">
        <input type="text" placeholder="Insert name" v-model="sitter.name">
        <input type="text" placeholder="Insert last name" v-model="sitter.lName">
        <input type="text" placeholder="Choose nickname" v-model="sitter.nickName">
        <input type="text" placeholder="Insert password" v-model="sitter.pwd">
        <input type="text" placeholder="Insert city adrress" v-model="sitter.city">
        <input type="text" placeholder="Insert Street adrress" v-model="sitter.street">
      </div>
      <section class="extra-container flex wrap">
        <div class="prefs-container flex column flex-space-around">
          <h4 class="title">type?</h4>

          <label>
            nanny
            <input type="checkbox" value="nanny" v-model="sitter.prefs.position.nanny">
          </label>
          <label>
            opper
            <input type="checkbox" value="oper" v-model="sitter.prefs.position.opper">
          </label>
          <label>
            Cook
            <input type="checkbox" value="Cook" checked v-model="sitter.prefs.position.ages">
          </label>
        </div>

        <div class="age-container flex column flex-space-around">
          <h4 class="title">What age?</h4>
          <label>
            Babies
            <input
              type="checkbox"
              value="Cook"
              checked
              v-model="sitter.prefs.position.babies"
            >
          </label>
          <label>
            Toddlers
            <input
              type="checkbox"
              name="pos4"
              value="Cook"
              checked
              v-model="sitter.prefs.position.toddlers"
            >
          </label>
          <label>
            Children
            <input
              type="checkbox"
              value="Cook"
              checked
              v-model="sitter.prefs.position.kindergarden"
            >
          </label>
        </div>
        <div class="lang-container flex column flex-space-around">
          <h4 class="title">languages</h4>

          <label>
            Hebrew
            <input type="checkbox" value="he" v-model="sitter.prefs.languages.english">
          </label>
          <label>
            English
            <input type="checkbox" value="en" v-model="sitter.prefs.languages.hebrew">
          </label>
          <label>
            Russian
            <input
              type="checkbox"
              value="ru"
              checked
              v-model="sitter.prefs.languages.russian"
            >
          </label>
        </div>
        <div class="trans-container flex column flex-space-around">
          <h4 class="title">Mobility</h4>

          <label>
            license
            <input
              type="checkbox"
              name="pref1"
              value="license"
              v-model="sitter.prefs.trans.license"
            >
          </label>
          <label>
            vehicle
            <input
              type="checkbox"
              name="pref2"
              value="Car"
              v-model="sitter.prefs.trans.vehicle"
            >
          </label>
        </div>
      </section>

      <section class="about-container flex wrap flex-space-around align-space-around">
        <input list="exp" placeholder="Exprerience" v-model="sitter.prefs.exprerience">
        <datalist id="exp">
          <option value="inexperienced"/>
          <option value="Up to three years of experience"/>
          <option value="Over 3 years of experience"/>
        </datalist>

        <input list="age" placeholder="Choose age" v-model="sitter.prefs.age">
        <datalist id="age">
          <option value="16-18"/>
          <option value="18-20"/>
          <option value="20-22"/>
          <option value="22-25"/>
          <option value="25-30"/>
          <option value="Over 30"/>
        </datalist>

        <input list="studies" placeholder="Studies" v-model="sitter.prefs.studies">
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
export default {
  name: "Sign",
  data() {
    return {
      sitter: {
        name: "",
        lName: "",
        nickName: "",
        pwd: "",
        age: "",
        phone: "",
        adrress: {
          district: "",
          city: "",
          street: ""
        },
        prefs: {
          position: {
            nanny: "",
            opper: "",
            Cook: "",
            ages: "",
            babies: "",
            toddlers: "",
            kindergarden: ""
          },
          languages: {
            english: "",
            hebrew: "",
            russian: ""
          },
          age: "",
          exprerience: "",
          description: "",
          studies: "",
          trans: {
            license: "",
            vehicle: ""
          },
          availabilty: {
            shortCall: ""
          }
        },
        joinedAt: "",
        lastVisit: "",
        imgUrl: ""
      }
    };
  },
  methods: {
    setUser() {
      this.$store.dispatch({ type: 'setUser', user: this.newUser });
    }
  }
};
</script>

<style lang="scss" scope>
</style>
