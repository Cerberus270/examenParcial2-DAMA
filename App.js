import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListUser from "./views/ListUser";
import CreateUser from "./views/CreateUser";
//import DetailUser from "./views/DetailUser";


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Lista de Usuarios" component={ListUser} options={{title: "Listado de Usuarios"}} />
        <Stack.Screen name ="CreateUser" component={CreateUser} options={{title: "Crear Usuario"}}/>
        {/* <Stack.Screen name ="Detalle de Usuarios" component={DetailUser}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}