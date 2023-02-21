export default defineEventHandler(async (event) => {
  const uri = "http://localhost:3004/products";

  const data = await $fetch(uri);

  return data;
});
