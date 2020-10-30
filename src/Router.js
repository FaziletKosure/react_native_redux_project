import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import friendsReducer from './reducers/FriendsReducer';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';

// import FoodList from './FoodList';
// import FoodForm from './FoodForm';

const Stack = createStackNavigator();
const store = createStore(friendsReducer);

const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
          name={'Cities'}
          component={CityList}
          options={{headerShown: false}}
        /> */}
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Friends'} component={FriendsScreen} />
          {/* <Stack.Screen name={'Home'} component={FoodForm} />
          <Stack.Screen name={'FoodList'} component={FoodList} /> */}
          {/* <Stack.Screen name={'Reserve'} component={Reserve} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;

const styles = StyleSheet.create({});
