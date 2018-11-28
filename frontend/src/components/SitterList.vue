<template>
<section class="list">
    <search></search>
    <hr>
        <sitter-preview v-for="sitter in sitters" :sitter="sitter" :key="sitter.id"></sitter-preview>
</section>
</template>

<script>
import SitterPreview from './SitterPreview'
import SiterFilter from './SiterFilter'
import Search from './Home/Search.vue'

export default {
      computed: {
    sitters() {
        console.log(this.$store.getters.getSiters)
      return this.$store.getters.getSiters;
    }
},
components:{
    SitterPreview,
    Search,
    SiterFilter
}
}
</script>

<style>

</style>
