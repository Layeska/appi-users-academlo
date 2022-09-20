import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const UsersForm = ({getUsers, userSelected, deselectedUser}) => {
    const {register, handleSubmit, reset} = useForm()

    useEffect(() => {
        if(userSelected) reset(userSelected) 
    }, [userSelected])

    const submit = (data) => {
        userSelected ? axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data).then(() =>getUsers()) 
        : axios.post('https://users-crud1.herokuapp.com/users/', data).then(() => getUsers()).catch((error) => console.log(error.response))

        clear()
    }

    const clear = () => {
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })

        deselectedUser()
    }
    

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(submit)}>
                <h1 className='title'>{userSelected ? 'Update' : 'Create'} User</h1>
                <div className='infoContainer'>
                    <input type='email' id='email' {...register('email')} placeholder='Insert Email' required/>
                </div>

                <div className='infoContainer'>
                    <input type='password' id='password' placeholder='Insert Password' {...register('password')} required/>
                </div>

                <div className='infoContainer'>
                    <input type='text' id='first_name' placeholder='Insert First Name' {...register('first_name')} required/>
                </div>

                <div className='infoContainer'>
                    <input type='text' id='last_name'  placeholder='Insert Last Name' {...register('last_name')} required/>
                </div>

                <div className='infoContainer'>
                    <label htmlFor='birthday'>Birthday </label>
                    <input type='date' id='birthday' placeholder='Insert Birthday' {...register('birthday')}/>
                </div>

                <div className='buttons'>
                    <button>{userSelected ? <i className="fa-solid fa-pen"></i> : <i className="fa-solid fa-plus"></i>}</button>
                    <button onClick={clear} type='button'><i className="fa-solid fa-eraser"></i></button>
                </div>
            </form>
        </div>
    )
}

export default UsersForm