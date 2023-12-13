//HeaderTape.js
// import IconPhone from "@/components/ui/icons/social/IconPhone";

const HeaderTape = () => {

  return (
    <div className="h-18 mx-auto my-auto mt-1 flex w-full flex-col justify-start  overflow-hidden bg-hTapeBg px-1 text-sm text-hTapeText dark:bg-hTapeBgD dark:text-hText md:h-6 md:flex-row md:justify-between md:px-2 ">
      <div className="flex justify-between space-x-1">
        <a className="flex items-center justify-start space-x-1 " href="tel:+380508580704">
          {/* <IconPhone width={iconSize} height={iconSize} colorFill="white" /> */}
          {/* phone */}
          <svg
            className="h-4 w-4 text-hTapeText dark:text-hText"
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
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          +38(050-0000000)
        </a>
        <a className="flex items-center justify-start space-x-1 text-sm" href="tel:+380687832306">
          <svg
            className="h-4 w-4 text-hTapeText dark:text-hText"
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
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          +38(068-0000000)
        </a>
      </div>
      {/* права сторона */}
      <div className="flex justify-between items-center text-center space-x-1 md:justify-end ">
        <a
          className="flex items-center justify-start space-x-1 text-sm"
          href="https://www.instagram.com/reel/Cx0AWinMBnR/?igshid=MTc4MmM1YmI2Ng=="
          title="Instagram"
        >
          {/* IconInstagram */}
          <svg
            className="h-4 w-4 text-hTapeText dark:text-hText "
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
        </a>
        <span className="px-1 text-sm items-center">Золото і срібло на любий смак</span>
      </div>
    </div>
  )
};

export default HeaderTape;
