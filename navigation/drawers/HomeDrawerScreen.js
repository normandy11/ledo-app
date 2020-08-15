import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeTabScreen from '../tabs/HomeTabScreen';
import TestStackScreen from '../stacks/TestStackScreen';
import AboutStackScreen from '../stacks/AboutStackScreen';
import GLOBAL from '../../GLOBALS';

const Drawer = createDrawerNavigator();

const HomeDrawerScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{
        activeTintColor: GLOBAL.COLOR.PRIMARY,
        inactiveTintColor: 'gray',
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeTabScreen}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Test"
        component={TestStackScreen}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <MaterialIcons name="public" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStackScreen}
        options={{
          drawerIcon: ({focused, size, color}) => (
            <MaterialIcons name="info" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    // backgroundColor: GLOBAL.COLOR.PRIMARY,
  },
});

export default HomeDrawerScreen;
