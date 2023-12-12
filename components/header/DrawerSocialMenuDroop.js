//DrawerSocialMenuDroop.js
//Меню в Drawer з Header

"use client"
import { useState } from "react"

const DrawerSocialMenuDroop = ({ setDrawerOpen }) => {
  const [drawerSocialMenuDroop, setDrawerSocialMenuDroop] = useState(false)

  //випадаюче меню Налаштувань
  const renderMenu = () => {
    return (
      <>
        <a
          className="group flex list-none flex-nowrap items-center space-x-1 p-1 text-hText hover:bg-drawDropMenuBgHov hover:text-hTextHov dark:text-hText dark:hover:bg-drawDropMenuBgHovD dark:hover:text-hTextHovD"
          href="https://www.facebok.com/profile.php?id=100004339204236"
          title="Facebook"
        >
          {/* Facebook */}
          <svg
            className="h-6 w-6 "
            //   className="h-6 w-6 text-hText dark:text-hText"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          <p>Facebook</p>
        </a>

        <a
          className="group flex list-none flex-nowrap items-center space-x-1 p-1 text-hText hover:bg-drawDropMenuBgHov hover:text-hTextHov dark:text-hText dark:hover:bg-drawDropMenuBgHovD dark:hover:text-hTextHovD"
          //   href="https://twitter.com/home?lang=uk"
          title="Twitter"
        >
          {/* Twitter */}
          <svg
            className="h-6 w-6  "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          <p>Twitter</p>
        </a>
        <a
          className="group flex list-none flex-nowrap items-center space-x-1 p-1 text-hText hover:bg-drawDropMenuBgHov hover:text-hTextHov dark:text-hText dark:hover:bg-drawDropMenuBgHovD dark:hover:text-hTextHovD"
          href="https://www.instagram.com/reel/Cx0AWinMBnR/?igshid=MTc4MmM1YmI2Ng=="
          title="Instagram"
        >
          {/* IconInstagram */}
          <svg
            className="h-6 w-6  "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <p>Instagram</p>
        </a>
      </>
    )
  }

  return (
    <div className="m-0 items-center">
      <button
        className="group flex list-none flex-nowrap items-center space-x-1 text-hText hover:bg-drawDropMenuBgHov hover:text-hTextHov dark:text-hText dark:hover:bg-drawDropMenuBgHovD "
        onClick={() => setDrawerSocialMenuDroop(!drawerSocialMenuDroop)}
        title="меню"
      >
        {/* іконка мобільного меню */}
        <p className="pl-2 text-lg font-medium italic  text-hText">Контакти</p>
        {drawerSocialMenuDroop ? (
          // стрілка вверх
          <svg
            className="h-6 w-6"
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
            <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 15 12 9 18 15" />
          </svg>
        ) : (
          // стрілка вниз
          <svg
            className="h-6 w-6 "
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
            <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </button>

      <div className={`${drawerSocialMenuDroop ? "relative" : "hidden"}  text-base font-normal px-2`}>
        <div>{renderMenu()}</div>
      </div>
    </div>
  )
}

export default DrawerSocialMenuDroop

