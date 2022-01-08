import styled from 'styled-components'

export const Content = styled.section`
  width: 80vw;
  height: 64px;

  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .currentExperience {
    flex: 0;
    font-size: 1rem;
    padding: 0 1rem 0 0;
  }

  .progressBarExperience {
    display: flex;
    flex: 1;

    height: 8px;

    background: #dcdde0;

    border-radius: 0.375rem;

    .currentProgressBarExperience {
      height: 8px;
      width: 50%;

      background: #4cd62b;

      border-radius: 0.375rem 0 0 0.375rem;
    }
  }

  .targetExperience {
    flex: 0;
    font-size: 1rem;
    padding: 0 0 0 1rem;
  }
`
