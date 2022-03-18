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

function Cadastro({navigation}) {
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
                    placeholder="Idade"
                    secureTextEntry
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Tipo físico"
                />               
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Doenças crônicas"
                    secureTextEntry
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Peso"
                    secureTextEntry
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Altura"
                    secureTextEntry
                />
                <ButtonSubmit onPress ={()=> navigation.navigate('CadastroConcluido')}>
                    <TextSubmit>Cadastrar</TextSubmit>
                </ButtonSubmit>
                <Text>Ao cadastrar você concorda com os termos de serviço e políticas de privacidade</Text>
            </Container>
        </KeyBoardView>
    )
}

export default Cadastro;