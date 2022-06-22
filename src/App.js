import React, { useEffect, useState } from 'react'
import MovieList from './components/movielist/MovieList';
import SearchBox from './components/searchbox/SearchBox';
import AddFavorite from './components/AddFavorite/AddFavorite';
import RemoveFavorite from './components/RemoveFavorite/RemoveFavorite';

import { nanoid } from 'nanoid';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [favourite, setFavourite] = useState([]);

  const getmovies = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=fe48d9c0`;

    const response = await fetch(url);
    const responsejson = await response.json();

    if (responsejson.Search) {
      setMovies(responsejson.Search);
    }
  }

  useEffect(() => {
    getmovies(search);
  }, [search]);


  useEffect(() => {
    if (localStorage.getItem('movie')) {
      const getdata = JSON.parse(localStorage.getItem('movie'));
      setFavourite(getdata);
    }
  }, []);

  const savedata = (items) => {
    localStorage.setItem('movie', JSON.stringify(items));
  }

  const addfavouritemovie = (movie) => {
    const newfavourite = [...favourite, movie];
    setFavourite(newfavourite);
    savedata(newfavourite);
  }

  const removefavouritemovie = (movie) => {
    const filteredfavourite = favourite.filter((film) => film.Title != movie.Title);
    setFavourite(filteredfavourite);
    localStorage.setItem('movie', JSON.stringify(filteredfavourite));
  }

  return (
    <div className='container'>
      <h1 className="title">Movies <SearchBox search={search} setSearchBox={setSearch} /></h1>
      <MovieList key={nanoid()} movie={movies} favourite={AddFavorite} handelclick={addfavouritemovie} />
      <h1 className="title">Favourite</h1>
      <MovieList key={nanoid()} movie={favourite} favourite={RemoveFavorite} handelclick={removefavouritemovie} />
    </div>
  )
}

export default App