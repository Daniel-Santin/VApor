import React from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity, Button, Pressable } from "react-native";
import {colors} from '../../themes/color'

import { page1 } from "./pag1";
import Slider from "../../components/Slider"


const slides = [
    {
        Component: page1,
        key: 0,
    },

]

export default function QuemSomos(){
    return (
        <Slider slides={slides} title="Quem Somos" />
    )
}

const styles = StyleSheet.create({
    container:{ 
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: colors.pink,
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
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '80%',
        fontSize: 24,
        display: 'flex',
        alignItems: 'center'
    },
    buttonText: {
        color: colors.pink,
    },
    logo: {
        width: 300,
        height: 300,
    }
})
