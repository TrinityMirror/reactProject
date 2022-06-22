import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import styles from './components/style';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>no matter what we breed</Text>
      <Text style={[styles.title,styles.warning]}>we still made of seed</Text>
      <Logo/>
    </View>
  )
}

export default App
