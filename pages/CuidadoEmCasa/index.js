import Slider from "../../components/Slider"
import Acompanhamento from "./Acompanhamento"
import * as Cuidado from './CuidadoEmCasa'
import RedesDeProfissionais from './RededeProfis'


const slides = [
    {
        Component: Cuidado.page1,
        key: 0,
    },
]

export default function OQ(){
    return (
        <Slider title='O cuidado em casa'slides={slides} />
    )
}