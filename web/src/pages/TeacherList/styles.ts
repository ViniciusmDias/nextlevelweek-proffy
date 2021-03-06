import styled from 'styled-components'

export const Container = styled.div`
  &#page-teacher-list {
    width: 100vw;
    height: 100vh;
  }

  label {
    color: var(--color-text-in-primary);
  }
  @media(min-width: 700px) {
    &#page-teacher-list {
      max-width: 100vw;
    }
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;

    &:hover {
      background: var(--color-secundary-dark);
    }
  }


  @media(min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const PageBody = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media(min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;

