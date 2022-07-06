import { View, Text, StyleSheet , TextInput, Button, Alert} from 'react-native'
import React,{useState} from 'react'

const UsernameandPassword = () => {
    const showData = () => {
        alert("email : "+ userName + "\n" +"password : " + passWord)
       }
    const [userName,setUserName]=useState('')
    const [passWord,setPassword]=useState('')

  return (
    <View style = {{flex:1,marginTop:20}}>
    <TextInput
    value={userName}
    style={styles.input}
    placeholder='Email'
    onChangeText={(userName)=>(setUserName(userName))}
    />
    <TextInput
    value={passWord}
    style={styles.input}
    placeholder='Password'
    onChangeText={(passWord)=>(setPassword(passWord))}
    />
    <Button
    color='#7a42f4'
    style={styles.submitButton}
    title='Submit'
    onPress={showData}
    />

    </View>
  )
}

export default UsernameandPassword

const styles = StyleSheet.create({
    container: {  
      paddingTop: 23,
    },
    input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
    },
    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
    },
    submitButtonText: {
      color: 'white',
    }
  });
