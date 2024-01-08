<script>

export default {
    name: 'SearchType'
}

</script>

<template>
    <select class="bg-white border border-dark rounded-2 my-2 py-1 px-4" name="type" id="">
        <option value="volvo">Alien</option>
        <option value="saab">Human</option>
        <option value="opel">Robot</option>
        <option value="audi">idk</option>
    </select>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

select {
    margin-left: 100px;
}
</style>
