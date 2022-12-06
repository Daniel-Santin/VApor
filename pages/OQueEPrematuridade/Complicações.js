import { ScrollView, View,Image,StyleSheet } from "react-native"
import List from "../../components/List"
import Slider from "../../components/Slider"
import Text from "../../components/Text"
import ComplicationsDisturb, { TextComplications } from "../../components/Complications"
import image1 from "../../assets/07-removebg-preview.png"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"
import { colors } from "../../themes/color"
const FirstPage = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop:20,display:'flex',flexDirection:'row',maxWidth:"55%"}}>
                <Image source={image1}/>
                <Text>
                    <Text size="sm">
                    O risco de complicações neonatais é inversamente proporcional à idade gestacional (IG) ao nascimento, isso significa que quanto menor a idade gestacional, maior o risco de complicações. A cada semana que o feto permanece dentro do útero, ocorre um aprimoramento do seu desenvolvimento e redução da frequência e da gravidade de intercorrências e complicações neonatais.  
                    </Text>
                    <Text size="sm">
                    {"\n"}Nosso objetivo não é assustar os papais e mamães, mas auxiliá-los nos pontos mais importantes para ficarem de olho em casa! 
                    </Text>
                    <Text size="sm">
                    {"\n"}As complicações mais comuns para prematuros são: broncodisplasia, bronqueolite, persistência do canal arterial, convulsões, refluxo gastroesofágico e retinopatia da prematuridade 
                    </Text>
                </Text>
             </View>
        </ScrollView>
    )
}

const SecondPage = () => {
    return (
        <ScrollView>
            <ComplicationsDisturb title="BRONCODSIPLASIA">
                <TextComplications>
                         A broncodisplasia é uma lesão pulmonar que está presente em todo neonato que necessitou de concentrações de oxigênio acima de 21% por mais de 28 dias. Isso acontece porque quando o nosso corpo utiliza o oxigênio, ele gera um radical livre que lesiona os tecidos e gera inflamação. Essa inflamação afeta o pulmão e as vias aéreas, assim as funções respiratórias ficam alteradas. 
                </TextComplications>

                <TextComplications>
	                O tratamento é feito através da suplementação nutricional, diuréticos, broncodilatadores e do desmame consciente da oxigenoterapia.
                </TextComplications>
            </ComplicationsDisturb>
        </ScrollView>

    )
}

const ThirdPage = () => {
    return (
        <ScrollView>
            <ComplicationsDisturb title="BRONQUEOLITE">
                <TextComplications>
                    A bronqueolite é uma infecção viral e sazonal, isso significa que em determinada época do ano ela é mais comum. Essa doença gera edema das vias respiratórias e acomete principalmente crianças de até 2 anos. Ela promove a secreção de um muco “semelhante a um chicletes” que dificulta a passagem do ar. 
                </TextComplications>

                <TextComplications>
                    Os principais sinais e sintomas para ficar de olho são: tosse coqueluchoide (seca e contínua), dificuldade para respirar, excesso de muco. É necessário o diagnóstico e acompanhamento médico para evitar que o quadro se agrave, nesses casos a bronqueolite pode se associar com infecções bacterianas. 
                </TextComplications>
            </ComplicationsDisturb>
        </ScrollView>
    )
}

const FourthyPage = () => (
    <ScrollView>
            <ComplicationsDisturb title="PERSISTÊNCIA DO CANAL ARTERIAL">
                <TextComplications>
                    Sabemos que o bebê não é apenas um adulto em miniatura, existem algumas diferenças no seu corpo, uma delas é o canal arterial. O canal arterial é uma comunicação que o feto tem entre a aorta e o ramo esquerdo da artéria pulmonar, quando o bebê nasce esse canal se fecha. Porém, é possível que, por conta de diversos fatores, ele não feche, e isso pode causar alterações hemodinâmicas e pulmonares.
                </TextComplications>

                <TextComplications>
                    É importante o acompanhamento com um pediatra para que ele monitore o fechamento do canal por meio de exames não invasivos. 
                </TextComplications>

                <TextComplications>
                O tratamento é feito com medicações que irão incentivar o fechamento deste canal, caso não obtenha resultado, o médico pode indicar a cirurgia
                </TextComplications>
            </ComplicationsDisturb>
        </ScrollView>
)

const FifthyPage = () => (
    <ScrollView>
            <ComplicationsDisturb title="CONVULSÕES">
                <TextComplications>
                Convulsões são perturbações na atividade elétrica do cérebro que geram disfunção cerebral temporária. Em crianças pequenas as convulsões têm características como tremores e movimentos súbitos, enquanto bebês recém-nascidos os sinais são menos evidentes, como um estalar de lábios, mastigação involuntária ou a perda do tônus muscular temporária. Os médicos irão tratar as convulsões tentando achar a sua causa, mas se elas estiverem muito frequentes podem ser receitados anticonvulsionantes. 
                </TextComplications>

                <TextComplications>
                É importante, caso você perceba que seu filho está tendo uma convulsão, não colocar nada em sua boca ou tentar segurar a língua. Mantenha a criança em um local em que ela não se machuque, longe de escadas ou móveis, vire-a de lado e procure ajuda especializada ou ligue 192 (Serviço de Atendimento Móvel de Urgência - SAMU) 
                </TextComplications>
            </ComplicationsDisturb>
        </ScrollView>
)

