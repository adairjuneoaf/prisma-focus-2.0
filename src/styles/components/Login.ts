import styled from 'styled-components'

export const Content = styled.section`
  width: 20rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;

  h2 {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text};
    cursor: default;
  }

  .loginAccounts {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    gap: 1rem;

    button {
      font-size: 0;

      background: transparent;
      width: fit-content;
      height: fit-content;

      border: none;

      img {
        width: 48px;
        height: auto;
      }
    }

    p {
      text-align: left;
      color: ${props => props.theme.colors.text};
      cursor: default;
    }
  }

  .loginUsername {
    display: flex;
    flex-direction: row;

    border: 1px solid transparent;
    border-radius: 5px;

    &:hover {
      input {
        border-color: ${props => props.theme.colors.secondary};
      }
    }

    input {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;

      border: 1px solid transparent;
      border-radius: 5px 0 0 5px;

      color: ${props => props.theme.colors.text};

      background: linear-gradient(
        90deg,
        #b55400 0%,
        rgba(181, 84, 0, 0.2) 100%
      );

      outline: 0;

      transition: border-color 0.2s;

      &::placeholder {
        font-weight: 400;
        color: ${props => props.theme.colors.text};
      }

      &:focus {
        border-color: ${props => props.theme.colors.secondary};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1rem;

      border: 1px solid transparent;
      border-radius: 0 5px 5px 0;

      background: ${props => props.theme.colors.secondary};

      transition: border-color, background-color 0.3s;
    }

    .inputOnValue {
      background: #4cd62b;
      border: 1px solid transparent;

      &:hover {
        border-color: #4cd62b;
      }
    }
  }
`
