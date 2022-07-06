import { StyleSheet, Text, View, TextInput} from 'react-native'
import React,{useState} from 'react'

const InputText = () => {
    const [userName,setUserName]=useState('')
  return (
    <View style = {{flex:1,marginTop:20,alignItems:'center'}}>
      <Text>Insert any text in below input</Text>
      <TextInput 
        value={userName}
        onChangeText={(userName)=>(setUserName(userName))}
        style={styles.textInput}
        placeholder='Please input username'
      />
      <Text style = {{color:'blue'}}>{userName}</Text>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    textInput :{
        width:250,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#e8e8'
    }
})
