import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { remove } from '../redux/todoSlice'

function Home() {

const navigate=useNavigate()
const dispatch=useDispatch()
const data=useSelector((state)=>state.todo.value1)

const handleDelete=(id)=>{
    dispatch(remove(id))
    navigate("/")
}
  return (
    <div>
        <h1>home</h1>
        <button onClick={()=>navigate('/task')}>+</button>
        {data.map((item)=>(
            <ul key={item.id}>
                <li onClick={()=>navigate(`/view/${item.id}`)} style={{backgroundColor:item.color}}>
                    {item.text}
                    <button onClick={(e)=>{
                         e.stopPropagation();
                        handleDelete(item.id)}}>delete</button>

                </li>
            </ul>
        ))}
    </div>
  )
}

export default Home

