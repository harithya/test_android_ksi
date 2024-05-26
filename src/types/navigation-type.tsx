import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {SchoolProps} from './api-type';

export type PagesListProps = {
  Home: undefined;
  Create: undefined;
  Detail: SchoolProps;
};

export type PageProps<T extends keyof PagesListProps> = NativeStackScreenProps<
  PagesListProps,
  T
>;

export type useNavigationProps = NativeStackNavigationProp<PagesListProps>;
