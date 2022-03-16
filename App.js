//import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { 
  KeyBoardView, 
  Title, 
  Container, 
  Input, 
  ButtonSubmit, 
  ButtonCreateAccount,
  TextSubmit,
  TextCreateAccount,
  NormalText,
  Text
} from './styles';

//Navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from './components/Header';

const Stack = createNativeStackNavigator();

function Signin({navigation}) {
  return (
      <KeyBoardView>
          <Header />
          <Container>
              <Title>GYM APP</Title>
              <Input 
                  placeholderTextColor="#fff"
                  placeholder="E-mail"
              />
              <Input 
                  placeholderTextColor="#fff"
                  placeholder="Senha"
                  secureTextEntry
              />
              <ButtonSubmit>
                  <TextSubmit>Entrar</TextSubmit>
              </ButtonSubmit>
              <NormalText>Ainda não possui uma conta?</NormalText>
              <ButtonCreateAccount onPress={() => navigation.navigate('Register')}>
                  <TextCreateAccount>Cadastre-se</TextCreateAccount>
              </ButtonCreateAccount>              
          </Container>
      </KeyBoardView>      
  );
}

function Register() {
  return(
    <KeyBoardView>
      <Text>
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </Text>
    </KeyBoardView>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;