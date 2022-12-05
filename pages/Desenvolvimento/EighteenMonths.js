import { Image, ScrollView, View} from "react-native";

import Text from "../../components/Text";
import Slider from "../../components/Slider";
import { colors } from "../../themes/color";

import List from "../../components/List";

import babyImage from '../../assets/baby6.jpg'

const Box = ({ children }) => (
    <View style={{ backgroundColor: colors.purple, padding: 4, maxWidth: 205, borderRadius: 8, alignSelf: 'center' }}>
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
                <Text align="center" color={colors.white}> 18 MESES </Text>
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
                <Text align="center" color={colors.white}> 18 MESES </Text>
            </Box>
        </View>


        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Social e emocional: </Text>
            <List data={[
                'Gosta de dar coisas a os outros como forma de brincadeira',
                'Pode ter ataques de birra',
                'Pode ter medo de estranhos',
                'Mostra afeto para as pessoas com quem está familiarizado',
                'Brinca de faz de conta simples, como alimentar uma boneca',
                'Pode grudar nos cuidadores em situações novas',
                'Aponta para mostrar às outras pessoas algo interessante',
                'Explora sozinho, mas com um dos pais por perto'
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Cognitivo (aprendizado, pensamento e solução de problemas): </Text>
            <List data={[
                'Sabe para que servem coisas comuns, por exemplo, telefone, escova, colher',
                'Aponta para conseguir a atenção de outras pessoas',
                'Mostra interesse em uma boneca ou animal de pelúcia fingindo alimentá-lo',
                'Aponta para uma parte do corpo',
                'Faz rabiscos sozinho',
                'Consegue seguir comandos verbais de 1 passo sem gestos, por exemplo, senta quando você diz “sente-se”',
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
                <Text align="center" color={colors.white}> 18 MESES </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Movimento e desenvolvimento físico: </Text>
            <List data={[
                'Anda sozinho',
                'Pode conseguir subir degraus e correr',
                'Puxa brinquedos enquanto anda',
                'Ajuda a se despir',
                'Bebe de um copo',
                'Come com uma colher',
            ]} />
        </View>


        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Linguagem e comunicação: </Text>
            <List data={[
                'Responde a pedidos simples verbais ',
                'Usa gestos simples, como balançar a cabeça [simbolizando] “não” ou acenar “tchau” ',
                'Emite sons com alterações no tom (soa mais parecido com a fala)',
                'Diz “mama” e “papa” e exclamações',
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
                <Text align="center" color={colors.white}> 18 MESES </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Comunique ao pediatra ou outro profissional da saúde da sua comunidade que esteja familiarizado com crianças pequenas se seu bebê: </Text>
            <List data={[
                'Não aponta para mostrar coisas para outras pessoas',
                'Não consegue andar',
                'Não sabe para que servem objetos comuns',
                'Não imita os outros',
                'Não adquire novas palavras',
                'Não tem um vocabulário de pelo menos 6 palavras',
                'Não percebe ou liga se um cuidador sai ou retorna',
                'Perde habilidades que já teve'
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
                <Text align="center" color={colors.white}> 18 MESES </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <List data={[
                'Ofereça um ambiente seguro e acolhedor. É importante ser consistente e previsível.',
                'Elogie comportamentos bons mais do que pune os maus comportamentos (use apenas repreensões bem rápidas).',
                'Descreva suas emoções. Por exemplo, diga, “Você fica feliz quando lemos este livro”.',
                'Incentive a brincadeira de faz de conta.',
                'Incentive a empatia. Por exemplo, quando ele vir uma criança que está triste, incentive-o a abraçar ou fazer um carinho na outra criança.',
                'Leia livros e fale sobre as imagens usando palavras simples.'
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
                <Text align="center" color={colors.white}> 18 MESES </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <List data={[
                'Imite as palavras de seu filho.',
                'Use palavras que descrevam sentimentos e emoções.',
                'Use frases simples e claras.',
                'Faça perguntas simples.',
                'Esconda objetos sob cobertores e travesseiros e encoraje-o a procurá-los.',
                'Brinque com blocos, brinquedos de formas variadas e outros brinquedos que estimulem o uso das mãos.',
                'Fale os nomes de imagens em livros e das partes do corpo.',
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
                <Text align="center" color={colors.white}> 18 MESES </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
        <List data={[
                'Ofereça brinquedos que incentivem a brincadeira de faz de conta; por exemplo, bonecas, telefones de brincar.',
                'Ofereça áreas seguras para seu filho andar e se movimentar.',
                'Ofereça brinquedos que ele possa empurrar ou puxar com segurança.',
                'Ofereça bolas para ele chutar, rolar ou arremessar.',
                'Incentive-o a beber de seu copo e usar uma colher, não importa a bagunça.',
                'Faça bolhas e deixe-o estourá-las',
            ]} />
        </View>
    </ScrollView>
)

const EighteenMonths = () => (
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

export default EighteenMonths;