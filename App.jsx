import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SignInScreen from './src/screens/Signin/SingInScreen';
import SignUpScreen from './src/screens/Signup/SingUpScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="login page" component={SignInScreen} />
        <Stack.Screen name="Sign up page" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
