import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Product from "./pages/Products";
import Detail from "./pages/Detail";
import Login from "./pages/Login";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            title: "Giriş Sayfası",
            headerStyle: { backgroundColor: "#526D82" },
            headerTitleStyle: { color: "#DDE6ED" },
          }}
        />
        <Stack.Screen
          name="ProductPage"
          component={Product}
          options={{
            title: "Dükkan",
            headerStyle: { backgroundColor: "#526D82" },
            headerTitleStyle: { color: "#DDE6ED" },
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Ürün Detayları",
            headerStyle: { backgroundColor: "#526D82" },
            headerTitleStyle: { color: "#DDE6ED" },
            headerTintColor: "#DDE6ED",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
