import { ScrollView, StyleSheet, Pressable } from "react-native";
import Slider from "../../components/Slider";
import Text from "../../components/Text";
import { colors } from "../../themes/color";

import { useNavigation } from "@react-navigation/native";

const Root = () => {
    const navigation = useNavigation();
    return (
    <ScrollView>
        <Text align="center" color="#7d46de"> SELECIONE QUE IDADE QUER PESQUISAR: </Text>

        <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('2 meses')}
                >
                    <Text color="#fff" style={styles.buttonText}> 2 Meses </Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('4 meses')}
                >
                    <Text color="#fff" style={styles.buttonText}> 4 Meses </Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('6 meses')}
                >
                    <Text color="#fff" style={styles.buttonText}> 6 Meses </Text>
                </Pressable>
    </ScrollView>
)}

const MarcosDosDesenvolvimentos = () => (
    <Slider title="OS MARCOS DO DESENVOLVIMENTO" slides={[
        {
            Component: Root,
            key: 0,
        }
    ]} />
)

const styles = StyleSheet.create({
    container:{ 
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: '#7d46de',
        height: '100%'
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        minHeight: '60%'
    },
    title:{
        fontWeight:"bold",
        color:'#f8f8f8',
        fontSize: 54
    },
    button:{
        padding: 16,
        backgroundColor: '#7d46de',
        borderRadius: 8,
        width: '80%',
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 12
    },
    buttonText: {
        color: '#fff',
    },
    logo: {
        width: 300,
        height: 300,
    }
})


export default MarcosDosDesenvolvimentos;
