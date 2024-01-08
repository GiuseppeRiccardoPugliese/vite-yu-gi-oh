<script>

export default {
    name: 'SingleCard',
    props: {
        info: Object
    }
}

</script>

<template>
    <div class="my_card">
        <div>
            <img class="img-fluid" :src="info.card_images[0].image_url" alt="">
        </div>
        <div class="info_card text-center">
            <h5 class="text-white">{{ info.name }}</h5>
            <span>{{ info.type }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.my_card {
    padding: 0;
    width: calc((100% / 5) - 1rem);
    margin-bottom: 1rem;

    img {
        width: 100%;
        height: 100%;
    }

    .info_card {
        background-color: $orange;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h5 {
            text-transform: capitalize;
        }
    }
}
</style>
