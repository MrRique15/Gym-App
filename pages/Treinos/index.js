import React from 'react';
import { 
    StyleSheet,
    View, 
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

export default function Treinos(){
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Image 
                        source={require('../../assets/images/gym.png')}
                        style={styles.topImage}
                />
            </View>
            <View style={styles.barraBotoes}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/add.png')}
                        style={{resizeMode: 'contain',
                                height: 50,
                                width: 80,
                        }}
                        />
                    <Text>Novo treino</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/edit.png')}
                        style={{resizeMode: 'contain',
                                height: 50,
                                width: 45,
                        }}
                        />
                    <Text>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a58d4',
        alignItems: 'center',
        padding: 30
        //justifyContent: 'center'
    },
    topImage: {
        resizeMode: 'contain',
        width: 65,
        height: 100,
        backgroundColor: '#02800b', //AUXILIO APENAS
    },
    barraBotoes: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#0282ab'
    }
});