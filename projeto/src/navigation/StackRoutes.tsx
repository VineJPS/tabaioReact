import  { createStackNavigator } from '@react-navigation/stack';
import Home  from '../screens/home';
import Perfil  from '../screens/perfil';
import Servicos  from '../screens/servicos';
import Fotos from '../screens/fotos';
import Conta from '../screens/conta';


export function StackRoutes() {
    const { Navigator, Screen } = createStackNavigator();
    return(
        <Navigator>
            <Screen name= 'Home' component={Home}/>
            <Screen name= 'Perfil' component={Perfil}/>
            <Screen name= 'Servicos' component={Servicos}/>
            <Screen name= 'Fotos' component={Fotos}/>
            <Screen name= 'Conta' component={Conta}/>
        </Navigator>
    );
} 