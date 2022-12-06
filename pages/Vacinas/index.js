import React from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Slider from "../../components/Slider"
import * as vac from "./vacpages"
const page1 = [

]
const slides = [
        {
            Component: vac.page1,
            key: 0,
        },        
        {
            Component: vac.page2,
            key: 1,
        },
        {
            Component: vac.page3,
            key: 2,
        },
        {
            Component: vac.page4,
            key: 3,
        },
        {
            Component: vac.page5,
            key: 4,
        },        
        {
            Component: vac.page6,
            key: 5,
        },        
        {
            Component: vac.page7,
            key: 6,
        },        
        {
            Component: vac.page8,
            key: 7,
        },        
        {
            Component: vac.page9,
            key: 8,
        },
]


export default function Vacinas(){
    return (
        <Slider title=" Vacinação " slides={slides} />
    )
}