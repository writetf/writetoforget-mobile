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
    >
      <Defs>
        <Path
          fill={color}
          id="b71bUSFkFw"
          d="M490.78 311.54c3.28-8.61-3.04-17.8-12.31-17.8h-47.99c9.03-15.5 14.61-33.3 14.61-52.5V241c32.15-6.4 52.5-15.67 52.5-26.01 0-10.91-22.4-20.59-57.51-27.07-7.55-26.91-22.15-53.98-33.3-67.92-7.8-9.77-21.25-12.8-32.41-7.22l-22.64 11.32a26.242 26.242 0 01-23.46 0l-22.64-11.32c-11.16-5.58-24.61-2.55-32.41 7.22-11.07 13.94-25.75 41.01-33.3 67.92-35.03 6.48-57.42 16.16-57.42 27.07 0 10.34 20.34 19.61 52.5 26.01v.24c0 19.2 5.58 37 14.6 52.5h-47.17c-9.43 0-15.75 9.6-12.06 18.3 2.12 4.94 19.05 44.44 21.17 49.38-32.9 19.11-55.3 54.31-55.3 95.08v36.75c0 20.26 16.49 36.75 36.76 36.75h294c20.27 0 36.76-16.49 36.76-36.75V456.5c0-39.71-21.17-74.16-52.59-93.6 3.92-10.27 17.65-46.22 19.61-51.36zm-224.28 34.7l40.69 26.26 19.68 32.81-26.25 98.44-34.12-157.51zm86.63 59.07l19.68-32.81 40.69-26.26-34.12 157.51-26.25-98.44zm46.92-119.03c-8.29 7.63-39.38 18.37-52.5-20.51-2.3-6.89-12.64-6.89-15.02 0-13.94 41.18-45.93 26.58-52.5 20.51-7.79-7.22-10.41-17.64-13.53-27.4-.66-2.05-5.17-4.68-5.17-4.76v-8.86c23.22 2.95 50.04 4.76 78.75 4.76s55.54-1.72 78.75-4.76v8.86c-.08.08-4.59 2.63-5.25 4.76-3.2 9.76-5.74 20.18-13.53 27.4z"
        />
      </Defs>
      <Use xlinkHref="#b71bUSFkFw" />
      <Use
        fillOpacity="0"
        stroke="#000"
        strokeOpacity="0"
        xlinkHref="#b71bUSFkFw"
      />
    </Svg>
  );
}

export default Icon;
