import { createGlobalStyle } from 'styled-components';

export const theme = {
    body:'#121212',
    fontColor:'#000'
}




export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
    }
`