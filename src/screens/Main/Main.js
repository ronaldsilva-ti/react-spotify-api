import Playlist from '../../components/Playlist/Playlist';
import Filters from '../../components/Filters/Filters';
import styled from 'styled-components';

export default function Main(){
    return(
        <Container>
            <Filters/>
            <Playlist/>
        </Container>
    )
}

const Container = styled.div``;