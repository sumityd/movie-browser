import React from "react";
import { useSelector } from "react-redux";
import { Star, Home, ArrowBack } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "./Movie-Detail.css";
import { useHistory } from "react-router";

export default function MovieDetails() {
  const movieDetail = useSelector((state) => state.movies.movieDetail);
  const history = useHistory();

  return (
    <div className="banner">
      <div
        className="banner-content"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className='flex align-center justify-between'>
          <IconButton onClick={() => history.goBack()}>
            <ArrowBack style={{color: "white"}}/>
          </IconButton>

          <IconButton onClick={() => history.push("/")}>
            <Home style={{color: "white"}}/>
          </IconButton>
        </div>

        <div className="flex align-center justify-between banner-title-container">
          <h1 className="banner-title">{movieDetail?.original_title}</h1>
          <h1 className="banner-title">
            {movieDetail?.vote_average?.toFixed(1)}
            <Star style={{ height: "35px", width: "35px", color: "yellow" }} />
          </h1>
        </div>
      </div>

      <div style={{ padding: "10px" }}>
        <div className="flex align-center" style={{ marginTop: "15px" }}>
          <h3>Genres : </h3>
          {movieDetail?.genres?.map((item, index) => (
            <span className="banner-genres" key={index}>
              {item?.name}
            </span>
          ))}
        </div>

        <h3>Overview :</h3>
        <span className="banner-description">{movieDetail?.overview}</span>

        <div className="flex align-center">
          <h3>Languages :</h3>
          {movieDetail?.spoken_languages?.map((item, index) => (
            <span className="banner-genres" key={index}>
              {item?.english_name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
