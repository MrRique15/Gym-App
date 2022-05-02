import * as React from 'react-native';
import { Text, Image, View, Linking, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

function IMC() {

  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url)
    isSupported ? await Linking.openURL(url) : alert("não deu")
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/stethoscope.png')}
          />
        </View>
        <Text style={styles.text}>Emagrecimento</Text>

        <TouchableOpacity
          style={styles.artigo}
          onPress={() => {
            openUrl('https://www.tuasaude.com/como-fazer-a-dieta-flexivel/#:~:text=A%20dieta%20flex%C3%ADvel%20%C3%A9%20uma,em%20mudar%20o%20h%C3%A1bito%20alimentar.')
          }}
        >
          <Text style={styles.buttonText}>Dieta Flexível</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.artigo}
          onPress={() => {
            openUrl('http://www.rbone.com.br/index.php/rbone')
          }}
        >
          <Text style={styles.buttonText}>Revista Brasileira de Obesidade</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Hipertrofia</Text>
        <TouchableOpacity
          style={styles.artigo}
          onPress={() => {
            openUrl('https://www.tuasaude.com/hipertrofia-muscular/')
          }}
        >
          <Text style={styles.buttonText}>O que é hipertrofia?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.artigo}
          onPress={() => {
            openUrl('https://www.hipertrofia.org/blog/')
          }}
        >
          <Text style={styles.buttonText}>hipertrofia.org</Text>
        </TouchableOpacity>

          <Text style={styles.text}>Benefícios para idosos</Text>
          <TouchableOpacity
            style={styles.artigo}
            onPress={() => {
              openUrl('https://www.saude.rj.gov.br/atividade-na-terceira-idade/beneficios')
            }}
          >
            <Text style={styles.buttonText}>Atividade na terceira idade</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.artigo}
            onPress={() => {
              openUrl('https://www.tuasaude.com/atividade-fisica-para-idosos/')
            }}
          >
            <Text style={styles.buttonText}>Benefícios da atividade física para idosos</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'rgb(90, 88, 212)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
    backgroundColor: 'rgb(90, 88, 212)',
  },
  scrollView: {
    backgroundColor: 'rgb(90, 88, 212)',
  },
  icon: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
    marginBottom: 30,
    marginTop: 200
  },
  text: {
    marginVertical: 10,
    paddingVertical: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
    width: '40%'
  },
  artigo:{
    borderWidth: 1,
    borderColor: 'rgb(90, 69, 161)',
    borderRadius: 4,
    borderRadius: 9,
    marginVertical: 10,
    paddingVertical: 12,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    width: '80%'
  },
  button: {
    backgroundColor: 'rgb(90, 69, 161)',
    borderRadius: 9,
    width: '80%',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  buttonText: {
    paddingLeft: 10,
    color: '#fff',
  },
});

export default IMC;