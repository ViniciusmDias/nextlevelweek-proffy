import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  @media(min-width: 700px) {

    height: 340px;
  }

`;


export const TopBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2;

    &:hover {
      opacity: 0.6;
    }
  }

  & > img {
    height: 1.6rem;
  }
  @media(min-width: 700px) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  @media(min-width: 700px) {
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;

    strong {
      max-width: 350px;
    }
  }
`;