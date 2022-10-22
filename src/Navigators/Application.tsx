import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IndexOfLoginContainer, IndexOfHomeContainer } from '../Containers';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={IndexOfLoginContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={IndexOfHomeContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
