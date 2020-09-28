import {
    FETCH_SMURF_DATA,
    FETCH_SMURF_PASS,
    FETCH_SMURF_FAIL,
    POST_SMURF_DATA,
    POST_SMURF_PASS,
    POST_SMURF_FAIL
} from '../actions/action'


const initialState = {
    smurfs: [],
    isFetching: false,
    isUploading: false,
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURF_DATA:
        return {
          ...state,
          isFetching: true,
        };
      case FETCH_SMURF_PASS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
        };
      case FETCH_SMURF_FAIL:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      case POST_SMURF_DATA:
        return {
          ...state,
          smurfs: [...state.smurfs],
          isUploading: true,
        };
      case POST_SMURF_PASS:
        return {
          ...state,
          smurfs: action.payload,
          isUploading: false,
        };
      case POST_SMURF_FAIL:
        return {
          ...state,
          isUploading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;