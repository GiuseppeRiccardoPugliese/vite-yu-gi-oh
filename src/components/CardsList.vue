<script>
//Importo la mia card singola
import SingleCard from './SingleCard.vue'

//Importo lo store
import { store } from '../store';

export default {
    name: 'CardsList',
    components: {
        SingleCard
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div class="row mx-5 justify-content-between">
        <div class="col-12 bg-dark text-white py-2">Found 39 cards</div>
        <SingleCard v-for="card in store.CardsList" :key="card.id" :info="card" />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.row {
    background-color: $primary;
    padding: 30px;
}
</style>
