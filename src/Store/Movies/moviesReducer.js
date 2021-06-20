import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_DETAILS_FAILED,
  FETCH_MOVIES_DETAILS_SUCCESS,
  FETCH_MOVIES_DETAILS_REQUEST,
  FETCH_MOVIES_SEARCH_SUCCESS,
  FETCH_MOVIES_SEARCH_FAILED,
  FETCH_MOVIES_SEARCH_REQUEST,
} from "./movieTypes";

const intialState = {
  loading: false,
  movies: [],
  movieDetail: {},
  error: "",
};

const moviesReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        movies: [],
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [...state.movies, ...action.payload],
        error: "",
      };
    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload,
      };
    case FETCH_MOVIES_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        movieDetail: {}
      };
    case FETCH_MOVIES_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        movieDetail: action.payload,
        error: "",
      };
    case FETCH_MOVIES_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        movieDetail: {},
        error: action.payload,
      };
    case FETCH_MOVIES_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: "",
      };
    case FETCH_MOVIES_SEARCH_FAILED:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
