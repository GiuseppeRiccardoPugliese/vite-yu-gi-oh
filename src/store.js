import { reactive } from "vue";

export const store = reactive({
    CardsList: [],
    filterURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    loading: true,
    cardType: [],
    apiGetType: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    searchArchetype: '',
    typeArchetype: 'archetype',
});