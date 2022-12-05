import { ScrollView, View, Title } from "react-native"
import List from "../../components/List"
import Text from "../../components/Text"

import Slider from "../../components/Slider"

const FirstPage = () => (
    <ScrollView>
        <Text> Follow-up significa acompanhar, na área da medicina ele é feito através das consultas chamadas “de rotina”. Quando falamos do follow-up neonatal, temos como objetivo promover a supervisão da saúde em relação à nutrição, crescimento e desenvolvimento do bebê, considerando possíveis alterações e riscos e, quando necessário, promover a intervenção precoce e efetiva, além de garantir o suporte emocional para a família. </Text>
    </ScrollView>
)

const SecondPage = () => (
    <ScrollView>
        <Text> Para certificarmos que o bebê prematuro está recebendo toda a atenção necessária, o acompanhamento deve realizado por uma equipe multiprofissional composta por: pediatra ou médico neonatologista, fisioterapeuta, fonoaudiólogo, nutricionista, oftalmologista, pneumologista, psicólogo e assistente social. Nem sempre a criança irá precisar de consultas com todos esses profissionais, é preciso observar a necessidade de acordo com a situação. </Text>
    </ScrollView>
)

const CuidadeNaFamilia = () => {
    return (
        <Slider title="Cuidado centrado na Familia" slides={[
            {
                Component: FirstPage,
                key: 0,
            },
            {
                Component: SecondPage,
                key: 1,
            }
        ]} />
    )
}

export default CuidadeNaFamilia

// const CuidadeNaFamilia = () => {
//     return (

//         <ScrollView >
 
//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 O Cuidado Centrado na Família (CCF) é a compreensão de que a família é considerada um elemento fundamental no cuidado e o isolamento social é um fator de risco. 
//                 </Text>
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 É muito importante que todos os membros da família participem do planejamento das ações e da tomada de decisões a respeito das rotinas relacionadas ao bebê, dessa forma se houver outros filhos, eles devem ser incluídos nas atividades e rotinas do bebê, assim como os avós ou outros familiares.
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 Encorajamos que, com base no conteúdo desse app, os pais se sintam motivados em olhar seu bebê na sua individualidade e realizem os estímulos considerando o contexto familiar, inserindo os outros filhos e familiares criando um ambiente amoroso e de interação para toda família.  
//                 </Text>
                
//             </View>
//         </ScrollView>
//     )
// }

// export default CuidadeNaFamilia