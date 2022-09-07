import { useParams } from 'react-router'
import UpdateBook from "../Components/UpdateBook"

const UpdateBookPage = () => {


  const { _id } = useParams();


  return (
    <div>
      {
        <UpdateBook bookID={_id} />
      }
    </div>
  )
}

export default UpdateBookPage
