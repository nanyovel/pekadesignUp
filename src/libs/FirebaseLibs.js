//addDoc
//  Crear nuevo documentos en coleccion sin tocar la parte de id ni sobreescribir nada
// Primero se crea la referencia, a la cual tenemos el id en el mismo proceso
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const docRef = await addDoc(collection(db, "usuarios"), {
  nombre: "Jose",
  edad: 30,
});

console.log("Documento agregado con ID:", docRef.id);

// setDoc
// permite especificar id y si ya estaba creado lo sobreescribe
// Si no le colocas el tercer parametro que es el id, entonces crea uno automatico
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const docRef2 = doc(db, "usuarios", "usuario123"); // Especificamos el ID
await setDoc(docRef2, {
  nombre: "Jose",
  edad: 30,
});

console.log("Documento agregado o actualizado");
