import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_DETAILS_FAILED,
  FETCH_MOVIES_DETAILS_SUCCESS,
  FETCH_MOVIES_DETAILS_REQUEST,
  FETCH_MOVIES_SEARCH_SUCCESS,
  FETCH_MOVIES_SEARCH_FAILED,
  FETCH_MOVIES_SEARCH_REQUEST,
} from "./movieTypes";
import {
  fetchMovies,
  fetchMoviesDetail,
  searchMovies,
} from "../../services/app-service";

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailed = () => {
  return {
    type: FETCH_MOVIES_FAILED,
  };
};

export const fetchMoviesDetailsRequest = () => {
  return {
    type: FETCH_MOVIES_DETAILS_REQUEST,
  };
};

export const fetchMoviesDetailsSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_DETAILS_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesDetailsFailed = () => {
  return {
    type: FETCH_MOVIES_DETAILS_FAILED,
  };
};

export const fetchMoviesSearchRequest = () => {
  return {
    type: FETCH_MOVIES_SEARCH_REQUEST,
  };
};

export const fetchMoviesSearchSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SEARCH_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesSearchFailed = () => {
  return {
    type: FETCH_MOVIES_SEARCH_FAILED,
  };
};



// async Actions 
export const fetchMoviesInStore = (pageNumber) => {
  return async function saveMovies(dispatch) {
    try {
      dispatch(fetchMoviesRequest);
      const response = await fetchMovies(pageNumber);
      dispatch(fetchMoviesSuccess(response.results));
    } catch (error) {
      dispatch(fetchMoviesFailed(error.message));
    }
  };
};

export const fetchMovieDetailsInStore = (id) => {
  return async function saveMovieDetails(dispatch) {
    try {
      dispatch(fetchMoviesDetailsRequest());
      const response = await fetchMoviesDetail(id);
      dispatch(fetchMoviesDetailsSuccess(response));
    } catch (error) {
      dispatch(
        fetchMoviesDetailsFailed({ showSanckbar: true, error: error.message })
      );
    }
  };
};

export const fetchSerachMoviesInStore = (searchValue) => {
  return async function saveSearchMovie(dispatch) {
    try {
      dispatch(fetchMoviesSearchRequest());
      const response = await searchMovies(searchValue);
      dispatch(fetchMoviesSearchSuccess(response.results));
    } catch (error) {
      dispatch(
        fetchMoviesSearchFailed({ showSanckbar: true, error: error.message })
      );
    }
  };
};
