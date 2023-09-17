import Movieheader from "../components/Movieheader"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'


const Moviedetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    axios.get(apiUrl)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movieDetails) {
    return <div>
          Loading Movies
    </div>;
  }


  return (
    <div>
      <Movieheader
       Moviedetails={Moviedetails}
      />
    </div>
  )
}

export default Moviedetails
