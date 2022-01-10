import styled from 'styled-components'

export const Content = styled.section`
  width: 5rem;
  height: 100vh;

  position: fixed;

  top: 0;
  left: 0;

  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 72px;
    padding: 1rem;
  }

  .buttonsMenu {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 3rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 64px;
      padding: 0 65%;
      border-left: 3px solid transparent;

      transition: border-color 0.3s;

      svg{
        path{
          transition: stroke 0.3s;
        }
      }

      &:hover {
        border-color: ${props => props.theme.colors.tertiary};

        svg{
          path{
            stroke: ${props => props.theme.colors.tertiary};
        }
      }
    }
  }
`
