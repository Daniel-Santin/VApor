import { ScrollView, View , Image} from "react-native"
import List from "../../components/List"
import Text from "../../components/Text"
import image1 from "../../assets/follow-up.jpg"
import Slider from "../../components/Slider"

const FirstPage = () => (
    <ScrollView>
    <View>
        <Image style={{ marginRight: "auto", marginLeft: "auto" }} source={image1}/>
        <Text style={{ textAlign: "center" }} size="sm">
            Follow-up significa acompanhar, na área da medicina ele é feito através das consultas chamadas “de rotina”. Quando falamos do follow-up neonatal, temos como objetivo promover a supervisão da saúde em relação à nutrição, crescimento e desenvolvimento do bebê, considerando possíveis alterações e riscos e, quando necessário, promover a intervenção precoce e efetiva, além de garantir o suporte emocional para a família. 
        </Text>

        <Text style={{ textAlign: "center" }} size="sm">
        Para certificarmos que o bebê prematuro está recebendo toda a atenção necessária, o acompanhamento deve realizado por uma equipe multiprofissional composta por: pediatra ou médico neonatologista, fisioterapeuta, fonoaudiólogo, nutricionista, oftalmologista, pneumologista, psicólogo e assistente social. Nem sempre a criança irá precisar de consultas com todos esses profissionais, é preciso observar a necessidade de acordo com a situação. 
        </Text>

        <Text style={{ textAlign: "center" }} size="sm">
            Follow-up significa acompanhar, na área da medicina ele é feito através das consultas chamadas “de rotina”.
        </Text>
        <Text style={{ textAlign: "center" }} size="sm">
            Quando falamos do follow-up neonatal, temos como objetivo promover a supervisão da saúde em relação à nutrição, crescimento e desenvolvimento do bebê, considerando possíveis alterações e riscos e, quando necessário, promover a intervenção precoce e efetiva, além de garantir o suporte emocional para a família. 
        </Text>
     </View>
</ScrollView>
)

const FollowUp = () => {
    return (
        <Slider title="Follow-up" slides={[
            {
                Component: FirstPage,
                key: 0,
            },
        ]} />
    )
}

export default FollowUp