import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodList from './pages/FoodList';
import FoodDetail from './pages/FoodDetail';
import FoodCategoryList from './pages/FoodCategoryList';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FoodCategoryList"
          component={FoodCategoryList}
          options={{
            title: 'Categories',
            headerTitleStyle: {
              color: '#FFA500',
            },
            headerStyle: {
              backgroundColor:"white",
            },
          }}
        />
        <Stack.Screen name="FoodList" component={FoodList} options={{
            title: 'Meals',
            headerStyle: {
              backgroundColor:"white",
            },
            headerTitleStyle: {
              color: '#FFA500',
            },
            headerTintColor:"#FFA500",
          }}/>
        <Stack.Screen name="FoodDetail" component={FoodDetail} options={{
            title: 'Detail',
            headerTitleStyle: {
              color: '#FFA500',
            },
            headerStyle: {
              backgroundColor:"white",
            },
            headerTintColor:"#FFA500",
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
