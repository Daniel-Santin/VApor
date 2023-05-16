import { Pressable, ScrollView, View,StyleSheet } from "react-native"
import { color } from "react-native-reanimated"
import MomBaby from "../../components/Animations/MomBaby"
import List from "../../components/List"
import Text from "../../components/Text"
import { colors } from "../../themes/color"

import { Image } from "react-native-animatable"
import image1 from "../../assets/03-removebg-preview.png"
import image2 from "../../assets/oportwindow.jpg"
const listItem = [
    'O Cuidado Centrado na Família (CCF) é a compreensão de que a família é considerada um elemento fundamental no cuidado e o isolamento social é um fator de risco \n \n É muito importante que todos os membros da família participem dos planejamento das ações e da tomada de decisões a respeito das rotinas relacionadas ao bebê, dessa forma se houver outros filhos, eles devem ser incluídos nas atividades e rotinas do bebê, assim como os avós ou outros familiares. \n \n Encorajamos que, com base no conteúdo desse App, os pais se sintam motivados em olhar seu bebê na sua indivdualidade e realizem os estímulos considerando o contexto familiar inserindo os outros filhos e failiares criando um ambiente amoroso e de interação para toda a família.'
]


const page1 = () => {
    return (
        <ScrollView>
            <View>
                <Image align={"center"} style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 20 }} source={image1}/>
                <Text>
                    <Text align={"center"} size="sm">
                    Desenvolvimento motor é a maneira como seu filho brinca, aprende, fala, age e se movimenta. {'\n'}Os marcos do desenvolvimento são as coisas que a maioria das crianças consegue fazer em uma determinada idade.
                    </Text>
                </Text>
             </View>
             <Text align={"center"} size="sm">
             Ele é influenciado por fatores biológicos e ambientais, os quais podem se comportar como de risco ou de proteção. Os fatores de risco são aqueles que aumentam a probabilidade do bebê apresentar um desfecho negativo no desenvolvimento. E os fatores de proteção são aqueles que minimizam os impactos  das experiências adversas no processo do desenvolvimento motor.
             </Text>
        </ScrollView>
    )
}

export const page2 = () => {
    return (
        <ScrollView paddingTop={20}>
        <Text color={colors.darkPink} align={'center'}>A PREMATURIDADE E O DESENVOLVIMENTO MOTOR</Text>
        <View style={{ paddingTop:5,display:'flex',maxWidth:"100%",marginLeft:20}}>
            <Text align={'justify'}>
                <Text align={"center"} size="sm">
                A criança prematura não passou pelo desenvolvimento intrauterino completo. Assim, ao nascer, apresenta imaturidade funcional e estrutural de diversos tecidos e órgãos. Isso aumenta o risco de ocorrerem desvios ou atrasos no desenvolvimento, incluindo o neuropsicomotor. Quanto menor o tempo de gestação, maior é o risco.
                </Text>
                <Text align={"center"} size="sm">
                Outros fatores podem se associar a prematuridade como o peso ao nascer, o tempo de internação, o quão invasivos foram os procedimentos e quais as intercorrências no período de internação.                
                </Text>
            </Text>
         </View>
    </ScrollView>
    )
}

export const page3 = () => {
    return (
        <ScrollView paddingTop={20}>
        <Text color={colors.darkPink} align={'center'}>A PREMATURIDADE E O DESENVOLVIMENTO MOTOR</Text>
        <View style={{ paddingTop:5,display:'flex',maxWidth:"100%",marginLeft:20}}>

                <Text  size="sm">
                Nos primeiros 12 meses, é possível analisar a evolução motora do bebê prematuro por meio da avaliação do tônus, postura, mobilidade e força muscular. Algumas alterações ou atrasos podem ser transitórios e tendem a desaparecer  até o  segundo ano de vida. Por outro lado, os pais não devem esperar para fazer uma avaliação, a  detecção precoce de atrasos é importante, pois permite colocar a criança dentro de um programa de estimulação em um período conhecido como ‘janela de oportunidade’, que ocorre nos dois primeiros anos de vida.     
                 </Text>

         </View>
    </ScrollView>
    )
}

export const page4 = () => {
    return (
        <ScrollView paddingTop={20}>
        <Text color={colors.darkPink} align={'center'}> JANELAS DE OPORTUNIDADE</Text>
        <View style={{ paddingTop:25,display:'flex',flexDirection:'column',maxWidth:"100%",marginLeft:20}}>
            <Image style={{width:300,height:200,alignSelf:'center'}} source={image2}/>
            <Text align={'center'}>
                Janelas de oportunidade são períodos em que o aprendizado de determinadas habilidades  acontece de maneira mais fácil. Isso acontece porque quando a plasticidade cerebral, que é a capacidade de aprendizagem e de adaptação, são muito intensas nos primeiros 2 anos de vida.
            </Text>
         </View>
    </ScrollView>
    )
}

export const page5 = () => {
    return (
        <ScrollView paddingTop={20}>
        <Text color={colors.darkPink} align={'center'}> JANELAS DE OPORTUNIDADE</Text>
        <View style={{ paddingTop:5,display:'flex',flexDirection:'column',maxWidth:"100%",marginLeft:20}}>

                <Text align={"center"} size="sm">
                    Os profissionais de saúde orientam que a criança prematura ou a criança que pode apresentar algum tipo de risco no desenvolvimento seja exposta a estímulos e experiências, principalmente nessa fase, para potencializar o aprendizado e recuperar um possível atraso.                 
                </Text>
                <Text align={"center"} size="sm">
                A intervenção precoce de qualquer atraso no desenvolvimento infantil é muito importante, justamente para aproveitarmos essa janela de oportunidade! Uma criança, que iniciou o tratamento adequado precocemente, tem maiores chances de alcançar melhores resultados no futuro.                </Text>
         </View>
    </ScrollView>
    )
}
export {
    page1,
}

const styles = StyleSheet.create({
    container:{ 
        display: 'flex',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        minHeight: '60%'
    },
    title:{
        fontWeight:"bold",
        color:'#f8f8f8',
        fontSize: 54
    },
    button:{
        padding: 10,
        backgroundColor: colors.darkPink,
        borderRadius: 100,
        width: '50%',
        fontSize: 5,
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10
    },
    buttonText: {
        color: colors.white,
    },
    logo: {
        width: 300,
        height: 300,
    }
})