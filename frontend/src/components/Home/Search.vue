<template>
    <form @submit.prevent="test">
        <div class="search">
          <!-- ADRESS INPUT -->
          <div class="inputs adress">
            <label for="text">&#32; </label>
            <!-- <label for="adress">Your Adress:</label> -->
            <input v-model="search.where" required type="search" name="adress" placeholder="Where do you live?">
          </div>

          <!-- DATE AND TIME INPUTS -->
          <div class="date-and-time flex">
            <div class="inputs date ">
              <label for="date">When</label>
              <input required v-model="search.date" ref="today" id="date" type="date">
            </div>
            <div class="inputs time-start">
              <label for="time-start">From</label>
              <input ref="thistime" v-model="search.timeStart" type="time">
            </div>
            <div class="inputs time-end">
              <label for="time-end">Till</label>
              <input ref type="time" v-model="search.timeEnd">
      
            </div>
          </div>

          <div class="inputs button">
            <label for="button"></label>
            <button>Search</button>
          </div>
        </div>
      </form>
</template>

<script>
export default {
    data(){
        return{
            search: {where:'',date:'',timeStart:'',timeEnd:'00:00'}
        }
    },
methods: {
    test() {
      console.log("this search params -",this.search);
    }
  },
  mounted() {
    let today = new Date().toISOString().substr(0, 10);
    this.search.date = today;

    let now = new Date().toString().substr(16, 5);
    this.search.timeStart = now;
  }
}
</script>

<style lang="scss" scoped>
form{
    width: 90%;
    margin: 0 auto;
    padding-bottom:15px;
  }
  .inputs {
    width:100%;
    margin-bottom:10px;
    height: 50px;
  }
  .inputs > *{
    display:block;
    width:100%;
  }
    input[type=search]{
      height:32px;
    }

  input,{
    text-align:center;
    font-size:1.2em;
    height: 30px;
  }
  label{
      height: 16px;
      text-align: initial;
      padding-left:10px;
  }
  button{
    height: 32px;
  }

  @media (min-width: 767px){
    .search{
      display:flex;
      justify-content: space-evenly;
    }
    .button{
        width:30%;
    }
  }

</style>
