import { useEffect, useState } from 'react'
import fromStorage from 'utils/fromStorage'
import { FAVOURITE_FILMS, ALL_FILMS } from 'constants/constants'
import toStorage from 'utils/toStorage'
import Filmcard from 'components/FilmCard/FilmCard'
import { filmsMock } from 'constants/filmsMock'

const FavouriteFilmsList = () => {
  const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS) || [])
  const [allFilmsList, setAllFilmsList] = useState(fromStorage(ALL_FILMS) || filmsMock)
  useEffect(() => {
    if (!fromStorage(FAVOURITE_FILMS)) {
      toStorage(FAVOURITE_FILMS, favouriteFilmsList)
    }
  }, [])

  return (
    <div>
      {favouriteFilmsList.map((film) => (
        <Filmcard
          key={film.id}
          film={film}
          setFavouriteFilmsList={setFavouriteFilmsList}
          setAllFilmsList={setAllFilmsList}
        />
      ))}
    </div>
  )
}

export default FavouriteFilmsList
