const API_KEY = '896861370af0c47d86bba808f936ce6d';

const requests = {
    getMovies: `discover/movie?api_key=${API_KEY}&language=en-US`,
    searchMovies: `search/movie?api_key=${API_KEY}&language=en-US`
}

export default requests;