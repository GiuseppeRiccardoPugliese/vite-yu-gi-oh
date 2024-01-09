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
    },
    computed: {
        resultCard() {
            return store.CardsList.length;
        }
    }
}

</script>

<template>
    <div v-if="!store.loading" class="row mx-5 justify-content-between">
        <div v-if="resultCard > 0" class="col-12 bg-dark text-white py-2">Found {{ resultCard }} cards</div>
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
