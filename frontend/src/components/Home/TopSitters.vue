<template>
  <section class="top-sitters">
    <h2 class="main-color">The Best Sitters</h2>
    <h3 class="second-color">top rated sitters in the app</h3>
    <div class="sitter-container">
      <div class="sitter" v-for="sitter in sitters" :key="sitter.id">
        <img :src="sitter.img" alt>
        <h3 class="bold">{{sitter.name}}</h3>
        <h3>
          <i class="fas fa-star"></i>
          {{sitter.rank}}
        </h3>
        <p>{{sitter.review}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
data(){
    return{
        sitters:[
            {id:'123',name:'Neomi Green', rank:4.5, review:'the best sitter ive ever met, helped me with my children two times in a week', img:'http://blog.sociallyloved.com/wp-content/uploads/2016/07/tlh-SeminoleSitters-E6-2.jpg'},
            {id:'124',name:'Alice Azulai', rank:4.9, review:'the best sitter ive ever met, helped me with my children two times in a week', img:'https://static1.squarespace.com/static/536901c2e4b0be3000a4841a/t/5369071ae4b00eb7103ae3ae/1399427070838/153165264+FInal+copy.png?format=1500w'},
            {id:'125',name:'Alice Azulai', rank:4.9, review:'the best sitter ive ever met, helped me with my children two times in a week', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjAslnT-4mN2NyrzCeYPfW2inovAh93Tq1xBccWfh80kaqqrx'},
            {id:'126',name:'Alice Azulai', rank:4.9, review:'the best sitter ive ever met, helped me with my children two times in a week', img:'https://static1.squarespace.com/static/5728cf46356fb0acde22a521/t/5728e5d5f8baf3357c41e3ba/1462298080687/Seminole+Sitters+%289%29.jpg?format=2500w'},
            {id:'127',name:'Alice Azulai', rank:4.9, review:'the best sitter ive ever met, helped me with my children two times in a week', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjAslnT-4mN2NyrzCeYPfW2inovAh93Tq1xBccWfh80kaqqrx'},
            {id:'128',name:'Alice Azulai', rank:4.9, review:'the best sitter ive ever met, helped me with my children two times in a week', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjAslnT-4mN2NyrzCeYPfW2inovAh93Tq1xBccWfh80kaqqrx'},    
        ]
    }
}
}
</script>

<style lang="scss" scoped>
.top-sitters{
    h2{
      font-size:2em;
      font-weight: bold;
      padding:5px 0;
      }
      h3{
        font-size:1.2em;
        margin-bottom:20px;
      }
    .sitter-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
    align-items: stretch;
    justify-items: stretch;
    
    .sitter{
        padding: 0 15px;
      img{width:100%;object-fit: cover;}
      h3 {display: inline-block; padding:5px;font-size:1em}
      p{text-align: left;padding-bottom:15px;line-height: 1.4em}
    }

    .sitter:nth-child(5){display: none}
    .sitter:nth-child(6){display: none}
    }
    @media (min-width: 767px){
        .sitter-container {
            grid-template-columns: 1fr 1fr 1fr;
        .sitter:nth-child(5){display: block}
    .sitter:nth-child(6){display: initial}
    }
    }

  }
</style>
