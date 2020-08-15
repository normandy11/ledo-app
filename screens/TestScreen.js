import React, {useEffect, useState} from 'react';
import {View, Text, Platform, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {
  increment,
  decrement,
  reset,
  incrementAsync,
} from '../store/counter/actions';
import GLOBAL from '../GLOBALS';

const TestScreen = () => {
  const [token, setToken] = useState(null);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      setToken(await AsyncStorage.getItem('token'));
    };
    fetchToken();
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.example}>
        <Text style={styles.title}>
          Platform: <Text style={styles.dynamic}>{Platform.OS}</Text>
        </Text>
      </View>

      <View style={styles.example}>
        <Text style={styles.title}>
          Counter: <Text style={styles.dynamic}>{counter}</Text>
        </Text>

        <Button
          title="Increment"
          color={GLOBAL.COLOR.PRIMARY}
          onPress={() => dispatch(increment())}
        />
        <Button
          title="Decrement"
          color={GLOBAL.COLOR.PRIMARY}
          onPress={() => dispatch(decrement())}
        />
        <Button
          title="Reset"
          color={GLOBAL.COLOR.PRIMARY}
          onPress={() => dispatch(reset())}
        />
        <Button
          title="Increment async"
          color={GLOBAL.COLOR.PRIMARY}
          onPress={() => dispatch(incrementAsync())}
        />
      </View>

      <View style={styles.example}>
        <Text style={styles.title}>
          Token:{' '}
          <Text style={styles.dynamic}>{token ? token : 'no token'}</Text>
        </Text>

        <Button
          title="Set token"
          disabled={Boolean(token)}
          color={GLOBAL.COLOR.PRIMARY}
          onPress={async () => {
            const newToken = 'asd-123';
            await AsyncStorage.setItem('token', newToken);
            setToken(newToken);
          }}
        />
        <Button
          title="Remove token"
          disabled={!Boolean(token)}
          color={GLOBAL.COLOR.PRIMARY}
          onPress={async () => {
            await AsyncStorage.removeItem('token');
            setToken(null);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  dynamic: {
    color: GLOBAL.COLOR.PRIMARY,
  },
  example: {
    marginBottom: 20,
  },
});

export default TestScreen;
