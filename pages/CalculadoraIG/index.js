import React , { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { colors } from "../../themes/color";
import Picker from "../../components/Picker";

const months = Object.keys(new Array(40).fill(null)).map(item => {
    return { value: `${+item + 1}`, label: `${+item + 1}`}
})

const months2 = Object.keys(new Array(24).fill(null)).map(item => {
    return { value: `${+item + 1}`, label: `${+item + 1}`}
})


export default function CalculadoraIG(){
    const [ correctedAge, setCorrectedAge ] = useState('')
    const [ paramsCorrectedAge, setParamsCorrectedAge] = useState({})

    const [firstValue, setFirstValue] = useState(1)
    const [secondValue, setSecondValue] = useState(1)

    function handleChangeValue(value) {
        setParamsCorrectedAge({
            ...paramsCorrectedAge,
            [value.param]: value.item,
        })
    }

    function handleClickButton() {
        const cronologicAge = 40 - paramsCorrectedAge.birthMonth
        const result = paramsCorrectedAge.ageInMonths - (cronologicAge / 4.3482)
        const numberSplitedPoint = String(result.toFixed(2))

        const [age, numberAfterComma] = numberSplitedPoint.split('.')
        const numberAfterCommaInNumber = +numberAfterComma

        console.log(numberAfterComma)

        setCorrectedAge(`${age} meses e ${
            numberAfterCommaInNumber <= 25 ? '' :
            numberAfterCommaInNumber <= 50 ? '1 semana' :
            numberAfterCommaInNumber <= 75 ? '2 semanas' :
            '3 semanas'
        }`)

    }
    return(
          <View style={{ backgroundColor: colors.pink, flex: 1 , justifyContent: 'center', alignItems: 'center', width: '100%'}} >
            <Picker
                onChange={(item) => {
                    setFirstValue(item)
                    handleChangeValue({
                        param: 'ageInMonths',
                        item
                    })}
                } 
                value={firstValue}
                items={months2}
                label="Idade atual em meses"
                selectedValue={1}
            />

            <Picker
                style={{ marginTop: 10 }}
                onChange={(item) => {
                    setSecondValue(item)
                    handleChangeValue({
                        param: 'birthMonth',
                        item
                    })}
                }
                label="De quantas semanas a criança nasceu"
                items={months}
                value={secondValue}
                selectedValue={1}
            />
            <Pressable
                    style={{ ...styles.button, marginTop: 10 }}
                    onPress={handleClickButton}
                    >
                    <Text style={styles.buttonText}> Calcular </Text>
            </Pressable>

            { correctedAge && <Text style={{ marginTop: 10 }}> A idade corrigida é { correctedAge }  </Text> } 

            <Text style={{  marginTop: 60 }}> *obs: A calculadora só funciona com bebês até 24 meses</Text>

          </View>
    );
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
        width: '90%',
        fontSize: 24,
        display: 'flex',
        alignItems: 'center'
    },
    buttonText: {
    },
    logo: {
        width: 300,
        height: 300,
    }
})