import * as WhatIsPrematurity from "./OQueEPrematuridade"
import GraficodeCresc from './GraficodeCresc'
import Complicações from "./Complicações"

import Slider from "../../components/Slider"

const slides = [
    {
        Component: WhatIsPrematurity.page1,
        key: 0,
    },
    {
        Component: WhatIsPrematurity.page2,
        key: 1,
    },
    {
        Component: WhatIsPrematurity.page3,
        key: 2,
    },
    {
        Component: WhatIsPrematurity.page4,
        key: 3,
    },
    {
        Component: WhatIsPrematurity.page5,
        key: 4,
    },
]

export default function OQ(){
    return (
        <Slider slides={slides} title="O que é prematuridade" />
    )
}