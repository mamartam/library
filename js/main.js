const searchInput = document.querySelector(".search-input");
const booksContainers = document.querySelector(".books-containers");
const bookGenres = document.querySelector("#book-genres");
const priceFiltering = document.querySelector("#price-filtering");
const resetAllFilters = document.querySelector(".reset-all-filters");

async function gettingInfoFromExternalSource() {
  try {
    const response = await fetch("https://gutendex.com/books/");
    const data = await response.json();

    const arrayOfData = [];
    data.results.forEach((element, index, array) => {
      element.cost = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
      arrayOfData.push(element);
    });
    console.log(arrayOfData);

    displayingBooksToTheScreen(arrayOfData);

    searchInput.addEventListener("input", (element) => {
      let inputedValue = element.target.value.toLowerCase().trim();
      let newArray = arrayOfData.filter((item) => {
        return item.title.toLowerCase().includes(inputedValue);
      });
      displayingBooksToTheScreen(newArray);
    });
    bookGenres.addEventListener("change", (element) => {
      let selectedGenre = element.target.value;
      console.log(selectedGenre);
      let newArray = arrayOfData.filter((item) => {
        return item.subjects[0].toLowerCase().includes(selectedGenre);
      });
      if (selectedGenre === "all") {
        displayingBooksToTheScreen(arrayOfData);
      } else {
        displayingBooksToTheScreen(newArray);
      }
    });

    priceFiltering.addEventListener("change", (event) => {
      console.log(event.target.value);
      let arrayForSorting = [...arrayOfData];
      if (event.target.value === "from-cheap-to-expencive") {
        arrayForSorting.sort((a, b) => Number(a.cost) - Number(b.cost));
        displayingBooksToTheScreen(arrayForSorting);
      } else if (event.target.value === "from-expencive-to-cheap") {
        arrayForSorting.sort((a, b) => Number(b.cost) - Number(a.cost));
        displayingBooksToTheScreen(arrayForSorting);
      }
    });
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

function filteringByKeyWord() {}
