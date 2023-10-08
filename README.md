

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

### Search Page
On this page the user can search for different books based on the search query they provide. The book can be searched by authors, titles or categories. When the user presses the serach button, a fetch request is send to the API endpoint 
that then responds with an array of books that satisfy the search query. The user can then click on of the book which leads him to the book details page.

### Book Details Page
This page is displayed dynamically based on the query provided in the url. The book data is fetched using the id parameter of the query, while the other information in the url is there for a better user experience and for SEO purposes.
Once the user has reached this page, he can add the book to the shopping cart.

### Shopping Cart
The shopping cart can be accessed from anywhere in the app. The data for the shopping cart is stored in the context. The user can remove the item directly from the shopping cart window or proceed to the checkoout page using the checkout button,
that is only available if there are any items inside the cart. The total price is calculated automatically based on the items in the cart and their quantity and price.

### Checkout Page
At the checkout page the user is only allowed to proceed to the next step once all the required information has been provided. If they delete all items from the cart, they will be redirected to the home page. There is also the option to increase the quantity
of the product.
