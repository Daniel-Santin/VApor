import OQueEPrematuridade from "./OQueEPrematuridade"
import GraficodeCresc from './GraficodeCresc'

import Slider from "../../components/Slider"

const slides = [
    {
        Component: OQueEPrematuridade,
        key: 0,
    },
    {
        Component: GraficodeCresc,
        key: 1,
    },
]

export default function OQ(){
    return (
        <Slider slides={slides} />
    )
}