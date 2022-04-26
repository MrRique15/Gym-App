import React from 'react';
import {KeyboardAvoidingView, View, StyleSheet, Text} from 'react-native'
import ProfilePic from '../../components/profilePic'
import UserSchema from '../../server/UserSchema';
import { useAuth } from '../../server/providers/Auth';

function Perfil() {
    const { user } = useAuth();

    return (
        <KeyboardAvoidingView style={styles.profile}>
            <View style={styles.container}>
                <ProfilePic/>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.title}>PERFIL</Text>
                <Text style={styles.rawInfo}>Nome: {user.name} {user.surename}</Text>
                <Text style={styles.rawInfo}>Altura: {user.altura} M</Text>
                <Text style={styles.rawInfo}>Tipo Fisico: A FAZER</Text>
                <Text style={styles.rawInfo}>Idade: {user.idade} Anos</Text>
                <Text style={styles.rawInfo}>Complicações de Saude: A FAZER</Text>
                <Text style={styles.rawInfo}>Peso: {user.peso} Kg</Text>
            </View>
            <View style={styles.personalInfo}>
                <Text style={styles.title}>DADOS PESSOAIS</Text>
                <Text style={styles.rawInfo}>e-mail: {user.email}</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    rawInfo: {
        color: '#fff',
        marginTop: 10,
        fontSize: 20,
    },
    profileInfo: {
        marginTop: 10,
        marginBottom: 100,
        marginLeft: 20,
        flex: 1,
    },
    personalInfo: {
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 20,
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '500',
    }
});

export default Perfil;