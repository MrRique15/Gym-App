import React from 'react';
import { 
    KeyBoardView, 
    Title, 
    Container,
    Image,
    ButtonSubmit,
    TextSubmit
} from './styles';

import check from '../../assets/images/verifica.png'

function CadastroConcluido({navigation}) {
    return (
        <KeyBoardView>
            <Container>
                <Image source={check}/>
                <Title>Cadastro concluído 😁</Title>
            </Container>
            <ButtonSubmit onPress ={()=> navigation.navigate('Signin')}>
                <TextSubmit>Voltar</TextSubmit>
            </ButtonSubmit>
        </KeyBoardView>
    )
}

export default CadastroConcluido;