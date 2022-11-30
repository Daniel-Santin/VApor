import { ScrollView, View } from "react-native";
import Text from "./Text";
import { colors } from "../themes/color";

export const TextComplications = ({ children }) => {
 return (
    <Text size="sm" color='#7d46de'>
                { children }
    </Text>
 )
}

const Complications = ({ title, children }) => (
    <View style={{ marginTop: 8}}>
        <Text color="#7d46de" align="center"> { title } </Text>
        <ScrollView style={{ backgroundColor: colors.pink, padding: 8, borderWidth: 1, borderColor: "#7d46de" }}>
            { children }
        </ScrollView>
    </View>
)

export default Complications;
