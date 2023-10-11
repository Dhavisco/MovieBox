# MovieBox Web Application

MovieBox is a web application built with React and Tailwind CSS that displays information about top-rated movies. Users can explore movie details, including title, release date, genre, and ratings.

## Getting Started

Follow the steps below to set up and run the MovieBox web application on your local development environment.

### Prerequisites

Make sure you have the following software installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/Dhavisco/MovieBox.git
   ```
2. Change the directory to the project folder.
3. Install project dependencies using npm.
```bash
   npm install
```

### Usage
1. Obtain an API key from The Movie Database (TMDb) API. You can sign up at https://www.themoviedb.org/documentation/api to get your API key.

2. Create a .env file in the project root directory and add your TMDb API key.
    VITE_API_KEY="your_api_key_here"

3. Start the development server.
```bash
   npm run dev
```

4. Open your web browser and open the generated localhost link

## Features
- View top-rated movies with details.
- Click on movie posters to see more information about a specific movie.
- Social media links for sharing and following MovieBox on various platforms.
## Code Structure
- The application is built using React components.
- Tailwind CSS is used for styling, and it's configured in the project.
- Axios is used for making HTTP requests to the TMDb API.
## Acknowledgments
This project is created as a demonstration and for learning purposes during HNG Internship 2023
It uses data from The Movie Database (TMDb).




