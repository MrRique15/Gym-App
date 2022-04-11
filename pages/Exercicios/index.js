import React from "react";
import {Text, StyleSheet, View, FlatList, TouchableHighlight} from "react-native";




export default function Exercicios({navigation}){

    const dados = [
        {key: 'Abdominais'},
        {key: 'Costas'},
        {key: 'Bicips'},
        {key: 'Panturrilha'},
        {key: 'Peito'},
        {key: 'Antebraços'},
        {key: 'Pernas'},
        {key: 'Ombros'},
        {key: 'Tríceps'},
        
    ]
    const teste = (teste1) => {
        switch (teste1) {
            case 'Abdominais':
              navigation.navigate('IMC'); //somente para teste
              break; 
            case 'Costas':
              break;
            case 'Bicips':
              break;
            case 'Panturrilha':
              break;
            case 'Peito':
              break;
            case 'Antebraços':
              break;
            case 'Pernas':
              break;
            case 'Ombros':
              break;
            case 'Tríceps':
              break;
          default:
            console.log('Sorry, we are out of page.');
            
        }

    }
 
        return (
            <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={dados}
                renderItem = {({item}) => 
                    <Text onPress={() => teste(item.key)} key={item} style={styles.textoItem}>
                        {item.key} 
                    </Text>}
            />
            </View>
          )};
      
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a58d4',
        paddingTop: 25,
     
    },
    textoItem: {
       fontSize: 20,
       color: '#fff',
       padding: 28,
       borderBottomWidth: 1,
       borderBottomColor: '#000',
       textAlign: 'center',
       borderRadius: 10,
    },
}); 
