import { auth, firestore } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function saveUserData(data) {
  const user = auth.currentUser;

  if (user) {
    try {
      // Crear o actualizar documento en la colección 'usuarios' usando el UID del usuario
      await setDoc(doc(firestore, "usuarios", user.uid), data, { merge: true });
      console.log("Datos del usuario guardados exitosamente");
    } catch (error) {
      console.error("Error al guardar datos del usuario:", error);
    }
  } else {
    console.log("No hay usuario autenticado");
  }
}