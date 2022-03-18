import React from 'react';
import { 
    KeyBoardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    TextSubmit,
    Text
} from './styles';

function Singin() {
    return (
        <KeyBoardView>
            <Container>
                <Title>Cadastro</Title>
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Nome"
                    secureTextEntry
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Sobrenome"
                    secureTextEntry
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
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Confirmar senha"
                    secureTextEntry
                />
                <ButtonSubmit>
                    <TextSubmit>Cadastrar</TextSubmit>
                </ButtonSubmit>
                <Text>Ao cadastrar você concorda com os termos de serviço e políticas de privacidade</Text>
            </Container>
        </KeyBoardView>
    )
}

export default Singin;