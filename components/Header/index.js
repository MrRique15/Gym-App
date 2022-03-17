import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import Logo from '../../assets/images/logo.png';

function Header() {
    return(
        <Container>
            <Image 
                source={Logo}
                style={{resizeMode: "contain", //para a imagem ficar inteira
                    height: 200,
                    width: 100     
            }}
            />
        </Container>
    )
}

export default Header;