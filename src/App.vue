<script>
//Importo axios
import axios from 'axios';

//Importo i componenti figli
import AppHeader from './components/AppHeader.vue'
import SearchType from './components/SearchType.vue'
import CardsList from './components/CardsList.vue'

//Importo lo store
import { store } from './store';

export default {
  components: {
    AppHeader,
    SearchType,
    CardsList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCard() {

      let myUrl = store.apiURL;

      if (store.searchArchetype !== '') {
        myUrl += `?${store.typeArchetype}=${store.searchArchetype}`
      }

      axios.get(myUrl).then((res => {
        store.CardsList = res.data.data;
        store.loading = false;
      }))
        .catch((err => {
          console.log("Questi sono gli errori", err);
        }));
    }
  },
  created() {
    this.getCard();
    console.log(this.getCard);
  }
}
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <main>
    <!-- Filter cards -->
    <section>
      <SearchType @search="getCard" />
    </section>

    <section>
      <CardsList />
    </section>

  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

main {
  background-color: #d48f38;
}
</style>
