import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";

export default function Galeria({ villaMaster, setMostrarGaleria, width }) {
  const [imgResumida, setImgResumida] = useState({});
  useEffect(() => {
    const imgResAux = villaMaster.areas.flatMap((areas) => areas.fotos);
    console.log(imgResAux);
    setImgResumida(imgResAux.filter((foto) => foto.resumida));
  }, []);

  const mostrarGallery = () => {
    setMostrarGaleria(true);
  };

  return (
    <CajaGaleriaMain onClick={() => mostrarGallery()}>
      <CajaInt
        className={`
        der 
        ${width < 755 ? "medium" : ""}
        `}
      >
        <CajaIntDer>
          <Img
            className="main"
            // src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NjEzMDE3NDA5MjQ3Mjg5MQ%3D%3D/original/3513a864-90ce-457b-a8eb-6f7c9faa9548.jpeg?im_w=1200&im_format=avif"
            src={villaMaster.urlFotoDestacada}
          />
        </CajaIntDer>

        <CajaIntDer>
          <Img src={imgResumida[0]?.url || ""} />
          {/* <Img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NjEzMDE3NDA5MjQ3Mjg5MQ%3D%3D/original/629d535f-22f5-45d7-8f62-e6a9e846acf5.jpeg?im_w=720&im_format=avif" /> */}
        </CajaIntDer>
        <CajaIntDer>
          <Img src={imgResumida[1]?.url || ""} />
          {/* <Img src="https://a0.muscache.com/im/pictures/miso/Hosting-1156130174092472891/original/0b4854e6-28a2-4c43-9089-98d3717fa9b8.jpeg?im_w=720&im_format=avif" /> */}
        </CajaIntDer>
        {width > 754 && (
          <>
            <CajaIntDer>
              <Img src={imgResumida[2]?.url || ""} />
              {/* <Img src="https://a0.muscache.com/im/pictures/miso/Hosting-1156130174092472891/original/b60754b4-01b9-4215-a0f1-841290e9ebae.jpeg?im_w=720&im_format=avif" /> */}
            </CajaIntDer>
            <CajaIntDer>
              <Img src={imgResumida[3]?.url || ""} />
              {/* <Img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NjEzMDE3NDA5MjQ3Mjg5MQ%3D%3D/original/4fdbed20-b049-4254-9bed-e23f21aa8ad2.jpeg?im_w=720&im_format=avif" /> */}
            </CajaIntDer>
          </>
        )}
      </CajaInt>
    </CajaGaleriaMain>
  );
}

const CajaGaleriaMain = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  /* overflow: hidden; */
  display: flex;
  margin-bottom: 25px;
  cursor: pointer;
`;
const CajaInt = styled.div`
  &.izq {
    width: 55%;
    border: 1px solid blue;
    overflow: hidden;
  }
  &.der {
    /* width: 45%; */
    /* border: 1px solid blue; */

    display: grid;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    grid-gap: 8px;
    grid-template-areas:
      "primera primera segunda tercera"
      "primera primera cuarta quinta";

    div:nth-child(1) {
      grid-area: primera;
    }

    div:nth-child(2) {
      grid-area: segunda;
    }

    div:nth-child(3) {
      grid-area: tercera;
    }

    div:nth-child(4) {
      grid-area: cuarta;
    }

    div:nth-child(5) {
      grid-area: quinta;
    }
    &.medium {
      grid-template-areas:
        "primera primera segunda "
        "primera primera tercera ";
    }
  }
`;
const Img = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* height: 100%; */
`;
const CajaIntDer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 4px 6px 9px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 6px 9px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 9px -3px rgba(0, 0, 0, 0.75);
`;
