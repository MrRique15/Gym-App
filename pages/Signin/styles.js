import styled from "styled-components/native";

export const KeyBoardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #000;
`
export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 50%;
    width: 90%;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px;
    font-style: italic;
    text-decoration-line: underline;
`

export const Input = styled.TextInput`
    border: 2px solid #12E6C8;
    margin-bottom: 30px;
    padding: 15px 20px;
    color: #fff;
    font-size: 20px;
    border-radius: 9px;
    width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #1A67F2;
    border-radius: 9px;
    width: 90%;
    padding: 15px;
    align-items: center;
    margin-bottom: 30px;
`

export const ButtonCreateAccount = styled.TouchableOpacity`
    background-color: #879EE9;
    border-radius: 9px;
    width: 57%;
    padding: 8px;
    align-items: center;
`

export const TextSubmit = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`

export const TextCreateAccount = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: bold;
`

export const NormalText = styled.Text`
    color: #fff;
    margin-bottom: 7px;
    font-size: 15px;
    margin-top: 100px;
`