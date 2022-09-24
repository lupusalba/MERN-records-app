import { useState, useEffect } from 'react'
import axios from '../api/axios'

useEffect(() => {
  let isMounted = true;
  const controller = new AbortController();

  const getUsers = async () => {
    try {
      const response = await axios.get('/users', {
        signal: controller.signal
      })
      console.log(response.data);
      isMounted && setUsers(response.data);
    } catch (err) {
      console.error(err)
    }
  }

  getUsers();

  return () => {
    isMounted = false;
    controller.abort();
  }
}, [])

const Users = () => {
  const [users, setUsers] = useState();


  return (
    <div>
      <h2>Users List</h2>
      {
        users?.length
        ?
        (
          <ul>
            {users.map((user, i) => <li key={i}> {user.userName} </li> )}
          </ul>
        ) : <p>No users</p>
      }
    </div>
  )
}

export default Users
