// Importa las funciones necesarias de Firebase
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
  } from "firebase/auth";
  import app from "./FirebaseConfig.jsx"; // Asegúrate de que este archivo exporta la instancia de Firebase
  
  // Inicializar autenticación
  export const auth = getAuth(app);
  
  // Función para iniciar sesión
  export function firebaseLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  // Función para registrar un nuevo usuario
  export function firebaseRegistro(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  // Función para cerrar sesión
  export function firebaseLogout() {
    return signOut(auth);
  }
  
  // Escuchar cambios en el estado de autenticación (opcional)
  export function onAuthStateListener(callback) {
    return onAuthStateChanged(auth, callback);
  }
  