import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContainerStyled2 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const InputTextStyled = styled.input`
  width: 100%;
  height: 240px;
  border-radius: 4px;
  border: 1px solid rgb(178, 178, 178);
`;

const InputSubmitStyled = styled.input`
  height: 37px;
  width: 290px;
  margin: auto;
  margin-right: 0px;
  font-family: "Roboto", sans-serif;
  border-radius: 4px;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.1em;
  }
`;

const InsertComment = () => {
  return (
    <ContainerStyled>
      <InputTextStyled placeholder="Digite seu comentário" type="text" />
      <ContainerStyled2>
      <InputSubmitStyled type="submit" value={'Enviar'}/>
      </ContainerStyled2>
    </ContainerStyled>
  );
};

export default InsertComment;
