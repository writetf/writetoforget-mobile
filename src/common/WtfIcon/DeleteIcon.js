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
          id="e6NIs8s6Mo"
          d="M277 110h126c11.6 0 21 9.4 21 21v21h63c11.6 0 21 9.4 21 21s-9.4 21-21 21H193c-11.6 0-21-9.4-21-21s9.4-21 21-21h63v-21c6.27-14 13.27-21 21-21z"
        />
        <Path
          fill={color}
          id="c2VcIKdrff"
          d="M235 236v231c0 11.6 9.4 21 21 21h168c11.6 0 21-9.4 21-21V236c0-11.6 9.4-21 21-21s21 9.4 21 21v231c0 34.79-28.21 63-63 63H256c-34.79 0-63-28.21-63-63V236c0-11.6 9.4-21 21-21s21 9.4 21 21z"
        />
        <Path
          fill={color}
          id="aFjXs4SDp"
          d="M319 257v168c0 11.6-9.4 21-21 21s-21-9.4-21-21V257c0-11.6 9.4-21 21-21s21 9.4 21 21z"
        />
        <Path
          fill='white'
          id="b3kfl3YDCM"
          d="M403 257v168c0 11.6-9.4 21-21 21s-21-9.4-21-21V257c0-11.6 9.4-21 21-21s21 9.4 21 21z"
        />
      </Defs>
      <Use xlinkHref="#e6NIs8s6Mo" />
      <Use
        fillOpacity="0"
        stroke="#000"
        strokeOpacity="0"
        xlinkHref="#e6NIs8s6Mo"
      />
      <Use xlinkHref="#c2VcIKdrff" />
      <Use
        fillOpacity="0"
        stroke="#000"
        strokeOpacity="0"
        xlinkHref="#c2VcIKdrff"
      />
      <G>
        <Use xlinkHref="#aFjXs4SDp" />
        <Use
          fillOpacity="0"
          stroke="#000"
          strokeOpacity="0"
          xlinkHref="#aFjXs4SDp"
        />
      </G>
      <G>
        <Use xlinkHref="#b3kfl3YDCM" />
        <Use
          fillOpacity="0"
          stroke="#000"
          strokeOpacity="0"
          xlinkHref="#b3kfl3YDCM"
        />
      </G>
    </Svg>
  );
}

export default Icon;
