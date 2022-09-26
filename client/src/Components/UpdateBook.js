import { useState, useEffect } from 'react'
import Axios from 'axios'
import React from 'react'

const UpdateBook = ({book}) => {  
  console.log(book);
  const [on, setOn] = useState(false)

  const [oldBook, setOldBook] = useState({
    user: "",
    title: "",
    author: "",
    description: "",
    status: "",
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
    let _id = book._id;
    console.log("from update book js id: " + _id);
    // let updatedBook = await Axios.patch(`http://localhost:8080/books/${_id}`, oldBook)
    // console.log(updatedBook)
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
          placeholder={oldBook.title}
          value={oldBook.title}
          onChange={handelChange}
        />
        <p>{oldBook.title}</p>

        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          placeholder={oldBook.author}
          value={oldBook.author}
          onChange={handelChange}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          placeholder={oldBook.description}
          value={oldBook.description}
          onChange={handelChange}
        />

        <label htmlFor="status">status</label>
        <input
          type="text"
          name="status"
          placeholder={oldBook.status}
          value={oldBook.status}
          onChange={handelChange}
        />
        <label htmlFor="heroImage">heroImage</label>
        <input
          type="text"
          name="heroImage"
          placeholder={oldBook.heroImage}
          value={oldBook.heroImage}
          onChange={handelChange}
        />
        <label htmlFor="lastUpdated">lastUpdated</label>
        <input
          type="date"
          name="lastUpdated"
          placeholder={oldBook.lastUpdated}
          value={oldBook.lastUpdated}
          onChange={handelChange}
        />
        <label htmlFor="alternativeNames">alternativeNames</label>
        <input
          type="text"
          name="alternativeNames"
          placeholder={oldBook.alternativeNames}
          value={oldBook.alternativeNames}
          onChange={handelChange}
        />
        <label htmlFor="tags">tags</label>
        <input
          type="text"
          name="tags"
          placeholder={oldBook.tags}
          value={oldBook.tags}
          onChange={handelChange}
        />
        <label htmlFor="category">category</label>
        <input
          type="text"
          name="category"
          placeholder={oldBook.category}
          value={oldBook.category}
          onChange={handelChange}
        />
        <label htmlFor="chapters">chapters</label>
        <input
          type="text"
          name="chapters"
          placeholder={oldBook.chapters}
          value={oldBook.chapters}
          onChange={handelChange}
        />
        <label htmlFor="volumes">volumes</label>
        <input
          type="text"
          name="volumes"
          placeholder={oldBook.volumes}
          value={oldBook.volumes}
          onChange={handelChange}
        />

        <label htmlFor="links">links</label>
        <input
          type="text"
          name="links"
          placeholder={oldBook.links}
          value={oldBook.links}
          onChange={handelChange}
        />



        <button onClick={() => { setOn(!on) }}>Save Changes</button>
      </form>
    </div>
  )
}

export default UpdateBook
