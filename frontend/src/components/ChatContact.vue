<template>
  <section>
  <head>
    <title>Socket.IO chat</title>
  </head>
  <body>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
  </body>
  </section>
</template>

<script>
import BasicVueChat from "basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue";

export default {
  name: "chatCmp",

  components: {
    BasicVueChat
  },
  created() {
    console.log(this.$route.params.parentName || this.$route.params.sitterName)
},
  sockets: {
    shoot(msg) {
      console.log(msg);
    }
    // connection(parentname, sittername) {
    //   this.$socket.join(`${parentname}${sittername}`);
    // }
  },
  methods: {
    shoot() {
      this.$socket.emit("shoot", "dudigai");
    }
  }
};
</script>



    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: rgb(255, 255, 255); padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
    </style>
