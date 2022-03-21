import * as React from 'react-native';
import {Container, View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Container: {
    flex: 1,
    backgroundColor: '#5a58d4'
    }
});

function Dietas(){
    return(
        <View>
            <Image
                source={require('../../assets/images/diet.png')}
                    style={{
                        resizeMode: 'contain',
                        height: 100,
                        width: 65,
                    }}
            />
        </View>
    )
}

export default Dietas