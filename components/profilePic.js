import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Logo from '../assets/images/logo.png';
import { useAuth } from '../server/providers/Auth';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const {user} = useAuth();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      user.imageURL = result.uri;
      let response = await fetch('http://192.168.0.91:3000/setImageBD',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: user.email,
          imageURL: result.uri,
        })
      });
    }
  };

  if(user.imageURL){
    return (
      <View style= {styles.imageDefault}>
        {user.imageURL && <Image source={{ uri: user.imageURL }} style={styles.img} />}
        <Button style={styles.button} title="Alterar" color={'white'} onPress={pickImage} />
      </View>
    );
  }else if (!image) {
    return (
      <View style= {styles.imageDefault}>
        <Image 
          source={Logo}
          style={styles.logoDefault}
        />
        <Button style={styles.button} title="Clique para adicionar foto" color={'white'} onPress={pickImage} />
      </View>
    );
  }else{
    return (
      <View style= {styles.imageDefault}>
        {image && <Image source={{ uri: image }} style={styles.img} />}
        <Button style={styles.button} title="Alterar" color={'white'} onPress={pickImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    imageDefault: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      
    },  
    img: {
      width: 60, 
      height: 60, 
      borderRadius: 100 
    },
    logoDefault: {
      width: 60,
      height: 60,
    },
});