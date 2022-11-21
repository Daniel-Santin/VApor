import { ScrollView, View } from "react-native"
import List from "../../components/List"
import Text from "../../components/Text"

import Slider from "../../components/Slider"

const Aleitamento = () => {
    return (
        <ScrollView>
            <Text align="center"> Aleitamento </Text>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                O leite materno é a melhor fonte de nutrição para os recém nascidos. A Academia Americana de Pediatria recomenda a amamentação como a única fonte de nutrição para o seu bebê por cerca de 6 meses e pode ser continuada pelo tempo que a mãe e o bebê desejarem 
                </Text>
            </View>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                Inicialmente, é melhor alimentar seu recém-nascido sob demanda, ou sempre que ele chorar porque está com fome. Com o passar do tempo, ele começará a desenvolver um cronograma próprio bastante regular. À medida que você se familiarizar com os sinais e necessidades dele, poderá programar as mamadas de acordo com a rotina dele.
                </Text>
            </View>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                    Devido ao período de hospitalização muitos bebês prematuros podem necessitar de complemento com fórmulas.  O pediatra é o profissional mais indicado para direcionar qual fórmula usar. Você pode obter informações sobre alergias alimentares nos links https://www.alergiaaoleitedevaca.com.br/vida-social e https://www.sbp.com.br/flip/consenso-alergia-alimentar-parte-01/ 
                </Text>
            </View>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                É importante que antes dos 6 meses de idade o bebê não seja alimentado com sólidos ou pastosos, esse tempo pode variar um pouco mais nos bebês prematuros. Lembre-se que os bebês precisam de maturidade neurológica, motora e do sistema gastrointestinal para a transição alimentar, por isso aguarde seu médico dar sinal verde para introdução alimentar. 
                </Text>
            </View>
        </ScrollView>
    )
}

const OQueEPrematuridade = () => {
    return (
        <Slider slides={[{
            Component: Aleitamento,
            Key: 0,
        }
        ]}></Slider>
    )
}

export default OQueEPrematuridade