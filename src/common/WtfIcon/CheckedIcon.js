import React from "react";
import { Svg, Defs, Path, Use } from "react-native-svg";

function Icon({
    color,
    width = 24,
    height = 24,
  }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 640 640"
    >
      <Defs>
        <Path
          id="b4KbB61yf"
          fill={color}
          d="M110 320c0 116.31 93.69 210 210 210s210-93.69 210-210c0-22.62-3.03-45.13-11.11-66.13l-26.25 25.75c3.24 12.92 5.05 25.84 5.05 40.38 0 98.54-79.15 177.69-177.69 177.69-98.54 0-177.69-79.15-177.69-177.69 0-98.54 79.15-177.69 177.69-177.69 48.46 0 91.98 19.28 122.67 49.97l22.71-22.71C428.23 132.41 376.54 110 320 110c-116.31 0-210 93.69-210 210zm210 41.39l-69.16-69.15-23.22 23.22 80.77 80.77 11.61 11.1 11.61-11.1 193.85-193.85-23.22-23.22L320 361.39z"
        ></Path>
      </Defs>
      <Use xlinkHref="#b4KbB61yf"></Use>
      <Use
        fillOpacity="0"
        strokeOpacity="0"
        xlinkHref="#b4KbB61yf"
      ></Use>
    </Svg>
  );
}

export default Icon;
