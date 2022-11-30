import { ScrollView, View } from "react-native"
import List from "../../components/List"
import Text from "../../components/Text"
import { Image } from "react-native"

import Slider from "../../components/Slider"

import chart1 from '../../assets/chart1.png'
import chart2 from '../../assets/chart2.png'
import chart3 from '../../assets/chart3.png'

const listItem = [
    'Lá embaixo, na linha horizontal, que vai de 22 a 50, temos a idade gestacional atual do bebê, contada por semanas, ou seja: se ele nasceu de 26 semanas, temos que acompanhar a linha vertical que sai da marca "26"',
    'No lado esquerdo, na vertical, temos inicialmente a contagem em quilos (kg) de 0 a 4kg e depois a contagem em centímetros, de 20 a 65cm. O mesmo ocorre na barra vertical direita do gráfico, de maneira levemente diferente.',
    'Uma vez tendo os dados coletados do bebê, seguimos a linha vertical referente à semana gestacional (não a corrigida!) e verificamos comprimento (cm), perímetro cefálico (cm) e peso (kg). O ideal é que o ponto de encontro das linhas esteja sempre perto da linha central da curva, em negrito (chamamos de percentil 50). Essa linha central se refere à média da população. O distanciamento da mesma é sinal de alerta à equipe da UTI.',
]

const FirstPage = () => {
    return (
        <Image style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} source={chart1} />
    )
}

const SecondPage = () => {
    return (
        <ScrollView>
            <View style={{ marginTop: 8 }}>
                <Text> No gráfico de crescimento, as curvas de acompanhamento de bebês prematuros baseiam-se no padrão de crescimento do bebê ainda no útero.</Text>
            </View>
            <View style={{ marginTop: 16 }}>
                <Text> Elas são excelentes instrumentos para avaliarmos a saúde e acompanharmos se o bebê está crescendo adequada e proporcionalmente, juntamente com o exame clínico e os dados laboratoriais. </Text>
            </View>
            <View style={{ marginTop: 16 }}>
                <Text> Porém, temos estas curvas somente como referência, pois devemos levar em consideração que quando o bebê nasce, ele é submetido à várias situações adversas ainda na UTI e, portanto, seu padrão de crescimento tende a ser diferente daquele esperado enquanto ele estava na barriga da mãe. </Text>
            </View>
        </ScrollView>
    )
}

const ThirdPage = () => {
    return (
        <ScrollView>
            <Text align="center"> Para entender como funciona a curva: </Text>

            <View>
                <List data={listItem}/>
            </View>
        </ScrollView>
    )
}

const OQueEPrematuridade = () => {
    return (
        <Slider title="Gráfico de Crescimento" slides={[
            {
                Component: FirstPage,
                key: 0,
            },
            {
                Component: SecondPage,
                key: 1,
            },
            {
                Component: ThirdPage,
                key: 2,
            }
        ]} />
    )
}

export default OQueEPrematuridade