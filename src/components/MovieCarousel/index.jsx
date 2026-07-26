import Slider from 'react-slick'
import MovieCard from '../MovieCard'
import './index.css'

const MovieCarousel = props => {
  const {title, movies, direction} = props

  const duplicatedMovies = [...movies, ...movies]

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: 'linear',
    pauseOnHover: true,
    swipe: false,
    draggable: false,
    rtl: direction === 'right',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">{title}</h2>

      <Slider {...settings}>
        {duplicatedMovies.map((movie, index) => (
          <MovieCard
            key={`${movie.id}-${index}`}
            movie={movie}
          />
        ))}
      </Slider>
    </section>
  )
}

export default MovieCarousel