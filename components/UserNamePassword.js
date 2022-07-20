import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'

const UserNamePassword = () => {
    const checkTextInput = () => {
        if (!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
        if (!textInputEmail.trim()) {
            alert('Please Enter Email');
            return;
            }
        else {
            alert('suscess')
        }
    }

    const [textInputName,settextInputName]=useState('')
    const [textInputEmail,settextInputEmail]=useState('')

    return (
        <View>
            <TextInput
                value={textInputName}
                style={styles.input}
                placeholder='Enter Name'
                onChangeText={(textInputName)=>(textInputName(textInputName))}
            />
            <TextInput
                value={textInputEmail}
                style={styles.input}
                placeholder='Enter Email'
                onChangeText={(textInputEmail)=>(textInputEmail(textInputEmail))}
            />
            <view style = {{flex:1,padding: 15}}>
            <Button
                color='#7a42f4'
                title='Submit'
                onPress={checkTextInput}
            />
            </view>
        </View>
    )
}

export default UserNamePassword

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#808080',
        borderWidth: 1,
    },
    submitButton: {
        backgroundColor: '#808080',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
    }
});
