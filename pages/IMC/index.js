import * as React from 'react-native';
import {Text, Image, View, StyleSheet} from 'react-native'
import { Container, Input, InputDois, ButtonSubmit, TextSubmit } from '../IMC/styles';


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      balance2: {
        resizeMode: 'contain',
        height: 80,
        width: 300,
        marginTop: 60,
      },
      Text: {
        color: '#ffffff',
        textAlign: 'center',  
        height: 50,
        marginTop: 50,
      },
      Text2: {
        color: '#ffffff',
        textAlign: 'center',  
        height: 50,
      }
      
  });
 

function IMC(){
    return(
        <Container style={styles.container}>
            <View >
                <Image
                style={styles.balance2}
                source={require('../../assets/images/balance2.png')}
                />
            </View>
        <Text style={styles.Text}>Informe sua altura</Text>
        <Input 
                    placeholderTextColor="#fff"
                    placeholder="Altura"
                    
        /> 
        <Text style={styles.Text2}>Informe seu peso</Text>
        <InputDois 
                    placeholderTextColor="#fff"
                    placeholder="Peso"
        /> 
        <ButtonSubmit>
                    <TextSubmit>Calcular</TextSubmit>
        </ButtonSubmit>
        </Container>      
    )
}

export default IMC;