import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function TreinoA () {
    const [ treinoBiceps, setTreinoBiceps ] = useState([
        {treino: ''},
    ]);

    const handleAddTreinoBiceps = () => {
        setTreinoBiceps([...treinoBiceps, {treino: ''}])
    }

    const handleDeleteTreinoBiceps = (index) => {
        const values = [...treinoBiceps];
        values.splice(index, 1);
        setTreinoBiceps(values)
    }

    const handleSubmitTreinoBiceps = () => {
        alert(treinoBiceps)
    }

    const [ treinoCostas, setTreinoCostas ] = useState([
        {treino: ''},
    ]);

    const handleAddTreinoCostas = () => {
        setTreinoCostas([...treinoCostas, {treino: ''}])
    }

    const handleDeleteTreinoCostas = (index) => {
        const values = [...treinoCostas];
        values.splice(index, 1);
        setTreinoCostas(values)
    }

    const handleSubmitTreinoCostas = () => {
        alert(treinoCostas)
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image 
                style={styles.topImage}
                source={require('../../assets/images/gym.png')}
            />
            <Text style={styles.select}>Adicione um exercício para: </Text>
            <Text style={styles.select}>Bíceps</Text>

            <View>
                {treinoBiceps.map((treinoBiceps, index) => (
                    <View key={index} style={styles.field}>
                        <TextInput
                            onValueChange={(treinoBiceps) => setTreinoBiceps(treinoBiceps)}
                            style={styles.input}
                        />
                        <View style={styles.addRemove}>
                            <TouchableOpacity onPress={() => handleAddTreinoBiceps()}>
                                <AntDesign style={styles.plus} name="plus" size={24} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleDeleteTreinoBiceps(index)}>
                                <AntDesign style={styles.minus} name="minus" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )) }
            </View>

            <TouchableOpacity style={styles.button} onPress ={()=> handleSubmitTreinoBiceps()}>
                <Text style={styles.text}>Finalizar</Text>
            </TouchableOpacity>

            <Text style={styles.select}>Costas</Text>

            <View>
                {treinoCostas.map((treinoCostas, index) => (
                    <View key={index} style={styles.field}>
                        <TextInput
                            onValueChange={(treinoCostas) => setTreinoCostas(treinoCostas)}
                            style={styles.input}
                        />
                        <View style={styles.addRemove}>
                            <TouchableOpacity onPress={() => handleAddTreinoCostas()}>
                                <AntDesign style={styles.plus} name="plus" size={24} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleDeleteTreinoCostas(index)}>
                                <AntDesign style={styles.minus} name="minus" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )) }
            </View>

            <TouchableOpacity style={styles.button} onPress ={()=> handleSubmitTreinoCostas()}>
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