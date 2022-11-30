import React, { useState } from "react";
import { View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { ScrollView } from "react-native-gesture-handler";

import { colors } from "../themes/color"
import Text from "./Text";

export default function Slider({ slides, title }){

    function renderSlides({ item }){
        const { Component } = item
        return(
            <ScrollView style = {{ flex:1, paddingLeft: 10, paddingRight: 10, maxHeight: '90%', backgroundColor: '#fff' }}>
               <Component />
            </ScrollView>
        )
    }

    return(
        <View style = {{ flex:1, maxHeight: '100%', backgroundColor: '#fff' }}>
            <Text type="title" align="center"> { title } </Text>
            <AppIntroSlider
                data={slides}
                renderItem={renderSlides}
                activeDotStyle={{
                    backgroundColor: 'purple',
                    width: 10,
                }}
            />
        </View>
    );

}