import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: ${props => props.theme.colors.backgroundWhite};
    color: ${props => props.theme.colors.primary};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;
}

p{
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-family: 'Inter', sans-serif;
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content{
    width: 100%;
    max-width: 400px;
    background: ${props => props.theme.colors.backgroundWhite};
    position: relative;
    border-radius: 0.375rem;

    button.shareTwitterButton {
    width: 100%;
    height: 5rem;

    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.75rem;

    border-top: 1px;
    border-right: 0px;
    border-bottom: 0px;
    border-left: 0px;
    border-style: solid;
    border-color: #dcdde0;

    border-radius: 0 0 5px 5px;

    background: rgba(245, 252, 255, 1);

    font-size: 1.25rem;
    font-weight: 600;
    color: #2AA9E0;

    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);

    svg{
      path{
        transition: all 0.3s;
      }
    }

    transition: all 0.3s;

    &:hover{
      background-color: #2AA9E0;
      color: #FFFFFF;

      svg{
        path{
          fill: #FFFFFF;
        }
      }
    }
  }
}

.react-modal-close{
    position: absolute;
    right: 2rem;
    top: 2rem;
    border: 0;
    background: transparent;

    font-size: 0px;

    svg {
      path{
        fill: ${props => props.theme.colors.primary}
      }
    }

    img {
      width: 18px;
      height: auto;
    }
}
`
