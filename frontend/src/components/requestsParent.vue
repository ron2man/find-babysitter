<template>
  <section>
    <div
      class="requests-item-container"
      v-for="reservation in this.currentUser.reservations"
      :key="reservation.start"
     :class="getClass(reservation)">
      <i class="fas fa-comments message-awsome"></i>
        <p class="notice-head">Sitter: {{reservation.to}}</p>
        <p class="notice-head">From: {{getTime(reservation.start)}}</p>
        <p class="notice-head">To: {{getTime(reservation.end)}}</p>
        <p  class="notice-head">date: {{reservation.date}}</p>
        <p class="notice-head">Status: {{reservation.status}}</p>
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
        this.currentUser = JSON.parse(localStorage.getItem("loggedInUser"))
    },
    methods:{
        getClass(reservation){
            if(reservation.status === 'pending') return {yellow: true}
            else if(reservation.status === 'confirmed') return {green: true}
            else return {red:true}
        },
    getTime(timeStamp){
       return moment(timeStamp).format('hh:mm')
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
