import React from 'react';
import Svg, {
    Path,
  } from 'react-native-svg';

function Icon({
    color = '#000',
}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        stroke={1}
        fill={color}
        d="M8 3a1 1 0 011-1h6a1 1 0 011 1v1h3a1 1 0 110 2H5a1 1 0 010-2h3V3zM6 7a1 1 0 011 1v11a1 1 0 001 1h8a1 1 0 001-1V8a1 1 0 112 0v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8a1 1 0 011-1z"
      />
      <Path
        stroke={1}
        fill={color}
        d="M10 8a1 1 0 011 1v8a1 1 0 11-2 0V9a1 1 0 011-1zM14 8a1 1 0 011 1v8a1 1 0 11-2 0V9a1 1 0 011-1z"
      />
    </Svg>
  );
}

export default Icon;
