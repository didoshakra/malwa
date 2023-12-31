//Drawer.js

import Image from "next/image"
import Link from "next/link"
import DrawerHMenuDroop from "@/components/header/DrawerHeaderMenuDroop"
import DrawerSocialMenuDroop from "@/components/header/DrawerSocialMenuDroop"
//***************************************************************** */
export default function DrawerDroop({ drawerOpen, setDrawerOpen }) {
  //
  return (
    <div
      //Виїжджає Зправа
      //   className={`fixed right-0 top-0 z-20 flex h-full w-[35vw] flex-col overflow-y-scroll  bg-drawDropMenuBg dark:bg-headMenuBgDark ${
      //     drawerOpen ? "translate-x-0" : "translate-x-full"
      //   } duration-300 ease-in-out `}
      //Виїжджає Зліва
      className={`top-50 fixed -left-[100vw] z-20 flex h-full w-[100vw] flex-col overflow-y-scroll bg-drawDropMenuBg dark:bg-drawDropMenuBgD  md:-left-[30vw] md:w-[30vw] ${
        drawerOpen ? "translate-x-full" : "translate-x-0"
      } duration-500 ease-in-out `}
    >
      {/* <div className="w-full/5 fixed inset-0 z-20 flex max-h-[600px] max-w-[300px] flex-col overflow-y-scroll bg-drawerDropMenuBg transition-transform duration-200 ease-out dark:bg-drawDropMenuBgD"> */}
      {/* Шапка */}
      <div className="flex h-10 items-center justify-between gap-1">
        <div
          className="flex items-center justify-between gap-1 pl-1"
          onClick={() => {
            setDrawerOpen(false)
          }}
        >
          <Link href="/">
            <Image
              title="ramag"
              width={80}
              height={60}
              //   src="/images/home/Malva-Logo-109-60.jpg"
              //   src="/images/home/Malwa-flower-80-60.jpg"
              src="/images/home/Malwa-flower-80-60-kilce.jpg"
              alt="logo"
            />
          </Link>
          <Link
            href="/"
            className="justify-begin  flex items-center px-4 text-2xl font-bold italic text-hText  dark:text-hText md:text-2xl"
            title="Мальва"
          >
            Мальва
          </Link>
        </div>
        <div onClick={(e) => setDrawerOpen(false)} className="pr-2">
          {/* <IconCancel */}
          <svg
            className="h-6 w-6 text-hText dark:text-hText"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" /> <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
      {/* --- Список меню --<hr Divider/Роздільник-------------------------------- */}
      <hr className="h-0.5 min-w-full mt-2 bg-drawDropHr" />
      <DrawerHMenuDroop setDrawerOpen={setDrawerOpen} />
      {/* ----------------------------------------------------------- */}
      <hr className="h-0.5 min-w-full bg-drawDropHr" />
      {/* ----------------------------------------------------------- */}
      <DrawerSocialMenuDroop />
    </div>
  )
}
