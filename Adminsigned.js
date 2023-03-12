import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet , Text , View , Button , TextInput , Image , SafeAreaView , TouchableOpacity , StatusBar , Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const backImage = require('./assets/std2.jpeg');

export default function Adminsigned({navigation})

{ 
   
    
    
    
    const [name , setName] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");




    function AddClub()
{
        fetch('http://localhost:3000/handle-club-add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username , password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data["message"] == 'already in')
        {
             console.log("sadsa");
           
        }
        else if (data["message"] == 'sucess'){
               Alert.alert("Club added")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });


}

    function DeleteClub()
{
        fetch('http://localhost:3000/handle-club-delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username , password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data["message"] == 'already in')
        {
             console.log("sadsa");
           
        }
        else if (data["message"] == 'sucess'){
            Alert.alert("Club deleted")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

}

    function AddStadium()
{
    fetch('http://localhost:3000/handle-std-add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username , password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data["message"] == 'already in')
        {
             console.log("sadsa");
           
        }
        else if (data["message"] == 'sucess'){
              Alert.alert("stadium added")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

    function DeleteStadium()
{
        fetch('http://localhost:3000/handle-std-delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username , password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data["message"] == 'already in')
        {
             console.log("sadsa");
           
        }
        else if (data["message"] == 'sucess'){
              Alert.alert("stadium  deleted")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

}

    function BlockFan()
{
        fetch('http://localhost:3000/handle-fan-block', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username , password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data["message"] == 'already in')
        {
             console.log("sadsa");
           
        }
        else if (data["message"] == 'sucess'){
               Alert.alert("fan blocked")
        }
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
                        <TouchableOpacity onPress={()=> {Alert.alert("to add a club use the first two blocks (name , location ) then click add club");
     Alert.alert("to remove a club use the first block (name) then click delete club");
      Alert.alert("to add a stadium use the  three blocks (name , location , capacity) then click add stadium");
       Alert.alert("to delete a stadium use the first block (name ) then click delete stadium");
        Alert.alert("to block a fan use the first block (national number ) then click block fan")}}>
                             <Text style = {styles.title}> ADMIN </Text>
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


 <TouchableOpacity style={styles.button} onPress={AddClub}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Add Club</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={DeleteClub}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Delete a Club</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={AddStadium}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Add stadium </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={DeleteStadium}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> delete a stadium</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={BlockFan}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> block a fan</Text>
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