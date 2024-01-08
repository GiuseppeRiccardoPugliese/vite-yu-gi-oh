<script>
import SingleCard from './SingleCard.vue'


export default {
    name: 'CardsList',
    components: {
        SingleCard
    }
}

</script>

<template>
    <div class="row mx-5">
        <div class="col-12 bg-dark text-white py-2">Found 39 cards</div>
        <SingleCard />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.row {
    background-color: $primary;
    padding: 30px;
}
</style>
