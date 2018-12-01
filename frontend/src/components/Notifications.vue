<template>
    <section class="notification-box">
        <button class="notification-item" v-for="notification in this.user.notifications" 
        :key="notification.from"
        @click="goToChat(notification.from)"
        >{{notification.from}}</button>
    </section>
</template>

<script>
export default {
    data(){
        return {
            user:null
        }
    },
    created(){
        this.user = JSON.parse(localStorage.getItem("loggedInUser"))
    },
    methods: {
        goToChat(from){
            this.$router.push(`/baby/profile/sitter/${from}/contact`)
        }
    }
}
</script>

<style scoped lang="scss">
    .notification-item{
        border:1px solid black;
    }
</style>
