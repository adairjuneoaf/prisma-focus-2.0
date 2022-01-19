import styled from 'styled-components'

export const Content = styled.tr`
  #userProfile {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 1rem;
    .profileData {
      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      gap: 1rem;

      padding: 1.5rem 0;

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
  }

  td {
    padding: 1rem 0rem;
    background: #ffffff;

    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};

    span.highlightInfo {
      color: ${props => props.theme.colors.tertiary};
    }
  }

  #userId {
    width: 4.5rem;
    height: auto;
    border-right: 0.25rem solid ${props => props.theme.colors.backgroundWhite};

    font-size: 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};

    border-radius: 5px 0 0 5px;
  }

  #userProfile {
    width: auto;
    height: auto;

    padding: 1.5rem;
  }

  #userChallengesCompleted {
    width: 12rem;
    height: auto;
  }

  #userExperience {
    width: 9rem;
    height: auto;

    border-radius: 0 5px 5px 0;
  }
`
