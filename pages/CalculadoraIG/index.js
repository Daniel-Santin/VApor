import React , { useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import { colors } from "../../themes/color";
import Picker from "../../components/Picker";

const months = Object.keys(new Array(40).fill(null)).map(item => {
    return { value: `${+item + 1}`, label: `${+item + 1}`}
})


export default function CalculadoraIG(){
    const [test, setTest] = useState({})

    function handleChangeValue(value) {
        setTest({
            ...test,
            [value.param]: value.item,
        })
    }
    return(
          <View style={{ backgroundColor: colors.pink, flex: 1 , justifyContent: 'center', alignItems: 'center', width: '100%'}} >
           
            <Picker
                style={{ width: '90%' }}
                onChange={(item) => handleChangeValue({
                    param: 'm',
                    item
                })}
                items={months}
                label="Mês"
                placeholder="Digite um valor"
                selectedValue={null}
            />

            <Picker
                style={{ width: '90%', marginTop: 10 }}
                onChange={(item) => handleChangeValue({
                    param: 'l',
                    item
                })}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />

            <Text> { JSON.stringify(test) } </Text>
          </View>
    );
}

const styles = StyleSheet.create({
    input: {
        color: 'red',
    }
})