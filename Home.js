import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AzureSQL from 'react-native-azure-odata-sql';



import Admin from './Admin';
import Fan from './FAN_register';


export default function Home ({navigation})
{ 
    return( 
    
   <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
  <Text style={{fontSize: 50 , fontStyle:'bold' ,color:'green' }}>Foot</Text>
     <Text style={{fontSize: 50 , fontStyle:'bold' ,color:'#99ffaa' }}>ball</Text>
    </View>
  
      <TouchableOpacity style={styles.butt}   onPress={()=> navigation.navigate("FAN")}><Text style={styles.txt}>fan</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.butt}  onPress={()=> navigation.navigate("SPORTS")}><Text style={styles.txt}>sports manager</Text></TouchableOpacity>
        <TouchableOpacity  style={styles.butt} onPress={()=> navigation.navigate("CLUB")}><Text style={styles.txt}>club_representative</Text></TouchableOpacity>
         <TouchableOpacity  style={styles.butt} onPress={()=> navigation.navigate("MANAGER")}><Text style={styles.txt}>stadium_manager</Text></TouchableOpacity>
          <TouchableOpacity  style={styles.butt}  onPress={()=> navigation.navigate("ADMIN")}><Text style={styles.txt}>ADMIN</Text></TouchableOpacity>
           <TouchableOpacity  style={styles.butt} onPress={()=> navigation.navigate("LIVE")} ><Text style={styles.txt}>Watch live</Text></TouchableOpacity>
   </View>

 

    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  butt:{
   backgroundColor: 'black',
    height: 58,
    width: 250,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
},
txt:{

fontSize: 19 , fontStyle:'bold' ,color:'#99ffaa' 
}
});

