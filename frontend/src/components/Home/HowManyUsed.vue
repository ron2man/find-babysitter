<template>
  <section>
    <img src="http://www.cco.ku.edu/wp-content/uploads/2014/06/Hug-blue-640x640.png" alt>
    <h2>{{deals}} Already Found Sitters</h2>
  </section>
</template>

<script>
export default {
data(){
    return{
        deals: 1047,
        interval: null,
    }
},
created(){
    this.interval = setInterval(()=>{
       var rdm = Math.floor(Math.random()*9)
        this.deals += rdm;
    },3000);
},
destroyed(){
this.interval = clearInterval();
}
}
</script>

<style lang="scss" scoped>
section{width:50%;margin:0 auto;}
h2{font-size:1.5em}
    img{ width: 80%}
</style>
