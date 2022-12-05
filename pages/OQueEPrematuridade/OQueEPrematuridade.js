import { Pressable, ScrollView, View,StyleSheet } from "react-native"
import { color } from "react-native-reanimated"
import MomBaby from "../../components/Animations/MomBaby"
import List from "../../components/List"
import Text from "../../components/Text"
import { colors } from "../../themes/color"
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-animatable"
import image1 from "../../assets/01-removebg-preview.png"

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
            <View style={{ marginTop: 20, flex: 1 }}>
                <MomBaby></MomBaby>
                <View style={{ maxWidth: '100%'}}>
                    <Text size="sm">
                        Prematuro é todo recém-nascido com menos de 37 semanas completas de gestação. A OMS considera a prematuridade como um problema mundial, principalmente pela relação com a morbimortalidade neonatal. Além disso, o Brasil é colocado como o 10º país com maior taxa mundial de nascimentos prematuros, sendo responsável por 60% deles.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export const page2 = () => {
    return (
        <View style={{ marginTop: 20}}>
                <Text size="sm">
                    Os recém-nascidos (RN) podem ser classificados conforme a idade ao nascimento, assim:
                </Text>
                <Text></Text>
                <List data={listItem}></List>
                
        </View>
    )
}

export const page3 = () => {
    return (
        <View style={{ marginTop: 20}}>
        <Text size="sm">
        Os bebês prematuros não são todos iguais, já que quanto menor a idade gestacional, maior é a necessidade de suporte e cuidados. Portanto, existem nomenclaturas para classificar esses bebês:
        </Text>
        <Text></Text>
        <List data={listItem2}></List>
    </View>
    )
}

export const page4 = () => {
    return (
        <View style={{ marginTop: 20}}>
        <Text size="sm">
        Os recém-nascidos também são classificados quanto ao peso ao nascimento, assim como a idade getacional, quanto menor o peso mais frágil o bebê é.
        </Text>
        <Text></Text>
        <List data={listItem3}></List>
    </View>
    )
}

export const page5 = () => {
    const navigation = useNavigation();
    return (
    <ScrollView >
        <Text></Text>
        <View >
            <Text size="sm">
            Depois que o bebê vai para casa, o ganho de peso deve ser acompanhado pelo médico pediatra.
            </Text>
            <Text></Text>
            <Text size="sm">
             Aqui disponibilizamos o gráfico 'Peso X Altura' ajustado para acompanhamento do seu bebê. 
            </Text>
            <Text></Text>
            <Pressable              
                  style={styles.button}
                  onPress={() => navigation.navigate("Gráfico de crescimento")}
            >
            <Text color="#fff" > VER GRÁFICO </Text>
            </Pressable>
            <Text></Text>
            <Text size="sm">
              A boa notícia é que os prematuros recuperam super bem o peso na primeira infância, tornando-se crianças saudáveis e felizes!
            </Text>
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