import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useAuth } from '../../server/providers/Auth';

export default function Dietas ({navigation}) {
    const [ tipofisico, setTipoFisico ] = useState("");
    const [ objetivo, setObjetivo ] = useState("");
    const [ restricoes, setRestricoes ] = useState("");

    const {user} = useAuth();

    async function handleSubmit()
    {
        user.tipoFisico = tipofisico;
        user.objetivo = objetivo;
        user.restricao = restricoes;
        let response = await fetch('http://192.168.0.91:3000/saveDieta',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                tipoFisico: tipofisico,
                restricao: restricoes,
                objetivo: objetivo
            })
        });

        let json = await response.json();
        if(json.error == 'dietasalva'){
            alert(json.message);
        }else if(json.error == 'error'){
            alert(json.message);
        }
    }

    const getData = async () => {
        let response = await fetch('http://192.168.0.91:3000/getDieta',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
            })
        });

        let json = await response.json();
        if(json.error == 'dieta'){
            user.objetivo = json.objetivo;
            user.restricao = json.restricao;
            setTipoFisico(user.tipoFisico);
            setRestricoes(user.restricao);
            setObjetivo(user.objetivo);
        }
    }

    if(objetivo == "" || restricoes == "" || tipofisico == ""){
        getData();
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.background}>
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
                                { label: "Nenhum", value: "Nenhum" },
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
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dietas1')}>
                        <Text style={styles.text}>Acessar Dietas</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#5a58d4',
    },
    container: {
        flex: 1,
        backgroundColor: '#5a58d4',
        alignItems: 'center',
        paddingTop: 90,
        height: 900
    },
    scrollView: {
        backgroundColor: '#5a58d4',
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