import styled from 'styled-components';



const ContainerCard = styled.div`    
    height:340px;
    background-color:#282828;
    padding:8px;
    width:200px;
    border-radius:5px;    
    cursor:pointer;
    margin:4px;

    &:hover{
        background-color:black;
    }
`;

const ImageAlbum = styled.img`
    width: 100%;
    margin:auto;   
`;
const DescriptionCard = styled.p`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    color:whitesmoke;
    font-size:15px;
    font-family: 'Signika', sans-serif;
`;

const Title = styled.h3`
    color:white;
    font-family: 'Signika', sans-serif;



`


const Card = ({ image,description, name }) => {
    return(
            <ContainerCard>
                <ImageAlbum src={ image } />
                
                <Title>
                    { name }
                </Title>                

                <DescriptionCard>
                    { description }
                </DescriptionCard>  
            </ContainerCard>
    )
}

export default Card;