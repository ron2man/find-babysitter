<template>
<section class="list">
    <hr>
        <sitter-preview v-for="sitter in sitters" :sitter="sitter" :key="sitter.id"></sitter-preview>
</section>
</template>

<script>
import SitterPreview from './SitterPreview'
import SitterFilter from './SitterFilter'

export default {
      computed: {
    sitters() {
        console.log(this.$store.getters.getSitters)
      return this.$store.getters.getSitters;
    }
},
components:{
    SitterPreview,
    SitterFilter
}
}
</script>

<style>

</style>
