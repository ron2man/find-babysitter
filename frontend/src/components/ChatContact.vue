<template>
<section>
  <head>
    <title>Socket.IO chat</title>
  </head>
  <body>
    <ul class="messages">
      <li v-for="msg in msgs" :key="msg.createdAt" :class="{sender: msg.from === loggedUser.name.fullName}">
        <div class="msg-container" :class="{sender: msg.from === loggedUser.name.fullName}">
          <div class="msg-from"  :class="{msgfromsender: msg.from === loggedUser.name.fullName}">{{msg.from}}</div>
          <div class="msg-msg">{{msg.msg}}</div>
          <div class="msg-time">{{+msg.createdAt | relativeTime}}</div>
        </div>
        </li>
    </ul>
    <div class="input-box flex">
      <input id="m" autocomplete="off" v-model="msg">
      <button @click="SendMsg(msg)"><i class="fas fa-comment"></i></button>
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
    this.loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const type = this.checkParentOrSitter();
    if (type === "parent") {
      this.roomname = `${this.loggedUser.username}${
        this.$route.params.userName
      }`;
    } else {
      this.roomname = `${this.$route.params.userName}${
        this.loggedUser.username
      }`;
    }
    this.firstChat();
  },
  sockets: {
    SendMsg(msg) {
      this.msgs.push(msg);
      if (this.counter === 0) {
          const user = this.$route.params.userName;
          this.$store.dispatch({ type: "sendNotification", user });
        }
        this.counter++;
      }
    },
    getHistory(history) {
      const historyMsgs = history[0].msgs
      if (historyMsgs) {
        for (var i = 0; i < historyMsgs.length; i++) {
          this.msgs.push(historyMsgs[i]);
        }
      }
  },
  methods: {
    SendMsg(msg) {
      const from = this.loggedUser.name.fullName;
      const time = Date.now()
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
}
}
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

.msg-time{
    font-size: 15px;
    color: grey;
}

.msg-msg{
  margin-bottom: 4px;
}

.msg-from{
  text-transform: capitalize;
  color: #984a59;
  font-weight: bold;
}

.input-box {
  background: rgb(255, 255, 255);
  padding: 3px;
  position: fixed;
  bottom: 0px;
  width: 86%;

  
  }
  
.input-box input {
  border: 1px solid grey;
  border-radius: 10px;
  width: 90%;
  margin-right: 0.5%;
  margin-bottom: 2px;
  height: 50px;
  background-color: #ffffff;
  line-height: 29px;
  padding: 10px;
  font-size: 28px;
  margin: 3px;
}
.input-box button {
       margin-bottom: 2px;
    width: 112px;
    height: 53px;
    margin-left: 18px;
    color: white;
    background-color: #984a59;
    line-height: 26px;
    -webkit-transition: .3s all;
    transition: .3s all;
    border-radius: 10px;
  }

.input-box button:hover{
  background-color: #e06c83;
  cursor: pointer;
} 

    *:focus {
    outline: none;
}




.messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  overflow: hidden;
}
.messages li {
  padding: 5px 10px;
  text-align: left;
  border:1px solid black;
  border-radius: 10px;
  border-top-left-radius: 0px;
  margin:5px;
  width: fit-content;
  font-size: 20px;
  margin-left:5px;
}

.fa-comment:before {
    content: "\F075";
    font-size: 40px;
}

.sender{
  background-color:#984a59;
  align-self: flex-end;
}

.msgfromsender{
  color:white;
}

.msg-input{
width:200px;
}
</style>
