import React, {useState} from 'react-native';
import {Text, Image, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a58d4',
        padding: 20,
        alignItems: 'center'
    },
    topImage: {
        resizeMode: 'contain',
        width: 65,
        height: 100,
        //backgroundColor: '#02800b' //APENAS PARA VER O BOX DPS EU TIRO
    },
    TextTipoFis: {
        color: '#ffffff'
    },
    TextTopo: {
        color: '#ffffff',
    }
});

function Dietas(){
    return(
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../assets/images/diet.png')}
                style={styles.topImage}
            />
            <Text style={styles.TextTopo}>Dieta</Text>
            <SafeAreaView style={styles.container}>
                <Text style={styles.TextTipoFis}>Selecione seu tipo físico</Text>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{ label: "TESTE", value: null }}
                    items={[
                        { label: "Endomorfo", value: "Endomorfo" },
                        { label: "Mesomorfo", value: "Mesomorfo" },
                        { label: "Ectomorfo", value: "Ectomorfo" },
                    ]}
                />
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default Dietas