import { ScrollView, View ,StyleSheet,Text} from "react-native"
import List from "../../components/List"
import { Image } from "react-native"
import image1 from "../../assets/05-removebg-preview.png"
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
        <View style={{ paddingTop:50, maxWidth: '100%' ,alignItems:"center"}}>
        <Image style={{ width: 350,height: 450, }} source={chart1} />
        </View>
        )
}

const SecondPage = () => {
    return (
        <ScrollView>
            <View style={{marginTop: 20}}>
                <Text  size="sm" >
                    <Text size="sm">   No Gráfico de crescimento, as curvas de acompanhamento de bebês prematuros baseiam-se no padrão de crescimento do bebê ainda no útero</Text>
                    {"\n"} {"\n"}
                    <Text size="sm">   Elas são excelentes instrumentos para avaliarmos a saúde e acompanharmos se o bebê está crescendo adequadamente e proporcionalmente, juntamente com o exame clínico e os dados laboratoriais. </Text>
                    {"\n"} {"\n"}  
                    <Text size="sm">   Porém, temos estas curvas somente como referência, pois devemos levar em consideração que quando o bebê nasce, ele é submetido à várias situações adversas ainda na UTI e, portanto, seu padrão de crescimento tende a ser diferente daquele esperado enquanto ele estava na barriga da mãe.</Text>
                </Text>
            </View>
        </ScrollView>
    )
}

const ThirdPage = () => {
    return (
        <ScrollView>
            <Text style={styles.baseText}  > {"\n"} Para entender como funciona a curva: {"\n"} </Text>

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

const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign:'center'
    }
  });