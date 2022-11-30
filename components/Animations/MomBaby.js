import { View } from "react-native"

import Lottie from 'lottie-react-native'
import animation from '../../assets/animations/momWBaby.json'

const MomBaby = () => {
    return (
        <View>
            <Lottie
                source={animation}
                style={{height: 180, alignSelf: 'center'}}
                autoPlay
                loop={true}
            />
        </View>
    )
}

export default MomBaby;