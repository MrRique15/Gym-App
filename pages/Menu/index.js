import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
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
            <View style={{
                backgroundColor: '#5a58d4', //alterar dps
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
                    activeOpacity={0.5}>
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
                    activeOpacity={0.5}>
                        <Image
                        source={require('../../assets/images/balance.png')}
                        style={{resizeMode: 'contain',
                                height: 100,
                                width: 60,
                        }}
                        />
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