<template>
    <div>
        <h1 style="margin-bottom: 40px">E-commerce App</h1>
        <div v-for="product in myProducts">
            <h2>{{ product.title }}</h2>
            <span>
                <img style="height: 50px; width: 50px" :src="product.image">
            </span>
            <div><b>{{ product.price }}</b></div>
            <p>{{ product.description }}</p>
            <hr>
        </div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/server');
    const myProducts = data;
    console.table(myProducts);
</script>

<style lang="scss" scoped>

</style>