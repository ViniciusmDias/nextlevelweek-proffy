import styled from 'styled-components'

export const Container = styled.div`
  &#page-teacher-list {
    width: 100vw;
    height: 100vh;
  }
  @media(min-width: 700px) {
    &#page-teacher-list {
      max-width: 100vw;
    }
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;
  @media(min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Input = styled.div`
  position: relative;
  label {
    font-size: 1.4rem;

    color: var(--color-text-in-primary);
  }
  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }
  & + & {
    margin-top: 1.4rem;
  }
  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
  @media(min-width: 700px) {
    & + & {
      margin-top: 0rem;
    }
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

