import React, { useState } from 'react'
import './AddSportsman.css'
import { useNavigate } from 'react-router-dom'

function AddSportsman({addItem}) {
    const navigate = useNavigate()
    const [sportmanRequired, setSportmanRequired] = useState('')
    const [sportRequired, setSportRequired] = useState('')
    const [sportsman, setSportsMan] = useState(''); 
    const [sport, setSport] = useState(''); 


    // const [details, setDetails] = useState({
    //     sportman: "",
    //     sport: ""
    // })

    // const onChangeHandle = (e) => {
    //     const {name, value} = e.target
    //     setDetails((preData) => {
    //         return {...preData, [name]: value}
    //     })
    // }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        sportsman || sportsman.length ? setSportmanRequired('Sportman name required') : setSportmanRequired('') 
        sport || sport.length ? setSportRequired('Sport name required') : setSportRequired('')  
        addItem(sportsman, sport)
        navigate('/')
    }

    return (
        <div className='main'>
            <form onSubmit={onSubmitHandler}>
                <label for="sportman">Enter Sportman: </label>
                <input type='text' name='sportman' onChange={(e) => setSportsMan(e.target.value)}/>
                <label for="sport">Enter Sport: </label>
                <input type='text' name='sport' onChange={(e) => setSport(e.target.value)} />
                <button className='add'>Submit</button>
            </form>
        </div>
    )
}

export default AddSportsman
