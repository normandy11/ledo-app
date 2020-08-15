import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import store from './store';
import AppNavigation from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
