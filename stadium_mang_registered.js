import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet , Text , View , Button , TextInput , Image , SafeAreaView , TouchableOpacity , StatusBar , Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";


const backImage = require('./assets/stmg.jpeg');


export default function stadium_mang_registered ({navigation})
{      const route = useRoute();
const username = route.params.username;
    function handelinfo()
{

       fetch('http://localhost:3000/handle-std-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data["message"] == 'already in')
        {
             console.log("sadsa");
           
        }
       
           console.log(data["message"]);
               Alert.alert(data["message"]);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

       return( 
<View style = {styles.container}>
            <Image source={backImage} style = {styles.backImage} />
            <View style={styles.whiteSheet} >
                <SafeAreaView style = {styles.form}>
                    <ScrollView>
                        <TouchableOpacity  >
                             <Text style = {styles.title}> stadium_manager </Text>
                             </TouchableOpacity>
                   
                 


 <TouchableOpacity style={styles.button} onPress={handelinfo} >
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Stadium_info </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} >
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>all recieved requests</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("UREQ" , {username:username})} >
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> show unhandled request</Text>
      </TouchableOpacity>

      
   

        </ScrollView>
                </SafeAreaView>
             </View> 
           
            
        </View>


    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});