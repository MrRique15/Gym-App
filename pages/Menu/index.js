import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Container } from './styles';


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
        width: 60,
        height: 100
    }
  });

function Menu({navigation}){
    return(
        <Container>
            <View style={{
                backgroundColor: '#5a58d4',
                flex: 1,
                alignItems: 'center',
            }}>
                <Image 
                    source={require('../../assets/images/logo.png')}
                    style={{resizeMode: 'contain',
                            height: 200,
                            width: 100
                    }}
                />
                <Text style={{color: '#fff'}}>MENU</Text>
                <View style={{
                    flexDirection: 'row',
                    alignContent: 'center'}}
                >
                    <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Dietas')}
                    >
                        <Image
                        source={require('../../assets/images/diet.png')}
                        style={{resizeMode: 'contain',
                                height: 100,
                                width: 65,
                        }}
                        />
                        <Text style={{
                                color: '#fff',
                                flexDirection: 'row',
                                marginLeft: 12
                        }}>Dieta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonFacebookStyle}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('IMC')}
                    >
                        <Image
                            source={require('../../assets/images/balance.png')}
                            style={{resizeMode: 'contain',
                                    height: 100,
                                    width: 60,
                        }}
                        />
                        <Text style={{
                                color: '#fff',
                                flexDirection: 'row',
                                marginLeft: 18
                        }}>IMC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonFacebookStyle}
                        activeOpacity={0.5}
                    >
                        <Image
                            source={require('../../assets/images/metas.png')}
                            style={{resizeMode: 'contain',
                                    height: 100,
                                    width: 60,
                        }}
                        />
                        <Text style={{
                                color: '#fff',
                                flexDirection: 'row',
                                marginLeft: 10
                        }}>Metas</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    alignContent: 'center'}}
                >
                    <TouchableOpacity
                        style={styles.buttonFacebookStyle}
                        activeOpacity={0.5}
                    >
                            <Image
                                source={require('../../assets/images/perfil.png')}
                                style={{resizeMode: 'contain',
                                        height: 100,
                                        width: 60}}
                            />
                            <Text style={{
                                color: '#fff',
                                flexDirection: 'row',
                                marginLeft: 10
                            }}>Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonFacebookStyle}
                        activeOpacity={0.5}
                    >
                        <Image
                            source={require('../../assets/images/gym.png')}
                            style={{resizeMode: 'contain',
                                    height: 100,
                                    width: 70}}
                            />
                            <Text style={{
                                color: '#fff',
                                flexDirection: 'row',
                                marginLeft: 10
                            }}>Treinos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonFacebookStyle}
                        activeOpacity={0.5}
                    >
                            <Image
                                source={require('../../assets/images/stethoscope.png')}
                                style={{resizeMode: 'contain',
                                        height: 100,
                                        width: 60}}
                            />
                            <Text style={{
                                color: '#fff',
                                flexDirection: 'row',
                                marginLeft: 10
                            }}>Saúde</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

export default Menu