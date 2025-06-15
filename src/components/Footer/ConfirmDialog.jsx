import styled from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { ViewContext } from "../viewContext";

const ContainerStyled = styled.div`
  background-color: rgba(25, 25, 27, 0.64);
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100vh;
  width: 100%;
  z-index: 3;
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 175px;
  padding: 32px 20px;
  border-radius: 8px;
  position: absolute;
  right: 56px;
  bottom: 56px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.59);
  gap: 8px;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    right: 8px;
  }
`;

const DivCancelStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
  position: relative;
`;

const SpanStyled = styled.span`
  font-size: 3.7em;
  padding: 5px;
  color: rgb(232, 67, 67);
  font-weight: 600;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.29);
  position: absolute;
  transform: translateY(-90%);
  cursor: default;
`;

const PQuestionStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 400;
  border-radius: 8px;
  padding-top: 28px;
  padding-bottom: 16px;
  width: 100%;
  text-align: center;
  cursor: default;
  /* letter-spacing: 0.71px; */
  font-size: 1.15em;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.16em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.17em;
  }
`;

const DivSimNaoStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  gap: 12px;
`;

const GenericPStyled = styled.p`
  width: 100%;
  font-family: "Quicksand", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding: 12px 0px;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: 0.72px;
  border-radius: 4px;
  cursor: default;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.03em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.05em;
  }
`;

const PSimStyled = styled(GenericPStyled)`
  background-color: rgb(201, 0, 0);
  color: white;
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.105em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.11em;
  }
`;

const PVoltarStyled = styled(GenericPStyled)`
  background-color: rgb(235, 235, 235);
  font-weight: 500;
`;

const DivFeedbackStyled = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-top: 0px;
  padding-bottom: 8px;
  transition: opacity 0.5s linear;
`;

const SpanCheckStyled = styled.span`
  color: rgb(99, 154, 48);
  position: relative;
  transform: none;
  padding: 0px;
  font-size: 4.1em;
  font-weight: 400;
  border-radius: 50%;
  cursor: default;
`;

const PFeedbackStyled = styled(GenericPStyled)`
  scale: 1.02;
  font-weight: 500;
  font-family: "Montserrat";
  cursor: default;
`;

export default function ConfirmDialog({ setViewConfirm }) {
  const { setCartProducts } = useContext(CartContext);
  const { viewFeedback, setViewFeedback } = useContext(ViewContext);

  const handleConfirmCancel = (action) => {
    const duration = Date.now() - window.startClickTime;
    if (duration < 110) {
      if (action === 1) {
        setViewFeedback(true);

        setCartProducts([]);

        setTimeout(() => {
          setViewConfirm(false);
          setViewFeedback(false);
        }, 1500);
      } else if (action === 0) {
        setViewConfirm(false);
      }
    }
    //pra toque de touchpad
    if (action === "1") {
      setViewFeedback(true);

      setCartProducts([]);

      setTimeout(() => {
        setViewConfirm(false);
        setViewFeedback(false);
      }, 1500);
    }
    if (action === "0") {
      setViewConfirm(false);
    }
  };

  return (
    <ContainerStyled>
      <DivStyled>
        {viewFeedback === false ? (
          <>
            <DivCancelStyled>
              <SpanStyled className="material-symbols-outlined">
                exclamation
              </SpanStyled>
              <PQuestionStyled>Cancelar a compra?</PQuestionStyled>
            </DivCancelStyled>

            <DivSimNaoStyled>
              <PSimStyled
                onTouchStart={(e) => {
                  window.startClickTime = Date.now();
                }}
                onTouchEnd={() => handleConfirmCancel(1)}
                onClick={() => {
                  handleConfirmCancel("1");
                }}
              >
                Sim, cancelar
              </PSimStyled>

              <PVoltarStyled
                onTouchStart={(e) => {
                  window.startClickTime = Date.now();
                }}
                onTouchEnd={() => handleConfirmCancel(0)}
                onClick={() => {
                  handleConfirmCancel("0");
                }}
              >
                Voltar
              </PVoltarStyled>
            </DivSimNaoStyled>
          </>
        ) : (
          <DivFeedbackStyled>
            <SpanCheckStyled className="material-symbols-outlined">
              check_circle
            </SpanCheckStyled>
            <PFeedbackStyled>Compra Cancelada!</PFeedbackStyled>
          </DivFeedbackStyled>
        )}
      </DivStyled>
    </ContainerStyled>
  );
}
