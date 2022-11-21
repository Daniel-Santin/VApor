import { ScrollView, View } from "react-native"
import List from "../../components/List"
import Text from "../../components/Text"



const OQueEPrematuridade = () => {
    return (
        <ScrollView>
            <Text align="center"> Cuidado centrado na família  </Text>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                O Cuidado Centrado na Família (CCF) é a compreensão de que a família é considerada um elemento fundamental no cuidado e o isolamento social é um fator de risco. 
                </Text>
            </View>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                É muito importante que todos os membros da família participem do planejamento das ações e da tomada de decisões a respeito das rotinas relacionadas ao bebê, dessa forma se houver outros filhos, eles devem ser incluídos nas atividades e rotinas do bebê, assim como os avós ou outros familiares.
                </Text>
                
            </View>

            <View style={{ marginTop: 20}}>
                <Text size="sm">
                Encorajamos que, com base no conteúdo desse app, os pais se sintam motivados em olhar seu bebê na sua individualidade e realizem os estímulos considerando o contexto familiar, inserindo os outros filhos e familiares criando um ambiente amoroso e de interação para toda família.  
                </Text>
                
            </View>
        </ScrollView>
    )
}

export default OQueEPrematuridade