import React, {useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import db from "../database/firebase9";
import { useFocusEffect } from '@react-navigation/native';
import { Center, Container, Heading, HStack, NativeBaseProvider, VStack } from "native-base";

export default function DetailUser({ navigation, route }) {
  const [user, setUser] = useState([]);
  const {userId}=route.params;
  useFocusEffect(
    React.useCallback(() => {
      const obtenerDetallesUser = async () => {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log(docSnap.data());
            setUser(docSnap.data())
        }else{
            console.log("No existe")
        }
      }

      obtenerDetallesUser();
    }, [])
  );

  return (
    <NativeBaseProvider>
        <Center>
            <Container>
                <Heading mt={5}>
                    <Text>{user.name}</Text>
                </Heading>
                <VStack space={2}>
                    <Text>{user.email}</Text>
                    <Text>{user.phone}</Text>
                </VStack>
            </Container>
        </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 25,
    color: "cyan",
  },
});
