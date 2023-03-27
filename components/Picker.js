import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { colors } from '../themes/color'
import Text from './Text';

function Picker({ style, label, onChange, items, placeholder, value, ...props }) {
    return (
        <View style={{ width: '90%', justifyContent: 'center',  ...style  }}>
        { label && <Text size='sm' align="left"> { label } </Text> }
        <View style={{ padding: 8, borderWidth: 2, borderColor: colors.darkPink, borderRadius: 4, backgroundColor: colors.white }}>
            <RNPickerSelect
                onValueChange={onChange}
                value={value}
                items={[
                    ...items,
                ]}
                placeholder={items[0]}
                { ...props }
            />
        </View>
        </View>
    )
}
export default Picker;
