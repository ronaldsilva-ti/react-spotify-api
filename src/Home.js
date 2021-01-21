import Routes from './routes';
import { GlobalStyles, theme } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';



export default function Home(){
    return(
        <ThemeProvider theme={ theme }>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    )
}