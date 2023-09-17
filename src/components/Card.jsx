import imdb from '../assets/imdb.svg'
import tomato from '../assets/tomato.svg'
import axios from 'axios';
import favourite from '../assets/Favorite.svg'
import {useState, useEffect} from 'react'


const Card = () => {
      const [movieLoader, setMovieLoader]=useState([]);
    useEffect(()=>{
     
     const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;


    axios.get(apiUrl)
      .then((response) => {
        setMovieLoader(response.data.results);
       
      })
      .catch((error) => {
        console.error('Error fetching top-rated movies:', error);
       
      });
  }, []);
  // console.log(movieLoader)

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="card-container pl-5 pt-20 pb-20 ">
  <div className="card grid lg:grid-cols-4 gap-12 lg:ml-20 lg:mr-20 text-black">
    {movieLoader.slice(0, 10).map((key, index) => (
      <div key={index} className="relative card flex flex-col" data-testid="movie-card">
        <button
          type="button"
          className="absolute top-4 right-4 w-8 h-8 flex-shrink-0 bg-[rgba(243,244,246,.5)] bg-opacity-50 backdrop-blur border rounded-full border-none flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out"
        >
          <img src={favourite} alt="favorite" />
        </button>

        <img src={baseUrl + key.poster_path} alt="poster" data-testid="movie-poster" />

        <div className="flex pt-2 pb-1 text-xs text-[#9CA3AF]" data-testid="movie-release-date">
          {key.release_date}
        </div>
        <div className="flex text-black pt-1 pb-1 text-lg font-sans font-bold" data-testid="movie-title">
          {key.title}
        </div>
        <div className="hero-rating w-auto pt-1 pb-1 text-xs font-sans justify-between flex">
          <span className="flex imdb">
            <img src={imdb} alt="imdb" />
            <span className="logo-title font-semibold text-black pl-2">{key.vote_average}</span>
          </span>
          <span className="flex rotten-tomatoes">
            <img src={tomato} alt="rottentomato" />
            <span className="logo-title font-semibold text-[#111827] pl-2 ">97% </span>
          </span>
        </div>
        <div className='flex text-xs pt-1 pb-1 text-[#9CA3AF]'>Action, Adventure, Horror</div>
      </div>
    ))}
  </div>
</div>


  )
}

export default Card
