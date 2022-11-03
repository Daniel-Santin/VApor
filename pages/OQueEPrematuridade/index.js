import OQueEPrematuridade from "./OQueEPrematuridade"

import Slider from "../../components/Slider"

const slides = [
    {
        Component: OQueEPrematuridade,
        key: 0,
    }
]

export default function OQ(){
    return (
        <Slider slides={slides} />
    )
}