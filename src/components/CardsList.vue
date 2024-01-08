<script>
//Importo la mia card singola
import SingleCard from './SingleCard.vue'

//Importo il loader
import AppLoader from './AppLoader.vue'

//Importo lo store
import { store } from '../store';

export default {
    name: 'CardsList',
    components: {
        SingleCard,
        AppLoader
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div v-if="!store.loading" class="row mx-5 justify-content-between">
        <div class="col-12 bg-dark text-white py-2">Found 39 cards</div>
        <SingleCard v-for="card in store.CardsList" :key="card.id" :info="card" />
    </div>

    <AppLoader v-else />
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.row {
    background-color: $primary;
    padding: 30px;
}
</style>
