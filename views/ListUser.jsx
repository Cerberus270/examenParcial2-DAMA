import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Importando elementos de interacción con las colecciones
import { collection, getDocs } from "firebase/firestore";
//Importando el componente de conexión a Firebase
import db from '../database/firebase9';
import { Avatar, ListItem } from 'react-native-elements';

export default function ListUser(props) {
    const { navigation } = props;
    const [users, setUsers] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            // Asi lo hace el don, al estilo firebase 8
            /*const obtenerDatos = async () => {
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
            obtenerDatos();*/

            // Asi segun doc de firebase
            const obtenerDatos = async () => {
                let usersList = [];
                const datos = await getDocs(collection(db, 'users'));
                datos.forEach((doc) => {
                    const { name, email, phone } = doc.data();
                    usersList.push({
                        id: doc.id,
                        name,
                        email,
                        phone
                    });
                });
                setUsers(usersList);
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
            {
                users.map((user) => {
                    return (
                        <ListItem
                            key={user.id}
                            bottomDivider
                            onPress={() => {
                                navigation.navigate("DetailUser", {
                                    userId: user.id,
                                });
                            }}>
                            <ListItem.Chevron />
                            <Avatar
                                source={{
                                    uri: "https://img1.ak.crunchyroll.com/i/spire4/be7ccab083087be99884531cadd7d5651630065450_large.png"
                                }}
                                rounded />
                            <ListItem.Content>
                                <ListItem.Title>
                                    <Text>
                                        {user.name}
                                    </Text>
                                </ListItem.Title>
                                <ListItem.Content>
                                    <Text>
                                        {user.email}
                                    </Text>
                                </ListItem.Content>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </View>


    );
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 25,
        color: 'cyan'
    }
})