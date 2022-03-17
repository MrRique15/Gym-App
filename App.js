import * as React from 'react';
import Signin from './pages/Signin/index';
import Cadastro from './pages/Cadastro/index';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;