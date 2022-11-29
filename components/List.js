import { Text, View } from 'react-native';
import { colors } from '../themes/color';

function List({ data }) {
    const colors2 = ['#7d46de', colors.darkPink, colors.pink]
    return (
        <View>
            {
                data.map((item, index) => {
                    return (
                            <View key={index} style={{ paddingLeft: 4, padding: 20, backgroundColor: colors2[index], marginBottom: 2 }}>
                                <Text style={{ color: "#fff" }}> { item } </Text>
                            </View>
                    )
                })
            }
        </View>
    )
}

export default List;
