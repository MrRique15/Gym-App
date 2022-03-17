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
                <Title>Cadastro</Title>
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Nome"
                />
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
                    <TextSubmit>Cadastrar</TextSubmit>
                </ButtonSubmit>
            </Container>
        </KeyBoardView>
        
    )
}

export default Singin;