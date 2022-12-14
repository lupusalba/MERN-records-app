import NewBook from "../Components/NewBook"
import { useParams } from "react-router-dom"
import Navigation from '../Components/Navigation'
// const NewBookPage = ({userID}) => {
const NewBookPage = () => {

  const userID = useParams();

  return (
    <div className="newBookPage">
      <aside>
        <Navigation />
      </aside>
      <section>
        <NewBook userID={userID} />
      </section>
    </div>
  )
}

export default NewBookPage