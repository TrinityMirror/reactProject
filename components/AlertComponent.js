import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {

    const simpleAlertHanler = () => {
        alert('KEK')
    }
    const twoOptionAlertHanler = () => {
        //use alert from react native
        Alert.alert(
            //title
            'Hello there',
            //body
            'I am two option alert from react native',
            [
                {
                    text:'Yes',
                    onPress: ()=> alert('Yes pressed')
                },
                {
                    text:'No',
                    onPress: ()=> alert('No pressed'),
                    style:'cancel'
                }
            ],
            //clicking outside of alert will not cancle
            {cancelable:false}
        );
    }

    return (
        <View style={styles.container}>
            <Button
                title='Simple Alert'
                onPress={simpleAlertHanler}
            />
            <Button
                title='Alert with two option'
                onPress={twoOptionAlertHanler}
            />
        </View>
    )
}

export default AlertComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    }
})