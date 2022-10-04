import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import db from "../database/firebase9";
import { useFocusEffect } from "@react-navigation/native";
import {
  NativeBaseProvider,
  ScrollView,
  Box,
  FormControl,
  Stack,
  Input,
  Button,
} from "native-base";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function DetailUser({ navigation, route }) {
  const [user, setUser] = useState([]);
  const { userId } = route.params;
  useFocusEffect(
    React.useCallback(() => {
      const obtenerDetallesUser = async () => {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data());
          setUser(docSnap.data());
        } else {
          console.log("No existe");
        }
      };

      obtenerDetallesUser();
    }, [])
  );

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const updateUser = async () => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
      navigation.navigate("Lista de Usuarios");
    } catch (error) {
      console.log("Ocurrio un error");
    }
  };

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
                        value={user.name}
                        />
                    </Stack>
                    <Stack>
                        <FormControl.Label>Email Usuario</FormControl.Label>
                        <Input variant="underlined" p={2} placeholder="Tu email aqui"
                        onChangeText={(value) => handleChangeText("email", value)}
                        value={user.email}
                        />
                    </Stack>
                    <Stack>
                        <FormControl.Label>Telefono Usuario</FormControl.Label>
                        <Input variant="underlined" keyboardType='number-pad' p={2} placeholder="Tu telefono aqui"
                        onChangeText={(value) => handleChangeText("phone", value)}
                        value={user.phone}
                        />
                    </Stack>
                </Stack>
                <Button marginBottom={5} marginTop={5}
                    leftIcon={<Ionicons name='checkmark-circle-outline' size={32} color='green' />}
                    onPress={
                        () => updateUser()
                    }>
                    Modificar
                </Button>
            </FormControl>
        </Box>
    </ScrollView>
</NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 25,
    color: "cyan",
  },
});
