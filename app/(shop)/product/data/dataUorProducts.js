export async function getOurProducts() {
  const promise = new Promise((res) => setTimeout(() => res(PRODUCTS), 1500));
  return await promise;
}

export async function getProductById(id) {
  const a = parseFloat(id);
  const promise = new Promise((res) => {
    setTimeout(() => res(PRODUCTS.find((x) => x.id === parseFloat(id))), 1500);
  });
  return await promise;
}

export const PRODUCTS = [
  {
    id: 1,
    title: "Набір ланцюжків",
    image: "/images/products/Prod1-Chains.jpg",
    description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 2,
    title: "Набір ланцюжків",
    image: "/images/products/Prod2-Chains.jpg",
    description: "Дуже якісний набір для вечірок і балу.",
  },

]


