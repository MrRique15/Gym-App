import * as React from 'react-native';
import {useState} from 'react';
import { Text, Image, View, StyleSheet } from 'react-native'
import { Container, Input, InputDois, ButtonSubmit, TextSubmit, TextResult } from '../IMC/styles';


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  balance2: {
    resizeMode: 'contain',
    height: 80,
    width: 300,
    marginTop: 60,
  },
  Text: {
    color: '#ffffff',
    textAlign: 'center',
    height: 50,
    marginTop: 30,
  },
  Text2: {
    color: '#ffffff',
    textAlign: 'center',
    height: 50,
  }

});


function IMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular(){
    if(peso > 0 && altura > 0){
      console.log(peso, altura);
      let imc = peso / (altura * altura);
      console.log(imc);
      if(imc < 16){
        alert('Magreza Grave');
        setResultado("Magreza Grave");
      }else if(imc < 17){
        alert('Magreza Moderada');
        setResultado("Magreza Moderada");
      }else if(imc < 18.5){
        alert('Magreza Leve');
        setResultado("Magreza Leve");
      }else if(imc < 25){
        alert('Saudável');
        setResultado("Saudável");
      }else if(imc < 30){
        alert('Sobrepeso');
        setResultado("Sobrepeso");
      }else if(imc < 35){
        alert('Obesidade Grau I');
        setResultado('Obesidade Grau I');
      }else if(imc < 40){
        alert('Obesidade Grau II');
        setResultado("Obesidade Grau II");
      }else{
        alert('Obesidade Grau III');
        setResultado("Obesidade Grau III");
      }
      
    }else{
      alert('Peso ou Altura inválidos');
    }
  }
  return (
    <Container style={styles.container}>
      <View >
        <Image
          style={styles.balance2}
          source={require('../../assets/images/balance2.png')}
        />
      </View>
      <Text style={styles.Text}>Informe sua altura</Text>
      <Input
        placeholderTextColor="#fff"
        placeholder="Altura"
        keyboardType="numeric"
        onChangeText={(text) => setAltura(parseFloat(text.replace(',','.')))}
      />
      <Text style={styles.Text2}>Informe seu peso</Text>
      <InputDois
        placeholderTextColor="#fff"
        placeholder="Peso"
        keyboardType="numeric"
        onChangeText={(text) => setPeso(parseFloat(text.replace(',','.')))}
      />
      <ButtonSubmit
        onPress={() => calcular()}
      >
        <TextSubmit>Calcular</TextSubmit>
      </ButtonSubmit>
      <TextResult>{resultado}</TextResult>
    </Container>
  )
}

export default IMC;