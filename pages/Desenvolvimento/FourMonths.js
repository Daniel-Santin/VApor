import { Image, ScrollView, View} from "react-native";

import Text from "../../components/Text";
import Slider from "../../components/Slider";
import { colors } from "../../themes/color";

import List from "../../components/List";

import babyImage from '../../assets/baby2.jpg'

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
                <Text align="center" color={colors.white}> 4 MESES </Text>
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
                <Text align="center" color={colors.white}> 4 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Social e emocional: </Text>
            <List data={[
                'Sorri de forma espontânea, especialmente para as pessoas',
                'Gosta de brincar com as pessoas e pode chorar se a brincadeira acaba',
                'Imita alguns movimentos e expressões faciais, como sorrir ou franzir a testa',
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Cognitivo (aprendizado, pensamento e solução de problemas): </Text>
            <List data={[
                'Mostra a você se está feliz ou triste',
                'Responde ao afeto ',
                'Tenta pegar um brinquedo com uma mão',
                'Usa as mãos e olhos juntos, como ao ver um brinquedo e tentar pegá-lo',
                'Segue as coisas em movimento com os olhos de um lado para o outro',
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
                <Text align="center" color={colors.white}> 4 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Movimento e desenvolvimento físico: </Text>
            <List data={[
                'Mantém a cabeça erguida firmemente, sem apoio ',
                'Empurra as pernas quando os pés estão encostados em uma superfície dura',
                'Consegue rolar de barriga para cima quando está de bruços',
                'Consegue segurar um brinquedo e chacoalhá-lo e balançar brinquedos pendurados',
                'Leva as mãos à boca ',
                'Quando está de bruços, se apoia sobre os cotovelos',
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Linguagem e comunicação: </Text>
            <List data={[
                'Começa a balbuciar',
                'Balbucia com expressões e imita os sons que ouve',
                'Chora de maneira diferente para mostrar fome, dor ou cansaço',
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
                <Text align="center" color={colors.white}> 4 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Comunique ao pediatra ou outro profissional da saúde da sua comunidade que esteja familiarizado com crianças pequenas se seu bebê: </Text>
            <List data={[
                'Não observa o movimento das coisas.',
                'Não sorri para as pessoas',
                'Não consegue erguer a cabeça firmemente',
                'Não faz barulhos ou emite sons',
                'Não traz coisas à boca',
                'Não empurra as pernas quando os pés estão encostados em uma superfície dura',
                'Tem dificuldade em movimentar um ou ambos os olhos em todas as direções'
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
                <Text align="center" color={colors.white}> 4 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <List data={[
                'Segure-o e converse com ele; sorrindo e de forma alegre.',
                'Estabeleça rotinas regulares para o sono e a alimentação',
                'Presta atenção ao que gosta e não gosta; você saberá como atender melhor às necessidades dele e o que fazer para deixá-lo feliz.',
                'Imite os sons do bebê.',
                'Aja com entusiasmo e sorria quando ele fizer sons.',
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
                <Text align="center" color={colors.white}> 4 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <List data={[
                'Faça uso de períodos calmos de interação quando você pode ler ou cantar para ele.',
                'Ofereça brinquedos adequados à idade dele, como chocalhos e imagens coloridas.',
                'Faça brincadeiras, como esconder e achar o rosto.',
                'Ofereça oportunidades seguras para seu bebê alcançar brinquedos e explorar o ambiente ao redor.',
                'Posicione brinquedos ao redor dele de maneira que possa alcançá-los ou chutá-los com os pés.',
                'Coloque brinquedos ou chocalhos na mão do bebê e ajude-o a segurá-los.'
            ]} />
        </View>
    </ScrollView>
)

const FourMonths = () => (
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
        ]} />
)

export default FourMonths;