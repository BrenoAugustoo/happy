import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanagesDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import Header from './components/Header';

export default function Routes(){
    const {Navigator, Screen} = createStackNavigator();

    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap}
                   
                />                   
                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header  showCancel={false} title="Orfanato"/>
                    }}
                />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione no mapa"/>
                    }}

                />
                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os Dados"/>
                    }}
                 />   
            </Navigator>
        </NavigationContainer>
    );
}