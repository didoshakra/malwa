export async function getAllProducts() {
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
    title: "Набір із срібла",
    image: "/images/products/Prod1-400-430.jpg",
    description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 2,
    title: "Кольє",
    image: "/images/products/Prod2-400-314.jpg",
    description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 3,
    title: "Сережки срібло",
    image: "/images/products/Prod3-400-346.jpg",
    description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 4,
    title: "Набір із срібла",
    image: "/images/products/Prod4-400-320.jpg",
    description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 5,
    title: "Сережки срібло",
    image: "/images/products/Prod5-400-300.jpg",
    description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 6,
    title: "Сережки срібло",
    image: "/images/products/Prod6-400-300.jpg",
    description: "Дуже якісний набір для вечірок і балу.",
  },
]


