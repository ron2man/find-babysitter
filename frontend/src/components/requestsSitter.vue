<template>
  <section v-if="sitter">
    <div
      class="requests-item-container"
      v-for="reservation in sitter.reservations"
      :key="reservation.id"
     :class="getClass(reservation)">
      <i class="fas fa-comments message-awsome"></i>
        <p class="notice-head">Parent: {{reservation.from}}</p>
        <p class="notice-head">From: {{getTime(reservation.start)}}</p>
        <p class="notice-head">To: {{getTime(reservation.end)}}</p>
      <button class="notification-item approve">Approve</button>
      <button class="notification-item declined" @click="declineRequest(reservation.id,reservation.from)">Declined</button>
    </div>
  </section>
</template>

<script>
import moment from 'moment'

export default {
    data(){
        return {
            currentUser:null
        }
    },
    created(){
        const currentUser = JSON.parse(localStorage.getItem("loggedInUser"))
        const id = currentUser._id
      this.$store.dispatch({ type: "getSitterId",id})
    },
    methods:{
        getClass(reservation){
            if(reservation.status === 'pending') return {yellow: true}
            else if(reservation.status === 'confirmed') return {green: true}
            else return {red:true}
        },
    getTime(timeStamp){
       return moment(timeStamp).format('hh:mm')
    },
    declineRequest(id,from){
        const parent = from
        const status = 'decline'
      this.$store.dispatch({ type: "request",details: id,parent,status })
    }
},
  computed: {
    sitter() {
      return this.$store.getters.getCurrentUser;
    }    
}
}
</script>

<style scoped lang="scss">
.requests-item-container{
    display: flex;
}

.yellow{
    background-color: yellow;
}

.red,.declined{
    background-color: red;
}

.green,.approve{
    background-color: green;
}

</style>
