//About.js
import ItemImage from "@/components/_images/ItemImage"
import Image from 'next/image'

const pageAboutMe_text1 = `"Мальва" - Магазин виробів з золота та срібла... "`

const pageAboutMe_text2 = `Щоро запрошуємо відвідати наш магазин. Ви не пошкодуєте!!!`

export const item = {
  title: "магазин Станіславський",
  image: "/images/Shop-Malwa-600-427.jpg",
}

const About = () => {
//   console.log("About/item= ", item)
  return (
    <section className="flex flex-col space-y-3 px-2 pb-5 pt-5 text-center text-hText">
      <h2 className=" text-4xl italic font-bold">Про нас</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex justify-center relative h-96 flex-1">
          {/* <ItemImage item={item} width={500} height={370} /> */}
          {/* <ItemImage item={item} fill /> */}
          <Image fill src={item.image} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        {/* //leading-6: висота лінії
          tracking-wide: інтервал між літерами. */}
        <div className=" text-left">
          <p className="text-2xl leading-8 tracking-wide font-medium">{pageAboutMe_text1}</p>
          <p className="text-xl pt-4 font-bold leading-6 tracking-wide">{pageAboutMe_text2}</p>
        </div>
      </div>
    </section>
  )
}

export default About
