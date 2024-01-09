import { reactive } from "vue";

export const store = reactive({
    CardsList: [],
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    loading: true,
    cardType: [],
    apiGetType: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
});