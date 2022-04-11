import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";

export default function Exercicios({navigation}){
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Qual treino você quer cadastrar?</Text>
        <View style={styles.types}>
          <TouchableOpacity style={styles.button} onPress ={() => navigation.navigate('TreinoA')}>
            <Text style={styles.text}>Treino A</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress ={() => navigation.navigate('TreinoB')}>
            <Text style={styles.text}>Treino B</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress ={() => navigation.navigate('TreinoC')}>
            <Text style={styles.text}>Treino C</Text>
          </TouchableOpacity>
        </View>
      </View>
    )};
      
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a58d4',
        paddingTop: 200
    },
    types:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#fff'
    },
    button: {   
      backgroundColor: 'rgb(90, 69, 161)',
      borderRadius: 9,
      width: '25%',
      padding: 10,
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
}
}); 
