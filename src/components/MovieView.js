import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetails, setMoveDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=164af455d7dfc6055a63f85c32701b68&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMoveDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return (
        <>
          <Hero text="loading your movie..." />
        </>
      );
    }

    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

      return (
        // <> can be empty, doesn't need to ve "<div></div>" obligatory
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="Not found"
                  className="img-fluid shadow rounded size"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src =
                      "https://definicion.de/wp-content/uploads/2009/02/error.png";
                  }}
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p>{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return renderMovieDetails();
};

export default MovieView;
