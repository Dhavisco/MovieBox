const api_key = import.meta.VITE_APP_API_KEY

const Headers = {
    header:{
        "Content-Type": "application/json",
        "x-api-key": api_key
    }
};

const BASE_url = {
    endpoint: "https://api.themoviedb.org/3"
}

const requests ={
    allFavorite:"favorite/movies"
}