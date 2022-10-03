import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailUser = () => {
    return (
        <View>
            <Text style={styles.Text}>Listado de Usuarios</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 25,
        color: 'cyan'
    }
})

export default DetailUser