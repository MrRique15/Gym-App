import React, {useState} from 'react';
import { 
    KeyBoardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    ButtonCreateAccount,
    TextSubmit,
    TextCreateAccount,
    NormalText,
} from './styles';
import Header from '../../components/Header';

function Singin({navigation}) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    async function sendForm()
    {
        let response = await fetch('http://192.168.0.91:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });

        let json = await response.json();
        if(json.error == 'logar'){
            navigation.navigate('Menu');
        }else if(json.error == 'incomplete'){
            alert(json.message);
            setTimeout(() => {
                navigation.navigate('CompletarCadastro');
            }, 200);
        }else if(json.error == 'error'){
            alert(json.message);
        }
    }

    return (
        <KeyBoardView>
            <Header />
            <Container>
                <Title>FIT IN</Title>
                
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
                <ButtonSubmit onPress ={()=> sendForm()}>
                    <TextSubmit>Entrar</TextSubmit>
                </ButtonSubmit>
                <ButtonSubmit>
                    <TextSubmit>Recuperar Senha</TextSubmit>
                </ButtonSubmit>
                <NormalText>Ainda não possui uma conta?</NormalText>
                <ButtonCreateAccount onPress ={()=> navigation.navigate('Cadastro')}>
                    <TextCreateAccount>Cadastre-se</TextCreateAccount>
                </ButtonCreateAccount>
            </Container>
        </KeyBoardView>
    )
}

export default Singin;