import React, {useState} from 'react';
import {KeyboardAvoidingView, View, Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { useAuth } from '../../server/providers/Auth';

function CompletarCadastro({navigation}) {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [surename, setSurename] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const { user, setUser } = useAuth();

    async function sendForm()
    {
        let response = await fetch('http://192.168.0.91:3000/completarcadastro',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                name: name,
                surename: surename,
                age: age,
                height: height,
                weight: weight,
                code: code
            })
        });

        let json = await response.json();
        if(json.error == 'cadastrocompleto'){
            alert(json.message);
            setUser({
                name: name,
                surename: surename,
                email: user.email,
                imageURL: user.imageURL,
                altura: height,
                peso: weight,
                idade: age,
                tipoFisico: user.tipoFisico,
            });
            setTimeout(() => {
                navigation.navigate('Menu');
            }, 200);
        }else if(json.error == 'error'){
            alert(json.message);
        }
    }
    
    return (
        <KeyboardAvoidingView 
            behavior='padding'
            style={styles.completarCadastro}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="Código de Confirmação"
                    onChangeText={(text) => setCode(parseInt(text))}
                />
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="Nome"
                    onChangeText={(text) => setName(text)}
                />               
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="Sobrenome"
                    onChangeText={(text) => setSurename(text)}
                />
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="Idade"
                    keyboardType="numeric"
                    onChangeText={(text) => setAge(text.replace(',','.'))}
                />
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="Altura (m)"
                    keyboardType="numeric"
                    onChangeText={(text) => setHeight(text.replace(',','.'))}
                />
                <TextInput
                    style={styles.input} 
                    placeholderTextColor="#fff"
                    placeholder="Peso (kg)"
                    keyboardType="numeric"
                    onChangeText={(text) => setWeight(text.replace(',','.'))}
                />
                <TouchableOpacity 
                    style={styles.buttonSubmit} 
                    onPress ={()=> sendForm()}
                >
                    <Text style={styles.textSubmit} >Finalizar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    completarCadastro: {
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

export default CompletarCadastro;