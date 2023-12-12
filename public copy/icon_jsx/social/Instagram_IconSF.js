//SF-stroke колір обводки/fill-колір заповнення)

export default function Icon(props) {
  const colorStroke = props.colorStroke || "black"; ;
  const colorFill = props.colorFill || "none";
  const width = props.width || "24";
  const height = props.height || "24";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      stroke={colorStroke}
      viewBox="0 0 24 24"
    >
      <path
        fill={colorFill}
        d="M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm0 2h8c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3zm9 1a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zm-5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"
      ></path>
    </svg>
  );
}
