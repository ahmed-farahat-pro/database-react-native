import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet , Text , View , Button , TextInput , Image , SafeAreaView , TouchableOpacity , StatusBar , Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "axios";
const backImage = require('./assets/cbre.webp');
import { useRoute } from "@react-navigation/native";

export default function club_re_signed ({navigation})
{  
    const route = useRoute();
    const username = route.params.username;
    const cbdName = route.params.cbdName;

   /*  const [name , setName] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
     const [email , setEmail] = useState("");*/
function handleview(){
    navigation.navigate("STD" , {username:username , cbdName:cbdName});

}
function clubinfo()
{
      
        fetch('http://localhost:3000/handle-club-info', {
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
                             <Text style = {styles.title}> club_representative </Text>
                             </TouchableOpacity>
                   
                 

<View>
 <TouchableOpacity style={styles.button}  onPress= {clubinfo}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Club_info </Text>
      </TouchableOpacity>
      </View>
<View>
       <TouchableOpacity style={styles.button} >
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>upcoming matches for club</Text>
      </TouchableOpacity>
      </View>
<View>
       <TouchableOpacity style={styles.button} >
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> View all stadium avaliable at date</Text>
      </TouchableOpacity>
      </View>
   
<View>
       <TouchableOpacity style={styles.button}  >
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> View already played matches</Text>
      </TouchableOpacity>
      </View>
             <View>
  <TouchableOpacity style={styles.button}  >
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}} onPress={handleview}> send request to std manager </Text>
      </TouchableOpacity>
      </View>
  
    

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