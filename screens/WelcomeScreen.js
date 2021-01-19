import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class WelcomeScreen extends Component{
constructor(){
super();
this.state = {
emailId:'',
password:''
}
}
            
userLogin=(emailId, password)=>{
firebase.auth().signInWithEmailAndPassword(emailId, password).then(()=>{
return Alert.alert ("User Successfully Logged In")
})
.catch((error)=>{
var errorCode = error.code;
var errorMessage = error.message;
return Alert.alert(errorMessage)
})
}

userSignup=(emailId, password)=>{
firebase.auth().createUserWithEmailAndPassword(emailId, password).then((response)=>{
return Alert.alert ("User Successfully Added")
})
.catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;
return Alert.alert(errorMessage)
})
}

render(){
return(
<View style = {styles.container}>
<View>

<View>
<Text style = {styles.title}>Barter</Text>
</View>

<View>
<Image
source={require("../assets/image.jpg")}
style={{width:900, height: 500,marginLeft:-40, borderWidth:2}}/> 
</View>


<View>
<TextInput style = {styles.login} placeholder= "Username" keyboardType='email-address' onChangeText={(text)=>{this.setState({emailId:text})}}/>
<TextInput style = {styles.login} placeholder= "Password" secureTextEntry={true} onChangeText={(text)=>{this.setState({password:text})}}/>

<TouchableOpacity style = {[styles.button,{marginBottom:20, marginTop:20}]} onPress ={()=>{this.userLogin(this.state.emailId,this.state.password)}}>
<Text style = {styles.buttonText}> Login! </Text>
</TouchableOpacity>

<TouchableOpacity style = {[styles.button,{marginBottom:20, marginTop:20}]} onPress ={()=>{this.userSignup(this.state.emailId,this.state.password)}}>
<Text style = {styles.buttonText}> Sign Up! </Text>
</TouchableOpacity>

</View>
</View>
</View>
)
}
}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'white',
},

title :{
fontSize:30,
fontWeight:'bold',
color:'#000080',
marginLeft:350
},

login:{
width:300,
height:50,
margin:20,
justifyContent:'center',
alignItems:'center',
backgroundColor:'turquoise',
borderRadius:3,
shadowColor:'blue',
marginLeft:250,
shadowOffset:{
width:0,
height:8,

},
shadowOpacity:0.3,
shadowRadius:10.3,
elevation:60
},

button:{
borderWidth:2,
width:"20%",
marginLeft:315,
borderRadius:9,
height:25,
backgroundColor:'turquoise',
shadowColor:'blue',
shadowOffset:{
width:0,
height:8
},
shadowOpacity:0.3,
shadowRadius:10.3,
elevation:60
},
            
buttonText:{
fontFamily: 'Times New Roman',
marginLeft:50,
fontSize:20,
}



})
