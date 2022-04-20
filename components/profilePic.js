import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }

  };

  return (
    <View>
      <Button style={styles.button} title="Clique para adicionar foto" color={'white'} onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.img} />}
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
    },  
    img: {
        width: 60, 
        height: 60, 
        borderRadius: 100 
    }
});