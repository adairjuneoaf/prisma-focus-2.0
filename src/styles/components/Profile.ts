import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 3rem;

  .profileUser {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    gap: 1.5rem;

    > img {
      width: 64px;
      clip-path: circle();
    }

    .infosProfile {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      gap: 0.5rem;

      h2 {
        font-size: 1.125rem;
        color: ${props => props.theme.colors.primary};
      }

      .levelUser {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        gap: 0.5rem;

        p {
          font-size: 0.875rem;
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }

  .challengesCompleted {
    width: 100%;
    height: 72px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-bottom: 3px solid #dcdde0;

    h4 {
      font-size: 1.25rem;
      color: ${props => props.theme.colors.primary};
    }
  }
`
