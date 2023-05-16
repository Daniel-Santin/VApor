import { ScrollView, View } from "react-native"
import MomBaby from "../../components/Animations/MomBaby"
import Text from "../../components/Text"
import { Image } from "react-native-animatable"
import image2 from "../../assets/Imagem1.jpg"

const page1 = () => {
    return (
        <ScrollView>
            <View style={{ marginTop: 20, flex: 1 }}>
            <View>
                <Text style={{ textAlign: 'center' }} size="sm" >
                    Somos um grupo de professores e pesquisadores apaixonados pelos bebês prematuros.
                </Text>
            </View>
            <View style={{ marginTop: 20, flex: 1 }}>
            <Text style={{ textAlign: 'center' }} size="sm" >
                    Desejamos aliar o conhecimento em saúde e a tecnologia para facilitar a vida dos pais de prematuros por meio da informação.
                </Text>
            </View>
            <View>
                <Image source={image2} style={{ marginLeft:'auto',marginRight:'auto'}}></Image>
                <Text style={{ textAlign: 'center' }} size="sm" >
                        Esperamos que esse app possa ajudá-lo no seu dia a dia, tornando a rotina com seu bebê cada vez mais encantadora.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export {
    page1,
}