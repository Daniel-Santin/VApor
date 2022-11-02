import { View } from "react-native"

import Lottie from 'lottie-react-native'
import animation from '../../assets/animations/logo.json'

const Logo = () => {
    return (
        <View>
            <Lottie
                source={animation}
                style={{height: 300, alignSelf: 'center'}}
                autoPlay
                loop={false}
            />
        </View>
    )
}

export default Logo;