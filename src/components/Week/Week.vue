<template>
    <div class="week">
        <div class="week__nav">
            <button class="week__btn active">На неделю</button>
            <button class="week__btn">Отменить</button>
        </div>
        <div class="week__content">
            <Day/>
        </div>
    </div>
</template>

<script>
import Day from '../Day/Day.vue';
    export default {
        components: {
            Day
        }
    }
</script>

<style lang="scss">

</style>