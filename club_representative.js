import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet , Text , View , Button , TextInput , Image , SafeAreaView , TouchableOpacity , StatusBar , Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const backImage = require('./assets/cbre.webp');

export default function club_representative ({navigation})
{  const [name , setName] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
     const [cbdName , setCbdName]= useState("");

      const onHandleSignUp = () => {
    fetch('http://localhost:3000/handle-club-rep', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username , password , cbdName}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data["message"] == 'already in')
        {
             console.log("sadsa");
           
        }
        else if (data["message"] == 'sucess'){
            navigation.navigate("CLUBRESIGN" , {
             
                
                username:username,
                cbdName:cbdName,
               
            });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
    return( 
        
       <View style = {styles.container}>
            <Image source={backImage} style = {styles.backImage} />
            <View style={styles.whiteSheet} >
                <SafeAreaView style = {styles.form}>
                    <ScrollView>
                    <Text style = {styles.title}> sign up </Text>
                      <TextInput
        style={styles.input}
        placeholder="Enter username"
        autoCapitalize="none"
        autoFocus={true}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}/>

        
          <TextInput
        style={styles.input}
        placeholder="Enter name"
        autoCapitalize="none"
        autoCorrect={false}
        
    
        value={name}
        onChangeText={(text) => setName(text)}/>


       


  
          <TextInput
        style={styles.input}
        placeholder="Enter club name"
        autoCapitalize="none"
        autoCorrect={false}
        value={cbdName}
        onChangeText={(text) => setCbdName(text)}/>

         <TouchableOpacity style={styles.button} onPress={onHandleSignUp}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Sign Up</Text>
      </TouchableOpacity>
       <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Already Have an Account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LOGIN",{name:"club-rep"})}>
          <Text style={{color: 'green', fontWeight: '600', fontSize: 14}}> Log in</Text>
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