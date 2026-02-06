const searchInput = document.querySelector(".search-input");
const booksContainers = document.querySelector(".books-containers");
const bookGenres = document.querySelector("#book-genres");
const priceFiltering = document.querySelector("#price-filtering");
const resetAllFilters = document.querySelector(".reset-all-filters");

//  FUNCTIONS

// Fucction for creating boxes for books and displaying them on the page
function displayingBooksToTheScreen(array) {
  booksContainers.innerHTML = "";
  array.forEach((book) => {
    const bookBox = document.createElement("article");
    booksContainers.appendChild(bookBox);
    bookBox.classList.add("book-box");

    const bookImg = document.createElement("img");
    bookImg.classList.add("book-img");
    bookBox.appendChild(bookImg);
    bookImg.src = book["formats"]["image/jpeg"];
    bookImg.alt = book.title;

    const bookName = document.createElement("h3");
    bookName.classList.add("book-name");
    bookBox.appendChild(bookName);
    bookName.textContent = book.title;

    const bookAuthorName = document.createElement("p");
    bookAuthorName.classList.add("book-author-name");
    bookBox.appendChild(bookAuthorName);
    const authorName =
      book.authors.length > 0 ? book.authors[0].name : "Unknown Author";
    bookAuthorName.textContent = `Authors: ${authorName}`;

    const bookCost = document.createElement("p");
    bookCost.classList.add("book-cost");
    bookBox.appendChild(bookCost);
    bookCost.textContent = `Cost: ${book.cost}`;
  });
}

// Searching book by key words in its name
function filteringByKeyWord(val, array) {
  let inputedValue = val.target.value.toLowerCase().trim();
  let newArray = array.filter((item) => {
    return item.title.toLowerCase().includes(inputedValue);
  });
  displayingBooksToTheScreen(newArray);
}

// Filtering books by genre
function filteringByGenre(val, array) {
  let selectedGenre = val.target.value;
  console.log(selectedGenre);
  let newArray = array.filter((item) => {
    return item.subjects[0].toLowerCase().includes(selectedGenre);
  });
  if (selectedGenre === "all") {
    displayingBooksToTheScreen(array);
  } else {
    displayingBooksToTheScreen(newArray);
  }
}

// Filtering books by its cost
function filteringBooksByItsCost(val, array) {
  let chosenOption = val.target.value;

  let arrayForSorting = [...array];

  if (chosenOption === "from-cheap-to-expencive") {
    arrayForSorting.sort((a, b) => Number(a.cost) - Number(b.cost));
    displayingBooksToTheScreen(arrayForSorting);
  } else if (chosenOption === "from-expencive-to-cheap") {
    arrayForSorting.sort((a, b) => Number(b.cost) - Number(a.cost));
    displayingBooksToTheScreen(arrayForSorting);
  }
}

async function gettingInfoFromExternalSource() {
  try {
    const response = await fetch("https://gutendex.com/books/");
    const data = await response.json();

    // Array for data from external source, so we can interact with it
    const arrayOfData = [];

    // Here we push elements to the array abou and adding new property - cost, since the initial array doesn't have it
    data.results.forEach((element) => {
      element.cost = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
      arrayOfData.push(element);
    });

    // Calling function for displpaying all data on the page
    displayingBooksToTheScreen(arrayOfData);

    // Searching book by key words in its name
    searchInput.addEventListener("input", (element) => {
      filteringByKeyWord(element, arrayOfData);
    });

    // Filtering books by genre
    bookGenres.addEventListener("change", (element) => {
      filteringByGenre(element, arrayOfData);
    });

    // Filtering books by its cost
    priceFiltering.addEventListener("change", (event) => {
      filteringBooksByItsCost(event, arrayOfData);
    });
    // Buttom to clear all filters and got back to the starting position where user can see all books
    resetAllFilters.addEventListener("click", () => {
      searchInput.value = "";
      bookGenres.value = "all";
      priceFiltering.value = "not-sorted-by-price";
      displayingBooksToTheScreen(arrayOfData);
    });
  } catch (error) {
    console.log("There is some error", error);
  }
}
gettingInfoFromExternalSource();
