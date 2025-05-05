import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";

import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";
import { Villas } from "../../DB/Villas";
import ListaAmenidades from "../../libs/ListaAmenidades";

export default function Amenidades({ amenidades, bntOff }) {
  const anchoIconos = "2rem";

  const [amenidadMaster, setAmenidadMaster] = useState([]);
  useEffect(() => {
    const amenidadAux = amenidades.map((am, index) => {
      const amenFind = ListaAmenidades.find(
        (amenidad) => amenidad.code == am.code
      );
      if (amenFind.iconoImg) {
        return {
          ...am,
          iconoImg: amenFind.iconoImg,
          icono: amenFind.icono,
        };
      } else {
        return { ...am, icono: amenFind.icono };
      }
    });

    setAmenidadMaster(amenidadAux);
  }, [amenidades]);
  const [hasModal, setHasModal] = useState(false);
  return (
    <Container>
      <Lista>
        {amenidadMaster
          .filter((amenidad) => {
            if (amenidad.resumida) {
              return amenidad;
            }
          })
          .map((am, index) => {
            return (
              <Item key={index}>
                {am.iconoImg ? (
                  <ImgIcon
                    // src={ImgPeriquera}
                    // width={anchoIconos}
                    $width={anchoIconos}
                    src={am.icono}
                  />
                ) : (
                  <am.icono width={anchoIconos} color={theme.secondary.coral} />
                )}
                {/* {<am.icono width={anchoIconos} color={theme.secondary.coral} />} */}
                {am.texto}
              </Item>
            );
          })}
      </Lista>
      {!bntOff && (
        <CajaBnt>
          <BtnSimple onClick={() => setHasModal(true)}>Ver todas</BtnSimple>
        </CajaBnt>
      )}
      {hasModal && (
        <Modal setHasModal={setHasModal} titulo="Amenidades">
          <Lista className="scroll">
            {amenidadMaster.map((am, index) => {
              return (
                <Item key={index + "p"}>
                  {am.iconoImg ? (
                    <ImgIcon $width={anchoIconos} src={am.icono} />
                  ) : (
                    <am.icono
                      width={anchoIconos}
                      color={theme.secondary.coral}
                    />
                  )}
                  {am.texto}
                </Item>
              );
            })}
          </Lista>
        </Modal>
      )}
    </Container>
  );
}
const Container = styled.div`
  width: 65%;
  min-height: 100px;
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

const Lista = styled.ul`
  list-style: none;
  padding-left: 35px;

  &.scroll {
    overflow-y: scroll;
    height: 100%;
  }
  @media screen and (max-width: 500px) {
    padding-left: 15px;
    width: 100%;
  }
`;
const Item = styled.li`
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
  text-align: start;
  font-size: 1.1rem;
  color: ${theme.primary.neutral600};
  margin-bottom: 25px;
`;
const CajaBnt = styled.div`
  width: 100%;
  display: flex;
`;
const BtnSimple = styled(BtnGeneral)``;
const ImgIcon = styled.img`
  width: ${(props) => props.$width};
`;
