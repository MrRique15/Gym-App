import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function TreinoA () {
    const [ treinoTriceps, setTreinoTriceps ] = useState([
        {treino: ''},
    ]);

    const handleAddTreinoTriceps = () => {
        setTreinoTriceps([...treinoTriceps, {treino: ''}])
    }

    const handleDeleteTreinoTriceps = (index) => {
        const values = [...treinoTriceps];
        values.splice(index, 1);
        setTreinoTriceps(values)
    }

    const handleSubmitTreinoTriceps = () => {
        alert(treinoTriceps)
    }

    const [ treinoPeito, setTreinoPeito ] = useState([
        {treino: ''},
    ]);

    const handleAddTreinoPeito = () => {
        setTreinoPeito([...treinoPeito, {treino: ''}])
    }

    const handleDeleteTreinoPeito = (index) => {
        const values = [...treinoPeito];
        values.splice(index, 1);
        setTreinoPeito(values)
    }

    const handleSubmitTreinoPeito = () => {
        alert(treinoPeito)
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Image 
                    style={styles.topImage}
                    source={require('../../assets/images/gym.png')}
                />
                <Text style={styles.select}>Adicione um exercício para: </Text>
                <Text style={styles.select}>Tríceps</Text>

                <View>
                    {treinoTriceps.map((treinoTriceps, index) => (
                        <View key={index} style={styles.field}>
                            <TextInput
                                onValueChange={(treinoTriceps) => setTreinoTriceps(treinoTriceps)}
                                style={styles.input}
                            />
                            <View style={styles.addRemove}>
                                <TouchableOpacity onPress={() => handleAddTreinoTriceps()}>
                                    <AntDesign style={styles.plus} name="plus" size={24} color="white" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleDeleteTreinoTriceps(index)}>
                                    <AntDesign style={styles.minus} name="minus" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )) }
                </View>

                <TouchableOpacity style={styles.button} onPress ={()=> handleSubmitTreinoTriceps()}>
                    <Text style={styles.text}>Finalizar</Text>
                </TouchableOpacity>

                <Text style={styles.select}>Peito</Text>

                <View>
                    {treinoPeito.map((treinoPeito, index) => (
                        <View key={index} style={styles.field}>
                            <TextInput
                                onValueChange={(treinoPeito) => setTreinoPeito(treinoPeito)}
                                style={styles.input}
                            />
                            <View style={styles.addRemove}>
                                <TouchableOpacity onPress={() => handleAddTreinoPeito()}>
                                    <AntDesign style={styles.plus} name="plus" size={24} color="white" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleDeleteTreinoPeito(index)}>
                                    <AntDesign style={styles.minus} name="minus" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )) }
                </View>

                <TouchableOpacity style={styles.button} onPress ={()=> handleSubmitTreinoPeito()}>
                    <Text style={styles.text}>Finalizar</Text>
                </TouchableOpacity>
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