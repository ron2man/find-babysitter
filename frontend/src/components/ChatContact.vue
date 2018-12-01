<template>
<section>
  <head>
    <title>Socket.IO chat</title>
  </head>
  <body>
    <ul id="messages">
      <li v-for="msg in msgs" :key="msg">{{msg}}</li>
    </ul>
    <div class="input-box">
      <input id="m" autocomplete="off" v-model="msg">
      <button @click="SendMsg(msg)">Send</button>
    </div>
  </body>
</section>
</template>

<script>
import BasicVueChat from "basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue";

export default {
  name: "chatCmp",
  data() {
    return {
      roomname: null,
      msg: "",
      msgs: [],
      counter: 0,
      loggedUser:null
    };
  },
  components: {
    BasicVueChat
  },
  created() {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedInUser"))
    const type = this.checkParentOrSitter();
    if (type === "parent") {
      this.roomname = `${this.loggedUser.username}${this.$route.params.parentName}`;
    } else {
      this.roomname = `${this.$route.params.sitterName}${this.loggedUser.username}`;
    }
    this.firstChat();
  },
  sockets: {
    SendMsg(msg) {
      this.msgs.push(msg);
      if (this.counter === 0) {
        const type = this.checkParentOrSitter();
        if (type === "parent") {
          const sitter = this.$route.params.parentName;
          this.$store.dispatch({ type: "sendNotification", sitter });
        } else {
          const parent = this.$route.params.sitterName;
          this.$store.dispatch({ type: "sendNotification", parent });
        }
        this.counter++;
      }
    },
    firstChat(roomname) {
      console.log("server sending back room name: ", roomname);
    }
  },
  methods: {
    SendMsg(msg) {
      this.$socket.emit("SendMsg", { details: this.roomname, msg });
      this.msg = "";
    },
    firstChat() {
      this.$socket.emit("firstChat", this.roomname);
    },
    checkParentOrSitter() {
      if (this.loggedUser.type === "parent") return "parent";
      else return "sitter";
    }
  }
};
</script>



    <style  lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font: 13px Helvetica, Arial;
}
.input-box {
  background: rgb(255, 255, 255);
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.input-box input {
  border: 0;
  padding: 10px;
  width: 90%;
  margin-right: 0.5%;
}
.input-box button {
  width: 9%;
  background: rgb(130, 224, 255);
  border: none;
  padding: 10px;
}
#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages li {
  padding: 5px 10px;
}
#messages li:nth-child(odd) {
  background: #eee;
}
</style>
