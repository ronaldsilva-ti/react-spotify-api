import { useEffect, useState, useLayoutEffect } from 'react';
import { getFilters, getAlbums } from '../../store/reducers/filters/index'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Card from '../core/Card'
import styled from 'styled-components';

function Filters() {

  const client_id = `${process.env.REACT_APP_CLIENT_ID}`;
  const secret_id = `${process.env.REACT_APP_CLIENT_SECRET}`;
  
  const search = useSelector(state => state.filters.search)
  const [play, setPlay] = useState([])
  const [filteredAlbum,setFilteredAlbum] = useState([])
  const filter = useSelector(state => state.filters.filters)
  const countryState = useSelector(state => state.filters.country)
  const localeState = useSelector(state => state.filters.locale)
  const albumLimit = useSelector(state => state.filters.albumLimit);
  const [messageError, setMessageError] = useState({ message:false, messageHelp:'' })
  const dispatch = useDispatch()

  // useLayoutEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log('CHAMANDO API');        
  //       getApi()
  //     }, 30000);
  //     return () => clearInterval(interval);
  //   }, []);

  useEffect(() => {
    if(client_id == '' && secret_id == ''){
      setMessageError({
        ...messageError,
        message:true,
        messageHelp:'Informe seu Cliente ID e seu Secret ID por favor no arquivo .env'
      })
    }

  },[])

  useEffect(() => {
    getApiFilters();
    getApi();   
  },[ countryState, localeState, albumLimit ])

  // useEffect(() => {
  //   console.log('count',count)
  // },[count])


 
  useEffect(() => {
    setFilteredAlbum(
      play.filter((res) =>
        res.name.toLowerCase().includes(search?.toLowerCase())
        // console.log("NAME",res.name.toLowerCase().includes(search[0].toLowerCase()))
      )
    );
  }, [play,search]);  

  useEffect(() => {
    console.log('search',search)
  }, [search])


  async function getApiFilters(){
      const res = await axios('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
      const data = res.data;
      console.log('getApiFilters',data.filters)
      dispatch(getFilters(data.filters))
  }

 async function getApi(){
   


    const config_token = {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(client_id + ':' + secret_id)      
      },
        data: 'grant_type=client_credentials',
        method: 'POST'
    }

    const api_token = await axios('https://accounts.spotify.com/api/token', config_token)

    const api_playlist = await axios(`https://api.spotify.com/v1/browse/featured-playlists?locale=${localeState}&&country=${countryState}&&limit=${albumLimit}`,{
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
    <>
      {
        messageError.message === true ? <MessageError style={{ color:'white', }}>{messageError.messageHelp}</MessageError> : 
        (
          <>
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

          </>
        )
      }
    </>
  );
}

export default Filters;


const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
`


const MessageError = styled.p`
  font-size:18px;
  color:greenyellow !important;
  font-family: 'Signika', sans-serif;
  text-align:center;
`