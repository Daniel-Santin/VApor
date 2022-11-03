import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { colors } from '../themes/color'
import Text from './Text';

function Picker({ style, label, onChange, items, placeholder, ...props }) {
    return (
        <>
        { label && <Text size='sm' align="left"> { label } </Text> }
        <View style={{ padding: 8, borderWidth: 2, borderColor: colors.darkPink, borderRadius: 4, backgroundColor: colors.white, ...style }}>
            <RNPickerSelect
                onValueChange={onChange}
                value={{ value: null, label: placeholder }}
                items={[
                    { value: null, label: placeholder },
                    ...items,
                ]}
                { ...props }
            />
        </View>
        </>
    )
}

export default Picker;