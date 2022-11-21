import { ScrollView, View } from "react-native"
import List from "../../components/List"
import Text from "../../components/Text"
import { Image } from "react-native"

import chart1 from '../../assets/chart1.png'
import chart2 from '../../assets/chart2.png'
import chart3 from '../../assets/chart3.png'

const listItem = [
    'Lá embaixo, na linha horizontal, que vai de 22 a 50, temos a idade gestacional atual do bebê, contada por semanas, ou seja: se ele nasceu de 26 semanas, temos que acompanhar a linha vertical que sai da marca "26"',
    'No lado esquerdo, na vertical, temos inicialmente a contagem em quilos (kg) de 0 a 4kg e depois a contagem em centímetros, de 20 a 65cm. O mesmo ocorre na barra vertical direita do gráfico, de maneira levemente diferente.',
    'Uma vez tendo os dados coletados do bebê, seguimos a linha vertical referente à semana gestacional (não a corrigida!) e verificamos comprimento (cm), perímetro cefálico (cm) e peso (kg). O ideal é que o ponto de encontro das linhas esteja sempre perto da linha central da curva, em negrito (chamamos de percentil 50). Essa linha central se refere à média da população. O distanciamento da mesma é sinal de alerta à equipe da UTI.',
]

const OQueEPrematuridade = () => {
    return (
        <ScrollView>
            <Text align="center"> Gráfico de Crescimento </Text>

            <Text size="sm" >
            Assim como está aqui apresentada, as curvas de acompanhamento de bebês prematuros baseiam-se no padrão de crescimento do bebê ainda no útero. Elas são excelentes instrumentos para avaliarmos a saúde e acompanharmos se o bebê está crescendo adequada e proporcionalmente, juntamente com o exame clínico e os dados laboratoriais. Porém, temos estas curvas somente como referência, pois devemos levar em consideração que quando o bebê nasce, ele é submetido à várias situações adversas ainda na UTI e, portanto, seu padrão de crescimento tende a ser diferente daquele esperado enquanto ele estava na barriga da mãe 
                </Text>

                <View style={{ marginTop: 20}}>
                <Text size="sm">
                Para entender como funciona a curva:
                </Text>
                <List data={listItem}></List>
                
            </View>

            <View style={{ marginTop: 20, display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={chart1} />

                <Text size="sm"> https://aps.saude.gov.br/ape/vigilanciaalimentar/curvascrescimento </Text>
            </View>

            <View style={{ marginTop: 20, display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={chart2} />
            </View>

            <View style={{ marginTop: 20, display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={chart3} />
            </View>
        </ScrollView>
    )
}

export default OQueEPrematuridade