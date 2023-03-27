import { ScrollView, View , Image, StyleSheet} from "react-native"
import List from "../../components/List"

import Text from "../../components/Text"

import image1 from "../../assets/02-removebg-preview.png"
import Slider from "../../components/Slider"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"
import { colors } from "../../themes/color"

const page1 = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop:20,display:'flex',flexDirection:'row',maxWidth:"55%"}}>
                <Image source={image1}/>
                <Text>
                    <Text size="sm">
                    {'\n'}      O leite materno é a melhor fonte de nutrição para os recém nascidos.{'\n'}      A Academia Americana de Pediatria recomenda a amamentação como a única fonte de nutrição para o seu bebê por cerca de 6 meses e pode ser continuada pelo tempo que a mãe e o bebê desejarem.
                    </Text>
                    <Text size="sm">
                    {'\n'}     Inicialmente, é melhor alimentar seu recém-nascido sempre que ele chorar porque está com fome. Com o passar do tempo. ele começará a desenvolver um cronograma bastante regular. À medida que você se familiarizar com os sinais e necessidades dele, poderá programar as mamadas de acordo com a rotina dele.
                    </Text>
                </Text>
             </View>
        </ScrollView>
    )
}
const page2 = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop:20,display:'flex',flexDirection:'row',maxWidth:"55%"}}>
                <Image source={image1}/>
                <Text size="sm">
                        Devido ao período de hospitalização muitos bebês prematuros podem necessitar de complemento com fórmulas. O pediatra é o profissional mais indicado para direcionar qual fórmula usar.
                    </Text>
            </View>
            
            <Text size="sm" style={styles.Text}> Você pode obter informações sobre alergias alimentares nos links:</Text>
            <View style={styles.button}>
            <Text size="sm" style={styles.buttonText}>https://www.alergiaaoleitedevaca.com.br/vida-social {'\n'}https://www.sbp.com.br/flip/consenso-alergia-alimentar-parte-01/ </Text>
            </View>
            <Text size="sm">
            {'\n'}      É importante que antes dos 6 meses de idade o bebê não seja alimentado com sólidos ou pastosos, esse tempo pode variar um pouco mais nos bebês prematuros. Lembre-se que os bebês precisam de maturidade neurológica, motora e do sistema gastrointestinal para a transição alimentar, por isso aguarde seu médico dar sinal verde para introdução alimentar. 
            </Text>
        </ScrollView>
    )
}


const OQueEPrematuridade = () => {
    return (
        <Slider title="Aleitamento"slides={[{
            Component: page1,
            Key: 0,
        },
        {
        Component: page2,
        Key: 1,
        },
        ]}></Slider>
    )
}

export default OQueEPrematuridade


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
        padding: 15,
        backgroundColor: colors.darkPink,
        borderRadius: 12,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize:11.6,
        color: colors.white,
    },
    Text:{
        fontSize:16,
        textAlign:"center"
    },
    logo: {
        width: 300,
        height: 300,
    }
})