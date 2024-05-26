import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/router/NavigationStack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default App;
