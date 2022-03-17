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

function Singin() {
    return (
        <KeyBoardView>
            <Header />
            <Container>
                <Title>GYM APP</Title>
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="E-mail"
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Senha"
                    secureTextEntry
                />
                <ButtonSubmit>
                    <TextSubmit>Entrar</TextSubmit>
                </ButtonSubmit>
                <NormalText>Ainda não possui uma conta?</NormalText>
                <ButtonCreateAccount>
                    <TextCreateAccount>Cadastre-se</TextCreateAccount>
                </ButtonCreateAccount>
            </Container>
        </KeyBoardView>
        
    )
}

export default Singin;