import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Aleitamento from '../pages/Aleitamento';
import Apoio from '../pages/Apoio';
import CalculadoraIG from '../pages/CalculadoraIG';
import CuidadoEmCasa from '../pages/CuidadoEmCasa';
import Acompanhamento from '../pages/CuidadoEmCasa/Acompanhamento';
import CuidadeNaFamilia from '../pages/CuidadoEmCasa/CuidadeNaFamilia';
import RededeProfis from '../pages/CuidadoEmCasa/RededeProfis';
import Desenvolvimento from '../pages/Desenvolvimento';
import ComoAjudarOBb from '../pages/Desenvolvimento/ComoAjudarOBb';
import JanelaDeOportuni from '../pages/Desenvolvimento/JanelaDeOportuni';
import OQueFazemBbs from '../pages/Desenvolvimento/OQueFazemBbs';
import Complicações from '../pages/OQueEPrematuridade/Complicações';
import GraficodeCresc from '../pages/OQueEPrematuridade/GraficodeCresc';
import OQ from '../pages/OQueEPrematuridade/index';
import QuemSomos, {} from '../pages/QuemSomos'
import Vacinas from '../pages/Vacinas';

import TwoMonths from '../pages/Desenvolvimento/TwoMonths'
const Drawer = createDrawerNavigator();

import { colors } from '../themes/color'

export default function Routes(){
  return (
    <Drawer.Navigator useLegacyImplementation={true} screenOptions={{
      drawerActiveBackgroundColor: colors.darkPink,
      drawerActiveTintColor: '#fff',
      headerStyle: { backgroundColor: '#7d46de', },
      headerTitleStyle: { color: '#7d46de', }
    }}
    >
      <Drawer.Screen name="QuemSomos" component={QuemSomos} />
      <Drawer.Screen name="O Que é Prematuridade?" component={OQ} />
      <Drawer.Screen name="Complicações Comuns" component={Complicações} />
      <Drawer.Screen name="Gráfico de crescimento para prematuros" component={GraficodeCresc} />
      <Drawer.Screen name="Calculadora IG" component={CalculadoraIG} />
      <Drawer.Screen name="O cuidado em casaa" component={CuidadoEmCasa} />
      <Drawer.Screen name="Acompanhamento pós-alta" component={Acompanhamento} />
      <Drawer.Screen name="Rede de profissionais" component={RededeProfis} />
      <Drawer.Screen name="Cuidado centrado na familia" component={CuidadeNaFamilia} />
      <Drawer.Screen name="Aleitamento" component={Aleitamento} />
      <Drawer.Screen name="Vacinas" component={Vacinas} />
      <Drawer.Screen name="Apoio" component={Apoio} />
      <Drawer.Screen name="Desenvolvimento" component={Desenvolvimento} />
      <Drawer.Screen name='2 meses' component={TwoMonths} />
    </Drawer.Navigator>
  );
}