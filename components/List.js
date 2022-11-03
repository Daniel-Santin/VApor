import { View } from 'react-native';
import FlatList from 'react-native-unordered-list';
import Text from './Text';

function List({ data }) {
    return (
        <View>
            {
                data.map(item => {
                    return (
                        <FlatList>  
                            <Text size="sm">
                                {item}
                            </Text>
                        </FlatList>
                    )
                })
            }
        </View>
    )
}

export default List;
