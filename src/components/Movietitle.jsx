import movieimage from "../assets/Moviedisplay.svg"
import star from '../assets/Star.svg'
import rectangle from '../assets/Rectangle 37.svg'
import twoposter from '../assets/Two Tickets.svg'
import list from '../assets/List.svg'
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


const Movietitle = () => {

  const { id } = useParams();



  const apiKey = import.meta.env.VITE_API_KEY;
  const [movieDetails, setMovieDetails] = useState([]);
  console.log(movieDetails);
  // console.log(typeof (movieDetails));


  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    axios.get(apiUrl)
      .then((response) => {
        setMovieDetails(response.data);

      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [apiKey, id]);




  return (

    <>
      <div className=" flex flex-col col-span-3 mt-6">

        <div>
          <div className="movie-display">
            <img className="" src={movieimage} ></img>
          </div>
          <div className="movie-details p-3 grid grid-cols-3 gap-4 col-span-6 mt-6">
            <div className=" details col-span-2">
              <div className="1st-section">
                <div className="flex title text-black">
                  <span className="font-bold text-[20px]">
                    {movieDetails.title}
                  </span>

                  {movieDetails && movieDetails.genres && movieDetails.genres.map((genre, index) => (
                    <div
                      key={index}
                      className="text-red-800 text-[15px] text-center font-semibold border-[2px] flex items-center p-2 ml-2 border-red-200 rounded-3xl"
                    >
                      {genre.name}
                    </div>
                  ))}

                </div>
                <div className="descripton pt-4 text-lg font-normal">
                  {movieDetails.overview}
                </div>

              </div>
              <div className="flex flex-col gap-4 2nd-section mt-6 cast">
                <div className="director">
                  Director : <span className="text-[#BE123C] font-normal"> Joseph Kosinski</span>
                </div>

                <div className="writer">
                  Writers : <span className="text-[#BE123C] font-normal">Jim Cash, Jack Epps Jr,  Peter Craig</span>
                </div>
                <div className="writer">
                  Stars : <span className="text-[#BE123C] font-normal">Tom Cruise, Jennifer Connelly, Miles Teller</span>
                </div>
              </div>
              <div className="3rd-section pt-8 toprated">
                <button className="showtime-button p-3 pl-12 pr-12 rounded-lg bg-red-700 text-white">
                  Top rated movie #65
                </button>
                <button className="showtime-button font-medium  border-[1px] border-[#C7C7C7] p-3  pr-[180px] ml-[-6px] rounded-lg bg-white text-black">
                  Awards  9 nominations
                </button>
              </div>
            </div>
            <div className="rating-showtime">
              <div className="rating-watch-options">
                <div className="rating-watch-options">
                  <div className="rating text-black flex justify-end items-center h-16">
                    <img src={star} alt="star" />
                    <span className="logo-title font-semibold text-[#111827] pl-2">8.5% | 350k </span>
                  </div>
                </div>

                <div className="flex flex-col buttons content-center items-center">
                  <button className="flex flex-row showtime-button p-3 pl-[70px] rounded-lg font-medium  bg-[#BE123C] text-white">
                    <img src={twoposter}></img> <span className="pl-1 pt-1 pr-[60px]">See Showtimes</span>
                  </button>
                  <button className="flex flex-row text-center watch-option-button p-2.5 pl-[55px] pr-[55px] rounded-lg font-medium mt-4 bg-[#BE123C1A] text-[#333333] border-2 border-[#BE123C]">
                    <img src={list}></img> <span className="pl-1" >More watch options</span>
                  </button>
                </div>


              </div>
              <div className="others pt-6">
                <img className="" alt="more" src={rectangle}></img>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Movietitle