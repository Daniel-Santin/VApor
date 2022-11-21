import OQueEPrematuridade from "./OQueEPrematuridade"
import GraficodeCresc from './GraficodeCresc'
import Complicações from "./Complicações"

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
    {
        Component: Complicações,
        key: 2,
    }
]

export default function OQ(){
    return (
        <Slider slides={slides} />
    )
}