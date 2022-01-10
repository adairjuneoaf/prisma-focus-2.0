import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  height: 72px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 3px solid #dcdde0;

  cursor: default;

  h4 {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.primary};
  }
`
