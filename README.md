

# Bookverse: an Online Bookstore

Bookverse is a fictional e-commerce website that offers a variety of books. 

## Technologies used
- HTML
- CSS
- Typescript
- ReactJS
- NextJS
- Tailwind
- MongoDB

## Features
- Fetching and displaying book data from the MongoDB database
- Result filtering and sorting system
- Shopping cart system
- Checkout with user forms

### Home Page
The home page contains a slider at the top where all 3 of the slides were created inside Adobe Photoshop. Each of them contains a link that leads to either the search page or to a details page of the displayed book.
Below the slider there is a section for browsing all the major categories the books are divided by. Each of the links then leads to a page that displays all books from the chosen category. 
The next two sections display the books that have the newRelase or trending parameter set to true in the database. The data for the books is fetched as the page loads. 


### Book Display Page
This is a page that is displayed from a dynamic path which represents the category the user has chosen. In addition to the category name  displayed at the top by reading router.query, the book information is also fetched using
the same data. When the component loads, a fetch request is sent to the API endpoint created with NextJS that then fetches books that belong to this category.
Once all the books load, the user can either filter them, sort them or click on one of the displayed results. The filter categories change dynamically based on the chosen category.The books are displayed using pagination. 
