import React from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Slider from "../../components/Slider"

const page1 = [

]
const slides = [
        {
            Component: pag1,
            key: 0,
        },
        {
            Component: GraficodeCresc,
            key: 1,
        },
        {
            Component: Complicações,
            key: 2,
        }
]


export default function Vacinas(){
    return (
        <Slider slides={slides} />
    )
}