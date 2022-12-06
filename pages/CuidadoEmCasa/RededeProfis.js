import { ScrollView, View,Image } from "react-native"
import Complications, { TextComplications } from "../../components/Complications"
import List from "../../components/List"
import Slider from "../../components/Slider"
import Text from "../../components/Text"
import image1 from "../../assets/08-removebg-preview.png"
const listItem = [
    'FISIOTERAPIA: Nas consultas com o fisioterapeuta, será avaliado se o tônus muscular e o desenvolvimento estão de acordo com a normalidade. A intervenção fisioterapêutica precoce é essencial para bebês prematuros para evitar problemas motores e cognitivos futuros. ',
    'FONOAUDIOLOGIA, o fonoaudiólogo irá acompanhar o desenvolvimento da audição e linguagem até os 3 anos de idade, com o tratamento baseado na Triagem Auditiva Neonatal e no teste de Peate, além de verificar a avaliação da coordenação da sucção e deglutição. O retorno nesse profissional é indicado entre os 7 e os 12 anos de vida pois pode ocorrer um aparecimento tardio de perda auditiva. ',
    'NUTRICIONISTA A nutrição do prematuro é quase sempre um risco. Ela deve ser avaliada com frequência de acordo com os cálculos padrões adequados e com cada criança, dependendo da situação o bebê pode precisar de uma dieta específica para tratar ou prevenir doenças.',
    'OFTALMOLOGISTA Para os bebês que ficaram muito tempo no oxigênio ou que tiveram algum problema de visão já diagnosticado durante a internação, haverá o acompanhamento com oftalmologista. As consultas com pneumologista irão avaliar a função pulmonar e se baseiam também em como foi a evolução no hospital e se a criança continua a receber oxigênio em casa.',
    'SERVIÇO SOCIAL O serviço social irá identificar e ajudar as famílias com problemas sociais a fim de melhorar o desenvolvimento da criança. E, por fim, a psicologia irá firmar os vínculos familiares e promover o apoio emocional, principalmente para a mãe, além de analisar o comportamento da criança',
]

const FirstPage = () => (
    <ScrollView>
    <View style={{ paddingTop:20,display:'flex',flexDirection:'row',maxWidth:"55%"}}>
        <Image source={image1}/>
        <Text>
            <Text size="sm">
            {'\n'}    Cada profissão tem seu papel para cumprir no follow-up, aqui iremos falar brevemente sobre cada um. 
            </Text>
            <Text size="sm">
            {'\n'}    É importante ressaltar que cada bebê é único, então é preciso avaliar a necessidade de acompanhamento de cada um.
            </Text> 
        </Text>
     </View>
</ScrollView>


)

const SecondPage = () => (
    <ScrollView>
        <Complications title="Pediatra">
            <TextComplications>
                Irá avaliar a saúde da criança como um todo e é importante manter o acompanhamento regular, sendo a primeira consulta feita de 7 a 10 dias depois da alta. O indicado é manter consultas mensais até os 6 meses de idade corrigida, bimestrais dos 6 aos 12 meses de idade corrigida, trimestrais dos 13 aos 24 meses, semestrais dos 2 aos 4 anos e anuais dos 4 anos até a puberdade.
            </TextComplications>
        </Complications>
    </ScrollView>
)

const ThirdyPage = () => (
    <ScrollView>
        <Complications title="FISIOTERAPEUTA">
            <TextComplications>
            Nas consultas com o fisioterapeuta, será avaliado se o tônus muscular e o desenvolvimento estão de acordo com a normalidade. A intervenção fisioterapêutica precoce é essencial para bebês prematuros para evitar problemas motores e cognitivos futuros.
            </TextComplications>
        </Complications>
    </ScrollView>
)

const FourthyPage = () => (
    <ScrollView>
        <Complications title="FONOAUDIÓLOGO">
            <TextComplications>
            Irá acompanhar o desenvolvimento da audição e linguagem até os 3 anos de idade, com o tratamento baseado na Triagem Auditiva Neonatal e no teste de Peate, além de verificar a avaliação da coordenação da sucção e deglutição. O retorno nesse profissional é indicado entre os 7 e os 12 anos de vida, pois pode ocorrer um aparecimento tardio de perda auditiva
            </TextComplications>
        </Complications>
    </ScrollView>
)

const FifthyPage = () => (
    <ScrollView>
        <Complications title="NUTRICIONISTA">
            <TextComplications>
            A nutrição do prematuro é quase sempre um risco. Ela deve ser avaliada com frequência de acordo com os cálculos padrões adequados e com cada criança, dependendo da situação o bebê pode precisar de uma dieta específica para tratar ou prevenir doenças.
            </TextComplications>
        </Complications>
    </ScrollView>
)

const SixthyPage = () => (
    <ScrollView>
        <Complications title="OFTAMOLOGISTA">
            <TextComplications>
            Para os bebês que ficaram muito tempo no oxigênio ou que tiveram algum problema de visão já diagnosticado durante a internação, haverá o acompanhamento com oftalmologista. As consultas com pneumologista irão avaliar a função pulmonar e se baseiam também em como foi a evolução no hospital e se a criança continua a receber oxigênio em casa.
            </TextComplications>
        </Complications>
    </ScrollView>
)

const SeventhyPage = () => (
    <ScrollView>
        <Complications title="SERVIÇO SOCIAL">
            <TextComplications>
                Irá identificar e ajudar as famílias com problemas sociais a fim de melhorar o desenvolvimento da criança. E, por fim, a psicologia irá firmar os vínculos familiares e promover o apoio emocional, principalmente para a mãe, além de analisar o comportamento da criança
            </TextComplications>
        </Complications>
    </ScrollView>

)


const Pros = () => {
    return (

            <Slider title="Redes de Profissionais" slides={[
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
            ]}/>

    )
}

export default Pros;
