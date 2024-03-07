import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ChatIcon = props => {
  return (
    <Svg
      fill="#000000"
      height="800px"
      width="800px"
      viewBox="0 0 60.015 60.015"
      {...props}>
      <Path d="M42.008,0h-24c-9.925,0-18,8.075-18,18v14c0,9.925,8.075,18,18,18h1.78c6.968,0,13.519,2.713,18.446,7.64l1.876,1.877 c0.322,0.321,0.746,0.498,1.195,0.498c0.938,0,1.702-0.762,1.702-1.699v-8.344c9.462-0.521,17-8.383,17-17.973V18 C60.008,8.075,51.932,0,42.008,0z" />
    </Svg>
  );
};

export default ChatIcon;
