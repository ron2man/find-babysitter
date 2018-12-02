<template>
  <div class="sitter-card" v-if="this.sitter">
    <div class="card-header">{{sitter.fullName}}</div>
    <div class="details">
      <img
        src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
      >
      <div class="details-container">
        <p class="detail">
          <span class="text-span">Area:</span>
          {{sitter.adress.district}}
        </p>
        <p class="detail">
          <span class="text-span">Adress:</span>
          {{sitter.adress.city}}
        </p>
        <p class="detail">
          <span class="text-span">Experience:</span>
          {{sitter.experience}}
        </p>
        <p class="detail">
          <span class="text-span">Position:</span>
          {{sitter.position}}
        </p>
      </div>
      <div class="action-container flex column">
        <div class="action-item" @click="goToDetails(sitter._id)">
          <p>View details</p>
          <div>
            <i class="far fa-user"></i>
          </div>
        </div>
        <div class="action-item" @click="sendMessage(sitter)">
          <p>Message</p>
          <div>
            <i class="far fa-comments"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="stars-container">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="detail">
      <span class="text-span">"</span>
      {{getLength}}...
    </p>
    <div class="awsomes-card">
      <i class="fas fa-eye eye-icon"></i> 560
    </div>
  </div>
</template>

<script>
export default {
  props: ["sitter"],
  created(){
    console.log(this.sitter)
  },
  methods: {
    goToDetails(id) {
      this.$router.push(`/baby/${id}`);
    },
    sendMessage(sitter) {
      this.$store.dispatch({type:'checkLogin'})
        .then(user => {
          if(!user)this.$router.push("/login")
          else this.$router.push(`profile/parent/${sitter.username}/contact`)
        })
    }
  },
  computed: {
    getLength() {
      if (this.sitter.description.length > 180) {
        const newDesc = this.sitter.description.substring(180, length - 1);
        return newDesc;
      } else {
        return this.sitter.description;
      }
    }
  },
 
};
</script>

<style scoped lang="scss">
.sitter-card {
  border-radius: 10px;
  border: 1px solid black;
  margin: 5px;
}

.card-header {
  background-color: #5c7893;
  height: 30px;
  color: white;
  line-height: 30px;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  width: 100%;
  text-transform: capitalize;
}

.details {
  display: flex;
  margin-top: 10px;
  text-align: left;
}

img {
  height: 80px;
  margin: 10px;
}

.detail {
  margin: 4px;
}

.text-span {
  font-weight: bold;
}

.awsomes-card {
  text-align: left;
}

.eye-icon {
  margin-top: 5px;
  margin-left: 10px;
  margin-bottom: 5px;
}

.stars-container {
  margin-bottom: 10px;
}

.action-container {
  margin-left: 30px;
}

.action-item {
  height: 50px;
  width: 90px;
  border: solid 1px rgb(117, 145, 155);
  text-align: center;
  margin-bottom: 5px;
  line-height: 22px;
}
</style>
