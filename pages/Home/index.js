import React from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {colors} from '../../themes/color'
import Logo from '../../assets/logo.jpg'

export default function Home( ){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}> Appressadinho </Text>
                <Image srtle={{borderRadius: 12}} source={Logo}></Image>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Root')}
                >
                    <Text style={styles.buttonText}> Entrar </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ 
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: colors.purple,
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
        fontSize: 40
    },
    button:{
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '80%',
        fontSize: 24,
        display: 'flex',
        alignItems: 'center'
    },
    buttonText: {
        color: colors.purple,
        fontSize: 20
    },
    logo: {
        width: 300,
        height: 300,
    }
})
