import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import CreatePage from '../pages/CreatePage';
import {PagesListProps} from '../types/navigation-type';
import DetailPage from '../pages/DetailPage';

const Stack = createNativeStackNavigator<PagesListProps>();
const NavigationStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Create" component={CreatePage} />
      <Stack.Screen name="Detail" component={DetailPage} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
