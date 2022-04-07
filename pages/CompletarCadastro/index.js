import React, {useState,useEffect} from 'react';
import { 
    KeyBoardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    TextSubmit,
    Text
} from './styles';

function CompletarCadastro({navigation}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surename, setSurename] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    async function sendForm()
    {
        let response = await fetch('http://192.168.0.10:3000/completarcadastro',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                surename: surename,
                age: age,
                height: height,
                weight: weight
            })
        });

        let json = await response.json();
        if(json.error == 'cadastrocompleto'){
            alert(json.message);
            setTimeout(() => {
                navigation.navigate('Menu');
            }, 200);
        }else if(json.error == 'error'){
            alert(json.message);
        }
    }
    
    return (
        <KeyBoardView>
            <Container>
                <Title>Cadastro</Title>

                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Confirme seu E-mail"
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Nome"
                    onChangeText={(text) => setName(text)}
                />               
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Sobrenome"
                    onChangeText={(text) => setSurename(text)}
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Idade"
                    keyboardType="numeric"
                    onChangeText={(text) => setAge(text.replace(',','.'))}
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Altura (m)"
                    keyboardType="numeric"
                    onChangeText={(text) => setHeight(text.replace(',','.'))}
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Peso (kg)"
                    keyboardType="numeric"
                    onChangeText={(text) => setWeight(text.replace(',','.'))}
                />
                <ButtonSubmit 
                    onPress ={()=> sendForm()}
                >
                    <TextSubmit>Finalizar</TextSubmit>
                </ButtonSubmit>
            </Container>
        </KeyBoardView>
        
    )
}

export default CompletarCadastro;