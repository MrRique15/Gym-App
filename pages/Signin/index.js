import React, {useState} from 'react';
import {KeyboardAvoidingView, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Header from '../../components/Header';
import { useAuth } from '../../server/providers/Auth';

function Signin({navigation}) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { setUser } = useAuth();

    async function sendForm()
    {
        let response = await fetch('http://192.168.0.91:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });

        let json = await response.json();
        if(json.error == 'logar'){
            setUser({
                name: json.name,
                surename: json.surename,
                email: json.email,
            });
            navigation.navigate('Menu');   
        }else if(json.error == 'incomplete'){
            alert(json.message);
            setTimeout(() => {
                navigation.navigate('CompletarCadastro');
            }, 200);
        }else if(json.error == 'error'){
            alert(json.message);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.signin}>
            <Header/>
            <View style={styles.container}>
                <Text style={styles.title}>FIT IN</Text>

                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder="E-mail"
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />

                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder="Senha"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />

                <TouchableOpacity 
                    style={styles.buttonSubmit}
                    onPress ={()=> sendForm()}
                >
                    <Text style={styles.textSubmit}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonSubmit}
                    onPress ={()=> navigation.navigate('RecuperarSenha')}
                >
                    <Text style={styles.textSubmit}>Recuperar Senha</Text>
                </TouchableOpacity>

                <Text style={styles.normalText}>Ainda não possui uma conta?</Text>

                <TouchableOpacity 
                    style={styles.buttonSubmit}
                    onPress ={()=> navigation.navigate('Cadastro')}
                >
                    <Text style={styles.textSubmit}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    signin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(90, 88, 212)'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '50%',
        width: '90%'
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '800',
        marginBottom: 10,
        paddingTop: 15
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgb(90, 69, 161)',
        borderRadius: 4,
        borderRadius: 9,
        marginBottom: 30,
        paddingHorizontal: 20,
        paddingVertical: 15,
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
        marginBottom: 10
    },
    textSubmit: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    normalText: {
        color: '#fff',
        marginBottom: 7,
        fontSize: 15,
        marginTop: 100
    }
  });

export default Signin;