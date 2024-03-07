import React, {useRef} from 'react';
import {View} from 'react-native';
import RBSheet from '@nonam4/react-native-bottom-sheet';
import IconContainer from '../IconContainer';
import CallEnd from '../../asset/CallEnd';
import MenuOption from './menuOption';
import BottomSheetSlide from './index';

export default function Example({onEndCall, onEndForCall}) {
  const refRBSheet = useRef(null);

  return (
    <BottomSheetSlide
      refRBSheet={refRBSheet}
      child1={
        <IconContainer
          backgroundColor={'red'}
          onPress={() => refRBSheet.current?.open()}
          Icon={() => {
            return <CallEnd height={26} width={26} fill="#FFF" />;
          }}
        />
      }
      child2={
        <View>
          <MenuOption
            refRBSheet={refRBSheet}
            onClick={onEndCall}
            txt="End Call"
            icon={<CallEnd height={26} width={26} color="red" />}
          />
          <MenuOption
            refRBSheet={refRBSheet}
            onClick={onEndForCall}
            txt="End Call for All"
            icon={<CallEnd height={26} width={26} color="red" />}
          />
        </View>
      }
    />
  );
}
