import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesInStore } from "../../Store";
import Header from "../Header/Header";
import Card from "../Movies-Card/Card";
import "./Movies-Container.css";

export default function MoviesContainer() {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setPageNumber((previousValue) => previousValue + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchMoviesInStore(pageNumber));
  }, [pageNumber, dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <Header />
      <div className="movie-container">
        {movies.map((movie, index) => (
          <Card
            key={index}
            id={movie.id}
            name={movie.title}
            backdrop_path={movie.backdrop_path}
            description={movie.overview}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}
