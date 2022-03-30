import Hero from "./Hero";
import { Link } from "react-router-dom";

// TMDB API KEY = 164af455d7dfc6055a63f85c32701b68
// TMDB link = https://api.themoviedb.org/3/movie/11?api_key=164af455d7dfc6055a63f85c32701b68&language=en-US

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4 p-2">
      <div className="card" style={{ width: "18rem", height: "30rem" }}>
        <img
          src={posterUrl}
          className="card-img-top"
          style={{ width: "100%", height: "70%" }}
          alt={movie.original_title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://definicion.de/wp-content/uploads/2009/02/error.png";
          }}
        />

        <div className="card-body" style={{ height: "30%" }}>
          <h5 className="card-title" style={{ height: "60%" }}>
            {movie.original_title}
          </h5>
          <Link
            to={detailUrl}
            style={{ height: "40%" }}
            className="btn btn-primary"
          >
            Show more details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const noResultsMessage = `Sorry but I don't have any results for ${keyword}`;
  const resultsHtml = searchResults.map((obj, i) => {
    // console.log(resultsHtml);
    return <MovieCard movie={obj} key={i} />;
  });

  console.log(resultsHtml);

  return (
    <div>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
      {resultsHtml.length === 0 && (
        <div className="container">
          <div className="row">{noResultsMessage}</div>
        </div>
      )}
    </div>
  );
};

export default SearchView;
