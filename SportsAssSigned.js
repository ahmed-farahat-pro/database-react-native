import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet , Text , View , Button , TextInput , Image , SafeAreaView , TouchableOpacity , StatusBar , Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "axios";
const backImage = require('./assets/pip.jpeg');


export default function SportsAssSigned ({navigation})
{  
     const [name , setName] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
     const [email , setEmail] = useState("");


    function AddMatch()
{
        fetch('http://localhost:3000/handle-match-add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username , password  , email}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data["message"] == 'already in')
        {
             console.log("sadsa");
           
        }
        else if (data["message"] == 'sucess'){
               Alert.alert("match added")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });


}

    function DeleteMatch()
{
        fetch('http://localhost:3000/handle-match-delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username , password  , email}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data["message"] == 'already in')
        {
             console.log("sadsa");
           
        }
        else if (data["message"] == 'sucess'){
               Alert.alert("match deleted")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });


}
function ViewUpcoming()
{
    var ans = []
        Axios.get("http://localhost:3000/fetch-upcommingn").then(
    (response) => {
      ans = response.data
      console.log(ans)
     var str = "" ;
      for(i=0;i<ans.length;i+=3)
      {
    str += ans[i] + " " +ans[i+1] +" "+ans[i+2]+"\n";
      }
       Alert.alert(str);
    }
   
)

}
function neverPlayed()
{
    var ans = []
        Axios.get("http://localhost:3000/fetch-never").then(
    (response) => {
      ans = response.data
      console.log(ans)
     var str = "" ;
      for(i=0;i<ans.length;i+=2)
      {
        if (ans[i]!= null && ans[i+1]!=null)
    str += ans[i] + " " +ans[i+1] +"\n";
      }
       Alert.alert(str);
    }
   
)

}


    return( 
<View style = {styles.container}>
            <Image source={backImage} style = {styles.backImage} />
            <View style={styles.whiteSheet} >
                <SafeAreaView style = {styles.form}>
                    <ScrollView>
                        <TouchableOpacity onPress={()=>{Alert.alert("to control a match (host club name, guest club name, start time and end time) ");}} >
                             <Text style = {styles.title}> sports manager </Text>
                             </TouchableOpacity>
                   
                      <TextInput
        style={styles.input}
        placeholder="Type"
        autoCapitalize="none"
        autoFocus={true}

        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Type"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={username}
        onChangeText={(text) => setUsername(text)}
        />

        
          <TextInput
        style={styles.input}
        placeholder="Type"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => setPassword(text)}/>

          
          <TextInput
        style={styles.input}
        placeholder="Type"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => setEmail(text)}/>


 <TouchableOpacity style={styles.button}  onPress = {AddMatch}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Add match</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress = {DeleteMatch}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Delete match</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress = {ViewUpcoming}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> View all upcomming matches </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress = {ViewUpcoming}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> View already played matches</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress = {neverPlayed}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> View pair of clubs never together</Text>
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