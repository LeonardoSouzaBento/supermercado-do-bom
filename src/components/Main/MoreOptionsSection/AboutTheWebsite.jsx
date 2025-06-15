import { PStyled, H1Styled } from "./ComponentsOptionSection"

export default function AboutTheWebsite () {
  return (
    <>
        <H1Styled>Resumo</H1Styled>
        <PStyled>
          A cópia do repósitorio gitHub desse projeto com os arquivos mais importantes está aqui: .
          Cópia porque eu mantenho o repósitorio original privado.
          <br/>
        </PStyled>

        <PStyled>
          Esse site de e-commerce simulado feito em React iniciou em 08/04/2025. Ele é feito com <strong>Styled Components, useContext e useNavigate</strong> levando a Cart e a SearchAction, as duas "páginas" do site. <br/>
          A rolagem das divs em desktops é feita por um hook próprio que aplica scrollLeft.
        </PStyled>

        <PStyled>
          Eu diria que o código mais importante está em CartContext.
        </PStyled>
        
        <PStyled>
          O BackEnd é inexistente. As imagens vem de links da internet.
        </PStyled>
    </>
  )
}