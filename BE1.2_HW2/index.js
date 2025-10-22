const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const Book = require("./models/bookSchema.models");
const { log } = require("console");
initializeDatabase();

const jsonData = fs.readFileSync("books.json", "utf-8");

const booksData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const bookdata of booksData) {
      const newBook = new Book({
        title: bookdata.title,
        author: bookdata.author,
        publishedYear: bookdata.publishedYear,
        genre: bookdata.genre,
        language: bookdata.language,
        country: bookdata.country,
        rating: bookdata.rating,
        summary: bookdata.summary,
        coverImageUrl: bookdata.coverImageUrl,
      });
      newBook.save();
      // console.log(newBook.title);
    }
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}

seedData();
