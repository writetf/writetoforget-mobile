import React from 'react';
import Svg, { Use, Path, Defs } from 'react-native-svg';

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
      fill={color}
    >
      <Defs>
        <Path
          id="c78KZaeOzD"
          d="M177.04 524.67c-13.7-7.76-22.21-22.83-22.21-39.18V154.51c0-16.4 8.51-31.42 22.21-39.18a40.074 40.074 0 0140.82.52c28.29 16.93 254.59 152.39 282.87 169.32 19.23 12.05 25.04 37.41 12.99 56.64-3.3 5.25-7.73 9.68-12.99 12.98-28.29 16.93-254.62 152.43-282.91 169.37a40.594 40.594 0 01-20.81 5.84 40.313 40.313 0 01-19.97-5.33z"
        />
      </Defs>
      <Use xlinkHref="#c78KZaeOzD" />
      <Use
        fillOpacity="0"
        stroke="#000"
        strokeOpacity="0"
        xlinkHref="#c78KZaeOzD"
      />
    </Svg>
  );
}

export default Icon;
