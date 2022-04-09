import * as React from 'react-native';
import {useState} from 'react';
import { Text, Image, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

function IMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular(){
    if(peso > 0 && altura > 0){
      let imc = peso / (altura * altura);
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
    <View style={styles.container}>
      <View >
        <Image
          style={styles.icon}
          source={require('../../assets/images/balance2.png')}
        />
      </View>
      <Text style={styles.text}>Informe sua altura</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#fff"
        placeholder="Altura"
        keyboardType="numeric"
        onChangeText={(text) => setAltura(parseFloat(text.replace(',','.')))}
      />
      <Text style={styles.text}>Informe seu peso</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#fff"
        placeholder="Peso"
        keyboardType="numeric"
        onChangeText={(text) => setPeso(parseFloat(text.replace(',','.')))}
      />
      <TouchableOpacity
        onPress={() => calcular()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
    backgroundColor: 'rgb(90, 88, 212)',
  },
  icon: {
    resizeMode: 'contain',
    height: 80,
    width: 300,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    height: 50,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgb(90, 69, 161)',
    borderRadius: 4,
    borderRadius: 9,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 16,
    width: '80%'
  },
  button: {
    backgroundColor: 'rgb(90, 69, 161)',
    borderRadius: 9,
    width: '30%',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default IMC;