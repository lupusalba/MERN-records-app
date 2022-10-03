import { useState, useEffect } from 'react'
import axiosPrivate from '../api/axios'

import React from 'react'

const NewBook = ({userID}) => {
  console.log("from newbook.js " + userID);

  const [newBook, setNewBook] = useState({
    user: userID,
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


  const createNewBook = () => {
    try {
      axiosPrivate.post("/books", {
        user: userID,
        title: newBook.title,
        author: newBook.author,
        description: newBook.description,
        status: newBook.status,
        heroImage: newBook.heroImage,
        lastUpdated: newBook.lastUpdated,
        alternativeNames: newBook.alternativeNames,
        tags: newBook.tags,
        category: newBook.category,
        chapters: newBook.chapters,
        volumes: newBook.volumes,
        links: newBook.links
      })
    } catch (err) {
      console.log(err);
    }
  }

  const handelChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    setNewBook(prevBook => ({
      ...prevBook,
      [name]: value
    }))
    console.log(newBook)
  }


  return (
    <div className="newBook">
      <form id="newBookForm" onSubmit={createNewBook}>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handelChange}
          required
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handelChange}
          required
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          value={newBook.description}
          onChange={handelChange}
          required
        />

        <label htmlFor="status">status</label>
        <input
          type="text"
          name="status"
          value={newBook.status}
          onChange={handelChange}
          required
        />
        <label htmlFor="heroImage">heroImage</label>
        <input
          type="text"
          name="heroImage"
          value={newBook.heroImage}
          onChange={handelChange}
        />
        <label htmlFor="lastUpdated">lastUpdated</label>
        <input
          type="date"
          name="lastUpdated"
          value={newBook.lastUpdated}
          onChange={handelChange}
          required
        />
        <label htmlFor="alternativeNames">alternativeNames</label>
        <input
          type="text"
          name="alternativeNames"
          value={newBook.alternativeNames}
          onChange={handelChange}
        />
        <label htmlFor="tags">tags</label>
        <input
          type="text"
          name="tags"
          value={newBook.tags}
          onChange={handelChange}
        />
        <label htmlFor="category">category</label>
        <input
          type="text"
          name="category"
          value={newBook.category}
          onChange={handelChange}
        />
        <label htmlFor="chapters">chapters</label>
        <input
          type="text"
          name="chapters"
          value={newBook.chapters}
          onChange={handelChange}
        />
        <label htmlFor="volumes">volumes</label>
        <input
          type="text"
          name="volumes"
          value={newBook.volumes}
          onChange={handelChange}
        />

        <label htmlFor="links">links</label>
        <input
          type="text"
          name="links"
          value={newBook.links}
          onChange={handelChange}
        />



        <button >Save New Book</button>
      </form>
    </div>
  )
}

export default NewBook
