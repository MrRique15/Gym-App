import React, {useState} from 'react';
import { Text, Image, View, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useAuth } from '../../server/providers/Auth';


function Metas() {
    const { user } = useAuth();

    const [meta, setMeta] = useState('');
    const [textMeta, setTextMeta] = useState('Digite uma meta! 😁');

    const calcularMeta = () => {
        if(meta == ''){
            setTextMeta('Digite uma meta! 😁');
        }else{
            let resultado = user.peso - meta;
            resultado = resultado.toFixed(2);
            if(resultado == 0){
                setTextMeta('Você já está na meta! 😁');
            }else if(resultado > 0){
                setTextMeta('Você está a ' + resultado + 'kg de alcançar sua meta! 😁');
            }else{
                setTextMeta('Você está a ' + resultado + 'kg de alcançar sua meta! 😁');
            }
        }
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <View >
                    <Image
                    style={styles.icon}
                    source={require('../../assets/images/metas.png')}
                    />
                </View>
                <Text style={styles.text}>Minha meta de peso é:</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder="Insira sua Meta (kg):"
                    keyboardType="numeric"
                    onChangeText={(text) => setMeta(parseFloat(text.replace(',','.')))}
                />

                <Text style={styles.text}>Eu estou com:</Text>
                <Text style={styles.input}>{user.peso}kg</Text>

                <TouchableOpacity
                    onPress={() => calcularMeta()}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Verificar</Text>
                </TouchableOpacity>

                <Text style={styles.text}>{textMeta}</Text>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: 'rgb(90, 88, 212)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
        backgroundColor: 'rgb(90, 88, 212)',
    },
    icon: {
        resizeMode: 'contain',
        height: 60,
        width: 300,
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
        height: 50,
        marginTop: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgb(90, 69, 161)',
        borderRadius: 4,
        borderRadius: 9,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: 16,
        width: '80%'
    },
    button: {
        backgroundColor: 'rgb(90, 69, 161)',
        borderRadius: 9,
        width: '30%',
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Metas;