//#region sample data begins
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];
//#endregion sample data ends

//#region utility begins
function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
//#region utility ends

//Destructuring begins
const books = getBooks();
const book = books[2];

// without object Destructuring
// const title = book.title;
// const author = book.author;

//Destrucure object properties
const { title, author, genres, pages, hasMovieAdaptation, publicationDate } =
  book;

console.log(title, author, genres);

// without array destructuring
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// destructuring with
const [firstGenre, seconGenre] = genres;

// rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// spread - array operation
const newGenres = [...genres, "EpicFantasy"];
console.log(newGenres);
const updateGenres = ["animae", ...genres];
console.log(updateGenres);

// spread - object property operation
const updatedBook = { ...book, movieReleaseDate: "2012-12-19" };
updatedBook;

// arrow function
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// template literals
const summary = `${title} is a ${pages} pages book, written by ${author} and published in ${getYear(publicationDate)}. The book has ${hasMovieAdaptation ? "" : "not"} been adopted as a movie.`;
console.log(summary);

//ternary operator
const pagesRange = pages > 1000 ? "more than 1000" : "less than 1000";
pagesRange;

// short circuiting - &&
console.log(true && "some value");
console.log(false && "some value");

// short circuiting - &&
console.log(true && "some value");
console.log(false && "some value");
console.log(hasMovieAdaptation && "This movie has movie adaption");
console.log(0 && "some value");
console.log("some string" && "some value");

// short circuiting - ||
console.log(true || "some value");
console.log(false || "some value");
console.log(hasMovieAdaptation || "This movie has movie adaption");
console.log(0 || "some value");
console.log("some string" || "some value");

// short circuiting - set default values
console.log(book.translations.spanish);
const spanishTranslations = book.translations.spanish || "NOT TRANSLATED";
spanishTranslations;

// short circuiting - edge case
console.log(book.reviews.librarything?.reviewsCount || 0);

// here value should have been 0, but since 0 is a falsy value, it is short- circuited and NO DATA is retured
// this is wrong
const wrongCount = book.reviews.librarything?.reviewsCount || "NO DATA";
wrongCount;

// null coalescing
const count = book.reviews.librarything?.reviewsCount ?? "NO DATA";
count;

function getTotalReviewsCount(bookToCheck) {
  const goodReadReviews = bookToCheck.reviews?.goodreads?.reviewsCount ?? 0;
  const librarythingReviews =
    bookToCheck.reviews?.librarything?.reviewsCount ?? 0;
  return goodReadReviews + librarythingReviews;
}

const totalReviews = getTotalReviewsCount(book);
console.log(totalReviews);

const titles = books.map((y) => y.title);
titles;

const essentialData = books.map((x) => ({
  title: x.title,
  author: x.author,
  reviewsCount: getTotalReviewsCount(x),
}));

essentialData;

const longbooks = books
  .filter((z) => z.pages > 500)
  .filter((a) => a.hasMovieAdaptation);
longbooks;
console.log(longbooks);

const adventureBooks = books
  .filter((w) => w.genres.includes("adventure"))
  .map((r) => r.title);
adventureBooks;

const pagesAllBook = books.reduce((sum, g) => sum + g.pages, 0);
pagesAllBook;

const arr = [3, 7, 2, 9, 1];
const sorted = arr.slice().sort((a, b) => a - b);
const reversSorted = arr.slice().sort((a, b) => b - a);
sorted;
reversSorted;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// add an element to the array
const newBook = {
  id: 6,
  title: "Harry potter and the chamber of secrets",
  author: "J.K.Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//delete an element from the array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id != 3);
booksAfterDelete;

//update an element
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id == 1 ? { ...book, pages: 1 } : book,
);
booksAfterUpdate;

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res?.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos);
console.log("venkatesh");
