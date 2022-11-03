import { Text, StyleSheet, } from "react-native";
import { colors } from "../themes/color";

export default function ({ children, size = 'md', align }) {
    let style = {
        ...styles.text,
    }

    if(size === 'lg') {
        style = {
            ...style,
            ...styles.lg,
        }
    } else if(size === 'sm') {
        style = {
            ...style,
            ...styles.sm,
        }
    }

    if(align === 'center') {
        style = {
            ...style,
            ...styles.center
        }
    } else if(align === 'left') {
        style = {
            ...style,
            ...styles.left
        }
    }


    return (
        <Text style={style }>
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
        fontSize: 40,
    },

    center: {
        textAlign: 'center',
    },

    left: {
        textAlign: 'left',
    }
})
