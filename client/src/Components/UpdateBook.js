import { useState, useContext } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserInfoProvider'

const UpdateBook = ({ book }) => {

  const axiosPrivate = useAxiosPrivate();
  const { userData, setUserData } = useContext(UserContext);

  const [on, setOn] = useState(false)

  const navigate = useNavigate();

  const [oldBook, setOldBook] = useState({
    user: book.user,
    title: "" || book.title,
    author: "" || book.author,
    description: "" || book.description,
    status: "" || book.status,
    heroImage: "" || book.heroImage,
    lastUpdated: "" || book.lastUpdated,
    alternativeNames: [] || book.alternativeNames,
    tags: [] || book.tags,
    category: [] || book.category,
    chapters: 0 || book.chapters,
    volumes: 0 || book.volumes,
    links: [] || book.links
  })


  const updateOldBook = async (e) => {
    let id = book._id
    try {
      let updatedBook = await axiosPrivate.patch(`/books`, oldBook, { params: { id: id } })
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  }




  const handelChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    setOldBook(prevBook => ({
      ...prevBook,
      [name]: value
    }))
  }

  return (
    <div className="newBook">

      <form onSubmit={() => { updateOldBook() }}>

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



        <button type="submit" onClick={() => { setOn(!on) }}>Save Changes</button>
      </form>
    </div>
  )
}

export default UpdateBook
