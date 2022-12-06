import Slider from "../../components/Slider"
import * as motor from './motor'



const slides = [
    {
        Component: motor.page1,
        key: 0,
    },
    {
        Component: motor.page2,
        key: 1,
    },
    {
        Component: motor.page3,
        key: 2,
    },
    {
        Component: motor.page4,
        key: 3,
    },
]

export default function OQ(){
    return (
        <Slider title='O Desenvolvimento Motor'slides={slides} />
    )
}