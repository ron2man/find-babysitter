<template>
  <section>
    <!-- <BasicVueChat/> -->
    <!-- <img src="./frontend/public/img/chat.png"> -->
    <input type="text" name id>
    <button @click="shoot">X</button>
  </section>
</template>

<script>
import BasicVueChat from "basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue";

export default {
  name: "chatCmp",

  components: {
    BasicVueChat
  },
  created(){
      var userName = this.$store.state.currUser.username
      console.log(parentId);
      this.$socket.emit('firstChat',userName)
  },
  sockets: {
      shoot(msg) {
          console.log(msg)
      },
      connection(parent,user){
          this.$socket.join(`${parent}${user}`)
      },

  },
  methods: {
      shoot() {
          this.$socket.emit('shoot', 'dudigai')
      }
  }
};
</script>



<style>
</style>
