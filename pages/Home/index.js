import React from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home( ){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            
                <Text style={styles.Title}>
                Apressadinho
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Root')}>
                    <Text>
                        Entrar
                    </Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#ADD8E6',
    },
    containerLogo:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    containerForm:{
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        padding: '5%',
        marginBottom: 250,
        backgroundColor:'#ADD8E6'
    },
    Title:{
        marginTop:100,
        fontWeight:"bold",
        color:'#111',
        fontSize: 54
    },
    Text:{
        fontFamily:'SansSeriff',
        color:'#888'
    },
    button:{
        position:'absolute',
        backgroundColor:'#fff',
        borderRadius:50,
        paddingVertical: 8,
        width:'30%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    button1:{
        position:'absolute',
        backgroundColor:'#fff',
        borderRadius:50,
        paddingVertical: 8,
        width:'30%',
        alignSelf:'center',
        bottom:'0%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#ccc'
    }
})
