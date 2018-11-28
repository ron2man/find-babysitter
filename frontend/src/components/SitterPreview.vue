<template>
  <div class="sitter-card">
    <div class="card-header">{{sitter.name}}</div>
    <div class="details">
      <img
        src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
      >
      <div class="details-container">
        <p class="detail">
          <span class="text-span">Area:</span>
          {{sitter.adrress.district}}
        </p>
        <p class="detail">
          <span class="text-span">Adress:</span>
          {{sitter.adrress.city}}
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
  methods: {
    },
    computed:{
    getLength() {
      if (this.sitter.description.length > 180) {
        const newDesc = this.sitter.description.substring(180, length - 1);
        return newDesc
      } else {
        return this.sitter.description;
      }
    }
  },
  created() {
    console.log(this.sitter.description.length);
    console.log("dudi");
  }
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
</style>
