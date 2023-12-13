export async function getGoldProducts() {
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
    title: "Сережки",
    image: "/images/products/gold/Seregky/p1-400-300.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 2,
    title: "Сережки",
    image: "/images/products/gold/Seregky/p2-400-310.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 3,
    title: "Сережки",
    image: "/images/products/gold/Seregky/p3-400-320.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 4,
    title: "Сережки",
    image: "/images/products/gold/Seregky/p4-400-330.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 5,
    title: "Сережки",
    image: "/images/products/gold/Seregky/p5-400-350.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 6,
    title: "Сережки",
    image: "/images/products/gold/Seregky/p6-400-340.jpg",
    description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 7,
    title: "Сережки",
    image: "/images/products/gold/Seregky/p7-400-322.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 8,
    title: "Сережки",
    image: "/images/products/gold/Seregky/p8-400-340.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 9,
    title: "Сережки",
    image: "/images/products/gold/Seregky/p9-400-300.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 10,
    title: "Сережки",
    image: "/images/products/gold/Seregky/p10-400-300.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 11,
    title: "Кольє",
    image: "/images/products/gold/Kolie/p1-400-360.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 12,
    title: "Кольє",
    image: "/images/products/gold/Kolie/p2-400-302.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 13,
    title: "Кольє",
    image: "/images/products/gold/Kolie/p3-400-340.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 14,
    title: "Кольє",
    image: "/images/products/gold/Kolie/p4-400-314.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 15,
    title: "Браслети",
    image: "/images/products/gold/braslety/p1-400-260.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 16,
    title: "Браслети",
    image: "/images/products/gold/braslety/p2-400-290.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 17,
    title: "Браслети",
    image: "/images/products/gold/braslety/p3-400-290.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 18,
    title: "Браслети",
    image: "/images/products/gold/braslety/p4-400-290.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 19,
    title: "Браслети",
    image: "/images/products/gold/braslety/p5-400-300.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 20,
    title: "Браслети",
    image: "/images/products/gold/braslety/p6-400-300.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
  {
    id: 21,
    title: "Браслети",
    image: "/images/products/gold/braslety/p7-400-300.jpg",
    // description: "Дуже якісний набір для вечірок і балу.",
  },
]


