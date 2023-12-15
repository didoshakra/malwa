// import HomePage from "@/components/HomePage";
import HomePage from "@/components/mag/HomePage";
import OurProducts from "@/app/(shop)/product/OurProducts";
import GoldProducts from "@/app/(shop)/product/GoldProducts";
import SilverProducts from "@/app/(shop)/product/SilverProducts"

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-screen px-1">
      <HomePage />
      <section className="flex flex-col space-y-3 px-2  pt-10 text-center text-hText">
        {/* <h1 className="tex-lg  font-serif italic">Новий товар</h1> */}
        <h2 className="text-4xl  font-bold ">Наші ювелірні вироби і прикраси</h2>
        <p className='text-base font-semibold'>Наші ювелірні не тільки прикрасять Вас, а і піднімуть Ваш настрій.</p>
      </section>
      {/* <OurProducts /> */}
      <GoldProducts />
      <SilverProducts />
    </main>
  )
}
