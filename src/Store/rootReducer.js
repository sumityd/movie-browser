import { combineReducers } from "redux";
import moviesReducer from './Movies/moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
