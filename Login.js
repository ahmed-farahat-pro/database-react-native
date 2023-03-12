import React, { useState } from "react";

import {NavigationContainer} from '@react-navigation/native';
import Axios from 'axios';
import { StyleSheet , Text , View , Button , TextInput , Image , SafeAreaView , TouchableOpacity , StatusBar , Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const backImage = require('./assets/std.jpeg');
import { useRoute } from "@react-navigation/native";
var ans = [] ;

export default function Login ({navigation}) {
const route = useRoute();
console.log(route.params.name);
     Axios.get("http://localhost:3000/fetch").then(
    (response) => {
      ans = response.data;
    }
)
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
   const onHandleLogin = ()=> {
        var out = false;
        console.log(ans[0]);
                if(username !== "" && password !== "")
        {
            for( let i = 0 ;i <ans.length ; i+=2)
            {
                if (ans [i] === username && ans [i+1]===password)
                    
                    {
                        out = true;
                        console.log("gamed molaaa");
                        break;
                    }
                }
            }

            /*
                <Stack.Screen component={SportsAssSigned} name="SportsSigned"/>
                     <Stack.Screen component={club_re_signed} name="CLUBRESIGN"/>
            */
          if(out)
          {
            console.log("haloo")
              switch(route.params.name)
              {
                case 'stadium' : navigation.navigate("MANGSIGNED",{ username:username,   });break;
                case 'sports-manager': navigation.navigate("SportsSigned",{ username:username,   });break;
                case 'club-rep': navigation.navigate("CLUBRESIGN",{ username:username,   });break;
                case 'fan' :  navigation.navigate("FANSIGNED",{ username:username,   });break;
                default : navigation.navigate("SIGNED",{ username:username,   });break;
              }
          }
        }
    
    return (
        <View style = {styles.container}>
            <Image source={backImage} style = {styles.backImage} />
            <View style={styles.whiteSheet} >
                <SafeAreaView style = {styles.form}>
                    <ScrollView>
                    <Text style = {styles.title}> Login </Text>
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

         <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Log In</Text>
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
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});