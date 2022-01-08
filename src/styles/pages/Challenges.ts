import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${props => props.theme.colors.backgroundWhite};

  overflow: hidden;
`

export const Content = styled.div`
  width: calc(100vw - 5rem);

  position: relative;

  left: 5rem;
  top: 0;

  .profileCountdownAndChallenges {
    width: 80vw;
    height: 95vh;

    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 8rem;

    .profileAndCountDown {
      flex: 1;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      gap: 8rem;
    }

    .challengesBox {
      flex: 1;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`
