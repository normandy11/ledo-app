import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TestScreen from '../../screens/TestScreen';
import {screenOptions} from '../global';
import {MenuButton, SearchButton} from '../../components/navigation/buttons';

const Stack = createStackNavigator();

const TestStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Test"
        component={TestScreen}
        options={({navigation}) => ({
          headerLeft: () => <MenuButton onPress={navigation.openDrawer} />,
          headerRight: () => <SearchButton />,
        })}
      />
    </Stack.Navigator>
  );
};

export default TestStackScreen;
