import React from 'react'
import '../../styles/index.scss'
import LayoutPage from 'common/LayoutPage/LayoutPage'
import { Route } from 'react-router-dom'
import AllFilmsList from 'containers/AllFilmsList/AllFilmsList'
import FavouriteFilmsList from 'containers/FavouriteFilmsList/FavouriteFilmsList'

const App = () => (
  <LayoutPage>
    <Route path="/allfilms" component={AllFilmsList} />
    <Route path="/favouritefilms" component={FavouriteFilmsList} />
  </LayoutPage>
)

export default App
