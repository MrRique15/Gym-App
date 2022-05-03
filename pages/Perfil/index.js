import React from 'react';
import {KeyboardAvoidingView, View, StyleSheet, Text} from 'react-native'
import ProfilePic from '../../components/profilePic'
import UserSchema from '../../server/Schemas/UserSchema';
import { useAuth } from '../../server/providers/Auth';

function Perfil() {
    const { user } = useAuth();

    return (
        <KeyboardAvoidingView style={styles.profile}>
            <View style={styles.container}>
                <ProfilePic/>
            </View>
            
            <View style={styles.box}>
                <Text style={styles.section}>Nome:</Text>
                <Text style={styles.input}>{user.name} {user.surename}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.section}>Altura:</Text>
                <Text style={styles.input}>{user.altura}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.section}>Tipo físico:</Text>
                <Text style={styles.input}>{user.tipoFisico}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.section}>Idade:</Text>
                <Text style={styles.input}>{user.idade}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.section}>Peso:</Text>
                <Text style={styles.input}>{user.peso}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.section}>Informações de saúde:</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.section}>Restrição Alim.:</Text>
                <Text style={styles.input}>{user.restricao}</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.section}>Dados pessoais:</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.section}>E-mail:</Text>
                <Text style={styles.input}>{user.email}</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        backgroundColor: 'rgb(90, 88, 212)',
    },
    container: {
        flex: 1,
        marginLeft: 20,
        marginBottom: 100,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: -100
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgb(90, 69, 161)',
        borderRadius: 4,
        borderRadius: 9,
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 40,
        color: '#fff',
        fontSize: 16,
        width: '50%'
    },
    section: {
        color: '#fff',
        fontSize: 20
    },
});

export default Perfil;