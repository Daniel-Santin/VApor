import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { ScrollView } from "react-native-gesture-handler";

import { colors } from "../themes/color"

export default function Slider({ slides }){
    const [colorActiveItem, setColorActiveItem] = useState(colors.pink)
    const [countChange, setCountChange] = useState(0)

    function renderSlides({ item }){
        const { Component } = item
        return(
            <ScrollView style = {{ flex:1, paddingLeft: 10, paddingRight: 10, maxHeight: '90%', backgroundColor: colors.pink }}>
               <Component />
            </ScrollView>
        )
    }

    function handleSlideChange() {
        const colorsSlide = [
            colors.darkPink,
            colors.pink,
        ]
        const maxlength = colorsSlide.length
        setCountChange((e) => e === maxlength - 1 ? 0 : e + 1)
        setColorActiveItem(colorsSlide[countChange])
    }

    return(
        <AppIntroSlider
            data={slides}
            renderItem={renderSlides}
            onSlideChange={handleSlideChange}
            activeDotStyle={{
                backgroundColor: colorActiveItem,
                width: 30,
            }}
        />
    );

}