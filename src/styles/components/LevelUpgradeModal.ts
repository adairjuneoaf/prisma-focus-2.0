import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  padding: 3rem;

  cursor: default;

  .levelUploaded {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 154px;
    height: 94px;
    background: url('/svg/level_upgrade_background.svg');
    background-repeat: no-repeat;
    background-size: contain;

    h2 {
      text-align: center;
      font-weight: 600;
      font-size: 8.75rem;
      color: #5965e0;
    }
  }

  .congratulationsLevelUploaded {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 1.875rem;
      color: ${props => props.theme.colors.primary};
    }

    p {
      font-size: 1.125rem;
      line-height: 1.6;
      color: ${props => props.theme.colors.primary};
    }
  }
`
