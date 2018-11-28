<template>
  <section class="album-container">
    <h1>Album</h1>
    <h2>Last week</h2>
    <div class="photos-container flex wrap flex-space-around">
      <div class="sitter" v-for="sitter in sitters" :key="sitter.id">
        <img :src="sitter.img" alt>
      </div>
    </div>

    <p>Last month</p>
    <div class="photos-container flex wrap flex-space-around">
      <div class="sitter flex" v-for="sitter in sitters" :key="sitter.id">
        <img :src="sitter.img" alt>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sitters: [
        {
          id: "111",
          name: "Neomi Green",
          date: "17.09.2018",
          img:
            "http://blog.sociallyloved.com/wp-content/uploads/2016/07/tlh-SeminoleSitters-E6-2.jpg"
        },
        {
          id: "222",
          name: "Neomi Green",
          date: "17.09.2018",
          img:
            "https://static1.squarespace.com/static/536901c2e4b0be3000a4841a/t/5369071ae4b00eb7103ae3ae/1399427070838/153165264+FInal+copy.png?format=1500w"
        },
        {
          id: "333",
          name: "Neomi Green",
          date: "17.09.2018",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjAslnT-4mN2NyrzCeYPfW2inovAh93Tq1xBccWfh80kaqqrx"
        },
        {
          id: "444",
          name: "Neomi Green",
          date: "17.09.2018",
          img:
            "https://static1.squarespace.com/static/5728cf46356fb0acde22a521/t/5728e5d5f8baf3357c41e3ba/1462298080687/Seminole+Sitters+%289%29.jpg?format=2500w"
        }
      ]
    };
  }
};
</script>



<style lang="scss" scoped>

.album-container{
font-size: 25px;

}
.photos-container {
  height: 250px;
  margin-top:20px;
}

.sitter {
  padding: 0 15px;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  h3 {
    display: inline-block;
    padding: 5px;
    font-size: 1em;
  }
  p {
    text-align: left;
    padding-bottom: 15px;
  }
}
</style>

