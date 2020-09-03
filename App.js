import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import MainDrawerNavigator from './navigation/MainDrawerNavigator';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import productReducer from './store/reducers/productReducer';
import orderReducer from './store/reducers/orderReducer';

const Reducers = combineReducers({
  products: productReducer,
  orders: orderReducer
});

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainDrawerNavigator></MainDrawerNavigator>
      </NavigationContainer>
    </Provider>

  );
};