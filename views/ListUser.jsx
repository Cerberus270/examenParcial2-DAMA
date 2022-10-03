import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Importando elementos de interacción con las colecciones
import { collection, getDocs } from "firebase/firestore";
//Importando el componente de conexión a Firebase
import firebase from '../database/firebase';

export default function ListUser(props) {
    const {navigation} = props;
    const [user, setUsers] = useState([]);
    //useEffect: es un hook que permite ejecutar código cada vez que
    //nuestro componente se renderice 
    //(ya sea por una actualización o sea la primera vez)


    useFocusEffect(
        React.useCallback(() => {
            //Creando función asíncrona 
            const obtenerDatos = async () => {
                firebase.db.collection("users").onSnapshot((querySnapshot) => {
                    const users = [];
                    querySnapshot.docs.forEach((doc) => {
                        const {name, email, phone} = doc.data();
                        users.push({
                            id: doc.id,
                            name,
                            email,
                            phone
                        });
                    });
                    setUsers(users);
                })
            }
            //Llamado de la función
            obtenerDatos();
        }, [])
    );

    return (
        <View>
            <Text style={styles.Text}>Listado de usuarios</Text>
            <Button title="Crear usuario"
                onPress={() => navigation.navigate('CreateUser')} />
        </View>


    );
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 25,
        color: 'cyan'
    }
})