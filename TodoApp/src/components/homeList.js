import React from "react"; 
import{StyleSheet,Text,View} from "react-native";

const listStyles = StyleSheet.create(
    {
      listTitle :{
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
        backgroundColor : "#046582", 
        marginVertical: 10
      },
  
      subtitle :{
        fontSize : 18,
        fontWeight: "400", 
        color : "#ffff", 
        alignSelf: "center", 
        paddingVertical : 5,
      } ,
  
      count :{
        fontSize : 30,
        fontWeight: "200", 
        color : "#ffff", 
        alignSelf: "center", 
        paddingVertical : 5,
      } , 
    }
  )

export default HomeList = ({item}) => {
      return (
        <View style ={[listStyles.listContainer, {backgroundColor: item.color}]}>
        <Text style = {listStyles.listTitle}>{item.id}. <Text style ={{fontWeight : "300"}}> {item.text} </Text>
        </Text>
        <View> 
          <View style ={{alignItems :"center"}}>
              <Text style={listStyles.count}>0</Text>
              <Text style={listStyles.subtitle}>Restant</Text>
          </View>
        </View>
      </View>
      );
  }