<template>
  <!-- <date-pick v-model="date"></date-pick> -->
  <!-- <date-pick v-model="date"></date-pick> -->
  <date-pick v-model="date" :hasInputElement="false" :isDateDisabled="isFutureDate"></date-pick>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
    components: {DatePick},
    data: () => ({
        date: ''
    }),
     methods: {
        isFutureDate(date) {
            const currentDate = new Date();
            return date < currentDate;
        }
     }
};
</script>