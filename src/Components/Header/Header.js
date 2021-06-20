import React, { useEffect, useState } from "react";
import { Search, Home } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "./Header.css";
import {
  fetchMoviesInStore,
  fetchMoviesRequest,
  fetchSerachMoviesInStore,
} from "../../Store";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (searchValue.length > 0) {
      dispatch(fetchSerachMoviesInStore(searchValue));
    } else {
      dispatch(fetchMoviesRequest());
      dispatch(fetchMoviesInStore(1));
    }
  }, [searchValue, dispatch]);

  return (
    <div className="header">
      <div className="header-center">
        <Search />
        <input type="search" onChange={(e) => setSearchValue(e.target.value)} />
      </div>

      <div className="flex align-center header-right">
        <IconButton onClick={() => history.push("/")}>
          <Home />
        </IconButton>
      </div>
    </div>
  );
}
