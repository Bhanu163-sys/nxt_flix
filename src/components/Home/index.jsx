import {useState} from 'react'

import Header from '../Header'
import HeroSection from '../HeroSection'
import MovieCarousel from '../MovieCarousel'
import FiltersGroup from '../FiltersGroup'
import MoviesGrid from '../MoviesGrid'

import movies from '../../data/movie'

import './index.css'

const filtersList = [
  'All',
  'Action',
  'Drama',
  'Comedy',
  'Thriller',
  'Sci-Fi',
  'Romance',
  'Horror',
  'Fantasy',
]

const Home = () => {
  const [activeGenre, setActiveGenre] = useState('All')

  const trendingMovies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 16)

  const freshReleaseMovies = movies
    .filter(movie => movie.year >= 2015)
    .slice(0, 16)

  const filteredMovies =
    activeGenre === 'All'
      ? movies
      : movies.filter(movie => movie.genre === activeGenre)

  const onChangeGenre = genre => {
    setActiveGenre(genre)
  }

  return (
    <div className="home-container">
      <Header />

      <HeroSection />

      <MovieCarousel
        title="Trending Now"
        movies={trendingMovies}
        direction="left"
      />

      <MovieCarousel
        title="Fresh Releases"
        movies={freshReleaseMovies}
        direction="right"
      />

      <FiltersGroup
        filtersList={filtersList}
        activeGenre={activeGenre}
        onChangeGenre={onChangeGenre}
      />

      <MoviesGrid movies={filteredMovies} />
    </div>
  )
}

export default Home