const SixthyPage = () => (
    <ScrollView>
            <ComplicationsDisturb title="REFLUXO GASTROESOFÁGICO">
                <TextComplications>
                O refluxo gastroesofágico ocorre quando o conteúdo do estômago “volta”, ou seja, ele sobe novamente pelo esôfago. O problema é que esse conteúdo é ácido e quando ele reflui causa problemas para a alimentação e respiração, e pode danificar o esôfago. Os bebês que têm refluxo podem apresentar dores torácicas e abdominais, azia e vômitos. Mas os sinais de refluxo no bebê podem ser mais discretos, como: chiado no peito constante, infecções de ouvido de repetição, tosse seca persistente, sono agitado, entre outros.   
                </TextComplications>

                <TextComplications>
                O diagnóstico é feito por meio de exames não invasivos associado à história clínica. É importante relatar ao pediatra do seu filho se notar algum desses sintomas.
                </TextComplications>

                <TextComplications>
                O tratamento é feito com mudanças na dieta e medicamentos. Geralmente os bebês superam o refluxo até os 18 meses. 
                </TextComplications>
            </ComplicationsDisturb>
        </ScrollView>
)

const SeventhyPage = () => (
    <ScrollView>
            <ComplicationsDisturb title="RETINOPATIA DA PREMATURIDADE">
                <TextComplications >
                A retinopatia da prematuridade é uma lesão na retina que é causada por causa dos radicais livres, que o corpo gera quando utiliza o oxigênio, que pode alterar o crescimento dos vasos sanguíneos na região. Portanto, essa doença pode aparecer nos bebês que precisam ficar muito tempo com o suporte de oxigênio, isso inclui principalmente os prematuros. 
                </TextComplications>

                <TextComplications>
                O diagnóstico é feito através de um exame ocular e é importante que a intervenção seja feita logo, assim é possível evitar mais danos. Uma retinopatia não tratada pode causar perda visual. Mas fique tranquilo! O tratamento existe e é feito com fotocoagulação,  uma cirurgia a laser que tem  boa resolução.
                </TextComplications>
            </ComplicationsDisturb>
        </ScrollView>
)
// const EightyPagr = () => (
//     <ScrollView>
//             <ComplicationsDisturb>
//             <View style={{ paddingTop:20,display:'flex',flexDirection:'row',maxWidth:"50%"}}>
//                 <Image source={image1}/>
//                 <Text>
//                     <Text color="#fff" size="sm">
//                     Para mais informações, consulte o link do Ministério da Saúde que traz um resumo da prematuridade voltado para familias  
//                     </Text>
//                 </Text>
//             </View>
//                 <Pressable>           
//                   onPress={() => navigation.navigate("Gráfico de crescimento")}
//                   <Text> Mais informações</Text>
//                 </Pressable> 

//             </ComplicationsDisturb>
//         </ScrollView>
// )
const Complications = () => {
    return (
        <Slider title="Complicações Comuns" slides={[
            {
                Component: FirstPage,
                key: 0,
            },
            {
                Component: SecondPage,
                key: 1,
            },
            {
                Component: ThirdPage,
                key: 2,
            },
            {
                Component: FourthyPage,
                key: 3,
            },
            {
                Component: FifthyPage,
                key: 4,
            },
            {

                Component: SixthyPage,
                key: 5,
            },
            {
                Component: SeventhyPage,
                key: 6,
            },
            // {
            //     Component: EightyPagr,
            //     key: 7,
            // }
        ]} />
    )
}

export default Complications;

