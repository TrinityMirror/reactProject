import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props) => {
    return (
        <View style={{ alignItem: 'center' }}>
            <Text>Hello {props.name} {props.date}</Text>
        </View>
    )
}

const LotsOfGreetings = () => {
    return (
        <View style={{ alignItems: 'center', top: 50 }}>
            <Greeting name='Mery Christmas' date='25-Dec-2022'/>
            <Greeting name='HNY' date='01-Jan-2022'/>
            <Greeting name='Songkarn' date='13-Apr-2022'/>
        </View>
    )
}

export default LotsOfGreetings