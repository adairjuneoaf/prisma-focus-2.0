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
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
}

p{
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 300;
}

h1, h2, h3, h4, h5, h6, strong{
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}
`
