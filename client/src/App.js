
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Home from './Pages/Home'
import UnauthorizedPage from './Pages/UnauthorizedPage'
import LinksTesting from './Pages/LinksTesting'
import UserPage from './Pages/UserPage'
import LayoutTest from './Pages/LayoutTest'

import AllBooksPage from './Pages/AllBooksPage';
import Error from './Pages/ErrorNotFound'
import BookPage from './Pages/BookPage'
import UpdateBookPage from './Pages/UpdateBookPage'
import NewBook from './Pages/NewBookPage'
import DeleteBook from './Pages/DeleteBook'
import './App.css';
import './ResponsiveStyle.css';
import RequireAuth from './Components/RequireAuth'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}
function App() {


  // const [listOfBooks, setListOfBooks] = useState([])
  
  // useEffect(() => {
  //   Axios.get("http://localhost:3000/").then((response) => {
  //     setListOfBooks([response.data])
  //   })
  //   console.log("from app.js")
  //   console.log(listOfBooks)
  // }, [])

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LayoutTest />}>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/links" element={<LinksTesting />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]}/>} >
            <Route path="/user/:_id" element={<UserPage />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]}/>} >
            <Route path="/user" element={<UserPage />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]}/>} >
            <Route path="/user/:_id/books" element={<AllBooksPage/>} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>} >
            <Route path="/admin" element={<AllBooksPage/>} />
          </Route>

          {/* <Route path="/" element={<Home />} />
          <Route path="/user/:_id" element={<UserPage />} />
          <Route path="/books" element={<AllBooksPage/>} /> */}

          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>

      {/* <Router>
          <div className="mainNav">
            <Link className="navLink" to="/books">Library</Link>
            <Link className="navLink" to="/new-book">New Book</Link>
          </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/*" element={<Error />} />

          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/user/:_id" element={<AllBooksPage />} />
          <Route exact path="/new-book" element={<NewBook />} />
          <Route exact path="/books" element={<AllBooksPage />} />
          <Route exact path="/books/:_id" element={<BookPage />} />
          <Route exact path="/update-book/:_id" element={<UpdateBookPage />} />
          <Route exact path="/delete-book/:_id" element={<DeleteBook />} /> 
        </Routes>
      </Router>   */}

    </div>
  );
}

export default App;
