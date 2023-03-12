import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet , Text , View , Button , TextInput , Image , SafeAreaView , TouchableOpacity , StatusBar , Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DATE_FORMAT } from "react-native-gifted-chat";


const backImage = require('./assets/fan.jpeg');

export default function FAN_register ({navigation})
{  const [name , setName] = useState("");
    const [username , setUsername] = useState("");
     const [national , setNational] = useState("");
    const [phoneNum , setPhoneNum] = useState("");
     const [address , setAddress] = useState("");
    const [password , setPassword] = useState("");
     const [date , setdate] = useState("");

    const onHandleSignUp = () => {
    fetch('http://localhost:3000/handle-fan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username , password , national , phoneNum , address , date}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data["message"] == 'already in')
        {
             console.log("sadsa");
           
        }
        else if (data["message"] == 'sucess'){
            navigation.navigate("FANSIGNED",{ username:username,});
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
        placeholder="Enter national"
        autoCapitalize="none"
        autoCorrect={false}
  
       
        value={national}
        onChangeText={(text) => setNational(text)}/>

          <TextInput
        style={styles.input}
        placeholder="Enter name"
        autoCapitalize="none"
        autoCorrect={false}
        
    
        value={name}
        onChangeText={(text) => setName(text)}/>


          <TextInput
        style={styles.input}
        placeholder="Date of birth"
        autoCapitalize="none"
        autoCorrect={false}
        value={date}
        onFocus={()=>Alert.alert( "DOF must be like 20120618 10:34:09 AM")}
        onChangeText={(text) => setdate(text)}/>


          <TextInput
        style={styles.input}
        placeholder="Enter address"
        autoCapitalize="none"
        autoCorrect={false}
        value={address}
        onChangeText={(text) => setAddress(text)}/>

          <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        autoCapitalize="none"
        autoCorrect={false}
        value={phoneNum}
        onChangeText={(text) => setPhoneNum(text)}/>

         <TouchableOpacity style={styles.button} onPress={onHandleSignUp}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Sign Up</Text>
      </TouchableOpacity>
       <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Already Have an Account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LOGIN",{name:"fan"})}>
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