import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, shallowEqual } from 'react-redux';

import { IndexOfLoginContainer, IndexOfHomeContainer } from '@/Containers';

import { RootReducerState } from '../GlobalStates/reducer';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  const { isAuthenticate, loginData } = useSelector(
    ({ auth }: RootReducerState) => ({
      loginData: auth.authData,
      isAuthenticate: auth.token,
    }),
    shallowEqual,
  );

  console.log(loginData);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticate ? (
          <Stack.Screen
            name="Home"
            component={IndexOfHomeContainer}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={IndexOfLoginContainer}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
