import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: rgb(90, 88, 212); //nao funciona ainda
    
`

export const Input = styled.TextInput`
    border: 2px solid rgb(90, 69, 161);
    margin-bottom: 30px;
    padding: 15px 20px;
    color: #fff;
    font-size: 20px;
    border-radius: 9px;
    width: 80%;
`
export const InputDois = styled.TextInput`
    border: 2px solid rgb(90, 69, 161);
    margin-bottom: 30px;
    padding: 15px 20px;
    color: #fff;
    font-size: 20px;
    border-radius: 9px;
    width: 80%;
`

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: rgb(90, 69, 161)
    border-radius: 9px;
    width: 50%;
    padding: 10px;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 10px;
    
`

export const TextSubmit = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

export const TextResult = styled.Text`
    color: yellow;
    font-size: 25px;
    font-weight: bold;
    margin-top: 30px;
`