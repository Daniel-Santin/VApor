import { Text, StyleSheet, } from "react-native";
import { colors } from "../themes/color";

export default function ({ children, size = 'md', align }) {
    const style = {
        ...styles.text,
        ...styles[size],
        ...styles[align]
    }

    return (
        <Text style={style}>
            { children }
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.black,
        fontSize: 30,
    },

    sm: {
        fontSize: 14,
    },

    lg: {
        color: '#e1e1e1',
    },
    
    center: {
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: colors.darkPink,
        color: colors.white,
        padding: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    left: {
        textAlign: 'left',
    }
})
