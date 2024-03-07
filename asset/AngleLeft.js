import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const AngleLeft = props => {
  return (
    <Svg
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      {...props}>
      <Path d="M11.3,12l3.5-3.5c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4.2,4.2l0,0c-0.4,0.4-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3l0,0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L11.3,12z" />
    </Svg>
  );
};

export default AngleLeft;
