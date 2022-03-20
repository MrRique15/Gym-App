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
    width: 90%;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px;
    padding-top: 100px;
    padding-bottom: 5%;
`

export const Input = styled.TextInput`
    border: 2px solid rgb(90, 69, 161);
    margin-bottom: 30px;
    padding: 15px 20px;
    color: #fff;
    font-size: 20px;
    border-radius: 9px;
    width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: rgb(90, 69, 161)
    border-radius: 9px;
    width: 50%;
    padding: 10px;
    align-items: center;
    margin-bottom: 10px;
`

export const ButtonCreateAccount = styled.TouchableOpacity`
    background-color: #879EE9;
    border-radius: 9px;
    width: 50%;
    padding: 8px;
    align-items: center;
`

export const TextSubmit = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

export const Text = styled.Text`
    color: #fff;
    font-size: 10px;
    font-weight: normal;
    margin-bottom: 15px;
`

export const NormalText = styled.Text`
    color: #fff;
    margin-bottom: 7px;
    font-size: 15px;
    margin-top: 100px;
`