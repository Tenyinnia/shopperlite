# Shoppr Lite - React E-commerce Capstone Project
A modern, fully functional **e-commerce frontend** built with React, Vite, and React Router. This project was developed as the final capstone for the **Tecvinson Frontend Training Cohort 2025**.

Live Demo → [https://ngshoppr.netlify.app](https://ngshoppr.netlify.app)


## 📋 Project Overview

**Shoppr Lite** is a responsive e-commerce web application that allows users to:

- Browse and search products
- Filter by category and sort results
- View detailed product information with variant selection
- Add items to a shopping cart (session-based)
- Read blog posts and style stories

The application consumes data from a public mock REST API and demonstrates strong React fundamentals, clean architecture, and excellent user experience.

### Key Features

- **Product Catalog** with search, category filtering, and sorting
- **Product Detail Page** with color & size variant selection
- **Shopping Cart** with real-time updates and order summary
- **Blog Section** with full article views
- **Responsive Design** optimized for desktop, tablet, and mobile
- **Loading & Error States** handled gracefully
- **"No results found"** experience with helpful actions

## 🛠️ Tech Stack

- **React 18** – Component-based UI
- **Vite** – Fast build tool & dev server
- **React Router v6** – Client-side routing with nested layouts
- **Lucide React** – Beautiful & consistent icons
- **Custom CSS** – With CSS custom properties (design system)
- **DummyJSON API** – Mock REST API for products and blog posts

## ✨ User Stories Implemented

All core user stories from the project brief have been implemented:

- Full product browsing with category & search filtering
- URL-based state (filters and search terms are reflected in the URL)
- Detailed product view with variant (color + size) selection
- Fully functional shopping cart with quantity management
- Live cart count in the navigation
- Blog listing and individual post pages
- Proper loading, error, and empty states throughout the app
- Responsive design across all screen sizes

## 📁 Project Structure

src/
├── components/          # Reusable UI components
├── context/             # Global state (CartContext)
├── pages/               # Page-level components
├── ui/                  # Small UI pieces (buttons, icons, etc.)
├── App.jsx              #Router
├── main.jsx
└── index.css            #The major styling sheet


## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Tenyinnia/shopperlite.git

# Navigate into the project
cd shopperllite

# Install dependencies
npm install

# Start the development server
npm run dev

Open http://localhost:5173 to view the app in your browser.
```

### 📝 Lessons Learned
Managing global state with React Context
Handling complex filtering and search with URL params
Building reusable components and custom hooks
Creating smooth user experiences with loading and empty states
Writing clean, maintainable React code


### 🙋‍♂️ About Me
## Enyinnia Clifford
## Full-stack Developer | AI Engineer
This project was built as the final capstone for a Tecvinson Frontend Training Cohort 2025. It represents the culmination of everything learned throughout the program; from component architecture and state management to responsive design and real-world API integration.

📄 License
This project is for educational purposes. Feel free to use it as a reference for your own learning.