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
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 640 640"
    >
      <Defs>
        <Path
          id="a3QgiGCSeH"
          d="M505.87 381.38c-24.88-61.26-38.71-95.3-41.47-102.1-2.06-5.05-6.51-8.17-11.66-8.17-4.19 0-9.5 2.24-11.85 8.57-2.42 6.51-14.48 39.11-36.19 97.78-29.98-140.25-46.63-218.17-49.96-233.76-1.65-7.76-7.69-10.51-12.33-10.51-5.42 0-11.42 3.5-12.62 11.32-2.9 18.82-17.39 112.95-43.48 282.37-26.54-111.57-41.29-173.56-44.24-185.95-1.79-7.53-7.77-10.2-12.36-10.2-4.46 0-9.98 2.46-12.09 9.32-2.58 8.45-15.51 50.73-38.77 126.84-17.14-40.51-26.66-63.02-28.56-67.52-2.08-4.94-6.54-7.98-11.64-7.98-4.11 0-7.84 2.03-10.27 5.58-2.24 3.21-13.42 19.27-33.55 48.17l-2.32 1.55H12.85c-7.36 0-13.34 5.98-13.34 13.34 0 7.37 5.98 13.34 13.34 13.34h87.64c4.06 0 7.9-1.97 10.3-5.49 1.69-2.41 10.12-14.45 25.3-36.11 19.86 46.9 30.89 72.95 33.09 78.17 2.11 4.99 6.44 7.98 11.56 7.98 5.63 0 10.41-3.69 12.14-9.35 2.36-7.7 14.14-46.24 35.34-115.6 29.04 122.15 45.18 190.02 48.41 203.59 1.81 7.55 7.52 10.25 12.27 10.25 5.42 0 11.43-3.5 12.63-11.34 2.85-18.55 17.13-111.29 42.83-278.22 26.79 125.38 41.67 195.03 44.65 208.96 1.54 7.26 7.39 10.55 12.46 10.55 5.39 0 9.77-3.21 11.77-8.57 2.67-7.2 16.01-43.22 40.03-108.06 22.83 56.21 35.52 87.43 38.06 93.68 2.05 5.04 6.53 8.16 11.68 8.16 4.06 0 7.8-2 10.2-5.5 2.04-2.81 12.23-16.89 30.58-42.24l2.32-1.23h80.76c7.26 0 13.13-5.87 13.13-13.13 0-7.26-5.87-13.18-13.13-13.18h-88.65c-4.03 0-7.85 2.05-10.23 5.52l-22.12 29.17z"
        />
      </Defs>
      <Use xlinkHref="#a3QgiGCSeH" />
      <Use
        fillOpacity="0"
        stroke="#000"
        strokeOpacity="0"
        xlinkHref="#a3QgiGCSeH"
      />
    </Svg>
  );
}

export default Icon;