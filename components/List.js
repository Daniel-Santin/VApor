import { View } from 'react-native';
import FlatList from 'react-native-unordered-list';
import Text from './Text';

function List({ data }) {
    return (
        <View>
            {
                data.map((item,index) => {
                    return (
                        <FlatList key={index}>  
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
