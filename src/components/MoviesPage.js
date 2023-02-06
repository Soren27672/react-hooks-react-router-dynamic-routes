import React from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={match.url}>
        <h3>Select a movie to see more info!</h3>
      </Route>
      <Route path={`${match.url}/:id`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  )
}
export default MoviesPage;
