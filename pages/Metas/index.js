import * as React from 'react-native';
import {} from 'react';
import { Text, Image, View, TextInput, StyleSheet } from 'react-native'
import { useAuth } from '../../server/providers/Auth';


function Metas() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View >
        <Image
          style={styles.icon}
          source={require('../../assets/images/metas.png')}
        />
      </View>
      <Text style={styles.text}>Minha meta de peso é:</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#fff"
        placeholder="Meta:"
        keyboardType="numeric"
      />

      <Text style={styles.text}>Eu estou com:</Text>
      <Text style={styles.input}>{user.peso}kg</Text>
      <Text style={styles.text}>Continue se exercitando! 😁</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -200,
    backgroundColor: 'rgb(90, 88, 212)',
  },
  icon: {
    resizeMode: 'contain',
    height: 60,
    width: 300,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    height: 50,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgb(90, 69, 161)',
    borderRadius: 4,
    borderRadius: 9,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 16,
    width: '80%'
  },
  button: {
    backgroundColor: 'rgb(90, 69, 161)',
    borderRadius: 9,
    width: '30%',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default Metas;