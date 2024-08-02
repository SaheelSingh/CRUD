import React, { useState } from 'react'
import './AddSportsman.css'
import { useNavigate } from 'react-router-dom'

function AddSportsman({ addItem }) {
    const navigate = useNavigate()
    const [sportsman, setSportsMan] = useState('');
    const [sport, setSport] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addItem(sportsman, sport)
        navigate('/')
    }

    return (
        <div className='main'>
            <form onSubmit={onSubmitHandler}>
                <label for="sportman">Enter Sportman: </label>
                <input type='text' name='sportman' onChange={(e) => setSportsMan(e.target.value)} />
                <label for="sport">Enter Sport: </label>
                <input type='text' name='sport' onChange={(e) => setSport(e.target.value)} />
                <button className='add'>Submit</button>
            </form>
        </div>
    )
}

export default AddSportsman
