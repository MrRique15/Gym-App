import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { useAuth } from '../../server/providers/Auth';
import ProfilePic from '../../components/profilePic'

function Menu({navigation}){
    const {user} = useAuth();

    return(
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../../assets/images/logo.png')}
            />
            <View style={styles.user}>
                <Text style={styles.welcome}>
                    Olá, {user.name} {user.surename}
                </Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Dietas')}
                >
                    <Image
                        style={styles.icon}
                        source={require('../../assets/images/diet.png')}
                    />
                    <Text style={styles.optionText}>Dieta</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('IMC')}
                >
                    <Image
                        source={require('../../assets/images/balance.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.optionText}>IMC</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Metas')}
                >
                    <Image
                        source={require('../../assets/images/metas.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.optionText}>Metas</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.options}>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Perfil')}
                >
                        <Image
                            source={require('../../assets/images/perfil.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.optionText}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Treinos')}
                >
                    <Image
                        source={require('../../assets/images/gym.png')}
                        style={styles.icon}
                        />
                        <Text style={styles.optionText}>Treinos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Saude')}
                >
                        <Image
                            source={require('../../assets/images/stethoscope.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.optionText}>Artigos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(90, 88, 212)', 
        paddingTop: 100
    },  
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingBottom: 30
    },  
    logo: {
        resizeMode: 'contain',
        width: 100,
        height: 200
    },
    options: {
        flexDirection: 'row',
        alignContent: 'center',
    },  
    buttonFacebookStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    welcome: {
        color: '#fff',
        fontSize: 25
    },
    icon: {
        resizeMode: 'contain',
        height: 100,
        width: 65
    },
    optionText: {
        color: '#fff',
        flexDirection: 'row',
    }
});

export default Menu