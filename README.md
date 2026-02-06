# 📚 Library

## 📦 Technologies
- HTML5 – Semantic structure for the library layout and filter controls.
- CSS3 – Custom styling with a focus on:
  - Flexbox & Grid for a fully responsive layout across all devices.
  - CSS Variables for consistent color schemes and easy maintenance.
  - Animations for smooth hover effects and the loading spinner.
  - Media Queries to ensure a "Mobile First" approach.
- JavaScript (ES6+) – Core logic of the application:
  - Fetch API for asynchronous data retrieval from the Gutendex API.
  - DOM Manipulation to dynamically render book cards.
  - Array Methods (filter, sort, forEach) for real-time search and data processing.
  - Event Listeners to handle user interactions like searching and filtering.

## 💻 The Process
This project was a fantastic hands-on experience where I could put what I’ve learned into practice. Since I didn’t have a pre-made design, I built everything from scratch, drawing inspiration from modern online bookstores that focus on simplicity and clarity.

I started by setting up the basic HTML structure and applying some initial styles to get a feel for the layout. My first major milestone was the logic: I used an `asynchronous approach` with `async/await` to fetch book data from an external `API`. I knew that data loading could take time, so it was important to handle it efficiently without blocking other functions.

Once the data was on the screen, I dived back into CSS to make the interface more visual. After that, I added the filter section to the HTML and brought it to life with JavaScript. When the structure and logic were solid, I focused on the "final polish" to make the page look attractive.

On the styling side, I used `CSS Variables` for easy color management, added `custom fonts`, and implemented smooth `hover effects` and `animations` to make the site feel interactive.

Regarding the script, I paid close attention to how I handled the data. I used `shallow cloning` for the main array because the `sort method` changes the original array, and I wanted to avoid any unwanted mutations. I also broke the code down into separate functions for specific tasks, which I then called within my main async function. This made the code cleaner, more functional, and easier to understand. To keep things clear for myself and others, I also documented the logic with `comments`.

I worked with various array methods like `filter`, `map`, and `forEach`, and used string methods like `trim`, `toLowerCase`, and `include` for the search logic. I also ensured proper `type conversion` when sorting by price, making sure the program compares actual numbers rather than strings.

## 📚 What I Learned
This project was a significant step forward in my journey as a developer. It allowed me to move beyond basic syntax and tackle real-world challenges. Here is what I gained from this experience:

- Asynchronous JavaScript & APIs: I mastered how to use async/await and the fetch API to handle external data. I learned how to manage the "waiting" state of an application by implementing a loading spinner, ensuring a smooth user experience even with slower connections.
- Data Integrity & Immutability: understanding that some JavaScript methods, like sort(), mutate the original array. I learned how to use shallow cloning (the spread operator [...]) to protect my primary data source, a fundamental concept in modern web development.
- Type Safety in Logic: I realized that data from APIs doesn't always come in the format you expect. I practiced type conversion to ensure that my price sorting logic compared numbers as integers/floats, not strings, preventing logical bugs.
- Responsive Architecture: Building this project without a pre-made design taught me how to think like a UI/UX designer. I learned to use CSS Variables for scalability and Media Queries to create a layout that feels natural on both a small smartphone and a wide desktop monitor.
- Clean Code Practices: I practiced breaking down large blocks of code into smaller, reusable functions. This not only made the script easier to debug but also much more readable for other developers.

## 🚀 How It Can Be Improved?
Even though the project is fully functional, there is always room for growth. Here are some features and optimizations I plan to implement in the future:

- Combined Filtering: Currently, the filters work independently. I want to implement a unified filtering logic where a user can search by keyword, select a genre, and sort by price simultaneously.
- Persistent Storage (Wishlist/Cart): Adding a "Favorites" feature using localStorage so users can save books they like, even after refreshing the page.
- Advanced Pagination: Since the API provides a large number of books, adding pagination or "Infinite Scroll" would improve performance and user experience.
- Enhanced UI/UX:
  - Adding a "Dark Mode" toggle using CSS Variables.
  - Implementing a more detailed "Book Details" modal or a separate page for each book.
- Refined Error Handling: Adding a "Retry" button or more specific error messages if the API fetch fails or if no books match the search criteria.

## 🍿 Image
<img width="3035" height="1624" alt="Image" src="https://github.com/user-attachments/assets/ab9e1826-2198-4430-867d-e775bd550773" />
