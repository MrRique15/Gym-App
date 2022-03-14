import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import Singin from './pages/Signin';
//import Cadastro from './pages/Cadastro';

//Navigation import
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <>
      <Singin/>
      <StatusBar style="light" />
      </>
    </NavigationContainer>
  );
}