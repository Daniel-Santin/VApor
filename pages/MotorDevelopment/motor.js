import { Pressable, ScrollView, View,StyleSheet } from "react-native"
import { color } from "react-native-reanimated"
import MomBaby from "../../components/Animations/MomBaby"
import List from "../../components/List"
import Text from "../../components/Text"
import { colors } from "../../themes/color"

import { Image } from "react-native-animatable"
import image1 from "../../assets/03-removebg-preview.png"

const listItem = [
    'O Cuidado Centrado na Família (CCF) é a compreensão de que a família é considerada um elemento fundamental no cuidado e o isolamento social é um fator de risco \n \n É muito importante que todos os membros da família participem dos planejamento das ações e da tomada de decisões a respeito das rotinas relacionadas ao bebê, dessa forma se houver outros filhos, eles devem ser incluídos nas atividades e rotinas do bebê, assim como os avós ou outros familiares. \n \n Encorajamos que, com base no conteúdo desse App, os pais se sintam motivados em olhar seu bebê na sua indivdualidade e realizem os estímulos considerando o contexto familiar inserindo os outros filhos e failiares criando um ambiente amoroso e de interação para toda a família.'
]


const page1 = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop:20,display:'flex',flexDirection:'row',maxWidth:"55%"}}>
                <Image source={image1}/>
                <Text>
                    <Text size="sm">
                        O cuidado da familia é essencial para o desenvolvimento, pois é em casa que a criança irá conhecer o mundo e descobrir novas sensações.
                        Isso ajuda no desenvolvimento motor, intelectual, emocional e social. 
                    </Text>
                </Text>
             </View>
        </ScrollView>
    )
}

export const page2 = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop:20,display:'flex',flexDirection:'row',maxWidth:"55%"}}>
                <Image source={image1}/>
                <Text>
                    <Text size="sm" >
                        É muito comum, após a permanência do bebê na UTI, os pais sentirem medo e receio de cuidar do seu filho em casa. Cuidados são importantes como evitar visitas, aglomerações, mas com o passar do tempo, papais e bebês vão se adaptando e adquirindo confiança. Um dos nosso objetivos é auxiliar e facilitar esse processo
                    </Text>
                </Text>
             </View>
        </ScrollView>
    )
}

export const page3 = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop:20,display:'flex',flexDirection:'row',maxWidth:"55%"}}>
                <Image source={image1}/>
                <Text>
                    <Text size="sm" >
                    {'\n'}    Atualmente, os profissionais da saúde estimulam o protagonismo da familia, sendo que a principal orientação é a criação de vínculos afetivos, já que a presença da família e de um bom ambiente potencializam o programa terapêutico.
                    </Text>
                    <Text size="sm">
                     {'\n'}   Quando o tratamento está alinhado entre os profissionais e a família, além dos benefícios já citados, os cuidadores em casa estarão capacitados para identificar possíveis problemas e garantir a ajuda que o bebê precisa.
                        Dessa forma, as chances de sucesso são muito maiores.
                    </Text>
                </Text>
             </View>
        </ScrollView>
    )
}

export const page4 = () => {
    return (
        <View style={{ marginTop: 20}}>
        <Text align='center'>
        Cuidado Centrado na Familia 
        </Text>
        <Text></Text>
        <List data={listItem}></List>
    </View>
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