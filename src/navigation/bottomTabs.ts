import {NativeBottomTabScreenProps} from 'react-native-bottom-tabs/react-navigation';

export type BottomTabParamList = {
  Home: undefined;
  My: undefined;
};

export type BottomTabHomeProps = NativeBottomTabScreenProps<
  BottomTabParamList,
  'Home'
>;

export type BottomTabMyProps = NativeBottomTabScreenProps<
  BottomTabParamList,
  'My'
>;
