<script>
import AppHeader from './components/AppHeader.vue'
import SearchType from './components/SearchType.vue'
import CardsList from './components/CardsList.vue'



export default {
  components: {
    AppHeader,
    SearchType,
    CardsList
  }
}
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <main>
    <!-- Filter cards -->
    <section>
      <SearchType />
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
  height: calc(100vh - 54.4px);
}
</style>
