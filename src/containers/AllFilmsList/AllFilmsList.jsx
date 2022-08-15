import Filmcard from 'components/FilmCard/FilmCard'
import { filmsMock } from 'constants/filmsMock'
import { useEffect, useState } from 'react'
import toStorage from 'utils/toStorage'
import fromStorage from 'utils/fromStorage'
import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants'
import classes from './AllFilmsList.module.scss'

const AllFilmsList = () => {
  const [allFilmsList, setAllFilmsList] = useState(fromStorage(ALL_FILMS) || filmsMock)
  const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS) || [])
  useEffect(() => {
    if (!fromStorage(ALL_FILMS)) {
      toStorage(ALL_FILMS, allFilmsList)
    }
  }, [allFilmsList])
  return (
    <div className={classes.filmsList_container}>
      {allFilmsList.map((film) => (
        <Filmcard
          key={film.id}
          film={film}
          setAllFilmsList={setAllFilmsList}
          setFavouriteFilmsList={setFavouriteFilmsList}
        />
      ))}
    </div>
  )
}
export default AllFilmsList
