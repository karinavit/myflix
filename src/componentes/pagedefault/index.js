import React from 'react';
import Menu from '../menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
background-color: var(--black);
color: var(--white);
flex: 1;
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;

`;


function PageDefault({children}){
  return (
    <>
      <Menu />
          <Main> {children}
          </Main>
        <Footer />  
    </>
 
  );
}
// lembrando que props é um objeto, por isso que passamos o objeto direto e chamamos o children.
//substituímos a <div> por <> </>, parece uma tag 'morta', porém para o react isso é chamado de fragment, o que deuxa o código bem enxuto também. também pode-se usar o <React.Fragment>, que é uma forma similar.

export default PageDefault;