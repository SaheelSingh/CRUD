import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './EditSportsman.css'

function EditSportsman({ updateData }) {
    const { id } = useParams();
    const navigate = useNavigate()
    const [sportsman, setSportsMan] = useState('');
    const [sport, setSport] = useState('');

    useEffect(() => {
        async function fetchSingleData() {
            const response = await fetch(`http://localhost:4000/sport/${id}`)
            const data = await response.json();
            setSportsMan(data.sportman)
            setSport(data.sport)
        }
        fetchSingleData()
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        updateData(id, sportsman, sport);
        navigate('/')
    }

    return (
        <div className='main'>
            <form onSubmit={onSubmitHandler}>
                <label for="sportman">Enter Sportman: </label>
                <input type='text' name='sportman' value={sportsman} onChange={(e) => setSportsMan(e.target.value)} />
                <label for="sport">Enter Sport: </label>
                <input type='text' name='sport' value={sport} onChange={(e) => setSport(e.target.value)} />
                <button className='update'>Update</button>
            </form>
        </div>
    )
}

export default EditSportsman
