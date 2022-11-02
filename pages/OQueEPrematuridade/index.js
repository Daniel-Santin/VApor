import React, { useState } from "react";
import { View, Text, Image } from "react-native-animatable";
import AppIntroSlider from "react-native-app-intro-slider";

import { colors } from "../../themes/color";

const slides = [
    {
        key: '1',
        title: 'tela 1',
        text: 'tela 1',
        image: require('../imgs/oqueprematuridade/pag1.png')
    },
    {
        key: '2',
        title: 'tela 2',
        text: 'tela 2',
        image: require('../imgs/oqueprematuridade/pag2.png')
    },
    {
        key: '3',
        title: 'tela 3',
        text: 'tela 3',
        image: require('../imgs/oqueprematuridade/pag3.png')
    },
    {
        key: '4',
        title: 'tela 4',
        text: 'tela 4',
        image: require('../imgs/oqueprematuridade/pag4.png')
    },
];

export default function OQ(){
    const [colorActiveItem, setColorActiveItem] = useState(colors.pink)
    const [countChange, setCountChange] = useState(0)
    function renderSlides({ item }){
        return(
            <View style = {{flex:1,
                backgroundColor: '#FFF',}}>
                <Image
                    source={item.image}
                    style={{ 
                        height: '65%',
                          width: '100%',  
                    }}
                />
            </View>
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