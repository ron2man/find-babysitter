<template>
    <section class="appFilter">
        filter text:
            <input type="text" v-model="filter.name">
        filter age:
            <input type="number" placeholder="enter age" step="1" min="0" max="100" v-model="filter.age">
        filter language:
            <select v-model="filter.language">
                <option value="english">English</option>
                <option value="hebrew">Hebrew</option>
            </select> 
        filter experience:
            <input type="number" placeholder="enter age" step="1" min="0" max="30" v-model="filter.experience">
        filer license:
            <select v-model="filter.license">
                <option value="true">have license</option>
                <option value="false">dont have license</option>
            </select> 
        filter vehicle:
            <select v-model="filter.vehicle">
                <option value="true">have vehicle</option>
                <option value="false">dont have vehicle</option>
            </select> 
        
        <button class="add-btn" @click="setFilter(filter)"></button>
    </section>
</template>

<script>
export default {
    data(){
        return {
            filter: {
                name:'',
                age:null,
                language:'',
                experience:'',
                license:false,
                vehicle:false,
            }
        }
    },
    methods:{
        setFilter(filter){
            this.$emit('filter', filter)
        }
    }
}
</script>

<style>

</style>
