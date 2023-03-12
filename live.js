import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet , Text , View , Button , TextInput , Image , SafeAreaView , TouchableOpacity , StatusBar , Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe'


const backImage = require('./assets/std.jpeg');

export default function Live ({navigation})
{  
    const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

    return( 
        

      
            <ScrollView >
       <YoutubePlayer height = {300} play={false} videoId ={'MZ5D6NK5Qqo'} />        
           <YoutubePlayer height = {300} play={false} videoId ={'o_zIX1_3RpA'} />      
               <YoutubePlayer height = {300} play={false} videoId ={'itUZQwHKexk'} />      
                   <YoutubePlayer height = {300} play={false} videoId ={'2QNKlZz4dY0'} />      
                    <YoutubePlayer height = {300} play={false} videoId ={'t0sB_zfEwVc'} />   
                    
        </ScrollView>

        
   
       
     

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
  video: {
    flex: 1,
    alignSelf: 'stretch'
  }
});