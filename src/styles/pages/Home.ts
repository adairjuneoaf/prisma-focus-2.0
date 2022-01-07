import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  img {
    width: 80px;
    height: auto;
  }

  h1 {
    span {
      color: ${props => props.theme.colors.secondary};
    }
  }
`
