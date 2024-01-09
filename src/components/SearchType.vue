<script>
//Importo lo store
import { store } from '../store';

//Importo axios
import axios from 'axios';

export default {
    name: 'SearchType',
    data() {
        return {
            store
        }
    },
    methods: {
        getArchetype() {
            axios.get(store.apiGetType)
                .then((res => {
                    store.cardType = res.data;
                }))
                .catch((err => {
                    console.log("Questi sono gli errori", err);
                }));
        }
    },
    created() {
        this.getArchetype();
        console.log(this.getArchetype);
    }
}

</script>

<template>
    <select class="bg-white border border-dark rounded-2 my-3 py-1 px-4" name="type" id="">
        <option value="">Select archetype</option>
        <option v-for="(archetype, index) in store.cardType" :key="index" value="archetype">{{ archetype.archetype_name }}
        </option>
    </select>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

select {
    margin-left: 100px;
}
</style>
