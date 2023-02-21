<template>
    <div>
        <h1 style="margin-bottom: 40px">E-commerce App</h1>

        <!-- <div>{{ data }}</div> -->
        
        <!-- <div v-for="product in myProducts">
            <h2>{{ product.name }}</h2>
            <span>{{ product.price }}</span>
            <p>{{ product.description }}</p>
        </div> -->

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
    // const { data } = await useFetch('/api/server');

    const { data } = await useFetch('http://localhost:3000/products');

    // const myProducts = data?._value.products;

    const myProducts = data?._rawValue;

    console.table(data._rawValue)

    // console.table(myProducts);
</script>

<style lang="scss" scoped>

</style>