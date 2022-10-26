import React, { useState } from "react";
import { View, Text, Image } from "react-native-animatable";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
    {
        key: '1',
        title: 'tela 1',
        text: 'tela 1',
        image: require('./img/Jokenpo.png')
    },
    {
        key: '2',
        title: 'tela 2',
        text: 'tela 2',
        image: require('./img/pokedex.png')
    },
    {
        key: '3',
        title: 'tela 3',
        text: 'tela 3',
        image: require('./img/to-do-list.png')
    },
];

export default function OQ(){
    function renderSlides({ item }){
        return(
            <View style = {{flex:1}}>
                <Image
                    source={item.image}
                    style={{ resizeMode: 'cover',
                        height: '73%',
                          width: '100%',  
                    }}
                />
                <Text>
                    {item.title}
                </Text>
                <Text>
                    {item.text}
                </Text>
            </View>
        )
    }

    return(
        <AppIntroSlider
            data={slides}
            renderItem={renderSlides}
            activeDotStyle={{
                backgroundColor: '#009CFF',
                width: 30,
            }}
        />
    );

}