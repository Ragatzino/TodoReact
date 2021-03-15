import React from 'react';
import{StyleSheet,Text,View,SafeAreaView,TouchableOpacity,FlatList} from "react-native"; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// import itemList from '../components/listItem'

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
            <Text style={styles.addText}> Miaou! </Text>
           
          </View>
          <View style = {{height : 500}}>
          <Text style={styles.addText}> Choses à faire :</Text>
            <FlatList data = {data} 
              keyExtractor = {item => item.text}
              renderItem= {({item}) => (
                <View style ={[styles.listContainer]}>
                  <Text style = {styles.listText}>{item.id}. <Text style ={{fontWeight : "300"}}> {item.text} </Text>
                  </Text>
                </View>)} />

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
      paddingVertical : 10,
    } ,

    listText :{
      fontSize : 22,
      fontWeight: "500", 
      color : "#ffff", 
      alignSelf: "center", 
      paddingVertical : 10,
    } ,

    listContainer: {
      paddingVertical : 10, 
      paddingHorizontal : 10, 
      borderRadius : 40, 
      alignItems: "center", 
      width : 500,
      backgroundColor : "#6495ed", 
      marginVertical: 10
    }
  }
);

const data = [
  {
    id : 1,
    text: "Dire à Zachou d'arreter friends",
  },
  {
    id : 2,
    text : "Et Chihiro",
  },
  {
    id : 3,
    text : "Arreter de vouloir rusher le cours",
  },
  {
    id : 4,
    text: "Je vais dodo",
  },
];
