import { Text, StyleSheet, } from "react-native";
import { colors } from "../themes/color";

export default function ({ children, size = 'md', align, type, color = colors.black, style: style2 }) {
    const style = {
        color,
        ...styles.text,
        ...styles[size],
        ...styles[align],
        ...styles[type],
    }

    return (
        <Text style={{...style, ...style2}}>
            { children }
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        lineHeight: 28,
        textAlign: 'justify',
    },

    sm: {
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'justify',
    },
    
    lg: {
        fontSize: 24,
        textAlign: 'justify',
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
