import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeStackScreen from '../stacks/HomeStackScreen';
import SettingsStackScreen from '../stacks/SettingsStackScreen';
import GLOBAL from '../../GLOBALS';

const Tab = createBottomTabNavigator();

const HomeTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'format-list-bulleted';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: GLOBAL.COLOR.PRIMARY,
        inactiveTintColor: 'gray',
        style: {
          // backgroundColor: GLOBAL.COLOR.PRIMARY,
        },
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabScreen;
