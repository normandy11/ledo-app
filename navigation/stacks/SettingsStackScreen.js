import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from '../../screens/SettingsScreen';
import {screenOptions} from '../global';
import {MenuButton, SearchButton} from '../../components/navigation/buttons';

const Stack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={({navigation}) => ({
          headerLeft: () => <MenuButton onPress={navigation.openDrawer} />,
          headerRight: () => <SearchButton />,
        })}
      />
    </Stack.Navigator>
  );
};

export default SettingsStackScreen;
