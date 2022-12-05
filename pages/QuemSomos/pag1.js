import { ScrollView, View } from "react-native"
import MomBaby from "../../components/Animations/MomBaby"
import Text from "../../components/Text"
import { Image } from "react-native-animatable"
import image1 from "../../assets/02-removebg-preview.png"
import image2 from "../../assets/03-removebg-preview.png"
import image3 from "../../assets/04-removebg-preview.png"
const page1 = () => {
    return (
        <ScrollView>
            <View style={{ marginTop: 20, flex: 1 }}>
                <View style={{ display:'flex',flexDirection:'row' , maxWidth: '50%'}}>
                    <Image source={image1} style={{ marginBottom: '10%',}}></Image>
                    <Text size="sm" >
                        Somos um grupo de professores e pesquisadores apaixonados pelos bebês prematuros.
                    </Text>
                </View>
                <View style={{ display:'flex',flexDirection:'row' , maxWidth: '50%'}}>
                <Text size="sm" >
                        Desejamos aliar o conhecimento em saúde e a tecnologia para facilitar a vida dos pais de prematuros por meio da informação.
                    </Text>
                    <Image source={image3} style={{marginLeft:'20%', marginBottom: '20%'}}></Image>

                </View>
                <View style={{ display:'flex', flexDirection:'row' , maxWidth: '50%'}}>
                    <Image source={image2} style={{marginLeft:'10%',marginRight:'20%', marginBottom: '10%'}}></Image>
                    <Text size="sm" >
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