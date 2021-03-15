import React from 'react';
import{StyleSheet,Text,View,SafeAreaView,TouchableOpacity} from "react-native"; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default class App extends React.Component {
  render () {
    return (
      <View style = {styles.container}>
        <SafeAreaView>
          <View style = {{ flexDirection : "row"}}>
            <View style = {styles.divider}/>
            <Text style = {styles.text}>
              Coucou <Text style ={{fontWeight : "300", color : "#6495ed"}}> Zachou </Text>
            </Text>
            <View style = {styles.divider}/>
          </View>
          <View style = {{marginVertical : 60}}>
            <TouchableOpacity style = {styles.add}>
            <MaterialCommunityIcons name="cat" size={45} color="#6495ed"/>
            </TouchableOpacity>
            <Text style={styles.addText}> Miaou </Text>
          </View>

        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container : {
      flex :1,
      backgroundColor : "#ffff", 
      alignItems: "center",
      justifyContent: "center",
    }, 
    divider: {
      backgroundColor: "#000000", 
      height:1,
      flex:1,
      alignSelf: "center"
    },
    text :{
      fontSize : 46,
      fontWeight: "800", 
      color : "#000000", 
      paddingHorizontal: 64
    } ,
    add : {
      alignItems: "center", 
      justifyContent: "center"
    },

    addText :{
      fontSize : 36,
      fontWeight: "400", 
      color : "#000000", 
      alignSelf: "center", 
      paddingVertical : 10,
    } ,

  }
);