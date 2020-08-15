import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ArticleScreen = () => {
  const route = useRoute();

  return (
    <View>
      <Text>{route.params.slug}</Text>
    </View>
  );
};

export default ArticleScreen;
