import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Card from '../core/Card'
import styled from 'styled-components';

function Filters() {


  useEffect(() => {
    getApiFilters();
    getApi();
   
  },[])

 


  const search = useSelector(state => state.search)
  const [play, setPlay] = useState([])
  const [filteredAlbum,setFilteredAlbum] = useState([])

 
  useEffect(() => {
    setFilteredAlbum(
      play.filter((res) =>
        res.name.toLowerCase().includes(search[0].toLowerCase())
        // console.log("NAME",res.name.toLowerCase().includes(search[0].toLowerCase()))
      )
    );
  }, [play,search]);
  
  


  async function getApiFilters(){
      const res = await axios('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
      const data = res.data;
      console.log('getApiFilters',data)
  }


 async function getApi(){
   
    const client_id = '37a3d30be7494be48db5e40cd1054862';
    const secret_id = '6a2ea1abffab4a39862d7167426685a8';

    const config_token = {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(client_id + ':' + secret_id)      
      },
        data: 'grant_type=client_credentials',
        method: 'POST'
    }

    const api_token = await axios('https://accounts.spotify.com/api/token', config_token)


    const api_playlist = await axios(`https://api.spotify.com/v1/browse/featured-playlists?country=BR`,{
      method:'GET',
      headers:{
        'Authorization' : 'Bearer ' +  api_token.data.access_token,
      },     
    })

    const res_playlist  = api_playlist.data

    console.log('api_playlist',res_playlist.playlists.items) 
    setPlay(res_playlist.playlists.items)
  }


  return (
     <Container>
         {
          filteredAlbum?.map(item => (
            <Card 
              image={ item.images[0].url }
              description={ item.description }  
              name={ item.name }
            />
          ))
        }
     </Container>
  );
}

export default Filters;


const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
`