import axios from 'axios';

export const loadTracks = () => dispatch =>{
  dispatch({type: 'FETCH_TRACKS'});
    axios.get(`https://cors-anywhere.herokuapp.com/https://mis.ssreng.com:443/api/gtctracks?page=1&size=2000&updateSince=2019-10-22T17:15:00Z&expand=detail`, {
      headers: {
        'Origin': 'https://mis.ssreng.com',
        'Authorization': `Basic X2RlbW9fOl9kZW1vXzAw`
      }
    })
    .then((response)=>{
      dispatch({type: 'RECIEVE_TRACKS', payload:response.data});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_TRACKS_ERROR', payload: err});
    });
  };
