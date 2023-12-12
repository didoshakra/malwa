// import LayoutWithSidebar from "@/components/rozet/LayoutWithSidebar";
// import HomePage from "@/components/HomePage";
import HomePage from "@/components/mag/HomePage";
import OurProducts from "@/app/(shop)/product/OurProducts";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-screen px-1">
      {/* <LayoutWithSidebar /> */}
      <HomePage />
      <OurProducts />
    </main>
  );
}
