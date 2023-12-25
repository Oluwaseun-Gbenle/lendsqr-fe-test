# Project Overview
## App.tsx
This application consists of two main components: LoginForm and Dashboard. The routing is managed by React Router, which allows navigation between these two components seamlessly.

LoginForm: This component is displayed when you visit the root URL ("/"). It's intended to represent a login page where users can enter their credentials.
Dashboard: This component is accessible at "/dashboard". It represents a dashboard that users see after logging in.
you can login with a pseudo email and password

## LoginForm
This component is designed to handle user authentication in a React application. It provides a user interface for email and password input, validation of these inputs, and navigation upon successful login. 

## NavBar section
This has a responsive hamburger menu for mobile views.
## Pagination 
Dynamically updating pages based on the total number of items and items per page.
changes the number of items displayed per page.
Simple navigation controls for moving between pages.

## uavailable page
This is to notify client a page is unavailable when they click on anyother link on the sidebar

## data services 
The api-service file is for functions making calls to the api

## Utils 
Under utils there are all the SVG icons used in the application. any icon not found was fetched with api.



