import { Image, ScrollView, View} from "react-native";

import Text from "../../components/Text";
import Slider from "../../components/Slider";
import { colors } from "../../themes/color";

import List from "../../components/List";

import babyImage from '../../assets/baby5.jpg'

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
                <Text align="center" color={colors.white}> 1 ANO </Text>
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
                <Text align="center" color={colors.white}> 1 ANO </Text>
            </Box>
        </View>
       
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Social e emocional: </Text>
            <List data={[
                'É tímido ou nervoso com estranhos ',
                'Chora quando a mãe ou pai vai embora',
                'Possui pessoas e objetos preferidos',
                'Demonstra medo em algumas situações',
                'Entrega um livro para você quando quer ouvir uma história',
                'Repete sons ou reações para conseguir atenção',
                'Levanta os braços e as pernas para ajudar na hora de se vestir',
                'Brinca de “esconder e achar o rosto” e “ciranda” '
            ]} />
        </View>

        <View style={{ marginTop: 20 }}>
            <Text size="sm"> Cognitivo (aprendizado, pensamento e solução de problemas): </Text>
            <List data={[
                'Explora as coisas de formas diferentes, como chacoalhando, batendo ou arremessando',
                'Acha objetos escondidos com facilidade para um a imagem ou objeto certo quando se diz o nome de tal objeto',
                'Imita gestos',
                'Começa a usar as coisas corretamente; por exemplo, bebe de um copo, escova o cabelo',
                'Bate dois objetos um contra o outro',
                'Coloca os objetos em uma caixa, tira os objetos de uma caixa',
                'Solta as coisas sem ajuda',
                'Cutuca com o dedo indicador',
                'Segue instruções simples como “pegue o brinquedo”'
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
                <Text align="center" color={colors.white}> 1 ANO </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Movimento e desenvolvimento físico: </Text>
            <List data={[
                'Senta-se sem ajuda',
                'Segura para se levantar, caminha segurando nos móveis ',
                'Pode dar alguns passos sem se apoiar',
                'Pode ficar de pé sozinho',
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
                <Text align="center" color={colors.white}> 1 ANO </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <Text size="sm"> Comunique ao pediatra ou outro profissional da saúde da sua comunidade que esteja familiarizado com crianças pequenas se seu bebê: </Text>
            <List data={[
                'Não engatinha',
                'Não consegue ficar de pé com apoio',
                'Não procura objetos que viu você esconder.',
                'Não fala palavras simples como “mama” ou “papa”',
                'Não aprende gestos como acenar ou balançar a cabeça',
                'Não aponta para objetos',
                'Perde habilidades que já teve',
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
                <Text align="center" color={colors.white}> 1 ANO </Text>
            </Box>
        </View>
        
        <View style={{ marginTop: 40 }}>
            <List data={[
                'Dê tempo para ele conhecer e se familiarizar com um novo cuidador. Traga um brinquedo favorito, animal de pelúcia ou cobertor para confortar seu filho.',
                'Em resposta a comportamentos indesejáveis, diga “não” com firmeza. Não grite, bata ou dê explicações longas. Uma repreensão de 30 segundos a 1 minuto pode ajudar a direcioná-lo.',
                'Dê a seu filho muitos abraços, beijos e o parabenize pelo bom comportamento.',
                'Passe mais tempo parabenizando um bom comportamento do que punindo um mau comportamento (4 vezes mais encorajamento por bons comportamentos do que redirecionamento por maus comportamentos).',
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
                <Text align="center" color={colors.white}> 1 ANO </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
            <List data={[
                'Converse sobre o que você está fazendo. Por exemplo, “mamãe está lavando suas mãos com uma toalha de rosto”.',
                'Leia com seu filho diariamente. Faça com que ele vire as páginas. Reveze na descrição das imagens .',
                'Fale mais sobre o que ele diz ou tenta dizer, ou para o que aponta. Se apontar para um caminhão e falar ”c” ou “caminhão”, diga, “sim, é um caminhão azul e grande”.',
                'Dê giz de cera e papel, e deixe-o desenhar livremente.',
                'Mostre a ele como desenhar linhas para cima e para baixo, e por toda a página. Elogie-o quando tenta copiar as linhas.',
                'Brinque com blocos, brinquedos de formas variadas e outros brinquedos que estimulem o uso das mãos.',
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
                <Text align="center" color={colors.white}> 1 ANO </Text>
            </Box>
        </View>

        <View style={{ marginTop: 40 }}>
        <List data={[
                'Esconda brinquedos pequenos e outros objetos e faça-o procurá-los.',
                'Peça que descreva partes do corpo ou coisas que vocês veem enquanto andam de carro.',
                'Cante canções com ações, como “A dona aranha” e “As rodas do ônibus”. Ajude-o a seguir as ações com você.',
                'Dê potes e panelas ou um instrumento musical pequeno, como um tambor ou pratos. Incentive-o a fazer barulho.',
                'Ofereça muitos lugares seguros para seu filho explorar. (Deixe a casa à prova de bebês. Guarde produtos de limpeza, de lavanderia, de jardinagem e automotivos fora do alcance da criança. Use um portão de segurança e tranque as portas que dão para o exterior.',
                'Dê a ele brinquedos de puxar, como caminhões ou um “carrinho infantil de empurrar”.',
            ]} />
        </View>
    </ScrollView>
)

const OneYear = () => (
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

export default OneYear;