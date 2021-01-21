import { useEffect } from 'react';
import axios from 'axios';

function Filters() {

  useEffect(() => {
    getApiFilters();
    getApi();
  },[])


  async  function getApiFilters(){
      const res = await axios('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
      const data = res.data;
      console.log('getApiFilters',data)

  }
  function getApi(){

    const client_id = '37a3d30be7494be48db5e40cd1054862';
    const secret_id = '6a2ea1abffab4a39862d7167426685a8';


    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(client_id + ':' + secret_id)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(res => console.log(res.data.access_token)) 
  }


  return (
    <div>
      <p>
        Filter
      </p>
    </div>
  );
}

export default Filters;
