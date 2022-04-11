import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default function Treinos({navigation}){
    return(
        <View style={styles.container}>
            <Image style={styles.imageLogo} source={require('../../assets/images/gym.png')}></Image>
            <View style={styles.navbar}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Exercicios')}
                >
                    <Image style={styles.navbarImage} source={require('../../assets/images/add.png')}/>
                    <Text>Novo treino</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.navbarImage} source={require('../../assets/images/edit.png')}/>
                    <Text>Editar treino</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(90, 88, 212)',
    },
    imageLogo: {
        width: 100,
        height: 100
    },
    navbar: {
        // flex: 1,
        flexDirection: 'row',
    },
    navbarImage: {
        width: 50,
        height: 50
    }
});