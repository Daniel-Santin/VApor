import { ScrollView } from "react-native";
import Slider from "../../components/Slider";
import Text from "../../components/Text";
import { colors } from "../../themes/color";

const Root = () => (
    <ScrollView>
        <Text align="center" color={colors.pink}> SELECIONE QUE IDADE QUER PESQUISAR: </Text>
    </ScrollView>
)

const MarcosDosDesenvolvimentos = () => (
    <Slider title="OS MARCOS DO DESENVOLVIMENTO" slides={[
        {
            Component: Root,
            key: 0,
        }
    ]} />
)

export default MarcosDosDesenvolvimentos;
