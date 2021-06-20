import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { fetchMovieDetailsInStore } from "../../Store";
import { useHistory } from "react-router";
import { Star } from "@material-ui/icons";

export default function Card({
  id,
  name,
  backdrop_path,
  description,
  vote_average,
}) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const dispatch = useDispatch();
  const history = useHistory();

  const getMovies = () => {
    dispatch(fetchMovieDetailsInStore(id));
    history.push("/movie-detail");
  };

  return (
    <div className="card" onClick={getMovies}>
      <img
        className="card-poster"
        src={`${baseUrl}${backdrop_path}`}
        alt={name}
      />
      <div className="card-info">
        <div
          className="flex"
          style={{ justifyContent: "space-between", alignItems: "baseline" }}
        >
          <h2>{name}</h2>
          <h3 className="flex align-center">
            {vote_average}
            <Star style={{ height: "25px", width: "20px" }} />
          </h3>
        </div>

        <h4 className="txt-flow-two-line">{description}</h4>
      </div>
    </div>
  );
}
