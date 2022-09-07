import { useState, useEffect } from 'react'
import Axios from 'axios'

const NewBook = () => {

  const [newBook, setNewBook] = useState({
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
    Axios.post("http://localhost:8080/new-book", {
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
    }).then(response => {
      console.log("succes")
    })
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
      <form onSubmit={createNewBook}>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handelChange}
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handelChange}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          value={newBook.description}
          onChange={handelChange}
        />

        <label htmlFor="status">status</label>
        <input
          type="text"
          name="status"
          value={newBook.status}
          onChange={handelChange}
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
