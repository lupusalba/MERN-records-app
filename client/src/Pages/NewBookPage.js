import NewBook from "../Components/NewBook"
import { useParams } from "react-router-dom"
import Navigation from '../Components/Navigation'
// const NewBookPage = ({userID}) => {
const NewBookPage = () => {

  const userID = useParams();
  console.log("from useParams newBookPage "+ JSON.stringify(userID))

  return (
    <div className="newBookPage">
    <Navigation />
      <NewBook userID={userID}/>
    </div>
  )
}

export default NewBookPage
