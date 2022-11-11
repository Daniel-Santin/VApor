import React , { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { colors } from "../../themes/color";
import Picker from "../../components/Picker";
import { set } from "react-native-reanimated";

const months = Object.keys(new Array(40).fill(null)).map(item => {
    return { value: `${+item + 1}`, label: `${+item + 1}`}
})

const months2 = Object.keys(new Array(24).fill(null)).map(item => {
    return { value: `${+item + 1}`, label: `${+item + 1}`}
})


export default function CalculadoraIG(){
    const [ correctedAge, setCorrectedAge ] = useState('')
    const [ paramsCorrectedAge, setParamsCorrectedAge] = useState({})

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
        console.log(numberAfterCommaInNumber)
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
                onChange={(item) => handleChangeValue({
                    param: 'ageInMonths',
                    item
                })}
                items={months2}
                label="Idade atual em meses"
                placeholder="Digite um valor"
                selectedValue={null}
            />

            <Picker
                style={{ marginTop: 10 }}
                onChange={(item) => handleChangeValue({
                    param: 'birthMonth',
                    item
                })}
                label="De quantas semanas a criança nasceu"
                items={months}
            />
            <Pressable
                    style={{ ...styles.button, marginTop: 10 }}
                    onPress={handleClickButton}
                    >
                    <Text style={styles.buttonText}> Calcular </Text>
            </Pressable>

            { correctedAge && <Text style={{ marginTop: 10 }}> A idade corrigida é { correctedAge }  </Text> } 

            <Pressable
                    style={{ ...styles.button, marginTop: 100 }}
                    onPress={handleClickButton}
                    >
                    <Text style={styles.buttonText}> Limpar </Text>
            </Pressable>

            <Text style={{ color: colors.darkPink }}> *obs: A calculadora só funciona com bebês até 24 meses</Text>

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
        color: colors.pink,
    },
    logo: {
        width: 300,
        height: 300,
    }
})