import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Dietas () {
    const [ tipofisico, setTipoFisico ] = useState("");
    const [ objetivo, setObjetivo ] = useState("");
    const [ restricoes, setRestricoes ] = useState("");

    // função copiada de outro file, só pra ter ideia de como fazer
    // necessário pegar os dados selecionados e mandar pro DB

    // async function handleSubmit()
    // {
    //     let response = await fetch('http://192.168.0.10:3000/completarcadastro',{
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email: email,
    //             name: name,
    //             surename: surename,
    //             age: age,
    //             height: height,
    //             weight: weight
    //         })
    //     });

    //     let json = await response.json();
    //     if(json.error == 'cadastrocompleto'){
    //         alert(json.message);
    //         setTimeout(() => {
    //             navigation.navigate('Menu');
    //         }, 200);
    //     }else if(json.error == 'error'){
    //         alert(json.message);
    //     }
    // }


    return (
        <View style={styles.container}>
            <Image 
                style={styles.topImage}
                source={require('../../assets/images/diet.png')}
            />
            <Text style={styles.select}>
                {tipofisico ?
                `Tipo físico: ${tipofisico}` :
                    "Selecione seu tipo físico:"
                }
            </Text>
            <View style={styles.selector}>
                <RNPickerSelect
                    onValueChange={(tipofisico) => setTipoFisico(tipofisico)}
                    items={[
                        { label: "Endomorfo", value: "Endomorfo" },
                        { label: "Mesomorfo", value: "Mesomorfo" },
                        { label: "Ectomorfo", value: "Ectomorfo" },
                    ]}
                    style={pickerSelectStyles}
                />
            </View>
            <Text
                style={styles.select}
            >
                {objetivo ?
                `Objetivo: ${objetivo}` :
                    "Selecione seu objetivo:"
                }
            </Text>
            <View style={styles.selector}>
                <RNPickerSelect
                    onValueChange={(objetivo) => setObjetivo(objetivo)}
                    items={[
                        { label: "Hipertrofia", value: "Hipertrofia" },
                        { label: "Definição Muscular", value: "Definição Muscular" },
                        { label: "Emagrecimento", value: "Emagrecimento" },
                    ]}
                style={pickerSelectStyles}
                />
            </View>
            

            <Text
                style={styles.select}
            >
                {restricoes ?
                `Restrições Alimentares: ${restricoes}` :
                    "Selecione suas restrições alimentares:"
                }
            </Text>
            <View style={styles.selector}>
                <RNPickerSelect
                    onValueChange={(restricoes) => setRestricoes(restricoes)}
                    items={[
                        { label: "Lactose", value: "Lactose" },
                        { label: "Amendoim", value: "Amendoim" },
                        { label: "Glúten", value: "Glúten" },
                        { label: "Crustáceos", value: "Crustáceos" },
                        { label: "Soja", value: "Soja" },
                        { label: "Proteína Leite", value: "Proteína Leite" },
                    ]}
                    style={pickerSelectStyles}
                />
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
    selector: {
        width: '80%'
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
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
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