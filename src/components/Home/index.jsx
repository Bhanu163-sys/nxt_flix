import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import MovieCarousel from '../../components/MovieCarousel'


import movies from '../../data/movies'

import './index.css'

const Home = () => {
  const trendingMovies = movies.slice(0, 10)
  const freshReleaseMovies = movies.slice(10, 20)

  return (
    <div className="home-container">
      <Header />

      <HeroSection movie={movies[0]} />

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
    </div>
  )
}

export default Home