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

        <View style={{ marginTop: 28 }}>
            <Box>
                <Text align="center" color={colors.white}> 2 MESES </Text>
            </Box>
        </View>
        
        <Image style={{ maxHeight: 300, maxWidth: '100%', marginTop: 28 }} source={babyImage} />
    </ScrollView>
)

const SecondPage = () => (
    <ScrollView>
        <View style={{ marginTop: 16 }}>
            <Text align="center" color="#7d46de"> O QUE OS BEBÊS FAZEM NESSA IDADE? </Text>
        </View>

        <View style={{ marginTop: 28 }}>
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

        <View style={{ marginTop: 28 }}>
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
            <Text size="sm"> Linguagem e comunicação: </Text>
            <List data={[
                'Começa a fazer barulhos e gorgolejar',
                'Vira a cabeça em direção aos sons',
            ]} />
        </View>
    </ScrollView>
)

const FourthyPage = () => (
    <ScrollView>
        <View style={{ marginTop: 16 }}>
            <Text align="center" color="#7d46de"> QUAIS SINAIS DEVO PRESTAR ATENÇÃO? </Text>
        </View>

        <View style={{ marginTop: 28 }}>
            <Box>
                <Text align="center" color={colors.white}> 2 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Comunique ao pediatra ou outro profissional da saúde da sua comunidade que esteja familiarizado com crianças pequenas se seu bebê: </Text>
            <List data={[
                'Não responde a sons altos',
                'Não observa o movimento das coisas',
                'Não sorri para as pessoas',
                'Não leva as mãos à boca',
                'Não consegue manter a cabeça erguida ao elevar o tronco quando está de bruços'
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Essas características podem indicar um possível atraso de desenvolvimento para a idade </Text>
        </View>
    </ScrollView>
)

const FifthyPage = () => (
    <ScrollView>
        <View style={{ marginTop: 16 }}>
            <Text align="center" color="#7d46de"> COMO AJUDAR MEU BEBÊ A CRESCER? </Text>
        </View>

        <View style={{ marginTop: 28 }}>
            <Box>
                <Text align="center" color={colors.white}> 2 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <List data={[
                'Converse, leia e cante para seu bebê.',
                'Brinque de esconder e achar o rosto. Ajude-o a brincar de esconder e achar o rosto também.',
                'Coloque um espelho seguro para bebês no berço para que ele possa se ver.',
                'Olhe imagens com o bebê e converse sobre elas.',
                'Estimule seu bebê a levantar a cabeça colocando brinquedos no nível dos olhos, à frente dele.'
            ]} />
        </View>
    </ScrollView>
)

const SixthyPage = () => (
    <ScrollView>
        <View style={{ marginTop: 16 }}>
            <Text align="center" color="#7d46de"> COMO AJUDAR MEU BEBÊ A CRESCER? </Text>
        </View>

        <View style={{ marginTop: 28 }}>
            <Box>
                <Text align="center" color={colors.white}> 2 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <List data={[
                'Posicione um brinquedo ou chocalho acima da cabeça dele e encoraje-o a alcançá-lo.',
                'Cante ou converse com seu bebê enquanto está de pé.',
                'Abrace, converse e brinque com seu bebê na hora de amamentar, trocar de roupa e tomar banho.',
                'Ajude-o a aprender a se acalmar sozinho. Tudo bem chupar os dedos.',
                'Comece a ajudá-lo a entrar em uma rotina, como dormir mais à noite do que durante o dia, e a ter atividades regulares.'
            ]} />
        </View>
    </ScrollView>
)

const SeventhyPage = () => (
    <ScrollView>
        <View style={{ marginTop: 16 }}>
            <Text align="center" color="#7d46de"> COMO AJUDAR MEU BEBÊ A CRESCER? </Text>
        </View>

        <View style={{ marginTop: 28 }}>
            <Box>
                <Text align="center" color={colors.white}> 2 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <List data={[
                'Identificar do que ele gosta e não gosta pode ajudar você a se sentir mais confortável e confiante.',
                'Aja com entusiasmo e sorria quando ele fizer sons.',
                'Copie os sons do bebê de vez em quando, mas também use uma linguagem clara.',
                'Preste atenção aos diferentes choros para que você aprenda o que ele quer.',
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
            },
            {
                Component: FourthyPage,
                key: 3,
            },
            {
                Component: FifthyPage,
                key: 4,
            },
            {
                Component: SixthyPage,
                key: 5,
            },
            {
                Component: SeventhyPage,
                key: 6
            }
        ]} />
)

export default TwoMonths;