// const Complicacoes = () => {
//     return (
//         <ScrollView>
//             <Text align="center"> Complicações comuns  </Text>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 O risco de complicações neonatais é inversamente proporcional à idade gestacional (IG) ao nascimento, isso significa que quanto menor a idade gestacional, maior o risco de complicações. A cada semana que o feto permanece dentro do útero, ocorre um aprimoramento do seu desenvolvimento e redução da frequência e da gravidade de intercorrências e complicações neonatais.  
//                 </Text>
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 Nosso objetivo não é assustar os papais e mamães, mas auxiliá-los nos pontos mais importantes para ficarem de olho em casa! 
//                 </Text>                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 As complicações mais comuns para prematuros são: broncodisplasia, bronqueolite, persistência do canal arterial, convulsões, refluxo gastroesofágico e retinopatia da prematuridade 
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="md" align="center">
//                     Broncodisplasia
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 A broncodisplasia é uma lesão pulmonar que está presente em todo neonato que necessitou de concentrações de oxigênio acima de 21% por mais de 28 dias. Isso acontece porque quando o nosso corpo utiliza o oxigênio, ele gera um radical livre que lesiona os tecidos e gera inflamação. Essa inflamação afeta o pulmão e as vias aéreas, assim as funções respiratórias ficam alteradas. 
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 O tratamento é feito através da suplementação nutricional, diuréticos, broncodilatadores e do desmame consciente da oxigenoterapia.
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="md" align="center">
//                 Bronqueolite
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 A bronqueolite é uma infecção viral e sazonal, isso significa que em determinada época do ano ela é mais comum. Essa doença gera edema das vias respiratórias e acomete principalmente crianças de até 2 anos. Ela promove a secreção de um muco “semelhante a um chicletes” que dificulta a passagem do ar. 
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 O tratamento é feito através da suplementação nutricional, diuréticos, broncodilatadores e do desmame consciente da oxigenoterapia.
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="md" align="center">
//                 Persistência do canal arterial
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 Sabemos que o bebê não é apenas um adulto em miniatura, existem algumas diferenças no seu corpo, uma delas é o canal arterial. O canal arterial é uma comunicação que o feto tem entre a aorta e o ramo esquerdo da artéria pulmonar, quando o bebê nasce esse canal se fecha. Porém, é possível que, por conta de diversos fatores, ele não feche, e isso pode causar alterações hemodinâmicas e pulmonares.
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 É importante o acompanhamento com um pediatra para que ele monitore o fechamento do canal por meio de exames não invasivos. 

//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 O tratamento é feito com medicações que irão incentivar o fechamento deste canal, caso não obtenha resultado, o médico pode indicar a cirurgia.
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="md" align="center">
//                 Convulsões
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 Convulsões são perturbações na atividade elétrica do cérebro que geram disfunção cerebral temporária. Em crianças pequenas as convulsões têm características como tremores e movimentos súbitos, enquanto bebês recém-nascidos os sinais são menos evidentes, como um estalar de lábios, mastigação involuntária ou a perda do tônus muscular temporária. Os médicos irão tratar as convulsões tentando achar a sua causa, mas se elas estiverem muito frequentes podem ser receitados anticonvulsionantes. 
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 É importante, caso você perceba que seu filho está tendo uma convulsão, não colocar nada em sua boca ou tentar segurar a língua. Mantenha a criança em um local em que ela não se machuque, longe de escadas ou móveis, vire-a de lado e procure ajuda especializada ou ligue 192 (Serviço de Atendimento Móvel de Urgência - SAMU) 

//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="md" align="center">
//                 Refluxo gastroesofágico
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 O refluxo gastroesofágico ocorre quando o conteúdo do estômago “volta”, ou seja, ele sobe novamente pelo esôfago. O problema é que esse conteúdo é ácido e quando ele reflui causa problemas para a alimentação e respiração, e pode danificar o esôfago. Os bebês que têm refluxo podem apresentar dores torácicas e abdominais, azia e vômitos.Mas os sinais de refluxo no bebê podem ser mais discretos, como: chiado no peito constante, infecções de ouvido de repetição, tosse seca persistente, sono agitado, entre outros.   

//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 O diagnóstico é feito por meio de exames não invasivos associado à história clínica. É importante relatar ao pediatra do seu filho se notar algum desses sintomas.
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 O tratamento é feito com mudanças na dieta e medicamentos. Geralmente os bebês superam o refluxo até os 18 meses. 

//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 O tratamento é feito com mudanças na dieta e medicamentos. Geralmente os bebês superam o refluxo até os 18 meses. 

//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="md" align="center">
//                 Retinopatia da prematuridade
//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 A retinopatia da prematuridade é uma lesão na retina que é causada por causa dos radicais livres, que o corpo gera quando utiliza o oxigênio, que pode alterar o crescimento dos vasos sanguíneos na região. Portanto, essa doença pode aparecer nos bebês que precisam ficar muito tempo com o suporte de oxigênio, isso inclui principalmente os prematuros. 

//                 </Text>
                
//             </View>

//             <View style={{ marginTop: 20}}>
//                 <Text size="sm">
//                 O diagnóstico é feito através de um exame ocular e é importante que a intervenção seja feita logo, assim é possível evitar mais danos. Uma retinopatia não tratada pode causar perda visual. Mas fique tranquilo! O tratamento existe e é feito com fotocoagulação,  uma cirurgia a laser que tem  boa resolução.
//                 </Text>
                
//             </View>

//         </ScrollView>
//     )
// }


const styles = StyleSheet.create({
    container:{ 
        display: 'flex',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        minHeight: '60%'
    },
    title:{
        fontWeight:"bold",
        color:'#f8f8f8',
        fontSize: 54
    },
    button:{
        padding: 10,
        backgroundColor: colors.darkPink,
        borderRadius: 100,
        width: '50%',
        fontSize: 5,
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10
    },
    buttonText: {
        color: colors.white,
    },
    logo: {
        width: 300,
        height: 300,
    }
})