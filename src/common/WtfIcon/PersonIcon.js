import React from 'react';
import Svg, {
    Path,
    G,
} from 'react-native-svg';

function PersonIcon({color}) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' viewBox="0 0 24 24">
        <Path fill={color} d="M12 11a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zM12 13a7 7 0 00-7 7 1 1 0 002 0 5 5 0 0110 0 1 1 0 002 0 7 7 0 00-7-7z" />
    </Svg>
  );
}

export default PersonIcon;
