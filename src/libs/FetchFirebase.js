import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import db from "../firebase/firebaseConfig";
// import { useAuth } from "../context/AuthContext";
// useEffect(() => {
//   (async () => {
//     const listaBlogAux = await fetchGetDocsLimit(
//       "post",
//       "timestamp",
//       "desc",
//       10
//     );
//     console.log(listaBlogAux);
//     setListaBlog(listaBlogAux);
//     setDatosParseados(true);
//   })();
// }, []);

// ************************** DAME SOLO UN DOC POR ID CON ESCUCHADOR **************************

export const useDocById = (collectionName, setState, idUsuario) => {
  useEffect(() => {
    if (true) {
      console.log("DB 😐😐😐😐😐" + collectionName);
      const unsub = onSnapshot(doc(db, collectionName, idUsuario), (doc) => {
        let retornar = null;

        if (doc.exists()) {
          retornar = { ...doc.data(), id: doc.id };
        }
        setState(retornar);
        return retornar;
      });
      // Devolver una función de limpieza para detener la escucha cuando el componente se desmonte
      return () => unsub();
    } else {
      setState(null);
    }
  }, [collectionName, setState, idUsuario]);
};

// ****************** DOCUMENTOS SIN ESCUCHADOR **********************
export const fetchGetDocsw = async (collectionName, condicionesDB) => {
  console.log("DB 😐😐😐😐😐" + collectionName);
  console.log(condicionesDB);
  const q =
    condicionesDB.length > 0
      ? query(
          collection(db, collectionName),
          ...condicionesDB.map((condicion) =>
            where(condicion.propiedad, condicion.operador, condicion.valor)
          )
        )
      : query(collection(db, collectionName));

  try {
    const consultaDB = await getDocs(q);

    const coleccion = consultaDB.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return coleccion;
  } catch (error) {
    console.log(error);
  }
};

// ****************** DOCUMENTOS con ESCUCHADOR con limite **********************
export const fetchGetDocsLimitadoListen = async (
  collectionName,
  condicionesDB,
  limite
) => {
  console.log("DB 😐😐😐😐😐" + collectionName);

  const q = query(
    collection(db, collectionName),
    ...condicionesDB.map((condicion) =>
      where(condicion.propiedad, condicion.operador, condicion.valor)
    ),
    limit(limite)
  );

  try {
    const consultaDB = await getDocs(q);

    const coleccion = consultaDB.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return coleccion;
  } catch (error) {
    console.log(error);
  }
};

// ****************** DOCUMENTOS CON ESCUCHADOR **********************
export const fetchOnSnapLimitadoListen = (
  collectionName,
  condicionesDB,
  setState,
  limite
) => {
  console.log("DB 😐😐😐😐😐" + collectionName);

  const q = query(
    collection(db, collectionName),

    ...condicionesDB.map((condicion) =>
      where(condicion.propiedad, condicion.operador, condicion.valor)
    ),
    limit(limite)
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const coleccion = [];
    querySnapshot.forEach((doc) => {
      coleccion.push({ ...doc.data(), id: doc.id });
    });
    setState(coleccion);
  });

  return unsubscribe;
};

// ********* DAME UN UNICO DOC POR SU ID Y SIN ESCUCHADOR **********
export const obtenerDocPorId = async (collectionName, idDoc) => {
  console.log("DB 😐😐😐😐😐" + collectionName);
  try {
    const docRef = doc(db, collectionName, idDoc);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const documento = docSnap.data();
      return { ...documento, id: idDoc };
    } else {
      console.log("No se encontró el documento con ese ID.");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
// ********* DAME UNA LISTA DE DOCUMENTOS SEGUN UNA LISTA DE ID **********
export const obtenerDocPorIdFromIds = async (collectionName, ids) => {
  console.log("DB 😐😐😐😐😐" + collectionName);
  try {
    const promesas = ids.map(async (id) => {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
    });
    const documentos = await Promise.all(promesas);
    return documentos;
  } catch (error) {
    console.log(error);
  }
};

// ****************** ULTIMOS DOCUMENTOS SIN ESCUCHADOR **********************
export const fetchGetDocsLimit = async (
  collectionName,
  propiedad,
  tipo,
  limite
) => {
  console.log("DB 😐😐😐😐😐" + collectionName);

  const postsRef = collection(db, collectionName);
  // const postsQuery = query(postsRef, orderBy("createdAt", "desc"), limit(10));
  // const q = query(postsRef, orderBy(propiedad, tipo), limit(limite));
  const q = query(postsRef, orderBy(propiedad, tipo), limit(limite));

  try {
    const consultaDB = await getDocs(q);

    const coleccion = consultaDB.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return coleccion;
  } catch (error) {
    console.log(error);
  }
};

// *********************** por rango de fecha y palabras claves **************************
export const fetchFindAnyContains = async (
  collectionName,
  condicionesDB,
  limite
) => {
  console.log("DB 😐😐😐😐😐" + collectionName);
  const postsRef = collection(db, collectionName);
  const q = query(
    postsRef,
    ...condicionesDB.map((condicion) =>
      where(condicion.propiedad, condicion.operador, condicion.valor)
    ),
    limit(limite)
  );

  try {
    const consultaDB = await getDocs(q);

    const coleccion = consultaDB.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return coleccion;
  } catch (error) {
    console.log(error);
    return "error";
  }
};
