import { useState } from 'react'
import fromStorage from 'utils/fromStorage'
import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants'
import toStorage from 'utils/toStorage'
import sortByFav from 'utils/sortByFav'
import sortById from 'utils/sortById'
import classes from './FilmCard.module.scss'

const Filmcard = ({ film, setFavouriteFilmsList, setAllFilmsList }) => {
  const { id, imgUrl, movieName, releaseYear, description, isFavourite } = film
  const [toogleFavouriteImg, setToogleFavouriteImg] = useState(
    isFavourite ? 'favourite.png' : 'notFavourite.png'
  )
  const changeFavourite = (idFilm) => {
    if (!isFavourite) {
      setToogleFavouriteImg('favourite.png')
      const changedArr = fromStorage(ALL_FILMS).map((_film) => {
        if (_film.id === idFilm) {
          _film.isFavourite = !_film.isFavourite
        }
        return _film
      })
      const filteredArr = changedArr.filter((_film) => _film.isFavourite)
      toStorage(FAVOURITE_FILMS, filteredArr)
      toStorage(ALL_FILMS, sortByFav(changedArr))
      setAllFilmsList(sortByFav(changedArr))
    } else {
      setToogleFavouriteImg('notFavourite.png')
      const changedArr = fromStorage(ALL_FILMS).map((_film) => {
        if (_film.id === idFilm) {
          _film.isFavourite = !_film.isFavourite
        }
        return _film
      })
      const filterFavouriteFilms = fromStorage(FAVOURITE_FILMS).filter((_film) => _film.id !== id)
      toStorage(FAVOURITE_FILMS, sortById(filterFavouriteFilms))
      toStorage(ALL_FILMS, sortByFav(changedArr))
      setFavouriteFilmsList(filterFavouriteFilms)
      setAllFilmsList(changedArr)
    }
  }
  return (
    <div className={classes.filmcard__container}>
      <img src={require(`/src/${imgUrl}`)} alt="pic" className={classes.filmcard__poster} />
      <div className={classes.filmcard__title}>{movieName}</div>
      <div className={classes.filmcard__year}>{releaseYear}</div>
      <img
        onClick={() => {
          changeFavourite(id)
        }}
        src={require(`/src/assets/img/${toogleFavouriteImg}`)}
        alt="pic"
        className={classes.filmcard__favimg}
      />
    </div>
  )
}

export default Filmcard
