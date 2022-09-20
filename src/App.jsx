import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

import UserList from './components/UsersList'
import UsersForm from './components/UsersForm'


function App() {

  const [user, setUser] = useState([])
  const [userSelected, setUserSelected] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/').then(res => setUser(res.data))
  }, [])

  const getUsers = () => axios.get('https://users-crud1.herokuapp.com/users/').then(res => setUser(res.data))

  const selectUsers = (user) => setUserSelected(user)

  const deselectedUser = () => setUserSelected(null)


  return (
    <div className='App'>
      <button className='btnCreate' onClick={() => setIsVisible(!isVisible)}> {isVisible ? <i className="fa-solid fa-left-long"></i> : <i className="fa-solid fa-plus"></i>} {isVisible ? ' to Back' : 'Create'} user</button>
        {
          isVisible ? ( <UsersForm getUsers={getUsers} userSelected={userSelected} deselectedUser={deselectedUser}/>
          ) : <UserList user={user} selectUsers={selectUsers} getUsers={getUsers}/>
        }
    </div>
  )
}

export default App