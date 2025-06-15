import SearchBar from "../components/Main/SearchBars/SearchBar";
import {ProductListHome} from "../components/Main/ProductSection/ProductListHome";
import Footer from '../components/Footer/Footer';
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #F0F0F0;
`;


const SearchAction = () => {
  return (
    <DivStyled>
      <SearchBar copy={true}></SearchBar>
      <ProductListHome variant={'inSearch'} categoryKey={13}></ProductListHome>
      <Footer></Footer>
    </DivStyled>
  )
}

export default SearchAction