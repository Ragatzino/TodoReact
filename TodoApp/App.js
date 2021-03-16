import React from 'react';
import{StyleSheet,Text,View,SafeAreaView,TouchableOpacity,FlatList} from "react-native"; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import HomeList from "./src/components/homeList.js"

export default class App extends React.Component {
  render () {
    return (
      <View style = {styles.container}>
        <SafeAreaView>
          <View style = {{ flexDirection : "row"}}>
            <View style = {styles.divider}/>
            <Text style = {styles.text}>
              Coucou <Text style ={{fontWeight : "300", color : "#046582"}}> Zachou </Text>
            </Text>
            <View style = {styles.divider}/>
          </View>
          <View style = {{marginVertical : 60}}>
            <TouchableOpacity style = {styles.add}>
            <MaterialCommunityIcons name="cat" size={45} color="#046582"/>
            </TouchableOpacity>
          </View>
          <View style = {{height : 600}}>
          <Text style={styles.addText}> Choses à faire :</Text>
            <FlatList data = {data} 
              keyExtractor = {item => item.text}
              renderItem= {({item}) => <HomeList item = {item}/>}
              />

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
      height:10,
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
      paddingVertical : 2,
    },

  }
);



const data = [
  {
    id : 1,
    color : "#f39189",
    text: "Dire à Zachou d'arreter friends",
    subtask : [
      {
        title : "Lui prendre son ordinateur", 
        completed : true
      },
      {
        title : "Courir", 
        completed : false
      },
      {
        title : "Le narguer", 
        completed : false
      },
    ]
  },
  {
    id : 2,
    color : "#bb8082",
    text : "Et Chihiro",
    subtask : [
      {
        title : "Lui prendre son ordinateur", 
        completed : true
      },
      {
        title : "Courir", 
        completed : false
      },
      {
        title : "Le narguer", 
        completed : false
      },
    ]
  },
  {
    id : 3,
    color : "#6e7582",
    text : "Arreter de vouloir rusher le cours",
    subtask : [
      {
        title : "Eteindre l'ordinateur", 
        completed : false
      },
      {
        title : "Aller dodo", 
        completed : false
      },
    ]
  },
  {
    id : 4,
    color : "#046582",
    text: "Capturer Pikachu",
    subtask: [
      {
        title : "Lancer la Pokeball", 
        completed : true
      }
    ]
  },
];
