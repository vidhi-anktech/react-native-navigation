import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// navigation

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"


type DetailsProp = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({ route }: DetailsProp) => {

    const { productId } = route.params
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Details : {productId} </Text>
            <Button title='Go to HOme' onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText: {
        color: '#000'
    }
})