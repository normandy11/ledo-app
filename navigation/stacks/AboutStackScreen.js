import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AboutScreen from '../../screens/AboutScreen';
import {screenOptions} from '../global';
import {MenuButton, SearchButton} from '../../components/navigation/buttons';

const Stack = createStackNavigator();

const AboutStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({navigation}) => ({
          headerLeft: () => <MenuButton onPress={navigation.openDrawer} />,
          headerRight: () => <SearchButton />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AboutStackScreen;
