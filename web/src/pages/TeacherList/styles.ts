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
  @media(min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

