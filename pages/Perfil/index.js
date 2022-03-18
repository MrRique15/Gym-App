import React from 'react';
import { 
    KeyBoardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    TextSubmit,
} from './styles';

function Singin() {
    return (
        <KeyBoardView>
            <Container>
                <Title>Cadastro</Title>
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
                    placeholder="Nome"
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Idade"
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Peso"
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Altura"
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Tipo físico"
                />
                <ButtonSubmit>
                    <TextSubmit>Cadastrar</TextSubmit>
                </ButtonSubmit>
            </Container>
        </KeyBoardView>
    )
}

export default Singin;