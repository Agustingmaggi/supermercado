import { useEffect, useState } from 'react'
import './App.css'
import UsersService from './services/UsersService'

function App() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      const usersService = new UsersService()
      const { data } = await usersService.getUsers()
      console.log(data[0])
      setUsers(data[0])
    }
    !users && fetchUsers()
  }, [users])

  return (
    <>
      hola!

      {users && (
        <div key={users._id}>
          {users.firstName}
        </div>
      )}


    </>
  )
}

export default App
