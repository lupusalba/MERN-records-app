import { useEffect, useState, useContext } from 'react'
import Book from '../Components/Book'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { UserContext } from '../context/UserInfoProvider'

const Books = ({ id }) => {
  
  const axiosPrivate = useAxiosPrivate();
  const { userData, setUserData } = useContext(UserContext);

  console.log("from books.js: " + id);
  const [listOfBooks, setListOfBooks] = useState([])

  
  useEffect(async () => {

    const getData = async () => {
      try {
        const response = await axiosPrivate.get(`/books`, { params: { id: userData._id}});
        setListOfBooks(response.data.data.allBooks);
      } catch (err) {
        console.log(err)
      }
    }
    getData();

  }, []);
  


  return (
    <div className="books">

      {

        listOfBooks.map((book) => {
          return (
            <Book book={book} key={book._id} />
          )
        })
      }


    </div>
  )
}

export default Books
