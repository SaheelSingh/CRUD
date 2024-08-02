import React from 'react'
import { Link } from 'react-router-dom'
import './sportsman.css'
import LoadingSpinner from './LoadingSpinner'

function SportsmanList({ sportsman, loading, onDelete }) {

    return (
        <div>
            <h2>List Of SportsMans</h2>
            {
                loading === true && (
                    <LoadingSpinner />
                )
            }
            {
                !loading && (
                    <>
                        <Link to={'/addSportman'}>
                            <button className='btn'>Add More</button>
                        </Link>
                        {!sportsman.length && (
                            <p>No Data Found....</p>
                        )}
                    </>

                )
            }
            {!loading && (
                sportsman.length !== 0 && (
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Profession</th>
                            <th>Modify</th>
                        </tr>
                        {
                            sportsman.map((sportmanInfo) => {
                                return (
                                    <tr key={sportmanInfo._id}>
                                        <td>{sportmanInfo.sportman}</td>
                                        <td>{sportmanInfo.sport}</td>
                                        <td>
                                            <Link to={`/edit/${sportmanInfo._id}`}>
                                                <button className='edit' onClick={() => {console.log(sportmanInfo)}}>Edit</button>
                                            </Link>
                                            <button className='delete' onClick={onDelete.bind(null, sportmanInfo._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                )
            )
            }
        </div>
    )
}

export default SportsmanList
