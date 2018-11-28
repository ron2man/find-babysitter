<template>
<section class="list">
    <search></search>
    <hr>
        <sitter-preview v-for="sitter in sitters" :sitter="sitter" :key="sitter.id"></sitter-preview>
</section>
</template>

<script>
import SitterPreview from './SitterPreview'
import SitterFilter from './SitterFilter'
import Search from './Home/Search.vue'

export default {
      computed: {
    sitters() {
      return this.$store.getters.getSitters;
    }
},
components:{
    SitterPreview,
    Search,
    SitterFilter
}
}
</script>

<style>

</style>
