import React, { useState } from 'react'
import axios from 'axios'
import Users from './Users.json'
import PhotosCats from './PhotosCats'

const UserList = ({user, selectUsers, getUsers}) => {

    const [isLoading, setIsLoading ] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    

    const deleteUsers = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`).then(() => getUsers())//.finally(() => setIsLoading(false))
    }

    

    const validateAge = (birthday) => {
        let elem = birthday.split('-');

        let year = elem[0];
        let actual = (2022 - year)

        if(actual < 30) {
            //entre 10 y 13 años de las fotos
            let num = Math.floor(Math.random() * (13 - 10 + 1)) + 10 

            return (
                <>
                    {/*<img src={Users[num]?.picture} alt="" />*/}
                    <PhotosCats/>
               </>
            )
        }

        if(actual < 20) {
            //entre 6 y 10 años de las fotos
            let num = Math.floor(Math.random() * (10 - 6 + 1)) + 6 

            return (
                <>
                    <img src={Users[num]?.picture} alt="" />
                </>
            )
        }
    }

    return (
        <div className='principal'>
            {
                isLoading ? ( 
                <div className="loader-container">
                    <div className="spinner"></div>
                </div> ) : (
            <>
            <h1>List of users</h1>
            <hr />
            <ul>
                {
                    user.map(person => (
                        <div className='card' key={person.id}>
                            <div className='head'>
                                <div className='circle'>
                                    <div className='img'>
                                        { validateAge(person.birthday) }
                                    </div>
                                </div>
                            </div>
                            <div className='description'>
                                <h3>{person.first_name} {person.last_name}</h3>
                                <p><i className="fa-solid fa-envelope"></i> {person.email}</p>
                                <p><i className="fa-solid fa-cake-candles"></i> {person.birthday}</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in.
                                </p>
                            </div>
                            <div className='contact'>
                                <button onClick={() => selectUsers(person)}><i className="fa-solid fa-pencil"></i></button>
                                
                                <button onClick={() => deleteUsers(person.id)}><i className="fa-solid fa-trash"></i></button>
                            </div>
                            <br /> <br />
                        </div>
                    ))
                }
            </ul>
            </>
            )
        }
        </div>
    )
}

export default UserList

/*

<li key={person.id}>
                            { validateAge(person.birthday) }
                            {person.email}
                            <div><b>Password</b> {person.password}</div>
                            <div><b>First Name</b> {person.first_name}</div>
                            <div><b>Last Name</b> {person.last_name}</div>
                            <div><b>Birthday</b> {person.birthday}</div>
                            <button onClick={() => selectUsers(person)}>Edit</button>
                            <button onClick={() => deleteUsers(person.id)}>Delete</button>
                            <br />
                        </li>

*/


{/*{person.email}
                            <div><b>Password</b> {person.password}</div>
                            <div><b>First Name</b> {person.first_name}</div>
                            <div><b>Last Name</b> {person.last_name}</div>
                            <div><b>Birthday</b> {person.birthday}</div>
                            <button onClick={() => selectUsers(person)}>Edit</button>
                            <button onClick={() => deleteUsers(person.id)}>Delete</button>
                    <br />*/}