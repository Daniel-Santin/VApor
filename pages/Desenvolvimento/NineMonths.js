import { Image, ScrollView, View} from "react-native";

import Text from "../../components/Text";
import Slider from "../../components/Slider";
import { colors } from "../../themes/color";

import List from "../../components/List";

import babyImage from '../../assets/baby4.jpg'

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
                <Text align="center" color={colors.white}> 9 MESES </Text>
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
                <Text align="center" color={colors.white}> 9 MESES </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Social e emocional: </Text>
            <List data={[
                'Pode ter medo de estranhos o Pode ser grudado nos adultos familiares ',
                'Possui brinquedos favoritos',
            ]} />
        </View>
        
        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Cognitivo (aprendizado, pensamento e solução de problemas): </Text>
            <List data={[
                'Observa o caminho de alguma coisa quando ela cai ',
                'Procura objetos que vê você esconder ',
                'Brinca de esconder e achar o rosto',
                'Começa a passar as coisas de uma mão para a outra',
                'Coloca objetos na boca o Movimenta objetos facilmente de uma mão para a outra',
                'Pega coisas'
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
                <Text align="center" color={colors.white}> 9 MESES </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Movimento e desenvolvimento físico: </Text>
            <List data={[
                'Fica de pé apoiado em algo ',
                'Consegue se sentar ',
                'Senta sem apoio ',
                'Puxa para levantar ',
                'Engatinha'
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Linguagem e comunicação: </Text>
            <List data={[
                'Compreende “não” ',
                'Emite muitos sons diferentes como “mamamama” e ”bababababa” ',
                'Imita sons e gestos dos outros ',
                'Usa os dedos para apontar as coisas ',
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
                <Text align="center" color={colors.white}> 9 MESES </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Comunique ao pediatra ou outro profissional da saúde da sua comunidade que esteja familiarizado com crianças pequenas se seu bebê: </Text>
            <List data={[
                'Não suporta o peso nas pernas com apoio',
                'Não senta com ajuda',
                'Não balbucia (“mama”, “baba”, “dada”)',
                'Não joga nenhum jogo envolvendo dar e receber',
                'Não responde ao próprio nome',
                'Não parece reconhecer pessoas familiares',
                'Não olha para onde você aponta',
                'Não transfere os brinquedos de uma mão para outra',
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
                <Text align="center" color={colors.white}> 9 MESES </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <List data={[
                'Preste atenção à maneira como ele reage a situações e pessoas novas ; procure continuar fazendo coisas que deixem seu bebê feliz e confortável.',
                'Conforme ele se movimenta mais, fique por perto para que ele saiba que você está próximo.',
                'Continue com as rotinas: elas são especialmente importantes agora.',
                'Faça brincadeiras com “minha vez, sua vez”.',
                'Diga o que você acha que ele está sentindo. Por exemplo, diga “você está triste, vamos ver se conseguimos alegrá-lo”.',
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
                <Text align="center" color={colors.white}> 9 MESES </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <List data={[
                'Descreva o que está vendo; por exemplo, ”bola vermelha e redonda”.',
                'Fale sobre o que ele quer quando ele aponta algo.',
                'Imite os sons e palavras.',
                'Diga o que espera dele. Por exemplo, em vez de dizer “não fique de pé”, diga “está na hora de sentar”',
                'Ensine causa e efeito rolando bolas para frente e para trás, empurrando carrinhos e caminhões, e colocando blocos dentro e fora de uma caixa.',
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
                <Text align="center" color={colors.white}> 9 MESES </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <List data={[
                'Brinque de esconder e achar o rosto, e esconde-esconde.',
                'Converse e leia para seu bebê.',
                'Forneça bastante espaço para ele se movimentar e explorar em uma área segura.',
                'Posicione-o próximo a objetos que ele possa segurar para se levantar com segurança.'
            ]} />
        </View>
    </ScrollView>
)

const NineMonths = () => (
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

export default NineMonths;