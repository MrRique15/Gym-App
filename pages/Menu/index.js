import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import { Container } from './styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

function Menu(){
    return(
        <Container>
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/images/logo.png')}
                    style={{resizeMode: 'contain',
                            height: 200,
                            width: 100
                    }}
                />
                <Text>MENU</Text>
                <Image 
                    source={require('../../assets/images/diet.png')}
                    style={{resizeMode: 'contain',
                            height: 200,
                            width: 100
                    }}
                />
                <Text>Dieta</Text>
                <Image 
                    source={require('../../assets/images/balance.png')}
                    style={{resizeMode: 'contain',
                            height: 200,
                            width: 100
                    }}
                />
                <Text>Calculadora IMC</Text>
            </View>
        </Container>
    )
}

export default Menu