import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

import UserList from './components/UsersList'
import UsersForm from './components/UsersForm'
import PhotosCats from './components/PhotosCats'


function App() {

  const [user, setUser] = useState([])
  const [userSelected, setUserSelected] = useState(null)
  const [isLoading, setIsLoading ] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/').then(res => setUser(res.data))//.finally(() => setIsLoading(false))
  }, [])

  const getUsers = () => axios.get('https://users-crud1.herokuapp.com/users/').then(res => setUser(res.data))//.finally(() => setIsLoading(false))

  const selectUsers = (user) => setUserSelected(user)

  const deselectedUser = () => setUserSelected(null)


  return (
    <div className='App'>
      {
        isLoading ? ( 
          <div className="loader-container">
            <div className="spinner"></div>
          </div> ) : (
        <>
          {/*<button><i className="fa-solid fa-left-long"></i>{isVisible}</button>*/}
          <button className='btnCreate' onClick={() => setIsVisible(!isVisible)}> {isVisible ? <i className="fa-solid fa-left-long"></i> : <i className="fa-solid fa-plus"></i>} {isVisible ? ' to Back' : 'Create'} user</button>
         {/* <UsersForm getUsers={getUsers} userSelected={userSelected} deselectedUser={deselectedUser}/>
          <br />
          <br />
          <br />
          <br />
          
        <UserList user={user} selectUsers={selectUsers} getUsers={getUsers}/>*/}
          

          {
            isVisible ? ( <UsersForm getUsers={getUsers} userSelected={userSelected} deselectedUser={deselectedUser}/>
            ) : <UserList user={user} selectUsers={selectUsers} getUsers={getUsers} deselectedUser={deselectedUser}/>
          }
        </>
        )
      }
    </div>
  )
}

export default App