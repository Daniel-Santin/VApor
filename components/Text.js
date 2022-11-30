import { Text, StyleSheet, } from "react-native";
import { colors } from "../themes/color";

export default function ({ children, size = 'md', align, type, color = colors.black }) {
    const style = {
        color,
        ...styles.text,
        ...styles[size],
        ...styles[align],
        ...styles[type],
    }

    return (
        <Text style={style}>
            { children }
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },

    sm: {
        fontSize: 14,
    },

    lg: {
        fontSize: 24,
    },
    
    center: {
        textAlign: 'center',
    },
    
    title: {
        fontSize: 24,
        color: '#e1e1e1',
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
