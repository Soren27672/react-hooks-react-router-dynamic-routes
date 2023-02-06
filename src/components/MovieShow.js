import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { id } = useParams();

  return (
    <div>
      <h3>{movies[id].title}</h3>
    </div>
  );
}

export default MovieShow;