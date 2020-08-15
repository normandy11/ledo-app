import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../../screens/HomeScreen';
import ArticleScreen from '../../screens/ArticleScreen';
import {screenOptions} from '../global';
import {
  MenuButton,
  SearchButton,
  BackButton,
} from '../../components/navigation/buttons';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerLeft: () => <MenuButton onPress={navigation.openDrawer} />,
          headerRight: () => <SearchButton />,
        })}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={({route, navigation}) => ({
          title: route.params.slug,
          headerLeft: () => <BackButton onPress={navigation.goBack} />,
          headerRight: () => (
            <TouchableOpacity style={styles.headerButton}>
              <MaterialIcons name="more-vert" size={30} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    width: 55,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeStackScreen;
