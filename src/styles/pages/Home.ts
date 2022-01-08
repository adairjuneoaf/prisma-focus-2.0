import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  background-image: url('/svg/background_image.svg');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  justify-content: center;
`

export const Content = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 10rem;
`
