
import './movielist.css';

const MovieList = ({ movie, favourite, handelclick }) => {

  const FavouriteComponent = favourite;

  return (
    <div className='movie-list'>
      {
        movie.map((movie) =>
          <div className='img-hover'>
            <img src={movie.Poster} />
            <div className="image-overlay" onClick={() => handelclick(movie)}>
              {<FavouriteComponent />}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default MovieList