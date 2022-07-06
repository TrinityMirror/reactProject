import { View, Text } from 'react-native'
import React from 'react'

const Custom = ({fName1, fName2, lname1, lname2}) => {
    return (
        <View style={{ alignItem: 'center'}}>
            <Text>Your First name is {fName1} and Last name is {lname1}</Text>
            <Text>Your First name is {fName2} and Last name is {lname2}</Text>
        </View>
    )
}

const MyCustomTextWth = () => {
  return (
    <View style={{ alignItems: 'center',  top: 50 }}>
        <Custom fName1 ="Pongpol" fName2="Nawat" lname1 ="Paraapakul" lname2="Arunsawatrerk"/>
    </View>
  )
}

export default MyCustomTextWth