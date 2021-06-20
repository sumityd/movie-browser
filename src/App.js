import { Provider } from "react-redux";
import "./App.css";
import MoviesContainer from "./Components/Movies-Container/Movies-Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./Store/store";
import MovieDetails from "./Components/Movie-Detail/Movie-Detail";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <MoviesContainer />
            </Route>
            <Route exact path="/movie-detail">
              <MovieDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
