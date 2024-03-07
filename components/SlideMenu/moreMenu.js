import React, {useRef} from 'react';
import {View} from 'react-native';
import RBSheet from '@nonam4/react-native-bottom-sheet';
import IconContainer from '../IconContainer';
import VerticalDots from '../../asset/VerticalDots';
import CameraSwitch from '../../asset/CameraSwitch';
import ShareScreenIcon from '../../asset/ShareScreen';
import ChatIcon from '../../asset/Chat';
import MenuOption from './menuOption';
import BottomSheetSlide from './index';

export default function Example({onCameraSwitch, onShareScreen, onChatClick}) {
  const refRBSheet = useRef(null);

  return (
    <BottomSheetSlide
      refRBSheet={refRBSheet}
      child1={
        <IconContainer
          style={{
            borderWidth: 1.5,
            borderColor: '#2B3034',
          }}
          backgroundColor={'transparent'}
          onPress={() => refRBSheet.current?.open()}
          Icon={() => {
            return <VerticalDots height={24} width={24} fill="#fff" />;
          }}
        />
      }
      child2={
        <View>
          <MenuOption
            refRBSheet={refRBSheet}
            onClick={onCameraSwitch}
            txt="Switch Camera"
            icon={<CameraSwitch height={26} width={26} fill="#fff" />}
          />
          <MenuOption
            refRBSheet={refRBSheet}
            onClick={onShareScreen}
            txt="Share Screen"
            icon={<ShareScreenIcon height={26} width={26} fill="#fff" />}
          />
          <MenuOption
            refRBSheet={refRBSheet}
            onClick={onChatClick}
            txt="Chat"
            icon={<ChatIcon height={26} width={26} fill="#fff" />}
          />
        </View>
      }
    />
  );
}
