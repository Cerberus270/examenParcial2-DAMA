import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUo8C540aK8NcPnyLfdJIMWTuELYWww9U",
    authDomain: "semana08-react-fire-fcefc.firebaseapp.com",
    projectId: "semana08-react-fire-fcefc",
    storageBucket: "semana08-react-fire-fcefc.appspot.com",
    messagingSenderId: "783737767355",
    appId: "1:783737767355:web:fb58ed89cfe53fc26eb09e"
};

firebase.initializeApp(firebaseConfig)
//Creando componente de conexion 
const db = firebase.firestore()


export default {
    firebase,
    db
};
