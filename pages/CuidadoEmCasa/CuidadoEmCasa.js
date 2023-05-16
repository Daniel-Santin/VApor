import { ScrollView, View,StyleSheet, Image } from "react-native"
import Text from "../../components/Text"
import image1 from "../../assets/home-care.jpg"

const page1 = () => {
    return (
        <ScrollView>
            <View>
                <Image style={{ marginRight: "auto", marginLeft: "auto" }} source={image1}/>

                    <Text style={{ textAlign:"center" }} size="sm">
                    {'\n'} O cuidado da familia é essencial para o desenvolvimento, pois é em casa que a criança irá conhecer o mundo e descobrir novas sensações.
                        Isso ajuda no desenvolvimento motor, intelectual, emocional e social. 
                    </Text>

                    <Text style={{ textAlign:"center" }} size="sm">
                    {'\n'} É muito comum, após a permanência do bebê na UTI, os pais sentirem medo e receio de cuidar do seu filho em casa. Cuidados são importantes como evitar visitas, aglomerações, mas com o passar do tempo, papais e bebês vão se adaptando e adquirindo confiança.
                    Um dos nosso objetivos é auxiliar e facilitar esse processo
                    </Text>

                    <Text style={{ textAlign:"center" }} size="sm">
                    {'\n'} Atualmente, os profissionais da saúde estimulam o protagonismo da familia, sendo que a principal orientação é a criação de vínculos afetivos, já que a presença da família e de um bom ambiente potencializam o programa terapêutico.
                     Quando o tratamento está alinhado entre os profissionais e a família, além dos benefícios já citados, os cuidadores em casa estarão capacitados para identificar possíveis problemas e garantir a ajuda que o bebê precisa.
                        Dessa forma, as chances de sucesso são muito maiores. 
                    </Text>

             </View>
        </ScrollView>
    )
}

export {
    page1,
}