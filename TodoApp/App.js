import React from 'react';
import{StyleSheet,Text,View,SafeAreaView} from "react-native"; 

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
      backgroundColor: "#a9a9a9", 
      height:1,
      flex:1,
      alignSelf: "center"
    },
    text :{
      fontSize : 46,
      fontWeight: "800", 
      color : "#000000", 
      paddingHorizontal: 64
    }

  }
);