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

function Cadastro({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    async function sendForm()
    {
        let response = await fetch('http://192.168.0.91:3000/cadastro',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                confirmpassword: confirmpassword
            })
        });

        let json = await response.json();
        if(json.error == 'cadastrar'){
            alert(json.message);
            setTimeout(() => {
                navigation.navigate('CadastroConcluido');
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
                    placeholder="E-mail"
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />               
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Senha"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Confirmar senha"
                    onChangeText={(text) => setConfirmPassword(text)}
                    secureTextEntry
                />
                <ButtonSubmit onPress ={()=> sendForm()}>
                    <TextSubmit>Cadastrar</TextSubmit>
                </ButtonSubmit>
                <Text>Ao cadastrar você concorda com os termos de serviço e políticas de privacidade</Text>
            </Container>
        </KeyBoardView>
        
    )
}

export default Cadastro;