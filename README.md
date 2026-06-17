# Mini Social Media Frontend

A React-based frontend for a social media application. Users can create posts, like/unlike posts, comment on posts, edit their own posts, and manage authentication using JWT.

## Features

- User Login & Logout
- JWT Authentication
- Create New Posts
- View All Posts
- Edit Posts
- Delete Posts
- Like / Unlike Posts
- Comment System
- Responsive Design
- REST API Integration

## Tech Stack

- React
- JavaScript (ES6+)
- Bootstrap 5
- Axios
- Vite

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/mini-social-media-frontend.git
cd mini-social-media-frontend
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### Run the Application

```bash
npm run dev
```

The application will start on:

```txt
http://localhost:5173
```

## Project Structure

```txt
src/
├── api/
│   └── api.js
├── components/
│   ├── CreatePost.jsx
│   ├── Post.jsx
│   └── PostList.jsx
├── pages/
│   ├── Home.jsx
│   └── Login.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Screenshots

### Login Page

(Add screenshot here)

### Home Feed

(Add screenshot here)

## Backend

This frontend communicates with a separate Node.js + Express + MongoDB backend API.

## Author

**Md. Razwanul Islam**

Computer Science and Engineering  
Begum Rokeya University, Rangpur

## License

This project is licensed under the MIT License.