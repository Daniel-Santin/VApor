import { Image, ScrollView, View} from "react-native";

import Text from "../../components/Text";
import Slider from "../../components/Slider";
import { colors } from "../../themes/color";

import List from "../../components/List";

import babyImage from '../../assets/baby1.png'

const Box = ({ children }) => (
    <View style={{ backgroundColor: colors.purple, padding: 4, maxWidth: 125, borderRadius: 8, alignSelf: 'center' }}>
        { children }
    </View>
)

const FirstPage = () => (
    <ScrollView style={{ display: 'flex' }}>
        <View style={{ marginTop: 16 }}>
            <Text align="center" color="#7d46de"> O QUE OS BEBÊS FAZEM NESSA IDADE? </Text>
        </View>

        <View>
            <Box>
                <Text align="center" color={colors.white}> 2 MESES </Text>
            </Box>
        </View>
        
        <Image style={{ maxHeight: 300, maxWidth: '100%' }} source={babyImage} />
    </ScrollView>
)

const SecondPage = () => (
    <ScrollView>
        <View style={{ marginTop: 16 }}>
            <Text align="center" color="#7d46de"> O QUE OS BEBÊS FAZEM NESSA IDADE? </Text>
        </View>

        <View>
            <Box>
                <Text align="center" color={colors.white}> 2 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Social e emocional: </Text>
            <List data={[
                'Sorri para as pessoas',
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Cognitivo (aprendizado, pensamento e solução de problemas): </Text>
            <List data={[
                'Presta atenção nos rostos',
                'Começa a seguir objetos com os olhos e reconhece pessoas de longe ',
                'Fica entediado (chora e fica inquieto) se a atividade não muda',
            ]} />
        </View>
    </ScrollView>
)

const ThirdyPage = () => (
    <ScrollView>
        <View style={{ marginTop: 16 }}>
            <Text align="center" color="#7d46de"> O QUE OS BEBÊS FAZEM NESSA IDADE? </Text>
        </View>

        <View>
            <Box>
                <Text align="center" color={colors.white}> 2 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Movimento e desenvolvimento físico: </Text>
            <List data={[
                'Consegue manter a cabeça elevada e começa a erguer o tronco quando está de bruços ',
                'Faz movimento mais suaves com os braços e pernas',
                'Consegue se acalmar rapidamente (pode levar as mãos à boca) ',
                'Consegue manter a cabeça elevada e começa a erguer o tronco quando está de bruços ',
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Clinguagem e comunicação: </Text>
            <List data={[
                'Começa a fazer barulhos e gorgolejar',
                'Vira a cabeça em direção aos sons',
            ]} />
        </View>
    </ScrollView>
)

const TwoMonths = () => (
        <Slider title="marcos da prematuridade" slides={[
            {
                Component: FirstPage,
                key: 0,
            },
            {
                Component: SecondPage,
                key: 1,
            },
            {
                Component: ThirdyPage,
                key: 2,
            }
        ]} />
)

export default TwoMonths;