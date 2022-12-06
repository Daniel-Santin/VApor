import Slider from "../../components/Slider"
import Acompanhamento from "./Acompanhamento"
import * as Cuidado from './CuidadoEmCasa'
import RedesDeProfissionais from './RededeProfis'


const slides = [
    {
        Component: Cuidado.page1,
        key: 0,
    },
    {
        Component: Cuidado.page2,
        key: 1,
    },
    {
        Component: Cuidado.page3,
        key: 2,
    },
    {
        Component: Cuidado.page4,
        key: 3,
    },
]

export default function OQ(){
    return (
        <Slider title='O cuidado em casa'slides={slides} />
    )
}