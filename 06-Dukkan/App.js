import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Product from "./pages/Products";
import Detail from "./pages/Detail";
import Login from "./pages/Login";

import { store } from "./context/store";
import { Provider, useSelector, useDispatch } from "react-redux";
import Loading from "./components/Loading/Loading";

import { setUser } from "./context/auth/authSlice";
import { setAuthLoading } from "./context/auth/authLoading";

import AsyncStorage from "@react-native-async-storage/async-storage";

function Router() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonData = await AsyncStorage.getItem("@user");
        return jsonData != null ? JSON.parse(jsonData) : null;
      } catch (e) {
        // error reading value
      }
    };

    async function test() {
      const res = await getData();

      {
        res && dispatch(setUser(res));
      }
      dispatch(setAuthLoading(false));

      console.log("Test", res);
    }
    test();
  }, []);

  const userSession = useSelector((s) => s.user.value);
  const isAuthLoading = useSelector((s) => s.isAuthLoading.value);

  //console.log("userSession ", userSession);
  console.log("isLoading ", isAuthLoading);

  return (
    <NavigationContainer style={styles.container}>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
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
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
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
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
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
