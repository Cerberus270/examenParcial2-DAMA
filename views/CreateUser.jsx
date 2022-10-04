import React, { useState, props } from 'react';
import { Input, Stack, FormControl, NativeBaseProvider, Box, ScrollView, Button } from 'native-base';
//Importando el uso de colecciones en Firebase
import { collection, addDoc } from 'firebase/firestore';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
//Importar la conexión a Firebase de nuestro proyecto
import db from '../database/firebase9';

//Agregar Navegacion a la pantalla con "navigation"
export default function CreateUser({ navigation }) {
    //Crear la estructura de nuestra colección (tabla)
    const initialState = {
        name: "",
        email: "",
        phone: "",
    };
    //Empleando el state para poder interacturar con los elementos de la coleccion
    const [state, setState] = useState(initialState);

    //Creando función para captura de valores por teclado
    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    };

    //Agregando funcion asincrona para nuevo usuario
    const saveNewUser = async () => {
        try {
            //addDoc: Agrega un nuevo documento a la coleccion referenciada como 
            //parámetro de collection.
            //with the given data, assigning it a document ID automatically.
            await addDoc(collection(db, "users"), {
                //Tomando el valor del state para la colección
                name: state.name,
                email: state.email,
                phone: state.phone
            });

            //Redireccionando a la pantalla de "Lista de usuarios"
            navigation.navigate('Lista de Usuarios');
        } catch (error) {
            console.log(error);
        }
    };
    //Diseñando la interface de captura de datos 
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box w={"95%"} mt={5} flex={1} p={1} marginLeft={1}>
                    <FormControl>
                        <Stack space={5}>
                            <Stack>
                                <FormControl.Label>Nombre Usuario</FormControl.Label>
                                <Input variant="underlined" keyboardType='number-pad' p={2} placeholder="Tu nombre aqui"
                                onChangeText={(value) => handleChangeText("name", value)}
                                value={state.name}
                                />
                            </Stack>
                            <Stack>
                                <FormControl.Label>Email Usuario</FormControl.Label>
                                <Input variant="underlined" p={2} placeholder="Tu email aqui"
                                onChangeText={(value) => handleChangeText("email", value)}
                                value={state.email}
                                />
                            </Stack>
                            <Stack>
                                <FormControl.Label>Telefono Usuario</FormControl.Label>
                                <Input variant="underlined" keyboardType='number-pad' p={2} placeholder="Tu telefono aqui"
                                onChangeText={(value) => handleChangeText("phone", value)}
                                value={state.phone}
                                />
                            </Stack>
                        </Stack>
                        <Button marginBottom={5} marginTop={5}
                            leftIcon={<Ionicons name='add-circle' size={32} color='green' />}
                            onPress={
                                () => saveNewUser()
                            }>
                            Crear Usuario
                        </Button>
                    </FormControl>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}