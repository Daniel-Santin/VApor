import { View } from 'react-native';
import { colors } from '../themes/color';

import Text from './Text';

function List({ data }) {
    const colors2 = ['#7d46de', colors.darkPink, colors.pink, '#7d46de', colors.darkPink, colors.pink, '#7d46de', colors.darkPink, colors.pink,'#7d46de', colors.darkPink, colors.pink,]
    return (
        <View>
            {
                data.map((item,index) => {
                    return (
                            <View key={index}>
                                <Text size='sm' style={{ color: "#1e1e1e" }}> -{ item } </Text>
                            </View>
                    )
                })
            }
        </View>
    )
}

export default List;
