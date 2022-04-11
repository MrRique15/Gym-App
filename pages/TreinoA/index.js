import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function Dietas () {
    const [ treinoBiceps, setTreinoBiceps ] = useState([
        {option: ''},
    ]);

    const handleAdd = () => {
        setTreinoBiceps([...treinoBiceps, {option: ''}])
    }

    const handleDelete = (index) => {
        const values = [...treinoBiceps];
        values.splice(index, 1);
        setTreinoBiceps(values)
    }

    return (
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
                        <RNPickerSelect
                            onValueChange={(treinoBiceps) => setTreinoBiceps(treinoBiceps)}
                            items={[
                                { label: "Halteres", value: treinoBiceps.option }
                            ]}
                            style={pickerSelectStyles}
                        />
                        <View style={styles.addRemove}>
                            <TouchableOpacity onPress={() => handleAdd()}>
                                <AntDesign style={styles.plus} name="plus" size={24} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleDelete(index)}>
                                <AntDesign style={styles.minus} name="minus" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )) }
            </View>

            <TouchableOpacity style={styles.button} onPress ={()=> handleSubmit()}>
                <Text style={styles.text}>Finalizar</Text>
            </TouchableOpacity>
        </View>

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
    select: {
        padding: 20, 
        fontSize: 18,
        color: '#fff'
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    addRemove: {
        width: '10%',
        flexDirection: 'row'
    },
    plus: {
        marginRight: 20
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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '180%',
        borderWidth: 1,
        borderColor: 'rgb(90, 69, 161)',
        borderRadius: 4,
        color: 'white',
        paddingRight: 0
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'white',
        paddingRight: 30
    }
});