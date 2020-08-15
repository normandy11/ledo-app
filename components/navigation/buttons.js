import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, StyleSheet} from 'react-native';

const options = {
  iconSize: 25,
};

export const MenuButton = ({onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <MaterialIcons name="menu" size={options.iconSize} color="white" />
  </TouchableOpacity>
);

export const SearchButton = () => (
  <TouchableOpacity style={styles.button}>
    <MaterialIcons name="search" size={options.iconSize} color="white" />
  </TouchableOpacity>
);

export const BackButton = ({onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <MaterialIcons name="arrow-back" size={options.iconSize} color="white" />
  </TouchableOpacity>
);

export const MoreButton = () => (
  <TouchableOpacity style={styles.button}>
    <MaterialIcons name="more-vert" size={options.iconSize} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
