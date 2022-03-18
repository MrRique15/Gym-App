import React from 'react';
import { 
    KeyBoardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    ButtonCreateAccount,
    TextSubmit,
    TextCreateAccount,
    NormalText
} from './styles';
import Header from '../../components/Header';

function Singin({navigation}) {
    return (
        <KeyBoardView>
            <Header />
            <Container>
                <Title>FIT IN</Title>
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="E-mail"
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Senha"
                    secureTextEntry
                />
                <ButtonSubmit onPress ={()=> navigation.navigate('Menu')}>
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