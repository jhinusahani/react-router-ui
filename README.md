# React Router UI Project

This project is a React-based frontend application focused on clean navigation, structured routing, and simple, user-friendly UI design.  
The goal of this project was to practice real-world routing patterns and build pages that feel production-ready rather than experimental.


## Features

- Clean navigation using **React Router v6**
- Nested routes for product categories
- Reusable layout with shared navigation and footer
- Simple, readable UI built with **Tailwind CSS**
- Focus on layout stability and user experience
- Organized folder structure for scalability


## Pages Overview

- **Home**  
  A clean landing section with proper spacing and readable content.

- **About**  
  Simple text-first page explaining the purpose of the project.

- **Courses**  
  Informational page describing available courses and learning focus.

- **Products**  
  Category-based navigation (Men, Women, Kids) using nested routes.  
  Content is rendered only after selecting a category.

- **Contact**  
  Minimal contact page with clear messaging and clean layout.

- **404 Page**  
  Custom not-found page for invalid routes.


## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- Vite


## Project Structure

src/
│── components/
│ ├── Navbar.jsx
│ ├── Navbar2.jsx
│ └── Footer.jsx
│
│── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Courses.jsx
│ ├── CoursesDetail.jsx
│ ├── Product.jsx
│ ├── Men.jsx
│ ├── Women.jsx
│ ├── Kids.jsx
│ ├── Contact.jsx
│ └── NotFound.jsx
│
│── App.jsx
│── main.jsx


