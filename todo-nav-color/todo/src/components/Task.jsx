import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { add1,add2 } from '../redux/todoSlice'


function Task() {
    const [task,setTask]=useState("")
   const [dis,setDis]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleSave=()=>{
        navigate("/")
        dispatch(add1(task))
        dispatch(add2(dis))

    }

  return (
    <div>
      <h4>tasks</h4>
      <input type='text' placeholder='enter tasks' onChange={(e)=>setTask(e.target.value)}/>
      <h4>discription</h4>
      <input type='text' placeholder='enter discription' onChange={(e)=>setDis(e.target.value)}/>
      <button onClick={handleSave}>save</button>
    </div>
  )
}

export default Task
