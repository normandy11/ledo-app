import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.root}>
      <Text>AboutScreen</Text>
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

export default AboutScreen;
