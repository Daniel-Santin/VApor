import { ScrollView, View } from "react-native"
import List from "../../components/List"
import Text from "../../components/Text"

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

const OQueEPrematuridade = () => {
    return (
        <ScrollView>
            <Text align="center"> O que é a prematuridade? </Text>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                    Prematuro é todo recém-nascido com menos de 37 semanas completas de gestação. A OMS considera a prematuridade como um problema mundial, principalmente pela relação com a morbimortalidade neonatal. Além disso, o Brasil é colocado como o 10º país com maior taxa mundial de nascimentos prematuros, sendo responsável por 60% deles.
                </Text>
            </View>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                    Os recém-nascidos (RN) podem ser classificados conforme a idade ao nascimento, assim:
                </Text>
                <List data={listItem}></List>
                
            </View>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                Os bebês prematuros não são todos iguais, já que quanto menor a idade gestacional, maior é a necessidade de suporte e cuidados. Portanto, existem nomenclaturas para classificar esses bebês:
                </Text>
                
            </View>
                <List data={listItem2}></List>
        </ScrollView>
    )
}

export default OQueEPrematuridade