import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Container } from './styles';
import { IMC } from '../IMC/index'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonFacebookStyle: {
        margin: 20,
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
    }
  });

function Menu({navigation}){
    return(
        <Container>
            <View style={{
                backgroundColor: '#5a58d4',
                flex: 1,
                alignItems: 'center'
            }}>
                <Image 
                    source={require('../../assets/images/logo.png')}
                    style={{resizeMode: 'contain',
                            height: 200,
                            width: 100
                    }}
                />
                <Text>MENU</Text>
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    alignContent: 'center'
                }}>
                    <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}
                    >
                        <Image
                        source={require('../../assets/images/diet.png')}
                        style={{resizeMode: 'contain',
                                height: 100,
                                width: 70,
                        }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('IMC')}>
                        <Image
                        source={require('../../assets/images/balance.png')}
                        style={{resizeMode: 'contain',
                                height: 100,
                                width: 60,
                        }}
                        />
                        <Text style={styles.buttonTextStyle}>Oi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}>
                        <Image
                        source={require('../../assets/images/metas.png')}
                        style={{resizeMode: 'contain',
                                height: 100,
                                width: 60,
                        }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

export default Menu