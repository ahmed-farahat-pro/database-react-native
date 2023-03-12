import { NavigationContainer } from "@react-navigation/native";
import React, { useState ,  useEffect } from "react";
import { StyleSheet , Text , View , Button , TextInput , Image , SafeAreaView , TouchableOpacity , StatusBar , Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe'
import { useRoute } from "@react-navigation/native";

const backImage = require('./assets/std.jpeg');


export  default  function MTH ({navigation})
{  
      const route = useRoute();
    const username = route.params.username;
    const stadium = route.params.stadium;
    const cbdName = route.params.cbdName;
 var [x,setX] = useState([""]);
 useEffect(()=> {doit();
  async function doit()
   {
 await fetch('http://localhost:3000/show_match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
       body: JSON.stringify({stadium , cbdName}),
    })
      .then((response) => response.json())
      .then((data) => {
        
        if (data["message"] == 'already in')
        {
        
           
        }
       else{
        console.log(data["message"]);
       setX(data["message"]) ;
       
       }
       
            //   Alert.alert(data["message"]);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
} , []); 
   
function handelpress()
{
   
}
function addreq (item , username , stadium)
{
    doit();
     async function doit()
   {
 await fetch('http://localhost:3000/add_req', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
       body: JSON.stringify({stadium , cbdName , item}),
    })
      .then((response) => response.json())
      .then((data) => {
        
        if (data["message"] == 'already in')
        {
        
           
        }
       else{
        console.log(data["message"]);
        Alert.alert("req added")
       
       }
       
            //   Alert.alert(data["message"]);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });

}
}
    return( 
        



    <ScrollView>
 

            { x.map((item,key)=>( 
               <TouchableOpacity key={key} style={styles.item} onPress={()=>addreq(item , cbdName , stadium )}><Text>{item}</Text></TouchableOpacity>))}
   

    </ScrollView>


    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "green",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 300,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  button: {
    backgroundColor: 'green',
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  video: {
    flex: 1,
    alignSelf: 'stretch'
  }
});