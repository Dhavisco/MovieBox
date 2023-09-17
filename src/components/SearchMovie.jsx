import { useState, useEffect } from 'react';
import axios from 'axios';
import search from '../assets/Search.svg'

const SearchMovie = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
    const baseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    // Define your API URL with the search query
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;
   
    // Show loading indicator
    setLoading(true);

    // Fetch data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        // Hide loading indicator and update search results
        setLoading(false);
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        // Handle errors
        setLoading(false);
        console.error('Error fetching search results:', error);
      });
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
console.log(searchResults);
  
return (
    <>
    <label className="">
  <input
    type="text"
    name="search"
    id="search"
    placeholder="What do you want to watch?"
    className="text-white bg-transparent border-[2.35px] border-[white] rounded-lg pl-2 pr-8 lg:w-[35rem]"
    value={searchQuery}
    onChange={handleSearchInputChange}
    autoComplete="off" 
  />
  <img
    src={search}
    alt=""
    className="absolute top-1/2 right-2 transform -translate-y-1/2 w-4 h-4 text-white"
  />
</label>
      

      {loading && <p>Loading...</p>}

      <div className={`${searchQuery.length > 0 ? 'search-results absolute top-[40px] left-0 w-full h-fit-content min-w-[250px] max-h-[350px] p-[10px] bg-white border border-none rounded-[8px] flex flex-col gap-[6px] overflow-y-auto' : ''}`}>
        {searchResults.map((movie) => (
          <div key={movie.id} className="movie-search-card relative transition-all duration-200 ease-in-out flex items-center gap-5 rounded-[10px]">
              <div className="poster-wrap bg-transparent rounded-[10px] min-w-[60px]">
              <img src={`${baseUrl}${movie.poster_path}`} alt={movie.title} className='h-[90px] rounded-[10px]'/>
               </div>
              <div className="detail flex flex-col gap-[5px]">
                  <p className="country text-xs font-bold text-[#9ca3af]">USA, <span data-testid="movie-release-date">{movie.release_date}</span></p>
                  <p className="title text-[#111827] text-lg font-bold" data-testid="movie-title">{movie.title}</p>
                  <p className="genre text-[#9ca3af] text-xs font-bold">Adeventure, Comedy, Drama</p>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchMovie;