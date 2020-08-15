import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeDrawerScreen from './drawers/HomeDrawerScreen';

export default () => {
  return (
    <NavigationContainer>
      <HomeDrawerScreen />
    </NavigationContainer>
  );
};
