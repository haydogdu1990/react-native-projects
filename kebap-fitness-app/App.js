import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import MemberSing from './pages/MemberSing';
import UserDetail from './pages/UserDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="MemberScreen" component={MemberSing} />
        <Stack.Screen name="UserDetailScreen" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Stack.Screen options parametresi ile header kapatılabilir.
// options={{
//           headerShown:false,
//         }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    padding: 8,
  },
  
});
