import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWth from './components/MyCustomTextWth'
import Count from './components/Count'
import InputText from './components/InputText'
import UsernameandPassword from './components/UsernameandPassWord'
const App = () => {
  return (
    <View>
     {/* <Logo/> */}
     {/* <User/> */}
     {/* <LotsOfGreetings/> */}
     {/* <MyCustomTextWth/> */}
     {/* <Count/> */}
     {/* <InputText/> */}
     <UsernameandPassword/>
    </View>
  )
}

export default App

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})