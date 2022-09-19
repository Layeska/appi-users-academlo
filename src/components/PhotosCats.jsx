import axios from 'axios'
import { useEffect, useState } from 'react'

const PhotosCats = () => {
    const [cat, setCat] = useState({})

    useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/images/search').then(res => setCat(res.data[0])).catch(error => console.log(error.response))
    }, [])

    return ( 
        <img src={cat.url} alt="" /> 
    )
}

export default PhotosCats