import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
