<script>

export default {
    name: 'SingleCard'
}

</script>

<template>
    <div class="my_card">
        <div>
            <img class="img-fluid" src="https://www.w3schools.com/images/picture.jpg" alt="">
        </div>
        <div class="info_card text-center">
            <h5 class="text-white">nome card</h5>
            <span>Tipo</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.my_card {
    padding: 0;
    width: calc((100% / 5) - 1rem);
    margin-right: 1rem;

    img {
        width: 100%;
        height: 100%;
    }

    .info_card {
        background-color: $orange;

        h5 {
            text-transform: capitalize;
        }
    }
}
</style>
