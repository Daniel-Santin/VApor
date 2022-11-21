import { ScrollView, View } from "react-native"
import List from "../../components/List"
import Text from "../../components/Text"



const OQueEPrematuridade = () => {
    return (
        <ScrollView>
            <Text align="center"> Acompanhamento </Text>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                Follow-up significa acompanhar, na área da medicina ele é feito através das consultas chamadas “de rotina”. Quando falamos do follow-up neonatal, temos como objetivo promover a supervisão da saúde em relação à nutrição, crescimento e desenvolvimento do bebê, considerando possíveis alterações e riscos e, quando necessário, promover a intervenção precoce e efetiva, além de garantir o suporte emocional para a família.
                </Text>
            </View>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                Para certificarmos que o bebê prematuro está recebendo toda a atenção necessária, o acompanhamento deve realizado por uma equipe multiprofissional composta por: pediatra ou médico neonatologista, fisioterapeuta, fonoaudiólogo, nutricionista, oftalmologista, pneumologista, psicólogo e assistente social. Nem sempre a criança irá precisar de consultas com todos esses profissionais, é preciso observar a necessidade de acordo com a situação.
                </Text>
            </View>
        </ScrollView>
    )
}

export default OQueEPrematuridade