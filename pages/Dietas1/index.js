import * as React from 'react-native';
import { Text, Image, View, Linking, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

function Dietas1() {

  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url)
    isSupported ? await Linking.openURL(url) : alert("não deu")
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/diet1.png')}
          />
        </View>
        <Text style={styles.text}>Dietas para Hipertrofia</Text>

        <TouchableOpacity
          style={styles.artigo}
          onPress={() => {
            openUrl('https://www.tuasaude.com/dieta-para-aumentar-a-massa-muscular/')
          }}
        >
          <Text style={styles.buttonText}>Dicas de dieta para ganhar massa muscular</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.artigo}
          onPress={() => {
            openUrl('https://boaforma.abril.com.br/dieta/cardapio-para-ganhar-massa-muscular-e-conquistar-um-corpo-durinho/')
          }}
        >
          <Text style={styles.buttonText}>Cardápio para ganhar massa muscular </Text>
        </TouchableOpacity>



        <Text style={styles.text}>Dietas para perda de peso</Text>
        <TouchableOpacity
          style={styles.artigo}
          onPress={() => {
            openUrl('https://www.tuasaude.com/cardapio-para-emagrecer/')
          }}
        >
          <Text style={styles.buttonText}>Como montar um cardápio para emagrecer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.artigo}
          onPress={() => {
            openUrl('https://boaforma.abril.com.br/dieta/cardapio-para-emagrecer-desinchar-e-matar-a-vontade-de-doce/')
          }}
        >
          <Text style={styles.buttonText}>Cardápio para emagrecer, desinchar e matar a vontade de doce </Text>
        </TouchableOpacity>

          <Text style={styles.text}>Dietas para vegetarianos</Text>
          <TouchableOpacity
            style={styles.artigo}
            onPress={() => {
              openUrl('https://boaforma.abril.com.br/dieta/cardapio-vegetariano-para-perder-gordura-e-ganhar-musculo/')
            }}
          >
            <Text style={styles.buttonText}>Cardápio vegetariano para perder gordura e ganhar músculo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.artigo}
            onPress={() => {
              openUrl('https://andreiatorres.com/blog/2016/9/17/dieta-vegetariana-para-ganho-de-massa-magra')
            }}
          >
            <Text style={styles.buttonText}>Dieta vegetariana para ganho de massa magra</Text>
          </TouchableOpacity>



          <Text style={styles.text}>Dietas para intolerância à lactose</Text>
          <TouchableOpacity
            style={styles.artigo}
            onPress={() => {
              openUrl('https://www.tuasaude.com/dieta-para-intolerancia-a-lactose/')
            }}
          >
            <Text style={styles.buttonText}>Dieta para intolerância à lactose: o que comer e o que evitar</Text>
          </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
    backgroundColor: 'rgb(90, 88, 212)',
  },
  icon: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
    marginBottom: 30,
    marginTop: 150
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

export default Dietas1;