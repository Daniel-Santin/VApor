import { Pressable, ScrollView, View,StyleSheet } from "react-native"
import { color } from "react-native-reanimated"
import MomBaby from "../../components/Animations/MomBaby"
import List from "../../components/List"
import Text from "../../components/Text"
import { colors } from "../../themes/color"
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-animatable"
import image1 from "../../assets/05-removebg-preview.png"
import image2 from "../../assets/vacimg.png"
import ComplicationsDisturb, { TextComplications } from "../../components/Complications"

const listItem = [
    'RN pós-termo: 42 semanas ou mais;',
    'RN termo: entre 38 e 41 semanas 6/7;',
    'RN pré-termo (RNPT): 37 semanas ou menos',
]

const listItem2 = [
    'Os RNPT (Recém Nascido Pré Termo) são classificados segundo os critérios: (OMS)',
    'Pré-termo extremo (<28 semanas)',
    'Muito pré-termo (28 a <32 semanas)',
    'Pré-termo moderado a tardio (32 a <37 semanas)',
]
const listItem3 = [
    'Peso menor que 2500g (2,5kg): \n Baixo peso',
    'Peso menor que 1500g (1,5kg): \n Muito baixo peso',
    'Peso menor que 1000g (1kg): \n Extremo baixo peso',

]

const page1 = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop:20,display:'flex',flexDirection:'row',maxWidth:"55%"}}>
                <Image source={image1}/>
                <Text>
                    <Text size="sm">
                    {'\n'}      Os prematuros nascem sem ter o sistema imune completamente desenvolvido e em um período antes de “pegar” os anticorpos (os guardas do nosso corpo) da mãe, o que acontece a partir da 30ª semana. Assim, esses bebês estão mais suscetíveis a infecções.                    </Text>
                    <Text size="sm">
                    {'\n'}     Por isso, eles possuem um calendário de vacinação, e até mesmo algumas vacinas, um pouco diferente dos bebês nascidos à termo. 
                    </Text>
                </Text>
             </View>
        </ScrollView>
    )
}

export const page2 = () => {
    return (
        <ScrollView>
        <View style={{ paddingTop:20,display:'flex',flexDirection:'column',maxWidth:"100%", alignItems:'center'}}>
            <Text>
                <Text size="sm" align={'center'}>
                A tabela mostra as vacinas que devem ser tomadas, mas lembre-se: converse com seu médico! Ele é a melhor pessoa para dizer se já está na hora e quais vacinas serão tomadas.                 </Text>
            </Text>
            <Image style={{marginLeft:15,width:320,height:420}} source={image2}/>
         </View>
    </ScrollView>    )
}

export const page3 = () => {
    return (
        <ScrollView>
            <ComplicationsDisturb title="BSG ID">
                <TextComplications>
                    
                    Essa vacina protege contra a tuberculose e é dada em uma dose única ao nascer, a menos que o bebê tenha menos que 2.000g, nesse caso deve-se esperar que ele atinja o peso necessário              
                
                </TextComplications>
            </ComplicationsDisturb>
        </ScrollView>
    )
}

export const page4 = () => {
    return (
        <ScrollView>
            <ComplicationsDisturb title="ANTICORPO MONOVIRAL ESPECÍFICO CONTRA VSR (PALIVIZUMABE)">
                <TextComplications>
                    
                Essa vacina protege contra o vírus VSR, principal causador da bronqueolite. As recomendações são de doses mensais durante o período de maior circulação do vírus, sendo que prematuros com até 28 semanas de gestação devem tomar no primeiro ano de vida, prematuros até 32 semanas de gestação, nos 6 primeiros meses, e bebês com doenças pulmonares ou cardiopatias congênitas, até o segundo ano de vida                
                </TextComplications>
            </ComplicationsDisturb>
        </ScrollView>
    )
}

export const page5 = () => {
    return (
        <ScrollView>
            <ComplicationsDisturb title="HEPATITE B">
                <TextComplications>
                    
                A Hepatite B é uma doença causada por um vírus que atinge o fígado e deve ser feita em 4 doses, com a primeira dose nas primeiras 12 horas de vida                </TextComplications>
            </ComplicationsDisturb>
        </ScrollView>
    )
}

export const page6 = () => {
    return (
        <ScrollView>
            <ComplicationsDisturb title="ROTAVÍRUS">
                <TextComplications>
                    
                O rotavírus causa diarreias graves, vômitos, febre, tosse e coriza. A vacina é aplicada de acordo com a idade cronológica, iniciando aos 2 meses, e por via oral         
                </TextComplications>
            </ComplicationsDisturb>
        </ScrollView>
    )
}

export const page7 = () => {
    return (
        <ScrollView>
            <ComplicationsDisturb title="TRÍPLICE BACTERIANA/PENTA E HEXA ACELULAR – DTPa-VIP/Hib">
                <TextComplications>
                    
                Essa vacina protege contra difteria, tétano e coqueluche, e também é dada de acordo com a idade cronológica, iniciando aos 2 meses. Para os prematuros, é comum que seja indicada a vacina acelular, já que essas apresentam menos riscos de uma “reação”

                </TextComplications>
            </ComplicationsDisturb>            
        </ScrollView>
    )
}

export const page8 = () => {
    return (
        <ScrollView>
            <ComplicationsDisturb title="Haemophilus influenzae tipo B">
                <TextComplications>
                    
                Uma das piores doenças causadas pela Haemophilus influenzae tipo B é a meningite. A vacina é iniciada de acordo com a idade cronológica, aos 2 meses, e é reforçada aos 15 meses.

                </TextComplications>
            </ComplicationsDisturb>            
        </ScrollView>
    )
}

export const page9 = () => {
    return (
        <ScrollView>
            <ComplicationsDisturb title="POLIOMIELITE INATIVADA (VIP)">
                <TextComplications>
                    
                A poliomielite, ou pólio, é uma doença viral que pode causar paralisia. A vacina é dada de acordo com a idade cronológica, iniciando aos 2 meses 
                
                </TextComplications>
            </ComplicationsDisturb>            
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