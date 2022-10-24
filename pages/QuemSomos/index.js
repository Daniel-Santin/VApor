import React from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Carousel from "../../components/Carousel";

import Home from "../Home";
import Test from "../Test"
export default function QuemSomos(){
    return(
        <View style={styles.container}>
<<<<<<< HEAD
          <Text >
            Vapor
          </Text>
=======
          <Carousel
                style="slides"
                itemsPerInterval={1}
                items={[ Home, Test ]}
     />
>>>>>>> 505eec4b38444560a8ac237bebbd3de613d0f683
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
    buttonText:{
        fontSize:18,
        color:'#ccc'
    }
})