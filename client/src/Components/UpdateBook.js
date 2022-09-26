import { useState, useEffect } from 'react'
import axiosPrivate from '../api/axios'
import React from 'react'

const UpdateBook = ({book}) => { 

  const [on, setOn] = useState(false)

  const [oldBook, setOldBook] = useState({
    user: book.user,
    title: "" || book.title,
    author: "" || book.author,
    description: "" || book.description,
    status: "" || book.status,
    heroImage: "",
    lastUpdated: "",
    alternativeNames: [],
    tags: [],
    category: [],
    chapters: 0,
    volumes: 0,
    links: []
  })


  const updateOldBook = async(e) => {
    let id = book._id
    let updatedBook = await axiosPrivate.patch(`http://localhost:8080/books`, oldBook, {params: {id: id}})
    console.log(updatedBook)
  }




  const handelChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    setOldBook(prevBook => ({
      ...prevBook,
      [name]: value
    }))
    console.log(oldBook)
  }

  return (
    <div className="newBook">

      <form onSubmit={() => {updateOldBook()}}>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder={book.title}
          value={oldBook.title}
          onChange={handelChange}
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          placeholder={book.author}
          value={oldBook.author}
          onChange={handelChange}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          placeholder={book.description}
          value={oldBook.description}
          onChange={handelChange}
        />

        <label htmlFor="status">status</label>
        <input
          type="text"
          name="status"
          placeholder={book.status}
          value={oldBook.status}
          onChange={handelChange}
        />
        <label htmlFor="heroImage">heroImage</label>
        <input
          type="text"
          name="heroImage"
          placeholder={book.heroImage}
          value={oldBook.heroImage}
          onChange={handelChange}
        />
        <label htmlFor="lastUpdated">lastUpdated</label>
        <input
          type="date"
          name="lastUpdated"
          placeholder={book.lastUpdated}
          value={oldBook.lastUpdated}
          onChange={handelChange}
        />
        <label htmlFor="alternativeNames">alternativeNames</label>
        <input
          type="text"
          name="alternativeNames"
          placeholder={book.alternativeNames}
          value={oldBook.alternativeNames}
          onChange={handelChange}
        />
        <label htmlFor="tags">tags</label>
        <input
          type="text"
          name="tags"
          placeholder={book.tags}
          value={oldBook.tags}
          onChange={handelChange}
        />
        <label htmlFor="category">category</label>
        <input
          type="text"
          name="category"
          placeholder={book.category}
          value={oldBook.category}
          onChange={handelChange}
        />
        <label htmlFor="chapters">chapters</label>
        <input
          type="text"
          name="chapters"
          placeholder={book.chapters}
          value={oldBook.chapters}
          onChange={handelChange}
        />
        <label htmlFor="volumes">volumes</label>
        <input
          type="text"
          name="volumes"
          placeholder={book.volumes}
          value={oldBook.volumes}
          onChange={handelChange}
        />

        <label htmlFor="links">links</label>
        <input
          type="text"
          name="links"
          placeholder={book.links}
          value={oldBook.links}
          onChange={handelChange}
        />



        <button onClick={() => { setOn(!on) }}>Save Changes</button>
      </form>
    </div>
  )
}

export default UpdateBook
