import requests from "./request";

const baseUrl = "https://api.themoviedb.org/3/";

export async function fetchMovies(pageNumber) {
  try {
    const response = await fetch(
      `${baseUrl}${requests.getMovies}&page=${pageNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400) {
      throw new Error(response.status_message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function fetchMoviesDetail(movieId) {
  let getMoviesDetail = `movie/${movieId}?api_key=896861370af0c47d86bba808f936ce6d&language=en-US`;

  try {
    const response = await fetch(`${baseUrl}${getMoviesDetail}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400) {
      throw new Error(response.status_message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function searchMovies(value) {
  try {
    const response = await fetch(
      `${baseUrl}${requests.searchMovies}&query=${value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400) {
      throw new Error(response.status_message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
}
