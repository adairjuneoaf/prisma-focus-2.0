import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  height: 45rem;

  background: #ffffff;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .defaultChallengeBox {
    height: 90%;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 8rem;

    h2 {
      max-width: 80%;

      text-align: center;
      line-height: 1.5;

      font-size: 1.5rem;
      color: ${props => props.theme.colors.primary};

      cursor: default;
    }

    .challengesInfo {
      max-width: 80%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 1rem;

      img {
        width: 80px;

        cursor: default;
      }

      p {
        text-align: center;

        line-height: 1.5;

        font-size: 1rem;
        color: ${props => props.theme.colors.primary};

        cursor: default;
      }
    }
  }

  .initiatedCycleChallenge {
    height: 90%;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 8rem;

    h2 {
      text-align: center;
      line-height: 1.5;

      font-size: 1.5rem;
      color: ${props => props.theme.colors.primary};

      cursor: default;
    }

    .challengesInfo {
      max-width: 80%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      gap: 2rem;

      img {
        width: 64px;
        cursor: default;
      }

      p {
        text-align: justify;

        line-height: 1.5;

        font-size: 1rem;
        color: ${props => props.theme.colors.primary};

        cursor: default;
      }
    }
  }

  .currentChallenge {
    height: 90%;

    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2rem;

    > h2 {
      max-width: 80%;

      text-align: center;
      line-height: 1.5;

      font-size: 1.5rem;
      color: ${props => props.theme.colors.tertiary};

      cursor: default;
    }

    span.divider {
      width: 80%;
      height: 2px;

      margin: 0 0 3rem 0;

      background: #dcdde0;
    }

    .challengesInfo {
      max-width: 80%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 2rem;

      img {
        width: 128px;

        cursor: default;
      }

      h2 {
        font-size: 1.875rem;

        cursor: default;
      }

      p {
        text-align: center;

        line-height: 1.6;

        font-size: 1rem;
        color: ${props => props.theme.colors.primary};

        cursor: default;
      }
    }
  }

  .buttonsChallenge {
    display: flex;
    flex-direction: row;

    width: 100%;
    bottom: 0;

    .typeFailed {
      height: 80px;
      flex: 1;
      font-size: 1.125rem;
      color: #e83f5b;
      background: #fff5f5;
      border-top: 1px;
      border-right: 0.5px;
      border-bottom: 0px;
      border-left: 0px;

      border-style: solid;
      border-color: #dcdde0;

      border-radius: 0 0 0 5px;

      transition: all 0.3s;

      &:hover {
        background: #e83f5d;
        color: #ffffff;
      }
    }

    .typeSuccess {
      height: 80px;
      flex: 1;
      font-size: 1.125rem;
      color: #4cd62b;
      background: #f7fff5;
      border-top: 1px;
      border-right: 0px;
      border-bottom: 0px;
      border-left: 0.5px;

      border-style: solid;
      border-color: #dcdde0;

      border-radius: 0 0 5px 0;

      transition: all 0.3s;

      &:hover {
        background: #4cd62b;
        color: #ffffff;
      }
    }
  }
`
