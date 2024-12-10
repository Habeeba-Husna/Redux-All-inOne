import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux'
import { deleted } from './NoteSlice'

const NoteHome = () => {
    const content = useSelector((state) => state.note.value)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDel = (id) => {
      dispatch(deleted(id))
    }

  return (
    <div>
      <button className='text-5xl' onClick={() => navigate('/notelist')}>+</button>
    <ul>
        {content.map((con) => (
            <li key={con.id}>
                <p>{con.note}</p>
                <button onClick={() => handleDel(con.id)}>del</button>
            </li>
        ))}
    </ul>
    </div>

  )
}

export default NoteHome