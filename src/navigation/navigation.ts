import {NativeStackScreenProps} from '@react-navigation/native-stack';

// @see https://github.com/youniaogu/MangaReader/blob/730a40a16da90da526f9e01528689efc6caeeed2/src/types/router.d.ts#L4
export type RootStackParamList = {
  First: undefined;
  About: undefined;
};

export type StackFirstProps = NativeStackScreenProps<RootStackParamList, 'First'>;

export type StackAboutProps = NativeStackScreenProps<
  RootStackParamList,
  'About'
>;

export interface NavigationScreenProps {
  ready?: boolean;
}
