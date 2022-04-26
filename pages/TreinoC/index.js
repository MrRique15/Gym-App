import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function TreinoA () {
    const [ treinoPernas, setTreinoPernas ] = useState([
        {treino: ''},
    ]);

    const handleAddTreinoPernas = () => {
        setTreinoPernas([...treinoPernas, {treino: ''}])
    }

    const handleDeleteTreinoPernas = (index) => {
        const values = [...treinoPernas];
        values.splice(index, 1);
        setTreinoPernas(values)
    }

    const handleSubmitTreinoPernas = () => {
        alert(treinoPernas)
    }

    const [ treinoOmbros, setTreinoOmbros ] = useState([
        {treino: ''},
    ]);

    const handleAddTreinoOmbros = () => {
        setTreinoOmbros([...treinoOmbros, {treino: ''}])
    }

    const handleDeleteTreinoOmbros = (index) => {
        const values = [...treinoOmbros];
        values.splice(index, 1);
        setTreinoOmbros(values)
    }

    const handleSubmitTreinoOmbros = () => {
        alert(treinoOmbros)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                    style={styles.topImage}
                    source={require('../../assets/images/gym.png')}
                />
                <Text style={styles.select}>Adicione um exercício para: </Text>
                <Text style={styles.select}>Pernas</Text>

                <View>
                    {treinoPernas.map((treinoPernas, index) => (
                        <View key={index} style={styles.field}>
                            <TextInput
                                onValueChange={(treinoPernas) => setTreinoPernas(treinoPernas)}
                                style={styles.input}
                            />
                            <View style={styles.addRemove}>
                                <TouchableOpacity onPress={() => handleAddTreinoPernas()}>
                                    <AntDesign style={styles.plus} name="plus" size={24} color="white" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleDeleteTreinoPernas(index)}>
                                    <AntDesign style={styles.minus} name="minus" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )) }
                </View>

                <TouchableOpacity style={styles.button} onPress ={()=> handleSubmitTreinoPernas()}>
                    <Text style={styles.text}>Finalizar</Text>
                </TouchableOpacity>

                <Text style={styles.select}>Ombros</Text>

                <View>
                    {treinoOmbros.map((treinoOmbros, index) => (
                        <View key={index} style={styles.field}>
                            <TextInput
                                onValueChange={(treinoOmbros) => setTreinoOmbros(treinoOmbros)}
                                style={styles.input}
                            />
                            <View style={styles.addRemove}>
                                <TouchableOpacity onPress={() => handleAddTreinoOmbros()}>
                                    <AntDesign style={styles.plus} name="plus" size={24} color="white" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleDeleteTreinoOmbros(index)}>
                                    <AntDesign style={styles.minus} name="minus" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )) }
                </View>

                <TouchableOpacity style={styles.button} onPress ={()=> handleSubmitTreinoOmbros()}>
                    <Text style={styles.text}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a58d4',
        alignItems: 'center',
        paddingTop: 90
    },
    topImage: {
        resizeMode: 'contain',
        width: 65,
        height: 100,
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 20,
        width: '80%',
        borderWidth: 1,
        borderColor: 'rgb(90, 69, 161)',
        borderRadius: 4,
        color: 'white',
        paddingRight: 0
    },
    select: {
        padding: 20, 
        fontSize: 18,
        color: '#fff'
    },

    addRemove: {
        width: '10%',
        flexDirection: 'row'
    },
    plus: {
    },
    button: {   
        backgroundColor: 'rgb(90, 69, 161)',
        borderRadius: 9,
        width: '50%',
        padding: 10,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});