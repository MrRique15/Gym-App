import styled from "styled-components/native";

export const KeyBoardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgb(90, 88, 212); //alterando a cor do fundo da página inteira
`
export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

`

export const Title = styled.Text`
    color: #fff;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
    padding-top: 15px;
`

export const Image = styled.Image`
    height: 200;
    width: 100;
    resize-mode: contain;
`
export const TextSubmit = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: rgb(90, 69, 161)
    border-radius: 9px;
    width: 50%;
    padding: 10px;
    align-items: center;
    margin-bottom: 90px;
`