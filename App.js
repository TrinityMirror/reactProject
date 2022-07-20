import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWth from './components/MyCustomTextWth'
import Count from './components/Count'
import InputText from './components/InputText'
import UsernameandPassword from './components/UsernameandPassWord'
import UserNamePassword from './components/UserNamePassword'
import AlertComponent from './components/AlertComponent'
import ImageWithTextInput from './components/ImageWithTextInput'

const App = () => {
  return (
    <View style={{flex: 1}}>
     {/* <Logo/> */}
     {/* <User/> */}
     {/* <LotsOfGreetings/> */}
     {/* <MyCustomTextWth/> */}
     {/* <Count/> */}
     {/* <InputText/> */}
     {/* <UsernameandPassword/> */}
     {/* <UserNamePassword/> */}
     {/* <AlertComponent/> */}
     <ImageWithTextInput/>
    </View>
  )
}

// const style = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   }
// })

export default App;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding:35,
  },
  textInputStyle:{
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    },
  });


