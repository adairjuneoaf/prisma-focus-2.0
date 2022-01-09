import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .timerCountdown {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3rem;

    .timer {
      display: flex;
      flex-direction: row;
      align-items: center;

      > span {
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
        font-size: 120px;

        padding: 0 1rem;

        cursor: default;
      }

      .minutesCountdown,
      .secondsCountdown {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        gap: 2px;

        cursor: default;

        span {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 120px;

          padding: 0.5rem 0rem;

          width: 96px;
          height: auto;

          background-color: #ffffff;
        }

        .minutesLeft {
          border-radius: 6px 0 0 6px;
        }

        .secondsRight {
          border-radius: 0 6px 6px 0;
        }
      }
    }

    button.buttonInitiatedCycle {
      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;
      padding: 1.5rem;

      font-size: 1.25rem;

      color: #ffffff;
      background: ${props => props.theme.colors.tertiary};

      border: 0;
      border-radius: 5px;

      transition: background-color 0.3s;

      &:hover {
        background: ${props => props.theme.colors.secondary};
      }
    }

    button.buttonAbandonCycle {
      width: 100%;

      position: relative;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;
      padding: 1.5rem;

      font-size: 1.25rem;

      color: ${props => props.theme.colors.primary};
      background: #ffffff;

      border: 0;
      border-radius: 5px;

      svg {
        path {
          fill: ${props => props.theme.colors.primary};
        }
      }

      transition: all 0.3s;

      &:hover {
        background: #e83f5b;
        color: #ffffff;

        svg {
          path {
            fill: #ffffff;
          }
        }
      }

      .progressBarCycle {
        display: flex;

        position: absolute;
        width: 100%;
        height: 5px;

        background-color: #dcdde0;
        bottom: 0;

        border-radius: 0 0 5px 5px;

        .currentProgressBarCycle {
          height: 5px;

          background-color: #4cd62b;
          border-radius: 0 5px 5px 5px;

          transition: 1s ease;
          transition-delay: 0.5s;
        }
      }
    }

    button.buttonCycleFinished {
      width: 100%;

      position: relative;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;
      padding: 1.5rem;

      font-size: 1.25rem;

      color: ${props => props.theme.colors.primary};
      background: #ffffff;

      border: 0;
      border-radius: 5px;

      &:disabled {
        cursor: not-allowed;
      }

      .progressBarCycle {
        display: flex;

        position: absolute;
        width: 100%;
        height: 5px;

        background-color: #dcdde0;
        bottom: 0;

        border-radius: 0 0 5px 5px;

        .currentProgressBarCycle {
          height: 5px;

          background-color: #4cd62b;
          border-radius: 0 5px 5px 5px;

          transition: 1s ease;
          transition-delay: 0.5s;
        }
      }
    }
  }
`
