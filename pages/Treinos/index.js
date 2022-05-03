import React, {useState} from 'react';
import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import { useAuth } from '../../server/providers/Auth';

export default function Treinos({navigation}){
    const { user } = useAuth();

    const [treino01, setTreino01] = useState(user.treino01);
    const [treino02, setTreino02] = useState(user.treino02);
    const [treino03, setTreino03] = useState(user.treino03);

    const handleSubmit = async () => {
        user.treino01 = treino01;
        user.treino02 = treino02;
        user.treino03 = treino03;
        let response = await fetch('http://192.168.0.91:3000/saveTreino',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                treino01: treino01,
                treino02: treino02,
                treino03: treino03,
            })
        });
        let json = await response.json();
        if(json.error == 'treino'){
            alert(json.message);
        }
    }

    return(
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Image style={styles.imageLogo} source={require('../../assets/images/gym.png')}></Image>
                <Text style={styles.normalText}>Treino 01</Text>
                <TextInput
                    style={styles.treinos}
                    placeholderTextColor="#fff"
                    multiline={true}
                    defaultValue={treino01}
                    onChangeText={(text) => setTreino01(text)}
                />
                <Text style={styles.normalText}>Treino 02</Text>
                <TextInput
                    style={styles.treinos}
                    placeholderTextColor="#fff"
                    multiline={true}
                    defaultValue={treino02}
                    onChangeText={(text) => setTreino02(text)}
                />
                <Text style={styles.normalText}>Treino 03</Text>
                <TextInput
                    style={styles.treinos}
                    placeholderTextColor="#fff"
                    multiline={true}
                    defaultValue={treino03}
                    onChangeText={(text) => setTreino03(text)}
                />
                <TouchableOpacity style={styles.button} onPress ={()=> handleSubmit()}>
                            <Text style={styles.textButton}>Salvar</Text>
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
        alignItems: 'center',
        paddingTop: 100,
        backgroundColor: 'rgb(90, 88, 212)',
    },
    imageLogo: {
        width: 100,
        height: 100
    },
    navbar: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        width: '100%',
        paddingTop: 50,
    },
    navbarImage: {
        width: 60,
        height: 60
    },
    text: {
        color: '#fff',
    },
    treinos: {
        borderWidth: 1,
        borderColor: 'rgb(90, 69, 161)',
        borderRadius: 4,
        borderRadius: 9,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginBottom: 15,
        color: '#fff',
        fontSize: 16,
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
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    normalText: {
        padding: 20, 
        fontSize: 18,
        color: '#fff'
    },
    avoid: {
        flex: 1,
        backgroundColor: 'rgb(90, 88, 212)',
    },
});