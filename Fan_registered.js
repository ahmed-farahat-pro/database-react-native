import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet , Text , View , Button , TextInput , Image , SafeAreaView , TouchableOpacity , StatusBar , Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const backImage = require('./assets/fan.jpeg');

export default function Fan_registered ({navigation})
{  
   return( 
<View style = {styles.container}>
            <Image source={backImage} style = {styles.backImage} />
            <View style={styles.whiteSheet} >
                <SafeAreaView style = {styles.form}>
                    <ScrollView>
                        <TouchableOpacity  >
                             <Text style = {styles.title}> FAN </Text>
                             </TouchableOpacity>
                   
                 


 <TouchableOpacity style={styles.button}  >
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>View all matches with tickets </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} >
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Purchase a ticket for a match.</Text>
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