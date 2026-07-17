import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex = () => {
  return (
    <View style={styles.container}>
        <Text style={[styles.box1 ,{color: 'white' , textAlign: 'center', fontSize: 75}]}>1</Text>
        <Text style={[styles.box2 ,{color: 'white' , textAlign: 'center', fontSize: 75}]}>2</Text>
        <Text style={[styles.box3 ,{color: 'white' , textAlign: 'center', fontSize: 75}]}>3</Text>
    </View>
  )
}

export default Flex


// Case-1 :- 1+1+1 = 3 => All box takes 1/3(box1) 1/3(box2) 1/3(box3) 
// Case-2 :- 2+3+4 = 10 => All box takes 2/3(box1) 3/3(box2) 4/3(box3)
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },
    box1:{
        flex: 1,
        backgroundColor: 'red'
    },
    box2:{
        flex: 2,
        backgroundColor: 'yellow'
    },
    box3:{
        flex:3,
        backgroundColor: 'green'
    }
})