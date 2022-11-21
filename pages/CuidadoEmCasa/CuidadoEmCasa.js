import { ScrollView, View } from "react-native"
import List from "../../components/List"
import Text from "../../components/Text"



const OQueEPrematuridade = () => {
    return (
        <ScrollView>
            <Text align="center"> O cuidado em casa </Text>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                    PO cuidado da família é essencial para o desenvolvimento humano, pois é em casa que a criança irá conhecer o mundo e descobrir novas sensações, o que ajuda no desenvolvimento motor, intelectual, emocional e social. É muito comum, após a permanência do bebê na UTI, os pais sentirem  medo e  receio de cuidar do seu filho em casa. Cuidados são importantes como evitar visitas, aglomerações, mas com o passar do tempo, papais e bebês vão se adaptando e  adquirindo confiança. Um dos nossos objetivos é auxiliar e facilitar esse processo. 

                </Text>
            </View>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                    Atualmente, os profissionais da saúde estimulam o protagonismo da família, sendo que a principal orientação é a criação de vínculos afetivos, já que a presença da família e de um bom ambiente potencializam o programa terapêutico. 

                </Text>
                
            </View>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                Quando o tratamento está alinhado entre os profissionais e a família, além dos benefícios já citados, os cuidadores em casa estarão capacitados para identificar possíveis problemas e garantir a ajuda que o bebê precisa. Dessa forma, as chances de sucesso são muito maiores. 

                </Text>
                
            </View>
        </ScrollView>
    )
}

export default OQueEPrematuridade