//Не треба уніфікувати, бо можкть бути різні контейнери відобрадення і різні маршрути  href={`/product/${item.id}`}
//Під шаблон ProductVegefoogs(без цін і іконок)
// import Image from "next/image"
import { getGoldProducts } from "@/app/(shop)/product/data/dataGoldProducts"
import Link from "next/link"
import ItemImage from "@/components/_images/ItemImage"

//***  На dark не треба переключати коліри тексту !!!   */

function Product({ item }) {
  //   console.log("************Product.js/P/item=", item);
  return (
    <Link
      href={`/product/${item.id}`}
      //   href={`(shop)/product/${item.id}`}
      className="border-hBorder group flex h-96 flex-col rounded  border-2  bg-white transition-transform duration-200 ease-out hover:scale-105"
      //   className="h-96 flex flex-col rounded border-2"
    >
      <div className="m-2 relative max-h-72 flex-1">
        {/* <div className="m-2 relative max-h-72 flex-1 "> */}
        {/* //НЕ заповнило весь контейнер */}
        {/* <ItemImage item={item} width={350} height={280} /> */}
        {/* //Заповнює весь контейнер */}
        <ItemImage item={item} fill />
        {/* //Заповнює весь контейнер */}
        {/* <Image src={item.image} alt={item.title} fill className="w-full h-auto" /> */}
        {/* //Заповнює весь контейнер */}
        {/* <Image
          src={item.image}
          alt={item.title}
          fill
          style={{
            objectFit: "cover",
          }} */}
        {/* /> */}
      </div>

      <h3 className="text-center font-serif font-normal uppercase">{item.title}</h3>
      {/*line-clamp-2: Для затиску тексту до певної кількості рядків. */}
      <p className="line-clamp-2 px-4 text-xs italic text-hTexr">{item.description}</p>
    </Link>
  )
}

export default async function Products() {
  const products = await getGoldProducts()
  // console.log("Products.js/products=", products)
  return (
    <section className="flex flex-col space-y-3 px-2 pb-5 pt-5 text-center text-hText">
      {/* <h1 className="tex-lg  font-serif italic">Новий товар</h1> */}
      {/* <h2 className="text-4xl  font-bold ">Наші ювелірні вироби і прикрасм</h2> */}
      <h2 className="text-3xl  font-bold ">Вироби з золота</h2>
      {/* <p>Наші ювелірні не тільки прикрасять, а і піднімуть Ваш настрій.</p> */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
