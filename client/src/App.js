
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Home from './Pages/Home'
import UnauthorizedPage from './Pages/UnauthorizedPage'
import Layout from './Pages/Layout'
import AdminPage from './Pages/AdminPage'
import Error from './Pages/ErrorNotFound'
import AllBooks from './Pages/AllBooksPage'
import BookPage from './Pages/BookPage'
import LogoutPage from './Pages/LogoutPage'
import NewBookPage from './Pages/NewBookPage'
import './Styles/AppStyle.css';
import './Styles/Responsive.css';
import RequireAuth from './Components/RequireAuth'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}
function App() {

  return (
    <div className="App">

      

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/" element={<Home />} />
          

          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/profile" element={<UserPage />} /> */}
            <Route path="/books" element={<AllBooks />} />
            <Route path="/books/:id" element={<BookPage />} />
            <Route path="/new-book" element={<NewBookPage />} />
          </Route>


          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
