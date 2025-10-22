const { initializeDatabase } = require("./db/db.connect");

const Movie = require("./models/movie.models");
const { json } = require("stream/consumers");
const { title } = require("process");
const { release } = require("os");
const { mongo } = require("mongoose");
const { log } = require("console");
initializeDatabase();

const newMovie = {
  title: "New Movie",
  releaseYear: 2023,
  genre: ["Drama"],
  director: "Aditya Roy Chopra",
  actors: ["Actor1", "Actor2"],
  language: "Hindi",
  country: "India",
  rating: 6.1,
  plot: "A young man and woman fall in love on a Australia trip.",
  awards: "IFA Filmfare Awards",
  posterUrl: "https://example.com/poster1.jpg",
  trailerUrl: "https://example.com/trailer1.mp4",
};

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const saveMovie = await movie.save();
    console.log("New Movie Data: ", saveMovie);
  } catch (error) {
    throw error;
  }
}

createMovie(newMovie);
