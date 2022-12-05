import { Image, ScrollView, View} from "react-native";

import Text from "../../components/Text";
import Slider from "../../components/Slider";
import { colors } from "../../themes/color";

import List from "../../components/List";

import babyImage from '../../assets/baby7.jpg'

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
                <Text align="center" color={colors.white}> 2 ANOS </Text>
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
                <Text align="center" color={colors.white}> 2 ANOS </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Social e emocional: </Text>
            <List data={[
                'Imita os outros, especialmente adultos e crianças mais velhas',
                'Fica empolgado quando está com outras crianças',
                'Mostra cada vez mais independência',
                'Mostra um comportamento desafiador (faz o que lhe foi pedido para não fazer)',
                'Brinca principalmente ao lado de outras crianças, mas começa a incluir outras crianças, como em brincadeiras de pega-pega ',
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Cognitivo (aprendizado, pensamento e solução de problemas): </Text>
            <List data={[
                'Encontra objetos mesmo quando escondidos debaixo de duas ou três camadas',
                'Começa a separar formas e cores',
                'Completa frases e rimas em livros familiares',
                'Brinca de brincadeiras simples de faz de conta',
                'Constrói torres de 4 ou mais blocos',
                'Pode usar uma mão mais do que a outra',
                'Segue instruções de dois passos, como “Pegue seus sapatos e coloque-os no armário”.',
                'Nomeia itens em um livro de imagens, como gato, pássaro ou cachorro ',
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
                <Text align="center" color={colors.white}> 2 ANOS </Text>
            </Box>
        </View>
        



        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Movimento e desenvolvimento físico: </Text>
            <List data={[
                'Fica na ponta do pé',
                'Chuta uma bola',
                'Começa a correr',
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Linguagem e comunicação: </Text>
            <List data={[
                'Aponta para objetos ou imagens quando ouve seus nomes',
                'Conhece os nomes de pessoas familiares e partes do corpo',
                'Formula frases com 2 a 4 palavras',
                'Segue instruções simples',
                'Repete palavras que ouviu em uma conversa',
                'Aponta para coisas em um livro',
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
                <Text align="center" color={colors.white}> 2 ANOS </Text>
            </Box>
        </View>


        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Comunique ao pediatra ou outro profissional da saúde da sua comunidade que esteja familiarizado com crianças pequenas se seu bebê: </Text>
            <List data={[
                'Não usa frases de 2 palavras (por exemplo, “beber leite”)',
                'Não sabe o que fazer com coisas comuns, como escova, telefone, garfo, colher',
                'Não imita ações e palavras',
                'Não segue instruções simples',
                'Não anda com firmeza',
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
                <Text align="center" color={colors.white}> 2 ANOS </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <List data={[
                ' Incentive-o a lhe ajudar com tarefas simples em casa, como varrer e fazer o jantar. Elogie-o por ser um bom ajudante.',
                'Nesta idade, as crianças ainda brincam próximas (mas não juntas) e não sabem compartilhar muito bem. Em espaços conjuntos, dê às crianças muitos brinquedos para brincar. Observe-as de perto e intervenha em caso de briga ou discussão.',
                'Dê atenção e elogie-o quando seguir as instruções.',
                'Limite a atenção perante um comportamento desafiador. Passe muito mais tempo elogiando comportamentos bons do que punindo os maus comportamentos.',
                'Ensine-o a identificar e falar as partes do corpo, animais e outras coisas comuns.',
                'Não o corrija quando ele disser palavras incorretamente. Em vez disso, diga-as corretamente. Por exemplo, ”Isto é uma bola”.'
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
                <Text align="center" color={colors.white}> 2 ANOS </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <List data={[
                'Incentive-o a dizer uma palavra em vez de apontar para o objeto. Se ele não consegue dizer a palavra inteira (“leite”), diga o primeiro som (“l”) para ajudar. Com o tempo, você pode incentivá-lo a dizer a frase inteira - “Eu quero leite”.',
                'Esconda os brinquedos dele pelo quarto e deixe que ele os encontre.',
                'Ajude-o a brincar de quebra-cabeças com formas, cores ou animais da fazenda. Fale o nome de cada peça quando ele a colocar no lugar',
                'Incentive-o a brincar com blocos. Reveze com ele na construção e derrubada de torres.',
                'Faça projetos de arte usando giz-de-cera, tinta e papel. Descreva o que ele faz e pendure na parede ou na geladeira.',
                'Peça a ele para lhe ajudar a abrir portas e gavetas e a virar as páginas de um livro ou revista.',
                'Quando estiver andando bem, peça que carregue pequenas coisas para você.',
                'Chute uma bola de um para o outro com seu filho.',
                'Se ele ficar bom nisso, incentive-o a correr e chutar.',
                'Leve-o ao parque para correr e escalar em equipamentos ou caminhar em trilhas naturais.',
                'Observe-o de perto.',
                
            ]} />
        </View>
    </ScrollView>
)

const TwoYears = () => (
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

export default TwoYears;