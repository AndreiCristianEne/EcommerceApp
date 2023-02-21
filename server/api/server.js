// export default defineEventHandler(() => ({
//   "products": [
//     {
//         "name": "Car",
//         "description": "A car is nice to get you home",
//         "price": 20000
//     },
//     {
//         "name": "Mobile phone",
//         "description": "A mobile phone is used to talk to your wife",
//         "price": 225
//     },
//     {
//         "name": "Water bottle",
//         "description": "You can drink water from this, whenever you're thirsty",
//         "price": 40
//     }
//   ]
// }));

export default defineEventHandler(async (event) => {

    const uri = `http://localhost:3000/products`

    const { data } = await $fetch(uri)

    console.log("BRUH", data);

    return data
})