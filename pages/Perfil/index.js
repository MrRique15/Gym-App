import React from 'react';
import {KeyboardAvoidingView, View, StyleSheet} from 'react-native'

function Perfil() {
    return (
        <KeyboardAvoidingView style={styles.profile}>
            <View style={styles.container}>
                
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    profile: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(90, 88, 212)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    }
});

export default Perfil;