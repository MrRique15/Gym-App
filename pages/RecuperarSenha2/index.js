import React, {useState} from 'react';
import {KeyboardAvoidingView, View, Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { useAuth } from '../../server/providers/Auth';

function RecuperarSenha2({navigation}) {
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const { user } = useAuth();

    async function recPassword()
    {
        let response = await fetch('http://192.168.0.91:3000/recPassword',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                confirmPassword: password2,
                email: user.email,
            })
        });

        let json = await response.json();
        if(json.error == 'passchanged'){
            alert(json.message);
            setTimeout(() => {
                navigation.navigate('Signin');
            }, 200);
        }else if(json.error == 'error'){
            alert(json.message);
        }
    }
    
    return (
        <KeyboardAvoidingView style={styles.recupPassword2}>
            <View style={styles.container}>
                <Text style={styles.title}>Redefinir Senha</Text>
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="Nova Senha"
                    secureTextEntry
                    onChangeText={(text) => setPassword(parseInt(text))}
                />
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="Confirmar Senha"
                    secureTextEntry
                    onChangeText={(text) => setPassword2(parseInt(text))}
                />
                <TouchableOpacity 
                    style={styles.buttonSubmit} 
                    onPress ={()=> recPassword()}
                >
                    <Text style={styles.textSubmit}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    recupPassword2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(90, 88, 212)'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
        paddingTop: 100,
        paddingBottom: '5%',
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgb(90, 69, 161)',
        borderRadius: 4,
        borderRadius: 9,
        marginBottom: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: '#fff',
        fontSize: 20,
        borderRadius: 9,
        width: '90%'
    },
    buttonSubmit: {
        backgroundColor: 'rgb(90, 69, 161)',
        borderRadius: 9,
        width: '50%',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'normal',
        marginBottom: 15
    },
    textSubmit: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    normalText: {
        color: '#fff',
        marginBottom: 7,
        fontSize: 15,
        marginTop: 100
    },
  });

export default RecuperarSenha2;