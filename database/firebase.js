// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import firebase from 'firebase';
import {getFirestore} from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUo8C540aK8NcPnyLfdJIMWTuELYWww9U",
    authDomain: "semana08-react-fire-fcefc.firebaseapp.com",
    projectId: "semana08-react-fire-fcefc",
    storageBucket: "semana08-react-fire-fcefc.appspot.com",
    messagingSenderId: "783737767355",
    appId: "1:783737767355:web:fb58ed89cfe53fc26eb09e"
};

const app = initializeApp(firebaseConfig);
//Creando componente de conexion 
const db = getFirestore(app);
//Exportarlo para poder usarlo en otras pantallas
export default db;
