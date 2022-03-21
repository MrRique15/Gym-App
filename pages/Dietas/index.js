import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-web";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function App () {
    const [ tipofisico, setTipoFisico ] = useState("");
    const [ objetivo, setObjetivo ] = useState("");
    const [ restricoes, setRestricoes ] = useState("");
    return (

            <View style={styles.container}>
                <Image 
                    source={require('../../assets/images/diet.png')}
                    style={styles.topImage}
                />
                <Text>
                    {tipofisico ?
                    `Tipo físico: ${tipofisico}` :
                        "Selecione seu tipo físico"
                    }
                </Text>
                <RNPickerSelect
                    onValueChange={(tipofisico) => setTipoFisico(tipofisico)}
                    items={[
                        { label: "Endomorfo", value: "Endomorfo" },
                        { label: "Mesomorfo", value: "Mesomorfo" },
                        { label: "Ectomorfo", value: "Ectomorfo" },
                    ]}
                style={pickerSelectStyles}
                />

                <Text>
                    {objetivo ?
                    `Objetivo: ${objetivo}` :
                        "Selecione seu objetivo"
                    }
                </Text>
                <RNPickerSelect
                    onValueChange={(objetivo) => setObjetivo(objetivo)}
                    items={[
                        { label: "Hipertrofia", value: "Hipertrofia" },
                        { label: "Definição Muscular", value: "Definição Muscular" },
                        { label: "Emagrecimento", value: "Emagrecimento" },
                    ]}
                style={pickerSelectStyles}
                />

                <Text>
                    {restricoes ?
                    `Restrições Alimentares: ${restricoes}` :
                        "Selecione suas restrições alimentares"
                    }
                </Text>
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

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a58d4',
        alignItems: 'center',
        padding: 30
        //justifyContent: 'center'
    },
    topImage: {
        resizeMode: 'contain',
        width: 65,
        height: 100,
        //backgroundColor: '#02800b',
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30 // garantindo que o texto não fique atrás do ícone
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30
    }
});