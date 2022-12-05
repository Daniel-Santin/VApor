import Slider from "../../components/Slider"
import Acompanhamento from "./Acompanhamento"
import CuidadoEmCasa from './CuidadoEmCasa'
import RedesDeProfissionais from './RededeProfis'
import CuidadeNaFamilia from "./CuidadeNaFamilia"

const slides = [
    {
        Component: CuidadoEmCasa,
        key: 0,
    },
    {
        Component: Acompanhamento,
        key: 1,
    },
    {
        Component: RedesDeProfissionais,
        key: 2,
    },
    {
        Component: CuidadeNaFamilia,
        key: 3,
    }
]

export default function OQ(){
    return (
        <Slider title='O cuidado em casa'slides={slides} />
    )
}