import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import {
  BtnGeneral,
  InputGeneral,
  TextAreaGeneral,
} from "../ElementosGenerales";
import BotonQuery from "../BotonQuery";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import db, { storage } from "../../firebase/firebaseConfig";
import { PostSchema } from "../../model/PostSchema";
import { ES6AFormat } from "../../libs/FechaFormat";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function CajaNuevoBlog() {
  const initialValue = {
    titulo: "",
    imagenDestacada: "",
    parrafoPrincipalResumido: "",
    keyWords: "",
  };
  const [valuePost, setValuePost] = useState({ ...initialValue });
  const handleInput = (e) => {
    const { value, name } = e.target;
    let valueParsed = "";

    setValuePost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generarSlug = (texto) => {
    return texto
      .toLowerCase() // Convierte todo a minúsculas
      .replace(/á|à|ä|â/g, "a") // Reemplaza acentos
      .replace(/é|è|ë|ê/g, "e")
      .replace(/í|ì|ï|î/g, "i")
      .replace(/ó|ò|ö|ô/g, "o")
      .replace(/ú|ù|ü|û/g, "u")
      .replace(/ñ/g, "n") // Reemplaza la ñ por n
      .replace(/[^a-z0-9\s-]/g, "") // Elimina caracteres especiales
      .trim() // Elimina espacios en los extremos
      .replace(/\s+/g, "-") // Reemplaza espacios por guiones
      .replace(/-+/g, "-"); // Evita múltiples guiones seguidos
  };

  //   Manejo de la imagen principal
  const [fileImgDestacada, setFileImgDestacada] = useState(null);
  const handleFile = (e) => {
    setFileImgDestacada(e.target.files[0]);
  };
  const enviarObjeto = async () => {
    // SI algun campo esta vacio
    // SI algun campo esta vacio
    // SI algun campo esta vacio

    try {
      const docRef = doc(collection(db, "post"));
      const tituloSlug = generarSlug(valuePost.titulo);

      // Palabras clave
      const keyWordsSinEspacios = valuePost.keyWords.replaceAll(" ", ",");
      const texto = keyWordsSinEspacios;
      const textoSinComasRepetidas = texto.replace(/,+/g, ",");
      const textoMin = textoSinComasRepetidas.toLowerCase();
      const urlArray = textoMin.split(",");

      await setDoc(docRef, {
        ...PostSchema,
        ...valuePost,
        createAt: ES6AFormat(new Date()),
        timestamp: Timestamp.fromDate(new Date()),
        url: tituloSlug,
        keyWords: urlArray,
      });
      setValuePost({ ...initialValue });

      try {
        // Cargar foto de perfil
        const nombreFoto = "imgPost/" + tituloSlug + "__imgDestacada";
        const storageRefFoto = ref(storage, nombreFoto);
        const postActualizar = doc(db, "post", docRef.id);
        if (fileImgDestacada) {
          await uploadBytes(storageRefFoto, fileImgDestacada).then(() => {}); // Ahora entregame la url de la foto  y colocasela en una propiedad del objeto a actulizar en la base de datos
          getDownloadURL(ref(storage, storageRefFoto)).then((url) =>
            updateDoc(postActualizar, {
              imagenDestacada: url,
            })
          );
        }
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <BotonQuery valuePost={valuePost} />
      <CajaInput>
        <TituloInput>Titulo</TituloInput>
        <Input
          value={valuePost.titulo}
          name="titulo"
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="Titulo del post"
          autoComplete="off"
        />
      </CajaInput>
      <CajaInput>
        <TituloInput>Imagen destacada</TituloInput>
        <Input
          type="file"
          name="imagenDestacada"
          accept="image/*"
          onChange={handleFile}
        />
      </CajaInput>
      <CajaInput>
        <TituloInput>Parrafo principal</TituloInput>
        <Textarea
          value={valuePost.parrafoPrincipalResumido}
          name="parrafoPrincipalResumido"
          onChange={(e) => handleInput(e)}
          placeholder="Parrafo principal"
          autoComplete="off"
        />
      </CajaInput>

      <CajaInput>
        <TituloInput>Palabras claves (separadas por coma (,))</TituloInput>
        <Input
          value={valuePost.keyWords}
          name="keyWords"
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="Palabras claves"
          autoComplete="off"
        />
      </CajaInput>
      <CajaInput>
        <BtnSimple onClick={() => enviarObjeto()}>Aceptar</BtnSimple>
      </CajaInput>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 200px;
`;

const CajaInput = styled.div`
  width: 100%;
  margin-bottom: 10px;
  &.btn {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin-bottom: 40px; */
  }
  &.links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  &.checkbox {
    min-height: 25px;
    /* border: 1px solid red; */
    padding: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
  }
`;

const TituloInput = styled.p`
  color: ${theme.complementary.midnightBlue};
`;
const Input = styled(InputGeneral)`
  &.checkbox {
    background-color: red;
    width: 20px;
  }
  &.danger {
    color: ${theme.secondary.coral};
    border: 1px solid red;
  }
  &.none {
    display: none;
  }
  &.radio {
    width: 15px;
    &:focus {
      border: 1px solid black;
      width: 25px;
    }
  }
`;
const Textarea = styled(TextAreaGeneral)`
  resize: vertical;
`;
const BtnSimple = styled(BtnGeneral)``;
