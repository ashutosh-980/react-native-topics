import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import users from './Users'
import { FlatList } from 'react-native'

const Card = () => {

    // const item = users; 

  return (
    <View style={styles.container}>


        <FlatList 
            data = {users}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return <View style={styles.card}>
                            <Image style={styles.image} source={{uri: item.image }}
                                resizeMode='cover'
                            />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.email}>{item.email}</Text>
                        </View>
            }}

            // horizontal

            ItemSeparatorComponent={() => <View style={{margin: 20}} />}

        />

    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#dadada',
        paddingVertical: 10, 
        paddingHorizontal: 30,
    },
    card:{
        width: 200,
        height: 180,
        borderWidth: 2,
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,  
    },
    image:{
        height: 100,
        width: 100,
        borderRadius: 50,
        marginBottom: 10
        // resizeMode: 'cover'
    },
    name:{
        fontWeight: 'bold',
        fontSize: 25,
    },
    email:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'gray'
    }
})