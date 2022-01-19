import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: auto;

  background: ${props => props.theme.colors.backgroundWhite};
`

export const Content = styled.section`
  width: calc(100vw - 5rem);

  position: relative;

  left: 5rem;
  top: 2.5rem;

  cursor: default;

  .leaderboardUsers {
    width: 80vw;
    height: auto;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h1 {
      font-size: 2.25rem;
      font-weight: 600;
      line-height: 2.6;

      color: ${props => props.theme.colors.primary};
    }

    table {
      width: 100%;
      height: auto;
      text-align: left;

      border-spacing: 0 0.5rem;

      #titleProfileUser,
      #userProfile {
        padding: 0 1.5rem;
      }

      tr {
        th {
          font-size: 0.875rem;
          font-weight: 700;
          line-height: 3.6;

          color: ${props => props.theme.colors.primary};
          opacity: 0.5;
        }

        td:first-child {
          text-align: center;
        }
      }

      /* .userInfos {
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
          border-right: 0.25rem solid
            ${props => props.theme.colors.backgroundWhite};

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
      } */
    }
  }
`
