let defaultState={
  tracks:[],
  fetching: false,
  fetched: false,
  error: null,
};

const mainReducer=(state=defaultState, action)=>{
  switch(action.type){
    case 'FETCH_TRACKS': {
      return{
        ...state,
        fetching: true
      }

    }
    case 'FETCH_TRACKS_ERROR': {
      return {
        ...state,
        fetching:false,
        error:action.payload
      }

    }
    case 'RECIEVE_TRACKS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        tracks: action.payload
      }

    }
  }
  return state;
};

export default mainReducer;
