import styled from 'styled-components'

export const Content = styled.section`
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

    cursor: default;

    > img {
      width: 80px;
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
`
