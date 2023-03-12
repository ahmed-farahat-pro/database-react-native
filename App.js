import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Admin from './Admin';
import sports_manager from './sports_manager';
import Axios from 'axios';
import club_representative from './club_representative';
import std_manager from './std_manager';
import Login from './Login';
import FAN_register from './FAN_register';
import signedup from './signedup'
import Adminsigned from './Adminsigned';
import SportsAssSigned from './SportsAssSigned'
import club_re_signed from './club_re_signed';
import Fan_registered from './Fan_registered';
import stadium_mang_registered from './stadium_mang_registered';
import Live from './live';
import std from './stadiumView';
import MTH from './matchView';
import UREQ from './unhandledreq';
const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>

         <Stack.Navigator initialRouteName='Home' >
         
         

        <Stack.Screen component={Home}   options={{headerShown: false}} name="Home" />
            <Stack.Screen component={Login} name="LOGIN" />
          <Stack.Screen component={FAN_register} name="FAN" />
            <Stack.Screen component={club_representative} name="CLUB" />
              <Stack.Screen component={std_manager} name="MANAGER" />
                <Stack.Screen component={Admin} name="ADMIN" />
                  <Stack.Screen component={sports_manager} name="SPORTS" />
                  <Stack.Screen component={Live}  name="LIVE"/>
                    <Stack.Screen component={Adminsigned} name="ADMINSIGNED"/>
                     <Stack.Screen component={SportsAssSigned} name="SportsSigned"/>
                     <Stack.Screen component={club_re_signed} name="CLUBRESIGN"/>
                           <Stack.Screen component={Fan_registered} name="FANSIGNED"/>
                                 <Stack.Screen component={stadium_mang_registered} name="MANGSIGNED"/>
                                    <Stack.Screen component={std} name="STD"/>
                                            <Stack.Screen component={MTH} name="MTH"/>
                                                 <Stack.Screen component={UREQ} name="UREQ"/>
                     
                 
                  
    </Stack.Navigator>
    </NavigationContainer>
   

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
