<template>
    <div class="container">
        <Current/>
        <Week/>
    </div>
</template>

<script>
import Current from '../Current/Current.vue';
import Week from '../Week/Week.vue'
    export default {
        components: {
            Current,
            Week
        }
    }
</script>

<style lang="scss">

</style>