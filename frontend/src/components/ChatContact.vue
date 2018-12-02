<template>
<section>
  <head>
    <title>Socket.IO chat</title>
  </head>
  <body>
    <ul id="messages">
      <li v-for="msg in msgs" :key="msg.createdAt" :class="{sender: msg.from === loggedUser.username}">{{msg.from}}:{{msg.msg}} - {{msg.createdAt | relativeTime}}</li>
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
      loggedUser: null,
      nickname: null
    };
  },
  components: {
    BasicVueChat
  },
  created() {
    this.getHistory
    this.loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(this.loggedUser)
    const type = this.checkParentOrSitter();
    if (type === "parent") {
      this.roomname = `${this.loggedUser.username}${
        this.$route.params.parentName
      }`;
    } else {
      this.roomname = `${this.$route.params.sitterName}${
        this.loggedUser.username
      }`;
    }
    this.firstChat();
  },
  sockets: {
    SendMsg(msg) {
      const newMsg = this.createdMsg(msg)
      this.msgs.push(newMsg);
      if (this.counter === 0) {
        const type = this.checkParentOrSitter();
        if (type === "parent") {
          const user = this.$route.params.parentName;
          this.$store.dispatch({ type: "sendNotification", user });
        } else {
          const user = this.$route.params.sitterName;
          this.$store.dispatch({ type: "sendNotification", user });
        }
        this.counter++;
      }
    },
    getHistory(history) {
      if (history.length) {
        for (var i = 0; i < history.length; i++) {
          this.msgs.push(history[i]);
        }
      }
    },
    firstChat(roomname) {
      console.log("server sending back room name: ", roomname);
    }
  },
  methods: {
    SendMsg(msg) {
      const from = this.loggedUser.username;
      const time = Date.now()
      console.log(from)
      this.$socket.emit("SendMsg", { details: this.roomname, msg,from,time});
      this.msg = "";
    },
    firstChat() {
      this.$socket.emit("firstChat", this.roomname);
    },
    checkParentOrSitter() {
      if (this.loggedUser.type === "parent") return "parent";
      else return "sitter";
    },
    createdMsg(msg){
      return {
        from:this.loggedUser.username,
        msg,
        createdAt: Date.now()
      }
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
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
}
#messages li {
  padding: 5px 10px;
  text-align: left;
  border:1px solid black;
  border-radius: 10px;
  margin:5px;
  width: fit-content;
  font-size: 20px;
}

.sender{
    align-self: flex-end;
      background-color: rgb(138, 138, 255);
}
</style>
