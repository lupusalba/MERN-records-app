import { useEffect, useState } from 'react'
import Book from '../Components/Book'
import axiosPrivate from '../api/axios'
import React from 'react'
import Axios from 'axios'



  // FOR SORTING
  // return only which has "category1" sa value in category array
  // if(d.category.includes("category1")){
  //   return (
  //     <Book 
  //       key={d._id}
  //       book={d}
  //     />
  //   )


  const Books = (book) => {
  const [listOfBooks, setListOfBooks] = useState([])
  
  useEffect(async() => {
    Axios.get("http://localhost:8080/books", {"user": "632b74f0840ccfab4f7c8ee5"}).then((res) => {
      setListOfBooks(res.data.data.allBooks);
    });
  }, []);


  // const deleteBook = (_id) => {
  //   Axios.delete(`http://localhost:8080/delete-book/${_id}`)
  //   console.log('deleted ' + _id)
  // }


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
