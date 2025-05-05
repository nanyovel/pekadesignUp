import React, { useEffect, useState } from "react";
import styled from "styled-components";

import {
  BtnGeneral,
  InputGeneral,
  MenuDesplegable,
  Opciones,
  TextAreaGeneral,
} from "./ElementosGenerales";

import {
  addDoc,
  collection,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import imageCompression from "browser-image-compression";

import db, { storage } from "../firebase/firebaseConfig";
import { ES6AFormat } from "../libs/FechaFormat";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { AreasPropiedades, TipoLugaresCercanos } from "../libs/Corporativo";
import { PropsSchema } from "../model/PropsSchema";
import ListaAmenidades from "../libs/ListaAmenidades";
import { generarSlug } from "../libs/StringS";
import Modal from "./Modal";
import { ModalLoading } from "./ModalLoading";
import { theme } from "../config/theme";
import BotonQuery from "./BotonQuery";

export default function CajaNuevaPropiedad() {
  const [isLoading, setIsLoading] = useState(false);

  const valueOpcionFotoArea = {
    ...PropsSchema.areas[0].fotos[0],
    // ❌❌❌Estas dos propiedades son provisionales y no debe ser subida a la base de datos❌❌❌
    fotosAreaUrlLocal: [],
    filesImg: [],
  };
  const valueOpcionFotoLugar = {
    ...PropsSchema.lugaresCercano[0].lugares[0],
    // ❌❌❌Estas dos propiedades son provisionales y no debe ser subida a la base de datos❌❌❌
    fotosLugarUrlLocal: [],
    filesImg: [],
  };
  const initialValue = {
    ...PropsSchema,
    areas: AreasPropiedades.map((area, index) => {
      return {
        ...area,
        area: area.nombre,
        select: false,

        fotos: [
          { ...valueOpcionFotoArea },
          { ...valueOpcionFotoArea },
          { ...valueOpcionFotoArea },
          { ...valueOpcionFotoArea },
          { ...valueOpcionFotoArea },
        ],
      };
    }),
    amenidades: ListaAmenidades.map((am, index) => {
      return {
        ...am,
        disponible: true,
        resumida: am.resumida == true,
      };
    }),
    textoCopy: {
      ...PropsSchema.textoCopy,
      parrafos: [
        ...PropsSchema.textoCopy.parrafos,
        ...PropsSchema.textoCopy.parrafos,
        ...PropsSchema.textoCopy.parrafos,
      ],
    },
    lugaresCercano: TipoLugaresCercanos.map((lugar, index) => {
      return {
        ...lugar,
        icono: "",
        tipo: lugar.nombre,
        select: false,
        lugares: [
          { ...valueOpcionFotoLugar },
          { ...valueOpcionFotoLugar },
          { ...valueOpcionFotoLugar },
          { ...valueOpcionFotoLugar },
          { ...valueOpcionFotoLugar },
        ],
      };
    }),

    keyWords: "",
  };

  const [valueInputProps, setValueInputProps] = useState(null);
  const [datosParsed, setDatosParsed] = useState(false);
  useEffect(() => {
    setValueInputProps({ ...initialValue });
    setDatosParsed(true);
  }, []);

  const handleInput = (e) => {
    const { value, name } = e.target;
    const tipoData = e.target.dataset.tipo;
    const indexData = e.target.dataset.index;

    if (tipoData == "areas") {
      if (name == "area") {
        const nuevaAreas = valueInputProps.areas.map((opcion, index) => {
          if (value == opcion.area) {
            return {
              ...opcion,
              select: true,
            };
          } else {
            return { ...opcion, select: false };
          }
        });

        setValueInputProps({
          ...valueInputProps,
          areas: [...nuevaAreas],
        });
      } else if (name == "textoImagen") {
        setValueInputProps((prevState) => ({
          ...prevState,
          areas: prevState.areas.map((area, index) => {
            if (area.select == true) {
              return {
                ...area,
                fotos: area.fotos.map((foto, i) => {
                  if (i == indexData) {
                    return {
                      ...foto,
                      texto: value,
                    };
                  } else {
                    return foto;
                  }
                }),
              };
            } else {
              return area;
            }
          }),
        }));
      } else if (name == "otra" || name == "subTextoImagen") {
        if (name == "otra") {
          setValueOtra({
            ...valueOtra,
            area: value,
          });
        } else if (name == "subTextoImagen") {
          setValueOtra({
            ...valueOtra,
            fotos: valueOtra.fotos.map((foto, index) => {
              if (index == indexData) {
                return {
                  ...foto,
                  texto: value,
                };
              } else {
                return foto;
              }
            }),
          });
        }
      } else if (name == "resumida") {
        setValueInputProps((prevState) => ({
          ...prevState,
          areas: prevState.areas.map((area, index) => {
            if (area.select == true) {
              return {
                ...area,
                fotos: area.fotos.map((foto, i) => {
                  if (i == indexData) {
                    return {
                      ...foto,
                      resumida: e.target.checked,
                    };
                  } else {
                    return foto;
                  }
                }),
              };
            } else {
              return area;
            }
          }),
        }));
      }
    } else if (tipoData == "principales") {
      setValueInputProps({
        ...valueInputProps,
        principales: {
          ...valueInputProps.principales,
          [name]: {
            ...valueInputProps.principales[name],
            qty: value,
          },
        },
      });
    } else if (tipoData == "amenidades") {
      if (name == "resumida") {
        setValueInputProps({
          ...valueInputProps,
          amenidades: valueInputProps.amenidades.map((am, index) => {
            return {
              ...am,
              resumida: index == indexData ? e.target.checked : am.resumida,
              disponible:
                index == indexData
                  ? e.target.checked == true
                    ? true
                    : am.disponible
                  : am.disponible,
            };
          }),
        });
      } else if (name == "disponible") {
        setValueInputProps({
          ...valueInputProps,
          amenidades: valueInputProps.amenidades.map((am, index) => {
            return {
              ...am,
              disponible: index == indexData ? e.target.checked : am.disponible,
            };
          }),
        });
      }
    } else if (tipoData == "textoCopy") {
      if (name == "tituloPrincipal" || name == "copyResumido") {
        setValueInputProps((prevState) => ({
          ...prevState,
          textoCopy: {
            ...prevState.textoCopy,
            [name]: value,
          },
        }));
      } else {
        setValueInputProps((prevState) => ({
          ...prevState,
          textoCopy: {
            ...prevState.textoCopy,
            parrafos: prevState.textoCopy.parrafos.map((parrafo, index) => {
              return {
                ...parrafo,
                [name]: index == indexData ? value : parrafo[name],
              };
            }),
          },
        }));
      }
    } else if (tipoData == "lugaresCercano") {
      if (name == "lugar") {
        const lugarAux = valueInputProps.lugaresCercano.map((opcion, index) => {
          if (value == opcion.tipo) {
            return {
              ...opcion,
              select: true,
            };
          } else {
            return { ...opcion, select: false };
          }
        });
        console.log(lugarAux);
        setValueInputProps({
          ...valueInputProps,
          lugaresCercano: [...lugarAux],
        });
      } else if (name == "otroTipoLugar") {
        setValueOtroTipoLugar({
          ...valueOtroTipoLugar,
          tipo: value,
        });
      } else {
        const romo = {
          ...valueInputProps,
          lugaresCercano: valueInputProps.lugaresCercano.map((tipoLugar, i) => {
            if (tipoLugar.select) {
              return {
                ...tipoLugar,
                lugares: tipoLugar.lugares.map((place, i) => {
                  return {
                    ...place,
                    [name]: indexData == i ? value : place[name],
                  };
                }),
              };
            } else {
              return tipoLugar;
            }
          }),
        };
        console.log(romo);
        setValueInputProps(romo);
      }
    } else {
      setValueInputProps((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  // ********** CARGA DE IMAGENES **********
  const handleFile = (e) => {
    const { name, files } = e.target;
    const indexData = e.target.dataset.index;
    if (files) {
      if (name == "imagenDestacada") {
        const archivo = files[0];
        const imgUrl = URL.createObjectURL(archivo);
        setValueInputProps((prevState) => ({
          ...prevState,
          imagenDestacada: imgUrl,

          fileImgDestacada: archivo,
        }));
      } else if (name == "imagenArea") {
        const archivo = files[0];
        const imgUrl = URL.createObjectURL(archivo);

        setValueInputProps((prevState) => ({
          ...prevState,
          areas: prevState.areas.map((area) => {
            if (area.select) {
              return {
                ...area,
                fotos: area.fotos.map((foto, i) => {
                  if (i == indexData) {
                    return {
                      ...foto,
                      fotosAreaUrlLocal: imgUrl,
                      filesImg: archivo,
                    };
                  } else {
                    return foto;
                  }
                }),
              };
            } else {
              return area;
            }
          }),
        }));
      } else if (name == "logo") {
        const archivo = files[0];
        const imgUrl = URL.createObjectURL(archivo);
        setValueInputProps((prevState) => ({
          ...prevState,
          lugaresCercano: prevState.lugaresCercano.map((lugar) => {
            if (lugar.select) {
              return {
                ...lugar,
                lugares: lugar.lugares.map((place, i) => {
                  if (i == indexData) {
                    return {
                      ...place,
                      fotosAreaUrlLocal: imgUrl,
                      filesImg: archivo,
                    };
                  } else {
                    return place;
                  }
                }),
              };
            } else {
              return lugar;
            }
          }),
        }));
      }
    } else if (name == "quitarFoto") {
      console.log("as");
      setValueInputProps((prevState) => ({
        ...prevState,
        areas: prevState.areas.map((area) => {
          if (area.select) {
            return {
              ...area,
              fotos: area.fotos.map((foto, i) => {
                if (i == indexData) {
                  return {
                    ...foto,
                    fotosAreaUrlLocal: "",
                    filesImg: [],
                    texto: "",
                  };
                } else {
                  return foto;
                }
              }),
            };
          } else {
            return area;
          }
        }),
      }));
    }
  };

  // ********** SOBRE AREAS **********
  const [hasModal, setHasModal] = useState(false);
  const [imagenesSelectArea, setImagenesSelectArea] = useState([]);

  // nueva area
  const initialOtra = {
    ...initialValue.areas[0],
    area: "",
  };
  const [valueOtra, setValueOtra] = useState({ ...initialOtra });
  //
  const initialOtroTipoLugar = {
    ...initialValue.lugaresCercano[0],
    tipo: "",
  };
  const [valueOtroTipoLugar, setValueOtroTipoLugar] = useState({
    ...initialOtroTipoLugar,
  });

  const handleBtnsSome = (e) => {
    const { name } = e.target;
    console.log(name);
    // ***Areas****
    if (name == "addOtra") {
      const areas = [...valueInputProps.areas, valueOtra];
      setValueInputProps({
        ...valueInputProps,
        areas: areas,
      });
      setValueOtra({ ...initialOtra });
    } else if (name == "verFotos") {
      setHasModal(true);
      const areaSelect = valueInputProps.areas.find((area) => area.select);

      setImagenesSelectArea(areaSelect.fotos);
    }
    // ***Lugares Cercanos****
    else if (name == "verLugar") {
      setHasModal(true);
      const areaSelect = valueInputProps.areas.find((area) => area.select);

      setImagenesSelectArea(areaSelect.fotos);
    }
    if (name == "addOtroTipoLugar") {
      const tipoLugar = [...valueInputProps.lugaresCercano, valueOtroTipoLugar];
      setValueInputProps({
        ...valueInputProps,
        lugaresCercano: tipoLugar,
      });
      setValueOtroTipoLugar({ ...initialOtroTipoLugar });
    }
  };

  // verificar
  const anchoIconos = "2rem";

  const enviarObjeto = async () => {
    // SI algun campo esta vacio

    // FILTROS----ELIMINAR PROPIEDADES QUE NO NECESITE
    const { fileImgDestacada, imagenDestacada, ...valueParsedImgDest } =
      valueInputProps;

    // ----AMENIDADES
    const valueParsedAmenidades = {
      ...valueParsedImgDest,
      amenidades: valueParsedImgDest.amenidades
        .map((am, index) => {
          return {
            ...am,
            icono: "",
          };
        })
        .filter((ame, index) => {
          if (ame.disponible) {
            return {
              ...ame,
            };
          }
        }),
    };

    const subirImagen = async (file, nombre) => {
      if (file?.name) {
        // Comprimir imagenes
        // Configuración de compresión
        // const options = {
        //   maxSizeMB: 0.6, // Tamaño máximo en MB (ajusta según lo necesites)
        //   maxWidthOrHeight: 1200, // Ancho o alto máximo en px
        //   useWebWorker: true,
        // };
        // Comprimir la imagen
        // const compressedFile = await imageCompression(file, options);

        const storageRef = ref(storage, `imgProps/${nombre}-${Date.now()}`);
        await uploadBytes(storageRef, file);
        return getDownloadURL(storageRef);
      } else {
        return "";
      }
    };
    // return;
    try {
      setIsLoading(true);
      const urlGeneradaImgDestacada = await subirImagen(
        valueInputProps.fileImgDestacada,
        "imgDestacada"
      );

      // ****AREAS*****
      // PARSEAR LAS FOTOS DE LAS AREAS Y GENERAL LAS URLS
      const arrayAreas = await Promise.all(
        valueInputProps.areas.map(async (area) => {
          const fotosConURLs = await Promise.all(
            area.fotos
              .filter((foto) => {
                if (foto.filesImg.name) {
                  return { ...foto };
                }
              })
              .map(async (foto) => {
                console.log(foto.filesImg.length);
                console.log(foto.filesImg.name);
                const url = await subirImagen(foto.filesImg, foto.texto);

                const {
                  fotosAreaUrlLocal,
                  fotosLugarUrlLocal,
                  filesImg,
                  ...fotoParsed
                } = foto;

                return { ...fotoParsed, url: url }; // Reemplaza fileImg con la URL
              })
          );
          console.log(fotosConURLs);

          return { ...area, fotos: fotosConURLs };
        })
      );
      console.log(arrayAreas);
      const arrayAreasFilter = arrayAreas.filter((area) => {
        if (area.fotos.length > 0) {
          return area;
        }
      });

      // ****** LUGARESCERCANOS ****
      // PARSEAR LAS FOTOS DE LUGARES CERCANOS Y GENERAL LAS URLS
      const arrayLugares = await Promise.all(
        valueInputProps.lugaresCercano.map(async (lugar) => {
          const fotosConURLs = await Promise.all(
            lugar.lugares
              .filter((place) => {
                if (place.filesImg.name) {
                  return { ...place };
                }
              })
              .map(async (place) => {
                const url = await subirImagen(place.filesImg, place.texto);

                const {
                  fotosAreaUrlLocal,
                  fotosLugarUrlLocal,
                  filesImg,
                  ...placeParsed
                } = place;

                return { ...placeParsed, logo: url }; // Reemplaza fileImg con la URL
              })
          );
          return { ...lugar, lugares: fotosConURLs };
        })
      );

      console.log(arrayLugares);

      const arrayLugaresCercanoFilter = arrayLugares.filter((lugar) => {
        if (lugar.lugares.length > 0) {
          return lugar;
        }
      });
      console.log(arrayLugaresCercanoFilter);
      const tituloSlug = generarSlug(valueParsedAmenidades.titulo);
      // const docRef = doc(collection(db, "propiedades"));
      const docRef = collection(db, "propiedades");

      const doSubir = {
        ...PropsSchema,
        ...valueParsedAmenidades,
        urlFotoDestacada: urlGeneradaImgDestacada,
        areas: arrayAreasFilter,
        lugaresCercano: arrayLugaresCercanoFilter,
        createAt: ES6AFormat(new Date()),
        timestamp: Timestamp.fromDate(new Date()),
        url: tituloSlug,
      };
      console.log(doSubir);

      await addDoc(docRef, doSubir);
      setValueInputProps({ ...initialValue });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    datosParsed && (
      <Container>
        <BotonQuery
          valueInputProps={valueInputProps}
          valueOtra={valueOtra}
          ListaAmenidades={ListaAmenidades}
        />
        <CajaInput>
          <TituloInput>Titulo</TituloInput>
          <Input
            value={valueInputProps.titulo}
            name="titulo"
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Titulo de la propiedad"
            autoComplete="off"
          />
        </CajaInput>
        <CajaInput>
          <TituloInput>Subtitulo</TituloInput>
          <Input
            value={valueInputProps.subTitulo}
            name="subTitulo"
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Subtitulo del la propiedad"
            autoComplete="off"
          />
        </CajaInput>
        <CajaInput>
          <TituloInput>Imagen destacada</TituloInput>
          <CajaImagenDestaca>
            <ImgDestacada src={valueInputProps.imagenDestacada} />
          </CajaImagenDestaca>
          <Input
            type="file"
            name="imagenDestacada"
            accept="image/*"
            onChange={(e) => handleFile(e)}
          />
        </CajaInput>

        <CajaInput>
          <TituloInput>Fotos de las areas:</TituloInput>
          <SubCajaInputN1 className="colum">
            <WrapInputRow>
              <CajaInput className="internalN1">
                <TituloInternoN2>Area</TituloInternoN2>
                <MenuDespSimple
                  value={
                    valueInputProps.areas.find((opcion) => opcion.select)
                      ?.area || ""
                  }
                  name="area"
                  onChange={(e) => handleInput(e)}
                  data-tipo={"areas"}
                >
                  <Opciones disabled defaultValue value={""}>
                    Seleccione area
                  </Opciones>
                  {valueInputProps.areas.map((opcion, index) => {
                    return (
                      <Opciones key={index} value={opcion.area}>
                        {opcion.area}
                      </Opciones>
                    );
                  })}
                </MenuDespSimple>
              </CajaInput>
              <CajaInput className="internalN1">
                <TituloInternoN2>Add area</TituloInternoN2>
                <Input
                  value={valueOtra.area}
                  name="otra"
                  onChange={(e) => handleInput(e)}
                  data-tipo="areas"
                />
                <BtnSimple
                  name="addOtra"
                  onClick={(e) => {
                    handleBtnsSome(e);
                  }}
                >
                  +
                </BtnSimple>
              </CajaInput>
            </WrapInputRow>
            <CajaTabla>
              <Tabla>
                <thead>
                  <Filas className="cabeza">
                    <CeldaHead>N°</CeldaHead>
                    <CeldaHead>Titulo</CeldaHead>
                    <CeldaHead>Img</CeldaHead>
                    <CeldaHead>Ver</CeldaHead>
                    <CeldaHead>Quitar</CeldaHead>
                    <CeldaHead>Resumida</CeldaHead>
                  </Filas>
                </thead>
                <tbody>
                  {"" ||
                    valueInputProps.areas
                      .find((area) => area.select)
                      ?.fotos.map((foto, index) => {
                        return (
                          <Filas key={index} className="body">
                            <CeldasBody>{index + 1}</CeldasBody>
                            <CeldasBody>
                              <Input
                                data-tipo="areas"
                                name="textoImagen"
                                className="tabla"
                                value={foto.texto}
                                data-index={index}
                                onChange={(e) => handleInput(e)}
                              />
                            </CeldasBody>

                            <CeldasBody>
                              <Input
                                className="tabla"
                                data-index={index}
                                name="imagenArea"
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFile(e)}
                              />
                            </CeldasBody>
                            <CeldasBody>
                              <BtnSimple
                                onClick={(e) => handleBtnsSome(e)}
                                className="tabla"
                                name="verFotos"
                              >
                                Ver
                              </BtnSimple>
                            </CeldasBody>
                            <CeldasBody>
                              <BtnSimple
                                onClick={(e) => handleFile(e)}
                                className="tabla"
                                name="quitarFoto"
                                data-index={index}
                              >
                                Quitar
                              </BtnSimple>
                            </CeldasBody>
                            <CeldasBody>
                              <Input
                                checked={foto.resumida}
                                onChange={(e) => handleInput(e)}
                                className="checkbox"
                                name="resumida"
                                type="checkbox"
                                data-tipo={"areas"}
                                data-index={index}
                              />
                            </CeldasBody>
                          </Filas>
                        );
                      })}
                </tbody>
              </Tabla>
            </CajaTabla>
          </SubCajaInputN1>
        </CajaInput>

        <CajaInput>
          <TituloInput>Principales</TituloInput>
          <SubCajaInputN1 className="row">
            <CajaInput className="mitad">
              <TituloInternoN1>Cantidad de huespedes</TituloInternoN1>
              <Input
                value={valueInputProps.principales.huespedes.qty}
                name="huespedes"
                onChange={(e) => handleInput(e)}
                placeholder="Huespedes"
                autoComplete="off"
                data-tipo={"principales"}
              />
            </CajaInput>
            <CajaInput className="mitad">
              <TituloInternoN1>Cantidad de habitaciones</TituloInternoN1>
              <Input
                value={valueInputProps.principales.habitaciones.qty}
                name="habitaciones"
                onChange={(e) => handleInput(e)}
                placeholder="Habitaciones"
                autoComplete="off"
                data-tipo={"principales"}
              />
            </CajaInput>
            <CajaInput className="mitad">
              <TituloInternoN1>Cantidad de camas</TituloInternoN1>
              <Input
                value={valueInputProps.principales.camas.qty}
                name="camas"
                onChange={(e) => handleInput(e)}
                placeholder="Huespedes"
                autoComplete="off"
                data-tipo={"principales"}
              />
            </CajaInput>
            <CajaInput className="mitad">
              <TituloInternoN1>Cantidad de baños</TituloInternoN1>
              <Input
                value={valueInputProps.principales.bannios.qty}
                name="bannios"
                onChange={(e) => handleInput(e)}
                placeholder="Habitaciones"
                autoComplete="off"
                data-tipo={"principales"}
              />
            </CajaInput>
          </SubCajaInputN1>
        </CajaInput>
        <CajaInput className="padding">
          <TituloInput>Amenidades</TituloInput>
          <SubCajaInputN1 className="mediana">
            <CajaTabla>
              <Tabla>
                <thead>
                  <Filas className="cabeza">
                    <CeldaHead>N°</CeldaHead>
                    <CeldaHead>Categoria</CeldaHead>
                    <CeldaHead>Icono</CeldaHead>
                    <CeldaHead>Descripcion</CeldaHead>
                    <CeldaHead>Resumido</CeldaHead>
                    <CeldaHead>Disponible</CeldaHead>
                  </Filas>
                </thead>
                <tbody>
                  {valueInputProps.amenidades.map((am, index) => {
                    return (
                      <Filas key={index}>
                        <CeldasBody>{index + 1}</CeldasBody>
                        <CeldasBody> {am.categoria} </CeldasBody>
                        <CeldasBody>
                          {am.iconoImg ? (
                            <ImgIcon $width={anchoIconos} src={am.icono} />
                          ) : (
                            <am.icono
                              width={anchoIconos}
                              color={theme.secondary.coral}
                            />
                          )}
                        </CeldasBody>

                        <CeldasBody> {am.texto} </CeldasBody>
                        <CeldasBody>
                          <Input
                            checked={am.resumida}
                            onChange={(e) => handleInput(e)}
                            className="checkbox"
                            name="resumida"
                            type="checkbox"
                            data-tipo={"amenidades"}
                            data-index={index}
                          />
                        </CeldasBody>
                        <CeldasBody>
                          <Input
                            checked={am.disponible}
                            onChange={(e) => handleInput(e)}
                            className="checkbox"
                            name="disponible"
                            type="checkbox"
                            data-tipo={"amenidades"}
                            data-index={index}
                          />
                        </CeldasBody>
                      </Filas>
                    );
                  })}
                </tbody>
              </Tabla>
            </CajaTabla>
          </SubCajaInputN1>
        </CajaInput>
        <CajaInput>
          <TituloInput>Texto copy</TituloInput>
          <SubCajaInputN1 className="colum">
            <CajaInput className="internalN1 ancho100">
              <TituloInternoN1>Titulo principal</TituloInternoN1>
              <Input
                value={valueInputProps.textoCopy.tituloPrincipal}
                name="tituloPrincipal"
                onChange={(e) => handleInput(e)}
                placeholder="Titulo principal texto copy"
                autoComplete="off"
                data-tipo={"textoCopy"}
              />
            </CajaInput>
            <CajaInput className="internalN1 ancho100">
              <TituloInternoN1>Texto resumido</TituloInternoN1>
              <Textarea
                value={valueInputProps.textoCopy.copyResumido}
                name="copyResumido"
                onChange={(e) => handleInput(e)}
                placeholder="Resumen texto copy"
                autoComplete="off"
                data-tipo={"textoCopy"}
              />
            </CajaInput>
            <CajaInput className="internalN1 ancho100 scroll">
              <CajaSubInternalN2 className="parrafo">
                <TituloInternoN1 className=" romo">Parrafo 1</TituloInternoN1>
                <TituloInternoN2>Titulo</TituloInternoN2>
                <Input
                  value={valueInputProps.textoCopy.parrafos[0].titulo}
                  name="titulo"
                  onChange={(e) => handleInput(e)}
                  placeholder="Titulo"
                  autoComplete="off"
                  data-tipo={"textoCopy"}
                  data-index={0}
                />
                <TituloInternoN2>Parrafo</TituloInternoN2>
                <Textarea
                  value={valueInputProps.textoCopy.parrafos[0].texto}
                  name="texto"
                  onChange={(e) => handleInput(e)}
                  placeholder="Texto"
                  autoComplete="off"
                  data-tipo={"textoCopy"}
                  data-index={0}
                />
              </CajaSubInternalN2>
              <CajaSubInternalN2 className="parrafo">
                <TituloInternoN1 className=" romo">Parrafo 2</TituloInternoN1>
                <TituloInternoN2>Titulo</TituloInternoN2>
                <Input
                  value={valueInputProps.textoCopy.parrafos[1].titulo}
                  name="titulo"
                  onChange={(e) => handleInput(e)}
                  placeholder="Titulo"
                  autoComplete="off"
                  data-tipo={"textoCopy"}
                  data-index={1}
                />
                <TituloInternoN2>Parrafo</TituloInternoN2>
                <Textarea
                  value={valueInputProps.textoCopy.parrafos[1].texto}
                  name="texto"
                  onChange={(e) => handleInput(e)}
                  placeholder="Parrafo"
                  autoComplete="off"
                  data-tipo={"textoCopy"}
                  data-index={1}
                />
              </CajaSubInternalN2>
              <CajaSubInternalN2 className="parrafo">
                <TituloInternoN1 className=" romo">Parrafo 3</TituloInternoN1>
                <TituloInternoN2>Titulo</TituloInternoN2>
                <Input
                  value={valueInputProps.textoCopy.parrafos[2].titulo}
                  name="titulo"
                  onChange={(e) => handleInput(e)}
                  placeholder="Titulo"
                  autoComplete="off"
                  data-tipo={"textoCopy"}
                  data-index={2}
                />
                <TituloInternoN2>Parrafo</TituloInternoN2>
                <Textarea
                  value={valueInputProps.textoCopy.parrafos[2].texto}
                  name="texto"
                  onChange={(e) => handleInput(e)}
                  placeholder="Parrafo"
                  autoComplete="off"
                  data-tipo={"textoCopy"}
                  data-index={2}
                />
              </CajaSubInternalN2>
            </CajaInput>
          </SubCajaInputN1>
        </CajaInput>
        <CajaInput>
          <TituloInput>Lugares cercanos:</TituloInput>
          <SubCajaInputN1 className="colum">
            <WrapInputRow>
              <CajaInput className="internalN1">
                <TituloInternoN2>Tipo</TituloInternoN2>
                <MenuDespSimple
                  value={
                    valueInputProps.lugaresCercano.find(
                      (opcion) => opcion.select
                    )?.tipo || ""
                  }
                  name="lugar"
                  onChange={(e) => handleInput(e)}
                  data-tipo={"lugaresCercano"}
                >
                  <Opciones disabled defaultValue value={""}>
                    Seleccione tipo de lugar
                  </Opciones>
                  {valueInputProps.lugaresCercano.map((opcion, index) => {
                    return (
                      <Opciones key={index} value={opcion.tipo}>
                        {opcion.tipo}
                      </Opciones>
                    );
                  })}
                </MenuDespSimple>
              </CajaInput>
              <CajaInput className="internalN1">
                <TituloInternoN2>Add tipo</TituloInternoN2>
                <Input
                  value={valueOtroTipoLugar.tipo}
                  name="otroTipoLugar"
                  onChange={(e) => handleInput(e)}
                  data-tipo="lugaresCercano"
                />
                <BtnSimple
                  name="addOtroTipoLugar"
                  onClick={(e) => {
                    handleBtnsSome(e);
                  }}
                >
                  +
                </BtnSimple>
              </CajaInput>
            </WrapInputRow>
            <CajaTabla>
              <Tabla>
                <thead>
                  <Filas className="cabeza">
                    <CeldaHead>N°</CeldaHead>
                    <CeldaHead>Nombre</CeldaHead>
                    <CeldaHead className="small">Logo</CeldaHead>
                    <CeldaHead className="small">Distancia KMs</CeldaHead>
                    <CeldaHead className="small">Distancia mnts</CeldaHead>
                    <CeldaHead>Como llegar</CeldaHead>
                    <CeldaHead>Ver</CeldaHead>
                  </Filas>
                </thead>
                <tbody>
                  {"" ||
                    valueInputProps.lugaresCercano
                      .find((lugar) => lugar.select)
                      ?.lugares.map((place, index) => {
                        return (
                          <Filas key={index} className="body">
                            <CeldasBody>{index + 1}</CeldasBody>
                            <CeldasBody>
                              <Input
                                data-tipo="lugaresCercano"
                                name="nombre"
                                className="tabla alto100"
                                value={place.nombre}
                                data-index={index}
                                onChange={(e) => handleInput(e)}
                              />
                            </CeldasBody>

                            <CeldasBody>
                              <Input
                                className="tabla alto100"
                                data-index={index}
                                name="logo"
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFile(e)}
                              />
                            </CeldasBody>

                            <CeldasBody>
                              <Input
                                data-tipo="lugaresCercano"
                                name="distanciaKM"
                                className="tabla alto100"
                                value={place.distanciaKM}
                                data-index={index}
                                onChange={(e) => handleInput(e)}
                              />
                            </CeldasBody>
                            <CeldasBody>
                              <Input
                                data-tipo="lugaresCercano"
                                name="mntsDistancia"
                                className="tabla alto100"
                                value={place.mntsDistancia}
                                data-index={index}
                                onChange={(e) => handleInput(e)}
                              />
                            </CeldasBody>
                            <CeldasBody>
                              <Input
                                data-tipo="lugaresCercano"
                                name="comoLlegar"
                                className="tabla alto100"
                                value={place.comoLlegar}
                                data-index={index}
                                onChange={(e) => handleInput(e)}
                              />
                            </CeldasBody>
                            <CeldasBody className="long">
                              <ImgArea src={place.fotosAreaUrlLocal} />
                            </CeldasBody>
                          </Filas>
                        );
                      })}
                </tbody>
              </Tabla>
            </CajaTabla>
          </SubCajaInputN1>
        </CajaInput>

        <CajaInput>
          <TituloInput>Location</TituloInput>
          <Input
            value={valueInputProps.location}
            name="location"
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Ubicacion de Goole Maps"
            autoComplete="off"
          />
        </CajaInput>
        <CajaInput>
          <TituloInput>Calificacion promedio</TituloInput>
          <Input
            value={valueInputProps.calificacionPromedio}
            name="calificacionPromedio"
            onChange={(e) => handleInput(e)}
            type="number"
            placeholder="Calificacion promedio"
            autoComplete="off"
          />
        </CajaInput>

        {hasModal && (
          <Modal
            setHasModal={setHasModal}
            titulo={
              "Fotos area: " +
                valueInputProps.areas.find((area) => area.select).area || " "
            }
          >
            <CajaViewFotoArea>
              {imagenesSelectArea.map((img, index) => {
                return (
                  <WrapFoto key={index}>
                    <TituloImg>{img.texto}</TituloImg>
                    <br />
                    <ImgArea src={img.fotosAreaUrlLocal} />
                  </WrapFoto>
                );
              })}
            </CajaViewFotoArea>
          </Modal>
        )}
        <CajaInput>
          <BtnSimple onClick={() => enviarObjeto()}>Aceptar</BtnSimple>
        </CajaInput>
        {isLoading && <ModalLoading />}
      </Container>
    )
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 200px;
`;

const CajaInput = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;

  &.internalN1 {
    border: 1px solid black;
    width: 250px;
    background-color: ${theme.primary.neutral600};
    border-radius: 5px;
    padding: 8px;
  }
  &.subInternalN2 {
    width: 100%;
    padding: 5px;
    background-color: ${theme.primary.neutral650};
  }
  &.links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  &.checkbox {
    min-height: 25px;
    padding: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
  }
  &.mitad {
    flex: 0 1 calc(50% - 15px);
  }
  &.ancho100 {
    width: 100%;
  }
  &.scroll {
    height: 400px;
    overflow-y: scroll;
    background-color: ${theme.primary.neutral500};
  }
`;

const TituloInput = styled.p`
  font-size: 1.4rem;
  color: ${theme.complementary.midnightBlue};
  color: ${theme.secondary.coral};
  font-weight: bold;
  /* color: ${theme.primary.neutral300}; */
`;
const Input = styled(InputGeneral)`
  &.checkbox {
    background-color: red;
    width: 20px;
  }
  &.tituloImg {
    margin-bottom: 2px;
    width: 100%;
    min-width: 100%;
  }

  &.radio {
    width: 15px;
    &:focus {
      border: 1px solid black;
      width: 25px;
    }
  }
  &.none {
    background-color: transparent;
    border: none;
  }
  &.tabla {
    height: 30px;
    border-radius: 0;
    width: 100%;
    padding: 0 3px;
  }
  &.alto100 {
    height: 100%;
    /* width: 100; */
  }
`;
const Textarea = styled(TextAreaGeneral)`
  resize: vertical;
`;
const BtnSimple = styled(BtnGeneral)`
  &.small {
    min-width: 28%;
    height: 30px;
    padding: 0;
    font-size: 0.9rem;
    color: ${theme.primary.neutral650};
  }
  &.tabla {
    height: 30px;
    margin: 0;
    border: none;
    border-radius: 0;
  }
`;

const SubCajaInputN1 = styled.div`
  background-color: ${theme.primary.neutral500};
  border-radius: 4px;
  padding-left: 25px;
  padding: 15px;
  display: flex;
  gap: 5px;
  justify-content: center;
  &.row {
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
  }
  &.mediana {
    height: 400px;
  }
  &.colum {
    flex-direction: column;
  }
`;
const TituloInternoN1 = styled.p`
  color: black;
  padding: 4px;
  color: ${theme.primary.neutral650};
  color: white;
  &.bolder {
    border-bottom: 4px solid black;
    margin-bottom: 8px;
    color: black;
  }
  &.romo {
    color: ${theme.primary.neutral200};
    text-decoration: underline;
  }
`;
const TituloInternoN2 = styled.p`
  color: black;
  padding: 4px;
  color: ${theme.primary.neutral200};
`;
const MenuDespSimple = styled(MenuDesplegable)`
  width: 100%;
  border: 1px solid black;
`;
const WrapSubInternal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  overflow-y: auto;
  height: 200px;
  width: 100%;
  border: 4px solid ${theme.primary.neutral550};
  &.adicional {
    overflow: hidden;
    transition: ease all 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    &.none {
      height: 100px;
    }
    &:hover {
      cursor: pointer;
      background-color: ${theme.primary.neutral650};
    }
  }
`;
const Parrafo = styled.p`
  &.mas {
    font-size: 3rem;
    color: ${theme.primary.neutral500};
  }
`;
const CajaBtnInternal = styled.div``;

const ImgIcon = styled.img`
  width: ${(props) => props.$width};
`;
const CajaSubInternalN2 = styled.div`
  background-color: ${theme.primary.neutral500};
  width: 100%;
  min-height: 200px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 10px;
  &.parrafo {
    padding: 10px;
    background-color: ${theme.primary.neutral600};
    /* background-color: red; */
  }
`;
// /////////

const CajaTabla = styled.div`
  padding: 10px;
  overflow-x: scroll;
  height: 85%;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  &::-webkit-scrollbar {
    height: 4px;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #19b4ef;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #19b4ef;
    border-radius: 7px;
  }
  background-color: ${theme.primary.neutral600};
  border-radius: 6px;
`;
const Tabla = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 95%;
  margin: auto;
  margin-bottom: 25px;
  color: ${theme.primary.neutral200};
`;

const Filas = styled.tr`
  &.body {
    font-weight: normal;
    /* border-bottom: 1px solid #49444457; */
    border-bottom: 1px solid red;
    background-color: ${theme.azul5Osc};
  }

  &.cabeza {
    background-color: ${theme.azulOscuro1Sbetav};
  }
  color: ${theme.textoBlancoEdtem};
  &:hover {
    background-color: ${theme.azulOscuro1Sbetav};
  }
  &.modalH {
    background-color: ${theme.azulOscuro1Sbetav3};
    /* background-color: red; */
    /* width: 100%; */
  }
`;

const CeldaHead = styled.th`
  /* border-bottom: 1px solid #605e5e; */
  padding: 3px 7px;
  text-align: center;
  /* border: 1px solid #000; */
  border: 1px solid ${theme.azul1};

  font-size: 0.9rem;
  &.small {
    max-width: 80px;
  }
`;
const CeldasBody = styled.td`
  font-size: 0.9rem;
  /* border: 1px solid black; */

  border: 1px solid ${theme.azul1};
  height: 25px;

  &.clicKeable {
    cursor: pointer;
    &:hover {
      /* text-decoration: underline; */
    }
  }
  &.long {
    min-width: 80px;
    min-height: 80px;
  }

  text-align: center;
`;
const CajaImagenDestaca = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${theme.primary.neutral200};
  overflow: hidden;
`;
const ImgDestacada = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const CajaViewFotoArea = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
const WrapFoto = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;
const CajaImg = styled.div``;
const ImgArea = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* margin-bottom: 60px; */
`;
const TituloImg = styled.h2`
  text-decoration: underline;
  color: ${theme.secondary.coral};
`;

const WrapInputRow = styled.div`
  display: flex;
  gap: 8px;
`;
