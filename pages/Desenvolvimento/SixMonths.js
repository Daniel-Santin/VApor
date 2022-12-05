import { Image, ScrollView, View} from "react-native";

import Text from "../../components/Text";
import Slider from "../../components/Slider";
import { colors } from "../../themes/color";

import List from "../../components/List";

import babyImage from '../../assets/baby3.jpg'

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
                <Text align="center" color={colors.white}> 6 MESES </Text>
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
                <Text align="center" color={colors.white}> 6 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Social e emocional: </Text>
            <List data={[
                'Reconhece rostos familiares e começar a perceber se alguém é estranho',
                'Gosta de brincar com outros, especialmente os pais',
                'Responde a emoções alheias e normalmente parece feliz',
                'Gosta de se ver no espelho'
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Cognitivo (aprendizado, pensamento e solução de problemas): </Text>
            <List data={[
                'Observa as coisas ao seu redor',
                'Leva objetos à boca',
                'Mostra curiosidade sobre as coisas e procura alcançar objetos que estão fora do alcance',
                'Começa a passar as coisas de uma mão para a outra',
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
                <Text align="center" color={colors.white}> 6 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Movimento e desenvolvimento físico: </Text>
            <List data={[
                'Rola em ambas as direções (de bruços para costas e vice-versa)',
                'Começa a sentar-se sem apoio',
                'Quando está de pé, apoia o peso sobre as pernas e pode tentar saltar',
                'Balança para frente e para trás, às vezes engatinhando para trás antes de seguir para frente',
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Linguagem e comunicação: </Text>
            <List data={[
                'Responde aos sons emitindo sons',
                'Une as vogais ao balbuciar (“ah”, “eh”, “oh”) e gosta de revezar com os pais enquanto emite sons',
                'Responde ao próprio nome',
                'Emite sons para mostrar alegria e descontentamento',
                'Começa a falar sons consoantes (articula com “m”, “b”)',
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
                <Text align="center" color={colors.white}> 6 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Comunique ao pediatra ou outro profissional da saúde da sua comunidade que esteja familiarizado com crianças pequenas se seu bebê: </Text>
            <List data={[
                'Não tenta pegar objetos que estão ao alcance',
                'Não mostra afeto por seus cuidadores',
                'Não responde aos sons ao seu redor',
                'Apresenta dificuldade em levar objetos à boca',
                'Não emite sons vogais (“ah”, “eh”, “oh”)',
                'Não rola em nenhuma direção',
                'Não ri ou emite sons agudos',
                'Parece bem duro, com músculos contraídos',
                'Parece bem mole, como uma boneca de pano',
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
                <Text align="center" color={colors.white}> 6 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <List data={[
                'Brinque com seu bebê no chão diariamente.',
                'Aprenda a compreender as emoções de seu bebê. Se estiver feliz, continue o que está fazendo. Se estiver aborrecido, pare e acalme-o.',
                'Mostre ao bebê como se acalmar sozinho quando estiver aborrecido. Ele pode chupar os dedos para se acalmar.',
                'Brinque de forma “recíproca” - quando ele sorri, você sorri; quando ele faz sons, você o imita.',
                'Repita os sons do bebê e diga palavras simples com estes sons. Por exemplo, se disser ”bah”, diga “banana” ou “bola”.',
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
                <Text align="center" color={colors.white}> 6 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <List data={[
                'Leia livros para seu filho diariamente. Parabenize-o quando balbuciar e “ler” também.',
                'Quando ele olhar para alguma coisa, aponte para o objeto e fale a respeito.',
                'Se ele deixar um brinquedo cair no chão, pegue-o e devolva. Este jogo o ensinará causa e efeito.',
                'Leia livros com imagens coloridas para seu bebê.',
                'Aponte para coisas novas e fale os nomes delas.',
                'Mostre imagens vivas de uma revista e fale os nomes delas.'
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
                <Text align="center" color={colors.white}> 6 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <List data={[
                'Segure-o enquanto está sentado ou apoie-o com travesseiros. Deixe-o observar ao seu redor e dê brinquedos para ele olhar enquanto se equilibra.',
                'Posicione o bebê de bruços ou de barriga para cima e coloque brinquedos levemente fora do alcance.',
                'Estimule-o a rolar para alcançar os brinquedos.',
            ]} />
        </View>
    </ScrollView>
)

const SixMonths = () => (
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
                key: 6,
            }
        ]} />
)

export default SixMonths;