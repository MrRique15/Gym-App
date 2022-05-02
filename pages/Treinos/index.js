import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, CheckBox, ScrollView} from 'react-native';

export default function Treinos({navigation}){
    return(
        <ScrollView style={styles.scroll}>
        <View style={styles.container}>
            <Image style={styles.imageLogo} source={require('../../assets/images/gym.png')}></Image>
            <View style={styles.navbar}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Exercicios')}
                >
                    <Image style={styles.navbarImage} source={require('../../assets/images/add.png')}/>
                    <Text style={styles.text}>Novo treino</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.navbarImage} source={require('../../assets/images/remover.png')}/>
                    <Text style={styles.text}>Remover treino</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.treinos}
                placeholderTextColor="#fff"
                multiline={true}
                placeholder="TREINO 1 CADASTRADO APARECERÁ AQUI"
            />
            <TextInput
                style={styles.treinos}
                placeholderTextColor="#fff"
                multiline={true}
                placeholder="TREINO 2 CADASTRADO APARECERÁ AQUI"
            />
            <TextInput
                style={styles.treinos}
                placeholderTextColor="#fff"
                multiline={true}
                placeholder="TREINO 3 CADASTRADO APARECERÁ AQUI"
            />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: 'rgb(90, 88, 212)',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        backgroundColor: 'rgb(90, 88, 212)',
    },
    imageLogo: {
        width: 100,
        height: 100
    },
    navbar: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        width: '100%',
        paddingTop: 50,
    },
    navbarImage: {
        width: 60,
        height: 60
    },
    text: {
        color: '#fff',
    },
    treinos: {
        borderWidth: 1,
        borderColor: 'rgb(90, 69, 161)',
        borderRadius: 4,
        borderRadius: 9,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginTop: 50,
        color: '#fff',
        fontSize: 16,
        width: '80%'
    }
});