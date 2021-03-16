import React from "react"; 
import{StyleSheet,Text,View,SafeAreaView,KeyboardAvoidingView,TouchableOpacity} from "react-native"; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default class AddTask extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableOpacity onPress={this.props.close}>
                <MaterialCommunityIcons name="cat" size={45} color="#046582"/>
            </TouchableOpacity>
            <Text>Hi</Text>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : "#ffff", 
        alignItems: "center",
        justifyContent: "center",
      }, 
})