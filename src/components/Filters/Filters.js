import { useEffect, useState } from 'react';
import axios from 'axios';

function Filters() {

  useEffect(() => {
    getApiFilters();
    getApi();
  },[])

  const [play, setPlay] = useState()


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
        'Authorization' : 'Bearer ' +  api_token.data.access_token 
      },      
    })

    const res_playlist  = api_playlist.data

    console.log('api_playlist',res_playlist.playlists.items) 
    setPlay(res_playlist.playlists.items)
  }


  return (
    <div>
        {
          play?.map(item => (
            <>
            <li key={ item.index }>
              { item.description }             
            </li>
            <img src={ item.images[0].url } />
            </>
          ))
        }
    </div>
  );
}

export default Filters;
