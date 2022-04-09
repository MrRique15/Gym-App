import React, {useState} from 'react';
import {KeyboardAvoidingView, View, Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { useAuth } from '../../server/providers/Auth';

function RecuperarSenha({navigation}) {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    const { setUser } = useAuth();

    async function sendCode()
    {
        let response = await fetch('http://192.168.0.91:3000/sendCode',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
            })
        });

        let json = await response.json();
        if(json.error == 'codecreated'){
            alert(json.message);
        }else if(json.error == 'error'){
            alert(json.message);
        }
    }
    async function validateCode()
    {
        let response = await fetch('http://192.168.0.91:3000/validateCode',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                code: code,
            })
        });

        let json = await response.json();
        if(json.error == 'codevalidated'){
            setUser({
                name: '',
                surename: '',
                email: json.email,
            });
            setTimeout(() => {
                navigation.navigate('RecuperarSenha2');
            }, 200);
        }else if(json.error == 'error'){
            alert(json.message);
        }
    }
    
    return (
        <KeyboardAvoidingView style={styles.recupPassword}>
            <View style={styles.container}>
                <Text style={styles.title}>Obter Código de Recuperação</Text>
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="E-mail"
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />
                <TouchableOpacity 
                    style={styles.buttonSubmit} 
                    onPress ={()=> sendCode()}
                >
                    <Text style={styles.textSubmit}>Obter Código</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Já Possui um código?</Text>
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="E-mail"
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="Código"
                    onChangeText={(text) => setCode(parseInt(text))}
                />
                <TouchableOpacity 
                    style={styles.buttonSubmit} 
                    onPress ={()=> validateCode()}
                >
                    <Text style={styles.textSubmit}>Validar Código</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    recupPassword: {
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
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 8,
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

export default RecuperarSenha;