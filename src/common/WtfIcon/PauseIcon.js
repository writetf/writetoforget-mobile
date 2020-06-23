import React from 'react';
import Svg, { Use, G, Path, Defs } from 'react-native-svg';

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
            fill={color}
          id="b2dPyeKVl8"
          d="M140 170v300c0 33.14 26.86 60 60 60s60-26.86 60-60V170c0-33.14-26.86-60-60-60s-60 26.86-60 60z"
        />
        <Path
            fill={color}
          id="b1wQC2EKgb"
          d="M380 170v300c0 33.14 26.86 60 60 60s60-26.86 60-60V170c0-33.14-26.86-60-60-60s-60 26.86-60 60z"
        />
      </Defs>
      <Use xlinkHref="#b2dPyeKVl8" />
      <Use
        fillOpacity="0"
        stroke="#000"
        strokeOpacity="0"
        xlinkHref="#b2dPyeKVl8"
      />
      <G>
        <Use xlinkHref="#b1wQC2EKgb" />
        <Use
          fillOpacity="0"
          stroke="#000"
          strokeOpacity="0"
          xlinkHref="#b1wQC2EKgb"
        />
      </G>
    </Svg>
  );
}

export default Icon;
