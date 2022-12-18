class Movie {
    // Constructor for creating a new movie
    constructor(title, genre, rating) {
      this.title = title;
      this.genre = genre;
      this.rating = rating;
      this.rented = false;
    }
  
    // Method for marking a movie as rented
    rent() {
      this.rented = true;
    }
  
    // Method for marking a movie as returned
    return() {
      this.rented = false;
    }
  }
  
  class MovieStore {
    // Constructor for creating a new movie store
    constructor(name) {
      this.name = name;
      this.movies = [];
    }
  
    // Method for adding a movie to the store's collection
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    // Method for searching for a movie by title
    searchMovieByTitle(title) {
      for (let movie of this.movies) {
        if (movie.title === title) {
          return movie;
        }
      }
      return null;
    }
  
    // Method for searching for a movie by genre
    searchMovieByGenre(genre) {
      let movies = [];
      for (let movie of this.movies) {
        if (movie.genre === genre) {
          movies.push(movie);
        }
      }
      return movies;
    }
  
    // Method for displaying all movies in the store's collection
    displayMovies() {
      for (let movie of this.movies) {
        console.log(`${movie.title} (${movie.genre}, ${movie.rating} stars)`);
      }
    }
  }
  
  // Create a new movie store
  const blockbuster = new MovieStore('Blockbuster');
  
  // Add some movies to the store's collection
  blockbuster.addMovie(new Movie('The Shawshank Redemption', 'Drama', 5));
  blockbuster.addMovie(new Movie('The Godfather', 'Crime', 5));
  blockbuster.addMovie(new Movie('The Godfather: Part II', 'Crime', 5));
  blockbuster.addMovie(new Movie('The Dark Knight', 'Action', 5));
  blockbuster.addMovie(new Movie('12 Angry Men', 'Drama', 4));
  
  // Search for a movie by title
  console.log(blockbuster.searchMovieByTitle('The Shawshank Redemption'));
  // Output: Movie {title: "The Shawshank Redemption", genre: "Drama", rating: 5, rented: false}
  
  // Search for movies by genre
  console.log(blockbuster.searchMovieByGenre('Crime'));
  // Output: [Movie {title: "The Godfather", genre: "Crime", rating: 5, rented: false}, Movie {title: "The Godfather: Part II", genre: "Crime", rating: 5, rented: false}]
  
  // Display all movies in the store's collection
  blockbuster.displayMovies();
  // Output:
  // The Shawshank Redemption (Drama, 5 stars)
  // The Godfather (Crime, 5 stars)
  // The Godfather: Part II (Crime, 5 stars)
  // The Dark Knight (Action, 5 stars
  