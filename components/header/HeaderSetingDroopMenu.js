//HeaderSetingDroop.js
//Мобіле-Шестерня(іконка)
//*********************************************************************************** */
//Щоб відключити всі *Open=(false), треба відключити при клацанні поза обєктом function useOutsideAlerter(ref)
// і відключення у всіх onClick(*togle) в самомк об'єкті.
//********************************************************************************** */

"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import HeaderThemesDroopMenu from "./HeaderThemesDroopMenu";
import avatar from "@/public/avatar/2.jpg";

const HeaderSetingDroopMenu = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [profile, setprofile] = useState("admin");

  const [setingMenuOpen, setSetingMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  //*************Для клацання поза обєктом
  const ref_HeaderSetingDroopMenu = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_HeaderSetingDroopMenu.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        setSetingMenuOpen(false);
        setUserMenuOpen(false)
      }
    }

    window.addEventListener("mousedown", handleOutSideClick)

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick)
    }
  }, [ref_HeaderSetingDroopMenu, setUserMenuOpen,setSetingMenuOpen])

  //випадаюче меню Налаштувань
  const onSetingMenu = () => {
    setSetingMenuOpen(!setingMenuOpen);
    setUserMenuOpen(false); //Закриваєм меню
    // console.log("onSetingMenu/setingMenuOpen=", setingMenuOpen);
  };

  return (
    <div ref={ref_HeaderSetingDroopMenu} className="relative m-0 items-center p-0 md:hidden">
      <button
        className="flex items-center justify-center rounded-full p-1 transition-colors hover:bg-hBgHov dark:hover:bg-hBgHov"
        onClick={onSetingMenu}
      >
        {/* іконка три крапки по Y */}
        <svg
          className="h-8 w-8  text-hText hover:text-hTextHov dark:text-hText dark:hover:text-hTextHov"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <circle cx="12" cy="12" r="1" /> <circle cx="12" cy="5" r="1" /> <circle cx="12" cy="19" r="1" />
          {/* іконка шестерня */}
        </svg>
       
      </button>

      {/* Випадаюче меню Seting */}
      <div className={`${setingMenuOpen ? "absolute" : "hidden"} right-0 z-10 m-0 p-0`}>
        <ul
          className={`m-0 w-[150px] rounded-lg  border border-hBorder bg-hBg p-1 text-base font-medium drop-shadow-md dark:border-hBorderD dark:bg-hBgD`}
        >
          <li className="dark:text-hTex flex w-full list-none  items-center text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:hover:bg-hBgHov dark:hover:text-hTextHov">
            <HeaderThemesDroopMenu setSetingMenuOpen={setSetingMenuOpen} />
          </li>
        </ul>
      </div>
    </div>
  )
};

export default HeaderSetingDroopMenu;
