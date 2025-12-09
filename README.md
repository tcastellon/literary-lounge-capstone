# Literary Lounge

> Your cozy corner of the book world

Literary Lounge is a full-stack book tracking and social reading application built with React. Users can discover books, track their reading progress, share their favorite books with the community, and connect with fellow readers.

## Features

### Authentication
- User registration with email and personal narrative
- Email-based login system
- Protected routes for authenticated users

### Book Management
- Browse comprehensive book catalog
- Filter books by genre
- View detailed book information (title, author, genre, description, cover image)
- Add new books to the community library
- Edit your own book entries
- Track books you've read

### Reader Community
- View all registered readers
- Explore reader profiles with their reading lists
- See what other readers are currently reading
- Share your reading journey with a personal narrative

### User Dashboard
- Personal home page
- Track your reading progress
- Manage your book collection
- View your reading history

## Tech Stack

### Frontend
- **React 19.1.1** - UI library
- **React Router DOM 7.9.1** - Client-side routing
- **Vite 7.1.2** - Build tool and dev server
- **CSS3** - Custom styling with responsive design

### Backend
- **JSON Server** - Mock REST API (localhost:8088)
- **JSON Database** - Persistent data storage

### Development Tools
- **ESLint** - Code linting
- **Vite HMR** - Hot module replacement for rapid development

## Project Structure

```
literary-lounge-capstone/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Login.css
│   │   ├── books/
│   │   │   ├── BookList.jsx
│   │   │   ├── BookDetails.jsx
│   │   │   └── BookFilterBar.jsx
│   │   ├── forms/
│   │   │   ├── AddBookForm.jsx
│   │   │   └── EditBookForm.jsx
│   │   ├── home/
│   │   │   └── Home.jsx
│   │   ├── nav/
│   │   │   └── ReaderNav.jsx
│   │   └── readers/
│   │       ├── ReaderList.jsx
│   │       └── ReaderDetails.jsx
│   ├── service/
│   │   ├── readerService.js
│   │   ├── bookService.js
│   │   └── booksReadService.js
│   ├── views/
│   │   ├── ApplicationViews.jsx
│   │   ├── Authorized.jsx
│   │   └── ReaderViews.jsx
│   ├── App.jsx
│   └── main.jsx
├── api/
│   └── database.json
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tcastellon/literary-lounge-capstone.git
cd literary-lounge-capstone
```

2. Install dependencies:
```bash
npm install
```

3. Install JSON Server globally (if not already installed):
```bash
npm install -g json-server
```

### Running the Application

You'll need to run both the frontend and backend servers simultaneously.

**Terminal 1 - Start the JSON Server (Backend):**
```bash
json-server --watch api/database.json --port 8088
```

**Terminal 2 - Start the React Dev Server (Frontend):**
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## API Endpoints

The JSON Server provides RESTful API endpoints at `http://localhost:8088`:

### Readers
- `GET /readers` - Get all readers
- `GET /readers/:id` - Get reader by ID
- `GET /readers?email=:email` - Get reader by email
- `POST /readers` - Create new reader
- `GET /readers/:id?_embed=booksRead` - Get reader with their reading list

### Books
- `GET /books` - Get all books
- `GET /books/:id` - Get book by ID
- `POST /books` - Create new book
- `PUT /books/:id` - Update book
- `DELETE /books/:id` - Delete book

### Books Read (Junction Table)
- `GET /booksRead` - Get all book-reader relationships
- `GET /booksRead?readerId=:id` - Get books by reader
- `POST /booksRead` - Mark book as read
- `DELETE /booksRead/:id` - Remove book from reading list

### Genres
- `GET /genres` - Get all available genres

## Database Schema

### Readers
```json
{
  "id": number,
  "name": string,
  "email": string,
  "narrative": string
}
```

### Books
```json
{
  "id": number,
  "creatorId": number,
  "title": string,
  "author": string,
  "genre": string,
  "image": string (URL),
  "description": string
}
```

### BooksRead
```json
{
  "id": number,
  "readerId": number,
  "bookId": number,
  "read": boolean
}
```

## Usage

1. **Register an Account**: Navigate to the registration page and create your reader profile
2. **Browse Books**: Explore the book catalog and filter by genre
3. **Add Books**: Contribute to the community by adding new books
4. **Track Reading**: Mark books as read and build your reading list
5. **Connect with Readers**: View other readers' profiles and see what they're reading

## Authentication Flow

- Users register with name, email, and a brief narrative
- Login requires only email (simplified for learning purposes)
- Authentication state stored in browser localStorage
- Protected routes redirect to login if not authenticated

## Future Enhancements

Potential features for future development:
- Password-based authentication
- Book reviews and ratings
- Reading goals and statistics
- Book recommendations based on preferences
- Search functionality across books and readers
- User avatars and profile customization
- Reading challenges and achievements
- Book clubs and group discussions

## Contributing

This is a capstone project. If you'd like to contribute or have suggestions, please open an issue or submit a pull request.

## License

This project is open source and available for educational purposes.

## Acknowledgments

Built as a capstone project to demonstrate full-stack React development skills, including:
- React component architecture
- State management
- RESTful API integration
- Client-side routing
- User authentication
- CRUD operations
- Responsive design

---

**Made with love for book lovers** by Thomas Castellon
