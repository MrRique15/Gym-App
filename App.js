import * as React from 'react';
import Signin from './pages/Signin/index';
import Cadastro from './pages/Cadastro/index';
import Menu from './pages/Menu/index';
import CadastroConcluido from './pages/CadastroConcluido/index';
import IMC from './pages/IMC/index';
import CompletarCadastro from './pages/CompletarCadastro/index';
import Dietas from './pages/Dietas/index';
import Dietas1 from './pages/Dietas1/index';
import Treinos from './pages/Treinos/index'
import Metas from './pages/Metas/index'
import Perfil from './pages/Perfil/index'
import Artigos from './pages/Artigos/index'
import RecuperarSenha from './pages/RecuperarSenha/index';
import RecuperarSenha2 from './pages/RecuperarSenha2/index';
import Exercicios from './pages/Exercicios/index';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './server/providers/Auth';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
          <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
          <Stack.Screen name="CadastroConcluido" component={CadastroConcluido} options={{headerShown: false}}/>
          <Stack.Screen name="CompletarCadastro" component={CompletarCadastro} options={{headerShown: false}}/>
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{headerShown: false}}/>
          <Stack.Screen name="RecuperarSenha2" component={RecuperarSenha2} options={{headerShown: false}}/>
          <Stack.Screen name="IMC" component={IMC} options={{headerShown: false}}/>
          <Stack.Screen name="Dietas" component={Dietas} options={{headerShown: false}}/>
          <Stack.Screen name="Dietas1" component={Dietas1} options={{headerShown: false}}/>
          <Stack.Screen name="Treinos" component={Treinos} options={{headerShown: false}}/>
          <Stack.Screen name="Metas" component={Metas} options={{headerShown: false}}/>
          <Stack.Screen name="Perfil" component={Perfil} options={{headerShown: false}}/>
          <Stack.Screen name="Saude" component={Artigos} options={{headerShown: false}}/>
          <Stack.Screen name="Exercicios" component={Exercicios} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;