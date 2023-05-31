import * as React from "react";

import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodList from "./pages/FoodList";
import FoodDetail from "./pages/FoodDetail";
import FoodCategoryList from "./pages/FoodCategoryList";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FoodCategoryList" component={FoodCategoryList} />
        <Stack.Screen name="FoodList" component={FoodList} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
