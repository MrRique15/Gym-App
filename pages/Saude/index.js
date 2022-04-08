import * as React from 'react-native';
import { Image, View, StyleSheet } from 'react-native'

function Saude() {
  return (
    <View style={styles.container}>
      <View >
        <Image
          style={styles.icon}
          source={require('../../assets/images/balance2.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
    backgroundColor: 'rgb(90, 88, 212)',
  },
  icon: {
    resizeMode: 'contain',
    height: 80,
    width: 300,
  }
});

export default Saude;